import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'; 

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss()
  ],
  resolve: {
    alias: [
      {
        find: '@',
        replacement: path.resolve(__dirname, 'src')
      },
      {
        find: '@layout',
        replacement: path.resolve(__dirname, 'src/components/layout')
      },
      {
        find: '@partials',
        replacement: path.resolve(__dirname, 'src/components/partials')
      },
      {
        find: '@css',
        replacement: path.resolve(__dirname, 'src/css')
      },
      {
        find: '@assets',
        replacement: path.resolve(__dirname, 'src/assets')
      },
      {
        find: '@screen',
        replacement: path.resolve(__dirname, 'src/assets/screen')
      },
      {
        find: '@icons',
        replacement: path.resolve(__dirname, 'src/assets/icons')
      },
    ]
  }
})
