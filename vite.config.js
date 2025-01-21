/// <reference types="vitest" />

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './setupTests.ts',
    css: true,
    reporters: ['verbose'],
    coverage: {
      reporter: ['text', 'json', 'html'],
      provider: 'v8'
    }
  },
  base: "/frontend-ecommerce/",
  server: {
    open: false,
    port: 3000,  // Porta fixa
    host: true,  // Permite acesso via rede ou contêiner
    strictPort: true, // Evita mudança automática de porta
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: undefined, // Isso desativa a criação automática de chunks
      },
    }
  }
})
