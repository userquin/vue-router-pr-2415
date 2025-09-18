import vue from '@vitejs/plugin-vue'
import router from 'unplugin-vue-router/vite'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    router({
      // _inspect: true,
      experimental: {
        autoExportsDataLoaders: [
          // 'unplugin-vue-router/data-loaders',
          'unplugin-vue-router/data-loaders/basic',
          // 'unplugin-vue-router/data-loaders/basic',
        ],
        paramParsers: true,
      },
    }),
    vue(),
  ],
})
