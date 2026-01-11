import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  resolve:{
    alias: {
      '～': path.resolve(__dirname, 'src'),
    },
  },
  plugins: [tailwindcss(),vue()],
})
