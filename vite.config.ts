import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    https: {
      key: './001-books-privateKey.key',
      cert: './001-books.crt',
    }
  },
  plugins: [react()],
})
