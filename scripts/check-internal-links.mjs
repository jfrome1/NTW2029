#!/usr/bin/env node
/**
 * Internal & anchor link validator (no external HTTP requests).
 * Scans .md and .mdx (and optionally .astro content docs) under src/content/docs.
 *
 * Rules:
 *  - Relative links like [text](../path/file) must resolve to an existing file.
 *  - Extension-less links are tested with .md and .mdx.
 *  - Directory links (trailing /) are tested with index.md / index.mdx.
 *  - Anchors (#heading) validated against generated slug set from target file.
 *  - Supports explicit heading IDs: ### Title {#custom-id}
 *
 * Exit codes: 0 success, 1 broken links.
 */
import { promises as fs } from 'node:fs';
import path from 'node:path';
import process from 'node:process';

const ROOT = process.cwd();
const CONTENT_DIR = path.join(ROOT, 'src', 'content', 'docs');
const PUBLIC_DIR = path.join(ROOT, 'public');
const exts = ['.md', '.mdx'];

/** Slugify approximation of Starlight/GitHub algorithm (simple form). */
function slugify(raw) {
  return raw
    .trim()
    .toLowerCase()
    .replace(/`+/g, '') // inline code backticks
    .replace(/\{#.*?}\s*$/, '') // strip explicit ids
    .replace(/:[^\s]+:/g, '') // remove :emoji: shortcodes
    .replace(/["'*,.!?():/\\\[\]{}<>]+/g, '') // punctuation
    .replace(/&/g, 'and')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');
}

/** Recursively collect content files */
async function collectFiles(dir) {
  const out = [];
  const entries = await fs.readdir(dir, { withFileTypes: true });
  for (const ent of entries) {
    if (ent.name.startsWith('.')) continue;
    const full = path.join(dir, ent.name);
    if (ent.isDirectory()) {
      out.push(...await collectFiles(full));
    } else if (exts.includes(path.extname(ent.name))) {
      out.push(full);
    }
  }
  return out;
}

/** Cache of file => heading slug set */
const headingCache = new Map();

async function getHeadingSlugs(file) {
  if (headingCache.has(file)) return headingCache.get(file);
  const text = await fs.readFile(file, 'utf8');
  const slugs = new Set();
  const headingRE = /^(#{1,6})\s+([^\n]+)$/gm;
  let m;
  while ((m = headingRE.exec(text)) !== null) {
    let line = m[2].trim();
    const explicit = line.match(/\{#([A-Za-z0-9_-]+)\}\s*$/);
    if (explicit) {
      slugs.add(explicit[1].toLowerCase());
      line = line.replace(/\{#([A-Za-z0-9_-]+)\}\s*$/, '').trim();
    }
    const slug = slugify(line);
    if (slug) slugs.add(slug);
  }
  headingCache.set(file, slugs);
  return slugs;
}

/** Parse links */
function extractLinks(markdown) {
  const links = [];
  const linkRE = /\[([^\]]+)\]\(([^)\s]+)(?:\s+"[^"]*")?\)/g; // basic, ignores whitespace titles
  let m;
  while ((m = linkRE.exec(markdown)) !== null) {
    links.push(m[2]);
  }
  return links;
}

function isExternal(href) {
  return /^(?:[a-z]+:)?\/\//i.test(href);
}

function splitAnchor(target) {
  const hashIndex = target.indexOf('#');
  if (hashIndex === -1) return { pathPart: target, anchor: null };
  return { pathPart: target.slice(0, hashIndex), anchor: target.slice(hashIndex + 1).toLowerCase() };
}

async function fileExists(p) {
  try { await fs.access(p); return true; } catch { return false; }
}

async function resolveTarget(sourceFile, raw) {
  // Remove any query (?...) for safety
  const noQuery = raw.split('?')[0];
  const { pathPart, anchor } = splitAnchor(noQuery);
  if (pathPart.startsWith('#')) { // intra-file anchor
    return { file: sourceFile, anchor: pathPart.slice(1).toLowerCase() };
  }
  if (!pathPart || pathPart.startsWith('mailto:') || pathPart.startsWith('tel:')) {
    return null; // ignore
  }
  if (isExternal(pathPart)) return null; // skip externals
  let rel = pathPart;
  // Strip leading ./
  rel = rel.replace(/^\.\//, '');
  const baseDir = path.dirname(sourceFile);
  let abs;
  if (rel.startsWith('/')) {
    // Special case: public asset prefixes (/images, /downloads, /favicon, etc.)
    const publicCandidate = path.join(PUBLIC_DIR, rel);
    if (await fileExists(publicCandidate)) {
      return { file: publicCandidate, anchor }; // treat as valid, no anchor checking for binaries
    }
    // Otherwise interpret as docs-root relative (strip leading slash)
    abs = path.join(CONTENT_DIR, rel.replace(/^\/+/, ''));
  } else {
    abs = path.normalize(path.join(baseDir, rel));
  }

  // If no extension, try .md / .mdx
  let candidates = [];
  const ext = path.extname(abs);
  if (!ext) {
    candidates = exts.map(e => abs + e);
  } else {
    candidates = [abs];
  }
  // Directory link (trailing / or candidate that is directory)
  if (raw.endsWith('/') || (await fileExists(abs) && (await fs.stat(abs)).isDirectory())) {
    candidates = exts.map(e => path.join(abs, 'index' + e));
    // If no index.* exists, also try treating trailing-slash path as a file base name (e.g. feedback/ -> feedback.md)
    const indexExists = await Promise.all(candidates.map(c => fileExists(c))).then(arr => arr.some(Boolean));
    if (!indexExists) {
      const withoutSlash = abs.replace(/[\\/]+$/,'');
      candidates = exts.map(e => withoutSlash + e);
    }
  }
  // Fallback: if still missing and original had trailing slash, attempt one more normalization removing any residual separators before extension join
  if (raw.includes('/#') && !(await Promise.all(candidates.map(c=>fileExists(c))).then(a=>a.some(Boolean)))) {
    const trimmed = abs.replace(/[\\/]+$/,'');
    candidates = exts.map(e => trimmed + e);
  }
  for (const c of candidates) {
    if (await fileExists(c)) return { file: c, anchor };
  }
  return { file: candidates[0], anchor, missing: true };
}

async function main() {
  const files = await collectFiles(CONTENT_DIR);
  const brokenFiles = [];
  const anchorFails = [];
  for (const file of files) {
    const md = await fs.readFile(file, 'utf8');
    const links = extractLinks(md);
    for (const link of links) {
      const target = await resolveTarget(file, link);
      if (!target) continue; // ignored
      if (target.missing) {
        brokenFiles.push({ source: file, target: link, resolved: target.file });
        continue;
      }
      if (target.anchor) {
        let isDir = false;
        try {
          const st = await fs.stat(target.file);
          isDir = st.isDirectory();
        } catch { /* ignore */ }
        if (!isDir) {
          const slugs = await getHeadingSlugs(target.file);
          if (!slugs.has(target.anchor)) {
            anchorFails.push({ source: file, target: link, anchor: target.anchor, resolved: target.file });
          }
        }
      }
    }
  }
  const lines = [];
  if (!brokenFiles.length && !anchorFails.length) {
    const okMsg = `✔ All internal links OK across ${files.length} files.`;
    console.log(okMsg);
    lines.push(okMsg);
  } else {
    if (brokenFiles.length) {
      lines.push('Broken file links:');
      for (const b of brokenFiles) {
        lines.push(`  ${b.source} -> ${b.target} (candidate: ${b.resolved})`);
      }
    }
    if (anchorFails.length) {
      lines.push('', 'Missing / incorrect anchors:');
      for (const a of anchorFails) {
        lines.push(`  ${a.source} -> ${a.target} (anchor '${a.anchor}' not found in ${a.resolved})`);
      }
    }
    lines.push('', `Summary: ${brokenFiles.length} broken file links, ${anchorFails.length} missing anchors.`);
    console.log(lines.join('\n'));
  }
  // Write report file
  const reportPath = path.join(ROOT, 'link-check-report.txt');
  await fs.writeFile(reportPath, lines.join('\n') + '\n', 'utf8');
  if (brokenFiles.length || anchorFails.length) process.exit(1);
}

main().catch(err => {
  console.error('Link check failed with error:', err);
  process.exit(1);
});
