import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/ecommerce",
  server: {
    open: true,
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: undefined, // Isso desativa a criação automática de chunks
      },
    }
  }    
})
