import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/', // For user/organization site, use '/'. For project site, use '/REPO-NAME/'
  build: {
    outDir: 'dist',
    rollupOptions: {
      output: {
        assetFileNames: 'assets/[name]-[hash]-v2.[ext]',
      }
    }
  },
});
