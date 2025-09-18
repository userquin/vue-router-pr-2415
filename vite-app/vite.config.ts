import { fileURLToPath } from 'node:url'
import vue from '@vitejs/plugin-vue'
import router from 'unplugin-vue-router/vite'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  plugins: [
    router({
      experimental: {
        autoExportsDataLoaders: ['src/loaders/**/*', '@/loaders/**/*'],
        paramParsers: true,
      },
    }),
    vue(),
  ],
})
