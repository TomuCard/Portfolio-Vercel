import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@layout': path.resolve(__dirname, 'src/components/layout'),
      '@partials': path.resolve(__dirname, 'src/components/partials'),
      '@css': path.resolve(__dirname, 'src/css'),
      '@assets': path.resolve(__dirname, 'src/assets'),
      '@screen': path.resolve(__dirname, 'src/assets/screen'),
      '@icons': path.resolve(__dirname, 'src/assets/icons')
    }
  }
})