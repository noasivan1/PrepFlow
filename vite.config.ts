import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    // The API server (server/index.ts) runs on 3001; the browser only ever sees this origin.
    proxy: {
      '/api': 'http://localhost:3001',
    },
  },
})
