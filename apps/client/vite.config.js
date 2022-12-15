import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      "/project": "http://localhost:3000",
      "/user": "https://drab-plum-puffer-kilt.cyclic.app"
    },
  },
  plugins: [react()]
})