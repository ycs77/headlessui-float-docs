import { h, App } from 'vue'
import DefaultTheme from 'vitepress/theme'
import Layout from './Layout.vue'
import CrawlDocFramework from './components/CrawlDocFramework.vue'
import CrawlDocGroupName from './components/CrawlDocGroupName.vue'
import SidebarFrameworks from './components/SidebarFrameworks.vue'
import './styles/vars.css'
import './styles/button.css'
import 'uno.css'

export default {
  ...DefaultTheme,
  Layout: () => {
    return h(Layout, null, {
      'sidebar-before': () => [h(CrawlDocFramework), h(SidebarFrameworks)],
      'doc-before': () => h(CrawlDocGroupName),
    })
  },
  enhanceApp({ app }: { app: App }) {
    //
  },
}
