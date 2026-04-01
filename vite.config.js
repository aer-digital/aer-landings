import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'
import { fileURLToPath, URL } from 'node:url'
import { dirname, resolve } from 'node:path'

const __dirname = dirname(fileURLToPath(import.meta.url))

export default defineConfig({
  plugins: [vue()],
  base: '/aer-landings/',
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  build: {
    rollupOptions: {
      input: {
        index: resolve(__dirname, 'index.html'),
        jogatina: resolve(__dirname, 'src/views/jogatina/index.html'),
        'jogatina-privacy': resolve(__dirname, 'src/views/jogatina/privacy/index.html'),
      }
    },
    outDir: 'dist',
    emptyOutDir: true,
    assetsInlineLimit: 0
  }
})