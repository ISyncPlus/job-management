import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";


export default defineConfig({
  base: '/', 
  plugins: [
    react(),
    tailwindcss(),
  ],
  root: '.', 
  publicDir: 'public',
  build: {
    outDir: 'dist',
  },
  esbuild: {
    loader: "jsx",
  },
  server: {
    port: 3000,
  },
});
