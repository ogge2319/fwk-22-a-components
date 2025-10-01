import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  publicDir: false,
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/index.js"),
      formats: ["es", "cjs"],
      fileName: (format) => (format === "es" ? "index.mjs" : "index.cjs")
    },
    rollupOptions: {
      external: ["react", "react-dom", "prop-types"]
    },
    cssCodeSplit: true,
    outDir: "dist",
    emptyOutDir: true,
    sourcemap: true
  }
});
