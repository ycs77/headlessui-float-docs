import { defineConfig } from 'vitepress'
import type { DefaultTheme } from 'vitepress'
import { head } from './head'

export const en = defineConfig({
  lang: 'en-US',
  title: 'Headless UI Float',
  description: 'Easily float the Headless UI components',

  head: [
    ...head,
    ['meta', { property: 'og:description', content: 'Easily float the Headless UI components' }],
  ],

  themeConfig: {
    sidebar: {
      '/react/': sidebarReact(),
      '/vue/': sidebarVue(),
    },

    editLink: {
      pattern: 'https://github.com/ycs77/headlessui-float-docs/edit/main/src/:path',
      text: 'Edit this page on GitHub',
    },

    lastUpdatedText: 'Updated Date',
  },
})

function sidebarReact(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: 'Introduction',
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
        { text: 'Auto Focus', link: '/react/auto-focus' },
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
  ]
}

function sidebarVue(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: 'Introduction',
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
        { text: 'Auto Focus', link: '/vue/auto-focus' },
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
  ]
}

export const search: DefaultTheme.AlgoliaSearchOptions['locales'] = {
  'root': {
    placeholder: 'Search docs for %s version',
  },
}
