import { defineConfigWithTheme, type DefaultTheme } from 'vitepress'
import type { Config as ThemeConfig, AlgoliaUiLocale } from './theme/config'

export default defineConfigWithTheme<ThemeConfig>({
  srcDir: 'src',

  head: [
    ['meta', { name: 'twitter:site', content: '@ycs77' }],
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['meta', {
      name: 'og:image',
      content: 'https://headlessui-float.vercel.app/images/social_image.jpg',
    }],
    ['meta', {
      name: 'google-site-verification',
      content: 'Wa8krcXE98k0kOUZMVWseTPxyzqchmJRU9qlvpuo4OE',
    }],
  ],

  locales: {
    '/': {
      lang: 'en',
      title: 'Headless UI Float',
      description: 'Headless UI Float - Easily float the Headless UI components',
    },
    '/zh-tw/': {
      lang: 'zh-TW',
      title: 'Headless UI Float',
      description: 'Headless UI Float - 輕鬆浮動定位 Headless UI 元件',
    },
  },

  themeConfig: {
    locales: {
      '/': {
        label: 'English',
        selectText: 'Languages',
        editLink: {
          pattern: 'https://github.com/ycs77/headlessui-float-docs/edit/main/docs/:path',
          text: 'Suggest changes to this page',
        },
        lastUpdated: 'Last Updated',

        frameworksNav: frameworksNav(),
        sidebar: sidebar('en'),
        algolia: algoliaLocale('en'),
      },
      '/zh-tw/': {
        label: '繁體中文',
        selectText: '語言',
        editLink: {
          pattern: 'https://github.com/ycs77/headlessui-float-docs/edit/main/docs/:path',
          text: '為此頁面提供修改建議',
        },
        lastUpdated: '最後更新於',

        frameworksNav: frameworksNav(),
        sidebar: sidebar('zh-TW'),
        algolia: algoliaLocale('zh-TW'),
      },
    },

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
    },
  },
})

function frameworksNav() {
  return [
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
    'en': {
      '/react/': [
        {
          text: 'Guide',
          items: [
            { text: 'Quick Start', link: '/react/quick-start' },
            { text: 'Floating UI Options', link: '/react/floatingui-options' },
            { text: 'Transition', link: '/react/transition' },
            { text: 'Arrow', link: '/react/arrow' },
            { text: 'Portal', link: '/react/portal' },
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
            { text: 'Portal', link: '/zh-tw/react/portal' },
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
  } as Record<string, DefaultTheme.SidebarMulti>

  return locales[lang]
}

function algoliaLocale(lang: string) {
  const locales = {
    'en': {
      placeholder: 'Search docs for %s version',
    },
    'zh-TW': {
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
  } as Record<string, AlgoliaUiLocale>

  return locales[lang]
}
