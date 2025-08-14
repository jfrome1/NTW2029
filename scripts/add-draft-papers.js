#!/usr/bin/env node
import { promises as fs } from 'fs';
import path from 'path';

const PAPERS = path.resolve(process.cwd(), 'src', 'content', 'docs', 'course-ntw2029', 'assignments', 'papers');
const draftBlock = `draft: true\nsidebar:\n  badge:\n    text: Draft\n    variant: caution`;

function splitFrontmatter(raw) {
  if (!raw.startsWith('---')) return null;
  const end = raw.indexOf('\n---', 3);
  if (end === -1) return null;
  return { fm: raw.substring(4, end), endIndex: end + 4 };
}

function dedupeYaml(yaml) {
  const lines = yaml.split(/\r?\n/);
  const groups = [];
  let current = [];
  for (const l of lines) {
    if (/^[^\s][^:]*:\s*.*$/.test(l)) { // new key
      if (current.length) groups.push(current), current=[];
      current.push(l);
    } else current.push(l);
  }
  if (current.length) groups.push(current);
  const map = new Map();
  const order = [];
  for (const g of groups) {
    const keyMatch = g[0].match(/^([^\s][^:]*):/);
    if (!keyMatch) continue;
    const key = keyMatch[1].trim();
    if (!map.has(key)) { map.set(key, g.slice()); order.push(key); }
    else {
      // merge nested unique lines (skip header duplicates)
      const existing = map.get(key);
      const existingSet = new Set(existing.slice(1).map(x=>x.trim()));
      for (const line of g.slice(1)) {
        const t = line.trim();
        if (t && !existingSet.has(t)) {
          existing.push(line);
          existingSet.add(t);
        }
      }
    }
  }
  return order.map(k=>map.get(k).join('\n')).join('\n');
}

async function processFile(file) {
  let raw = await fs.readFile(file,'utf8');
  const split = splitFrontmatter(raw);
  if (split) {
    let { fm, endIndex } = split;
    // Add draft block if missing
    if (!/\bdraft:\s*true\b/.test(fm)) {
      fm += (fm.endsWith('\n')? '' : '\n') + draftBlock + '\n';
    } else if (!/sidebar:\n\s*badge:/m.test(fm)) {
      fm += (fm.endsWith('\n')? '' : '\n') + draftBlock.split('\n').slice(1).join('\n') + '\n';
    }
    // Replace tabs with two spaces
    fm = fm.replace(/\t/g, '  ');
    // Dedupe
    fm = dedupeYaml(fm);
    raw = `---\n${fm}\n---` + raw.substring(endIndex);
  } else {
    raw = `---\n${draftBlock}\n---\n\n` + raw;
  }
  await fs.writeFile(file, raw, 'utf8');
}

async function walk(dir) {
  const entries = await fs.readdir(dir,{withFileTypes:true});
  for (const e of entries) {
    const full = path.join(dir, e.name);
    if (e.isDirectory()) await walk(full);
    else if (e.isFile() && e.name.endsWith('.md')) {
      try { await processFile(full); console.log('Updated', path.relative(PAPERS, full)); } catch (err) { console.error('Error', full, err.message); }
    }
  }
}

walk(PAPERS).then(()=>console.log('Done.')).catch(e=>{console.error(e);process.exit(1);});
