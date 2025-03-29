import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// Change this to your GitHub repo name
const repoName = "job-management";

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
    proxy: {
      '/api': {
        target: 'https://mock-jobs-back.onrender.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
});
