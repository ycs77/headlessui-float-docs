import { resolve } from 'path'
import { defineConfig } from 'vite'
import Components from 'unplugin-vue-components/vite'
import UnoCSS from 'unocss/vite'

export default defineConfig({
  plugins: [
    Components({
      dirs: resolve(__dirname, '../.vitepress/theme/components'),
      include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
    }),
    UnoCSS(),
  ],
})
