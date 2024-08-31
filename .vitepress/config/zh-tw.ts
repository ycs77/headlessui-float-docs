import { defineConfig } from 'vitepress'
import type { DefaultTheme } from 'vitepress'
import { head } from './head'

export const zhTw = defineConfig({
  lang: 'zh-TW',
  title: 'Headless UI Float',
  description: '輕鬆浮動定位 Headless UI 元件',

  head: [
    ...head,
    ['meta', { property: 'og:description', content: '輕鬆浮動定位 Headless UI 元件' }],
  ],

  themeConfig: {
    sidebar: {
      '/zh-tw/react/': sidebarReact(),
      '/zh-tw/vue/': sidebarVue(),
    },

    editLink: {
      pattern: 'https://github.com/ycs77/headlessui-float-docs/edit/main/src/:path',
      text: '在 GitHub 上編輯此頁面',
    },

    lastUpdatedText: '更新於',
  },
})

function sidebarReact(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: '介紹',
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
  ]
}

function sidebarVue(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: '介紹',
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
  ]
}

export const search: DefaultTheme.AlgoliaSearchOptions['locales'] = {
  'zh-tw': {
    placeholder: '搜尋文檔 (%s版本)',
    translations: {
      button: {
        buttonText: '搜尋文檔',
        buttonAriaLabel: '搜尋文檔',
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
}
