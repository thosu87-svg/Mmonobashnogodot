import fs from 'fs';
import path from 'path';

export class LegacyRegistry {
  constructor(basePath) {
    this.basePath = basePath;
  }

  scan() {
    const files = [];
    if (!fs.existsSync(this.basePath)) return files;

    const walk = (dir) => {
      for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
        const full = path.join(dir, entry.name);
        if (entry.isDirectory()) walk(full);
        else files.push(path.relative(this.basePath, full).replace(/\\/g, '/'));
      }
    };

    walk(this.basePath);
    return files.sort();
  }

  summarize() {
    const files = this.scan();
    return {
      totalFiles: files.length,
      appFiles: files.filter(f => f.startsWith('app/')).length,
      backendFiles: files.filter(f => f.startsWith('backend/')).length,
      aiFiles: files.filter(f => f.startsWith('ai/')).length,
      componentFiles: files.filter(f => f.startsWith('components/')).length,
      sample: files.slice(0, 80)
    };
  }
}
