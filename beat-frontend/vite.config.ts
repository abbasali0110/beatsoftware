import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 4202,
    proxy: {
      '/api': {
        target: 'https://misbah.org.in',
        changeOrigin: true,
      },
      '/image': {
        target: 'https://misbah.org.in',
        changeOrigin: true,
      },
    },
  },
})
