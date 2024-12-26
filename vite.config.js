import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      postcss: './postcss.config.js', // PostCSS ayar dosyasını belirtin
    },
  },
});
