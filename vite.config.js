import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import path from 'path'

export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
    createSvgIconsPlugin({
      // Укажите путь к папке SVG
      iconDirs: [path.resolve(process.cwd(), 'src/icons')],

      // Укажите символ, который будет использоваться для создания спрайтов
      symbolId: 'icon-[name]',
      inject: 'body-first',
      customDomId: 'icons',
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
})
