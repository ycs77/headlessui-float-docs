import { h } from 'vue'
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import Layout from 'vitepress/dist/client/theme-default/Layout.vue'
import CrawlDocFramework from './components/CrawlDocFramework.vue'
import CrawlDocGroupName from './components/CrawlDocGroupName.vue'
import SidebarFrameworkSwitch from './components/SidebarFrameworkSwitch.vue'
import UnmaintainAlert from './components/UnmaintainAlert.vue'
import './styles/vars.css'
import './styles/button.css'
import 'uno.css'

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(Layout, null, {
      'sidebar-nav-before': () => [
        h(CrawlDocFramework),
        h(SidebarFrameworkSwitch),
      ],
      'doc-before': () => [
        h(CrawlDocGroupName),
        h(UnmaintainAlert),
      ],
    })
  },
  enhanceApp({ app }) {
    //
  },
} satisfies Theme
