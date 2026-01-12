import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // Stub out optional peer dependencies from @sudobility/building_blocks
      'firebase/auth': resolve(__dirname, 'src/stubs/firebase-auth.ts'),
      '@sudobility/subscription-components': resolve(__dirname, 'src/stubs/subscription-components.ts'),
    },
  },
  build: {
    target: 'esnext',
    minify: 'esbuild',
    cssCodeSplit: true,
    cssMinify: true,
    sourcemap: false,
    chunkSizeWarningLimit: 600,
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
