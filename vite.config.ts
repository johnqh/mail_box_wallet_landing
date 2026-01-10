import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    target: 'esnext',
    minify: 'esbuild',
    cssCodeSplit: true,
    cssMinify: true,
    sourcemap: false,
  },
  esbuild: {
    drop: ['console', 'debugger'],
  },
  server: {
    host: true,
    port: 5174,
    strictPort: false,
  },
});
