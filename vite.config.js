import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist', // Pasta de saída desejada
  },
  // server: {
  //   proxy: {
  //     '/': 'https://beatriz-cavallieri-finances.netlify.app',
  //   },
  // },
})

