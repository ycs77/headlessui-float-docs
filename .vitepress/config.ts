import { defineConfigWithTheme } from 'vitepress'
import baseConfig from './theme/config/baseConfig'
import type { Config as ThemeConfig } from './theme/config'

const frameworksNav = [
  {
    name: 'react',
    text: 'React',
    activeMatch: `^/(\\w{2}-\\w{2}/)?react/`,
    link: '/react/installation',
  },
  {
    name: 'vue',
    text: 'Vue',
    activeMatch: `^/(\\w{2}-\\w{2}/)?vue/`,
    link: '/vue/installation',
  },
]

const sidebar = {
  'en-US': {
    '/react/': [
      {
        text: 'Getting Started',
        items: [
          { text: 'Installation', link: '/react/installation' },
          { text: 'Usage', link: '/react/usage' },
        ]
      },
    ],
    '/vue/': [
      {
        text: 'Getting Started',
        items: [
          { text: 'Installation', link: '/vue/installation' },
          { text: 'Usage', link: '/vue/usage' },
        ]
      },
    ],
  },
  'zh-TW': {
    '/zh-tw/react/': [
      {
        text: '開始',
        items: [
          { text: '安裝', link: '/zh-tw/react/installation' },
          { text: '開始使用', link: '/zh-tw/react/usage' },
        ]
      },
    ],
    '/zh-tw/vue/': [
      {
        text: '開始',
        items: [
          { text: '安裝', link: '/zh-tw/vue/installation' },
          { text: '開始使用', link: '/zh-tw/vue/usage' },
        ]
      },
    ],
  },
}

export default defineConfigWithTheme<ThemeConfig>({
  extends: baseConfig,

  srcDir: 'src',

  locales: {
    '/': {
      lang: 'en-US',
      title: 'Headless UI Float',
      description: 'Easy use Headless UI components with Floating UI (Popper.js)',
    },
    '/zh-tw/': {
      lang: 'zh-TW',
      title: 'Headless UI Float',
      description: '輕鬆在 Headless UI 中使用 Floating UI (新版 Popper.js) 來定位浮動元素',
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
