import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      "/project": "http://localhost:3001",
      "/user": "http://localhost:3001"
    },
  },
  plugins: [react()]
})