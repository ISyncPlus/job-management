import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// Change this to your GitHub repo name
const repoName = "job-management";
const API_URL = import.meta.env.PROD ? "https://mock-jobs-back.onrender.com"
: "/api";

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
        target: `${API_URL}`,
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
});
