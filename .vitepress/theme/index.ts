import { h, App } from 'vue'
import { Theme } from 'vitepress'
import { withConfigProvider } from './composables/config'
import VPApp from './components/VPApp.vue'
import VPNotFound from './components/VPNotFound.vue'
import DocFrameworkForCrawl from './components/DocFrameworkForCrawl.vue'
import DocGroupNameForCrawl from './components/DocGroupNameForCrawl.vue'
import FrameworksButtons from './components/FrameworksButtons.vue'
import './styles/index.css'

const VPTheme: Theme = {
  Layout: withConfigProvider(VPApp),
  NotFound: VPNotFound,
}

export default Object.assign({}, VPTheme, {
  Layout: () => {
    return h(VPTheme.Layout, null, {
      'sidebar-top': () => [h(DocFrameworkForCrawl), h(FrameworksButtons)],
      'content-top': () => h(DocGroupNameForCrawl),
    })
  },
  enhanceApp({ app }: { app: App }) {
    //
  },
})
