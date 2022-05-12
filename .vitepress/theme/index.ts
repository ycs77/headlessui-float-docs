import { h, App } from 'vue'
import { Theme } from 'vitepress'
import { withConfigProvider } from './composables/config'
import VPApp from './components/VPApp.vue'
import VPNotFound from './components/VPNotFound.vue'
import NavBarTitle from './components/NavBarTitle.vue'
// import PreferenceSwitch from './components/PreferenceSwitch.vue'
// import {
//   preferComposition,
//   preferSFC,
//   filterHeadersByPreference
// } from './components/preferences'
// import SponsorsAside from './components/SponsorsAside.vue'
// import VueSchoolLink from './components/VueSchoolLink.vue'
// import VueJobs from './components/VueJobs.vue'

const VPTheme: Theme = {
  Layout: withConfigProvider(VPApp),
  NotFound: VPNotFound
}

export default Object.assign({}, VPTheme, {
  Layout: () => {
    return h(VPTheme.Layout, null, {
      // 'sidebar-top': () => h(PreferenceSwitch),
      // 'aside-mid': () => h(SponsorsAside),
      // 'aside-bottom': () => h(VueJobs),
      'navbar-title': () => h(NavBarTitle),
    })
  },
  enhanceApp({ app }: { app: App }) {
    // app.provide('prefer-composition', preferComposition)
    // app.provide('prefer-sfc', preferSFC)
    // app.provide('filter-headers', filterHeadersByPreference)
    // app.component('VueSchoolLink', VueSchoolLink)
  }
})
