import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgr()],
  base: './',
  optimizeDeps: {
    include: ['react-number-format']
  },
  build: {
    outDir: 'dist',
    emptyOutDir: true,
  },
})
