import { defineConfig } from "vite";
import { visualizer } from "rollup-plugin-visualizer";
import cssnanoPlugin from "cssnano";
import imagemin from "vite-plugin-imagemin";
import { resolve } from 'path';

import viteBasicSsl from '@vitejs/plugin-basic-ssl';
import fs from 'fs';

const cert = fs.readFileSync(resolve(__dirname, 'localhost.pem'), 'utf8');
const key = fs.readFileSync(resolve(__dirname, 'localhost-key.pem'), 'utf8');

export default defineConfig({
  root: ".",
  build: {
    outDir: "dist",
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        about: resolve(__dirname, "about.html"),
        contact: resolve(__dirname, "contact.html"),
        menu: resolve(__dirname, "menu.html"),
        news_detail: resolve(__dirname, "news-detail.html"),
        news: resolve(__dirname, "news.html"),
      },
    },
  },
  server: {
    https: {
      key: key,
      cert: cert,
    },
  },
  plugins: [
    cssnanoPlugin(),
    visualizer({ open: true, gzipSize: true, brotliSize: true }),
    imagemin({
      gifsicle: {
        optimizationLevel: 7,
        interlaced: false,
      },
      optipng: {
        optimizationLevel: 7,
      },
      mozjpeg: {
        quality: 20,
      },
      pngquant: {
        quality: [0.8, 0.9],
        speed: 4,
      },
      svgo: {
        plugins: [
          {
            name: "removeViewBox",
          },
          {
            name: "removeEmptyAttrs",
            active: false,
          },
        ],
      },
      webp: {
        quality: 75,
      },
    }),
    viteBasicSsl(),
  ],
});
