import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig} from 'vite';

export default defineConfig(() => {
  return {
    plugins: [react(), tailwindcss()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      // Keep this toggle to allow disabling HMR in constrained environments.
      hmr: process.env.DISABLE_HMR !== 'true',
    },
    build: {
      rollupOptions: {
        output: {
          manualChunks: {
            // Separa React Router (carregado só quando necessário)
            'vendor-router': ['react-router-dom'],
            // Separa a biblioteca de animações (pesada, ~96KB)
            'vendor-motion': ['motion'],
          },
        },
      },
    },
  };
});
