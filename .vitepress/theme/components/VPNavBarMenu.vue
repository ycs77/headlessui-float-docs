<template>
  <nav
    v-if="theme.nav || docsNav"
    aria-labelledby="main-nav-aria-label"
    class="VPNavBarMenu"
  >
    <span id="main-nav-aria-label" class="visually-hidden">
      Main Navigation
    </span>
    <template v-for="item in theme.nav" :key="JSON.stringify(item)">
      <VPNavBarMenuLink v-if="'link' in item" :item="item" />
      <component
        v-else-if="'component' in item"
        :is="item.component"
        v-bind="item.props"
      />
      <VPNavBarMenuGroup v-else :item="item" />
    </template>

    <VPNavBarMenuLink v-for="item in docsNav" :item="item" />
  </nav>
</template>

<script setup lang="ts">
import { useData } from 'vitepress'
import type { Config } from '../config'
import { useDocsNav } from '../composables/nav'
import VPNavBarMenuLink from 'vitepress/dist/client/theme-default/components/VPNavBarMenuLink.vue'
import VPNavBarMenuGroup from 'vitepress/dist/client/theme-default/components/VPNavBarMenuGroup.vue'

const { theme } = useData<Config>()

const docsNav = useDocsNav()
</script>

<style scoped>
.VPNavBarMenu {
  display: none;
}

@media (min-width: 768px) {
  .VPNavBarMenu {
    display: flex;
  }
}
</style>
