import { defineConfig } from "vite";
import { visualizer } from "rollup-plugin-visualizer";
import cssnanoPlugin from "cssnano";

export default defineConfig({
  base: "/",
  plugins: [
    cssnanoPlugin(),
    visualizer({ open: true, gzipSize: true, brotliSize: true }),
  ],
});
