import type { HeadConfig } from 'vitepress'

export const head = [
  ['meta', { property: 'og:type', content: 'website' }],
  ['meta', { property: 'og:title', content: 'Headless UI Float' }],
  ['meta', {
    property: 'og:image',
    content: 'https://headlessui-float.vercel.app/og-image.png',
  }],
  ['meta', { property: 'og:url', content: 'https://headlessui-float.vercel.app/' }],
  ['meta', { name: 'twitter:site', content: '@ycs77' }],
  ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
  ['meta', {
    name: 'google-site-verification',
    content: 'Wa8krcXE98k0kOUZMVWseTPxyzqchmJRU9qlvpuo4OE',
  }],
] satisfies HeadConfig[]
