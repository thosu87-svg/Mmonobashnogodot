import fs from 'fs';
import path from 'path';

const base = path.resolve('legacy-src');
if (!fs.existsSync(base)) {
  console.log('legacy-src not found');
  process.exit(0);
}

const files = [];
function walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full);
    else files.push(path.relative(base, full).replace(/\\/g, '/'));
  }
}
walk(base);

console.log('Legacy file count:', files.length);
console.log(files.slice(0, 120).join('\n'));
