import { defineConfig } from "vite";

export default defineConfig({
  root: "src",
  build: {
    outDir: "../docs",
    minify: false,
    rollupOptions: {
      input: {
        main: "src/index.html",
      },
      output: {
        chunkFileNames: "assets/[name].js",
        assetFileNames: (assetInfo) => {
          if (assetInfo.name == "style.css") {
            return "assets/style.css";
          }
          return "assets/[name][extname]";
        },
      },
    },
  },
  base: "/230519_noWebGl_3d/",
  server: {
    port: 3456,
  },
});
