#!/usr/bin/env node
import { promises as fs } from 'fs';
import path from 'path';

const ROOT = path.resolve(process.cwd(), 'src', 'content', 'docs', 'course-ntw2029');
let changedCount = 0;
let scannedCount = 0;
const changedFiles = [];

async function processFile(file) {
  let text = await fs.readFile(file, 'utf8');
  // frontmatter must start at beginning
  if (!text.startsWith('---')) return;
  const end = text.indexOf('\n---', 3);
  if (end === -1) return; // malformed
  const fmBlock = text.substring(0, end + 4); // include closing ---
  if (!/\t/.test(fmBlock)) return; // no tabs in YAML
  const replaced = fmBlock.replace(/\t/g, '  '); // two spaces
  if (replaced !== fmBlock) {
    text = replaced + text.substring(end + 4);
    await fs.writeFile(file, text, 'utf8');
    changedCount++;
    changedFiles.push(path.relative(ROOT, file));
  }
}

async function walk(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  for (const e of entries) {
    const full = path.join(dir, e.name);
    if (e.isDirectory()) await walk(full);
    else if (e.isFile() && e.name.endsWith('.md')) {
      scannedCount++;
      try { await processFile(full); } catch (err) { console.error('Error', full, err.message); }
    }
  }
}

walk(ROOT).then(()=>{
  console.log(`Scanned ${scannedCount} markdown files.`);
  console.log(`Updated ${changedCount} frontmatter blocks with tabs.`);
  if (changedFiles.length) {
    console.log('Files changed:');
    for (const f of changedFiles) console.log(' -', f);
  }
}).catch(e=>{console.error(e);process.exit(1);});
