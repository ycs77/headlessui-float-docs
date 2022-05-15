import { defineConfigWithTheme } from 'vitepress'
import baseConfig from './theme/config/baseConfig'
import type { Config as ThemeConfig } from './theme/config'

const frameworksNav = [
  {
    name: 'react',
    text: 'React',
    activeMatch: `^/(\\w{2}-\\w{2}/)?react/`,
    link: '/react/quick-start',
  },
  {
    name: 'vue',
    text: 'Vue',
    activeMatch: `^/(\\w{2}-\\w{2}/)?vue/`,
    link: '/vue/quick-start',
  },
]

const sidebar = {
  'en-US': {
    '/react/': [
      {
        text: 'Guide',
        items: [
          { text: 'Quick Start', link: '/react/quick-start' },
          { text: 'Floating UI Options', link: '/react/floatingui-options' },
          { text: 'Transition', link: '/react/transition' },
          { text: 'Arrow', link: '/react/arrow' },
          { text: 'Portal (Teleport)', link: '/react/portal' },
          { text: 'Other Options', link: '/react/other-options' },
          { text: 'High-Order Component', link: '/react/high-order-component' },
        ],
      },
      {
        text: 'API',
        items: [
          { text: 'Component API', link: '/react/api' },
        ],
      },
    ],
    '/vue/': [
      {
        text: 'Guide',
        items: [
          { text: 'Quick Start', link: '/vue/quick-start' },
          { text: 'Floating UI Options', link: '/vue/floatingui-options' },
          { text: 'Transition', link: '/vue/transition' },
          { text: 'Arrow', link: '/vue/arrow' },
          { text: 'Portal (Teleport)', link: '/vue/portal' },
          { text: 'Other Options', link: '/vue/other-options' },
          { text: 'High-Order Component', link: '/vue/high-order-component' },
          { text: 'Auto Importing Components', link: '/vue/auto-importing' },
        ],
      },
      {
        text: 'API',
        items: [
          { text: 'Component API', link: '/vue/api' },
        ],
      },
    ],
  },
  'zh-TW': {
    '/zh-tw/react/': [
      {
        text: '指南',
        items: [
          { text: '快速開始', link: '/zh-tw/react/quick-start' },
          { text: 'Floating UI 選項', link: '/zh-tw/react/floatingui-options' },
          { text: 'Transition (過場)', link: '/zh-tw/react/transition' },
          { text: 'Arrow (箭頭)', link: '/zh-tw/react/arrow' },
          { text: 'Portal (Teleport)', link: '/zh-tw/react/portal' },
          { text: '其他選項', link: '/zh-tw/react/other-options' },
          { text: 'High-Order Component', link: '/zh-tw/react/high-order-component' },
        ],
      },
      {
        text: 'API',
        items: [
          { text: '元件 API', link: '/zh-tw/react/api' },
        ],
      },
    ],
    '/zh-tw/vue/': [
      {
        text: '指南',
        items: [
          { text: '快速開始', link: '/zh-tw/vue/quick-start' },
          { text: 'Floating UI 選項', link: '/zh-tw/vue/floatingui-options' },
          { text: 'Transition (過場)', link: '/zh-tw/vue/transition' },
          { text: 'Arrow (箭頭)', link: '/zh-tw/vue/arrow' },
          { text: 'Portal (Teleport)', link: '/zh-tw/vue/portal' },
          { text: '其他選項', link: '/zh-tw/vue/other-options' },
          { text: 'High-Order Component', link: '/zh-tw/vue/high-order-component' },
          { text: '自動引入元件', link: '/zh-tw/vue/auto-importing' },
        ],
      },
      {
        text: 'API',
        items: [
          { text: '元件 API', link: '/zh-tw/vue/api' },
        ],
      },
    ],
  },
}

export default defineConfigWithTheme<ThemeConfig>({
  extends: baseConfig,

  srcDir: 'src',
  scrollOffset: 'header',

  head: [
    ['meta', { name: 'twitter:site', content: '@ycs77' }],
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    [
      'meta',
      {
        name: 'twitter:image',
        content: 'https://headlessui-float.vercel.app/images/social_image.png'
      }
    ],
  ],

  locales: {
    '/': {
      lang: 'en-US',
      title: 'Headless UI Float',
      description: 'Headless UI Float - Easy floating Headless UI components',
    },
    '/zh-tw/': {
      lang: 'zh-TW',
      title: 'Headless UI Float',
      description: 'Headless UI Float - 輕鬆浮動定位 Headless UI 元素',
    },
  },

  themeConfig: {
    locales: {
      '/': {
        label: 'English',
        selectText: 'Languages',
        editLinkText: 'Edit this page on GitHub',
        lastUpdated: 'Last Updated',

        frameworksNav,
        sidebar: sidebar['en-US'],
      },
      '/zh-tw/': {
        label: '繁體中文',
        selectText: '語言',
        editLinkText: '在 GitHub 上編輯此頁面',
        lastUpdated: '最後更新於',

        frameworksNav,
        sidebar: sidebar['zh-TW'],
      },
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/ycs77/headlessui-float' },
    ],

    editLink: {
      repo: 'ycs77/headlessui-float-docs',
    },

    footer: {
      license: {
        text: 'MIT License',
        link: 'https://github.com/ycs77/headlessui-float/blob/main/LICENSE.md',
      },
      copyright: `Copyright © 2022-${new Date().getFullYear()} Lucas Yang`,
    },
  },

  vite: {
    define: {
      __VUE_OPTIONS_API__: false,
    },
    server: {
      host: true,
      fs: {
        // for when developing with locally linked theme
        allow: ['../..'],
      },
    },
    build: {
      minify: 'terser',
      chunkSizeWarningLimit: Infinity,
    },
    json: {
      stringify: true,
    },
  },
})
