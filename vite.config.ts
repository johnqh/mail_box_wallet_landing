import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { serviceWorkerPlugin } from '@sudobility/di_web/vite';
import { resolve } from 'path';

export default defineConfig({
  plugins: [react(), serviceWorkerPlugin()],
  resolve: {
    alias: {
      // Stub out optional peer dependencies from @sudobility/building_blocks
      'firebase/auth': resolve(__dirname, 'src/stubs/firebase-auth.ts'),
      '@sudobility/subscription-components': resolve(__dirname, 'src/stubs/subscription-components.ts'),
      // Stub out transitive dependencies not used by this landing page
      '@sudobility/devops-components': resolve(__dirname, 'src/stubs/devops-components.ts'),
      '@sudobility/di_web': resolve(__dirname, 'src/stubs/di_web.ts'),
      '@sudobility/auth_lib': resolve(__dirname, 'src/stubs/auth_lib.ts'),
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
