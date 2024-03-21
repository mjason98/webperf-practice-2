import { defineConfig } from "vite";
import {visualizer} from "rollup-plugin-visualizer";
import cssnanoPlugin from "cssnano";
import imagemin from "vite-plugin-imagemin";

export default defineConfig({
  root: ".",
  build: {
    outDir: "dist",
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
  ],
});
