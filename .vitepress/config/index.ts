import { defineConfig } from 'vitepress'
import { shared } from './shared'
import { en } from './en'
import { zhTw } from './zh-tw'

export default defineConfig({
  ...shared,
  locales: {
    root: { label: 'English', ...en },
    'zh-tw': { label: '繁體中文', ...zhTw },
  },
})
