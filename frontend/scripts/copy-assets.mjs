import { cpSync, existsSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const src  = resolve(here, '..', 'assets');
const dst  = resolve(here, '..', 'dist', 'assets');

if (!existsSync(src)) {
  console.warn(`[copy-assets] no source dir at ${src} — skipped`);
  process.exit(0);
}

cpSync(src, dst, { recursive: true });
console.log(`[copy-assets] ${src} -> ${dst}`);
