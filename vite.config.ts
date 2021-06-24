import * as path from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import viteCompression from 'vite-plugin-compression';

export default defineConfig({
  plugins: [vue(),viteCompression()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    }
  }
})
