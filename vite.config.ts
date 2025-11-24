import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    rollupOptions: {
      input: {
        background: 'src/background.ts',
        popup: 'src/popup/index.html'
      },
      output: {
        entryFileNames: chunk => {
          if (chunk.name === 'background') return 'background.js'
          return '[name].js'
        }
      }
    }
  }
})
