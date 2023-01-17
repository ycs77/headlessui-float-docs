import { h, App } from 'vue'
import DefaultTheme from 'vitepress/theme'
import Layout from './Layout.vue'
import CrawlDocFramework from './components/CrawlDocFramework.vue'
import CrawlDocGroupName from './components/CrawlDocGroupName.vue'
import SidebarFrameworkSwitch from './components/SidebarFrameworkSwitch.vue'
import './styles/vars.css'
import './styles/button.css'
import 'uno.css'

export default {
  ...DefaultTheme,
  Layout: () => {
    return h(Layout, null, {
      'sidebar-before': () => [h(CrawlDocFramework), h(SidebarFrameworkSwitch)],
      'doc-before': () => h(CrawlDocGroupName),
    })
  },
  enhanceApp({ app }: { app: App }) {
    //
  },
}
