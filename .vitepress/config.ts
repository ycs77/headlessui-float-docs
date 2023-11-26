import { resolve } from 'path'
import type { UserConfig as ViteConfig } from 'vite'
import { defineConfigWithTheme, type DefaultTheme, type HeadConfig } from 'vitepress'
import Components from 'unplugin-vue-components/vite'
import UnoCSS from 'unocss/vite'
import type { Config as ThemeConfig, AlgoliaSearchOptions, NavItemWithFramework } from './theme/config'

const head = <HeadConfig[]>[
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
]

export default defineConfigWithTheme<ThemeConfig>({
  srcDir: 'src',

  locales: {
    root: {
      label: 'English',
      lang: 'en',
      title: 'Headless UI Float',
      description: 'Easily float the Headless UI components',

      head: [
        ...head,
        ['meta', { property: 'og:description', content: 'Easily float the Headless UI components' }],
      ],

      themeConfig: {
        sidebar: sidebar('root'),

        editLink: {
          pattern: 'https://github.com/ycs77/headlessui-float-docs/edit/main/src/:path',
          text: 'Edit this page on GitHub',
        },

        lastUpdatedText: 'Updated Date',
      },
    },

    'zh-tw': {
      label: '繁體中文',
      lang: 'zh-TW',
      title: 'Headless UI Float',
      description: '輕鬆浮動定位 Headless UI 元件',

      head: [
        ...head,
        ['meta', { property: 'og:description', content: '輕鬆浮動定位 Headless UI 元件' }],
      ],

      themeConfig: {
        sidebar: sidebar('zh-tw'),

        editLink: {
          pattern: 'https://github.com/ycs77/headlessui-float-docs/edit/main/src/:path',
          text: '在 GitHub 上編輯此頁面',
        },

        lastUpdatedText: '更新於',
      },
    },
  },

  themeConfig: {
    frameworksNav: frameworksNav(),

    socialLinks: [
      { icon: 'github', link: 'https://github.com/ycs77/headlessui-float' },
    ],

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2022-present Lucas Yang & Contributors',
    },

    algolia: {
      indexName: 'headlessui-float',
      appId: 'XSDH9ZB960',
      apiKey: 'ff29ace901ddeaf2a763f3744e7f1e40',
      locales: algoliaLocales(),
    },
  },

  vite: viteConfig(),
})

