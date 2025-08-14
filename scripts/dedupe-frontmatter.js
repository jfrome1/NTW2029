#!/usr/bin/env node
import { promises as fs } from 'fs';
import path from 'path';

const ROOT = path.resolve(process.cwd(), 'src', 'content', 'docs', 'course-ntw2029');
let changed = 0, scanned = 0; const details = [];

function parseFrontmatter(yaml) {
  // Very lightweight parser handling simple key: value and nested indentation blocks.
  const lines = yaml.split(/\r?\n/);
  const items = [];
  let buffer = [];
  let currentIndent = null;
  for (let i=0;i<lines.length;i++) {
    const line = lines[i];
    if (/^\s*$/.test(line)) { buffer.push(line); continue; }
    if (/^[^\s][^:]*:\s*.*$/.test(line)) { // new top-level key
      if (buffer.length) { items.push(buffer.join('\n')); buffer=[]; }
      buffer.push(line);
      currentIndent = null;
    } else {
      // continuation or nested
      buffer.push(line);
    }
  }
  if (buffer.length) items.push(buffer.join('\n'));
  return items;
}

function consolidate(items) {
  const keyRegex = /^([^\s][^:]*):/;
  const map = new Map();
  const order = [];
  const duplicates = new Set();
  for (const block of items) {
    const firstLine = block.split(/\n/)[0];
    const m = firstLine.match(keyRegex);
    const key = m ? m[1].trim() : null;
    if (!key) continue;
    if (!map.has(key)) { map.set(key, []); order.push(key); }
    else duplicates.add(key);
    map.get(key).push(block);
  }
  if (!duplicates.size) return { text: items.join('\n'), modified:false, duplicates:[] };
  const outBlocks = [];
  for (const key of order) {
    const blocks = map.get(key);
    if (blocks.length === 1) { outBlocks.push(blocks[0]); continue; }
    // merge: keep first block; append unique nested lines from later blocks excluding first line duplicates
    const first = blocks[0];
    const firstLines = first.split(/\n/);
    const header = firstLines[0];
    const rest = firstLines.slice(1);
    const existing = new Set(rest.map(l=>l.trim()));
    for (let b=1;b<blocks.length;b++) {
      const lines = blocks[b].split(/\n/).slice(1); // skip header
      for (const l of lines) {
        const trimmed = l.trim();
        if (!trimmed) continue;
        if (!existing.has(trimmed)) { rest.push(l); existing.add(trimmed); }
      }
    }
    outBlocks.push([header, ...rest].join('\n'));
  }
  return { text: outBlocks.join('\n'), modified:true, duplicates:[...duplicates] };
}

async function processFile(file) {
  const raw = await fs.readFile(file,'utf8');
  if (!raw.startsWith('---')) return;
  const end = raw.indexOf('\n---',3);
  if (end === -1) return;
  const fm = raw.substring(4, end); // between markers
  const rest = raw.substring(end+4);
  const items = parseFrontmatter(fm);
  const { text, modified, duplicates } = consolidate(items);
  if (modified) {
    const updated = `---\n${text}\n---` + rest;
    await fs.writeFile(file, updated, 'utf8');
    changed++; details.push({file, duplicates});
  }
}

async function walk(dir){
  const entries = await fs.readdir(dir,{withFileTypes:true});
  for (const e of entries) {
    const full = path.join(dir, e.name);
    if (e.isDirectory()) await walk(full);
    else if (e.isFile() && e.name.endsWith('.md')) { scanned++; await processFile(full); }
  }
}

walk(ROOT).then(()=>{
  console.log(`Scanned ${scanned} markdown files.`);
  console.log(`Modified ${changed} with duplicate key consolidation.`);
  details.forEach(d=>console.log(' -', path.relative(ROOT,d.file), 'deduped keys:', d.duplicates.join(', ')));
}).catch(e=>{console.error(e);process.exit(1);});
