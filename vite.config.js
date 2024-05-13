import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": new URL('src/', import.meta.url).pathname,
    },
  },
  server: {
    proxy: {
      '/login/google': {
        target: 'http://localhost:8080/api/v1/auth/google',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/login\/google/, ''),
      },
    },
  },

})