function frameworksNav() {
  return <NavItemWithFramework[]>[
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
}

function sidebar(lang: string) {
  const locales = {
    'root': {
      '/react/': [
        {
          text: 'Overview',
          items: [
            { text: 'Quick Start', link: '/react/quick-start' },
            { text: 'Alternatives', link: '/react/alternatives' },
          ],
        },
        {
          text: 'Guide',
          items: [
            { text: 'Floating UI Options', link: '/react/floatingui-options' },
            { text: 'Render Wrapper', link: '/react/render-wrapper' },
            { text: 'Transition', link: '/react/transition' },
            { text: 'Arrow', link: '/react/arrow' },
            { text: 'Portal', link: '/react/portal' },
            { text: 'Adaptive Width', link: '/react/adaptive-width' },
            { text: 'Auto focus', link: '/react/auto-focus' },
            { text: 'Composable Mode', link: '/react/composable-mode' },
            { text: 'Virtual Element', link: '/react/virtual-element' },
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
          text: 'Overview',
          items: [
            { text: 'Quick Start', link: '/vue/quick-start' },
            { text: 'Nuxt', link: '/vue/nuxt' },
            { text: 'Auto Importing', link: '/vue/auto-importing' },
            { text: 'Alternatives', link: '/vue/alternatives' },
          ],
        },
        {
          text: 'Guide',
          items: [
            { text: 'Floating UI Options', link: '/vue/floatingui-options' },
            { text: 'Render Wrapper', link: '/vue/render-wrapper' },
            { text: 'Transition', link: '/vue/transition' },
            { text: 'Arrow', link: '/vue/arrow' },
            { text: 'Portal (Teleport)', link: '/vue/portal' },
            { text: 'Adaptive Width', link: '/vue/adaptive-width' },
            { text: 'Auto focus', link: '/vue/auto-focus' },
            { text: 'Composable Mode', link: '/vue/composable-mode' },
            { text: 'Virtual Element', link: '/vue/virtual-element' },
            { text: 'Other Options', link: '/vue/other-options' },
            { text: 'High-Order Component', link: '/vue/high-order-component' },
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
    'zh-tw': {
      '/zh-tw/react/': [
        {
          text: '概述',
          items: [
            { text: '快速開始', link: '/zh-tw/react/quick-start' },
            { text: '替代方案', link: '/zh-tw/react/alternatives' },
          ],
        },
        {
          text: '指南',
          items: [
            { text: 'Floating UI 選項', link: '/zh-tw/react/floatingui-options' },
            { text: '渲染 Wrapper 元素', link: '/zh-tw/react/render-wrapper' },
            { text: 'Transition (過場)', link: '/zh-tw/react/transition' },
            { text: '箭頭', link: '/zh-tw/react/arrow' },
            { text: 'Portal', link: '/zh-tw/react/portal' },
            { text: '自適應寬度', link: '/zh-tw/react/adaptive-width' },
            { text: '自動對焦', link: '/zh-tw/react/auto-focus' },
            { text: '組合模式', link: '/zh-tw/react/composable-mode' },
            { text: '虛擬元素', link: '/zh-tw/react/virtual-element' },
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
          text: '概述',
          items: [
            { text: '快速開始', link: '/zh-tw/vue/quick-start' },
            { text: 'Nuxt', link: '/zh-tw/vue/nuxt' },
            { text: '自動引入', link: '/zh-tw/vue/auto-importing' },
            { text: '替代方案', link: '/zh-tw/vue/alternatives' },
          ],
        },
        {
          text: '指南',
          items: [
            { text: 'Floating UI 選項', link: '/zh-tw/vue/floatingui-options' },
            { text: '渲染 Wrapper 元素', link: '/zh-tw/vue/render-wrapper' },
            { text: 'Transition (過場)', link: '/zh-tw/vue/transition' },
            { text: '箭頭', link: '/zh-tw/vue/arrow' },
            { text: 'Portal (Teleport)', link: '/zh-tw/vue/portal' },
            { text: '自適應寬度', link: '/zh-tw/vue/adaptive-width' },
            { text: '自動對焦', link: '/zh-tw/vue/auto-focus' },
            { text: '組合模式', link: '/zh-tw/vue/composable-mode' },
            { text: '虛擬元素', link: '/zh-tw/vue/virtual-element' },
            { text: '其他選項', link: '/zh-tw/vue/other-options' },
            { text: 'High-Order Component', link: '/zh-tw/vue/high-order-component' },
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
  } as Record<string, DefaultTheme.SidebarMulti>

  return locales[lang]
}

function algoliaLocales() {
  return {
    'root': {
      placeholder: 'Search docs for %s version',
    },
    'zh-tw': {
      placeholder: '搜尋文檔 (%s版本)',
      translations: {
        button: {
          buttonText: '搜尋',
          buttonAriaLabel: '搜尋',
        },
        modal: {
          searchBox: {
            resetButtonTitle: '清除搜尋',
            resetButtonAriaLabel: '清除搜尋',
            cancelButtonText: '取消',
            cancelButtonAriaLabel: '取消',
          },
          startScreen: {
            recentSearchesTitle: '最近搜尋紀錄',
            noRecentSearchesText: '沒有搜尋紀錄',
            saveRecentSearchButtonTitle: '保存此搜尋紀錄',
            removeRecentSearchButtonTitle: '移除此搜尋紀錄',
            favoriteSearchesTitle: '我的最愛',
            removeFavoriteSearchButtonTitle: '移除我的最愛紀錄',
          },
          errorScreen: {
            titleText: '無法取得搜尋結果',
            helpText: '請檢查您的網路連線',
          },
          footer: {
            selectText: '選擇',
            navigateText: '切換',
            closeText: '關閉',
            searchByText: '搜尋提供者',
          },
          noResultsScreen: {
            noResultsText: '沒有相關搜尋結果',
            suggestedQueryText: '試試搜尋',
            reportMissingResultsText: '你認為這個搜尋應該要有結果嗎?',
            reportMissingResultsLinkText: '點擊回報',
          },
        },
      },
    },
  } as AlgoliaSearchOptions['locales']
}

function viteConfig() {
  return <ViteConfig>{
    plugins: [
      Components({
        dirs: resolve(__dirname, 'theme/components'),
        include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
      }),
      UnoCSS(),
    ],
  }
}
