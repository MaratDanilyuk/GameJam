import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import fs from 'fs';

const assetsDir = path.resolve(__dirname, 'assets');

const MIME: Record<string, string> = {
  '.svg':   'image/svg+xml',
  '.png':   'image/png',
  '.jpg':   'image/jpeg',
  '.jpeg':  'image/jpeg',
  '.gif':   'image/gif',
  '.webp':  'image/webp',
  '.ico':   'image/x-icon',
  '.woff':  'font/woff',
  '.woff2': 'font/woff2',
  '.ttf':   'font/ttf',
  '.otf':   'font/otf',
  '.json':  'application/json',
  '.mp3':   'audio/mpeg',
  '.mp4':   'video/mp4',
  '.webm':  'video/webm',
  '.txt':   'text/plain; charset=utf-8',
  '.html':  'text/html; charset=utf-8',
};

export default defineConfig({
  base: process.env.BASE_PATH ?? '/',
  plugins: [
    react(),
    {
      name: 'serve-assets-dir',
      configureServer(server) {
        server.middlewares.use('/assets', (req, res, next) => {
          const url = decodeURIComponent((req.url ?? '').split('?')[0]);
          const filePath = path.join(assetsDir, url);
          if (!filePath.startsWith(assetsDir)) { res.statusCode = 403; res.end(); return; }
          fs.stat(filePath, (err, stat) => {
            if (err || !stat.isFile()) return next();
            const ext  = path.extname(filePath).toLowerCase();
            const mime = MIME[ext] ?? 'application/octet-stream';
            res.setHeader('Content-Type', mime);
            res.setHeader('Cache-Control', 'no-cache');
            fs.createReadStream(filePath).pipe(res);
          });
        });
      },
    },
  ],
  resolve: {
    alias: { '@': path.resolve(__dirname, '../ui-kit/src') },
  },
  server: {
    host: '127.0.0.1',
    port: 4200,
    strictPort: false,
  },
});
