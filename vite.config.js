import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('react')) {
              return 'vendor_react'
            }
            if (id.includes('gsap')) {
              return 'vendor_gsap'
            }
            if (id.includes('framer-motion')) {
              return 'vendor_framer_motion'
            }
            return 'vendor'
          }
        },
      },
    },
  },
})
