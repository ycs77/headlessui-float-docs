<script lang="ts" setup>
import { computed, watchEffect } from 'vue'
import { useConfig } from '../composables/config'
import { useLanguageLinks, useFrameworkLinks } from '../composables/nav'
import VPNavBarMenuLink from './VPNavBarMenuLink.vue'
import VPNavBarMenuGroup from './VPNavBarMenuGroup.vue'

const { config } = useConfig()
const languageLinks = useLanguageLinks()
const frameworkLinks = useFrameworkLinks()
const show = computed(() => config.value.nav || languageLinks.value)
</script>

<template>
  <nav v-if="show" aria-labelledby="main-nav-aria-label" class="VPNavBarMenu">
    <span id="main-nav-aria-label" class="visually-hidden">Main Navigation</span>
    <template v-for="item in config.nav" :key="item.text">
      <VPNavBarMenuLink v-if="'link' in item" :item="item" />
      <VPNavBarMenuGroup v-else :item="item" />
    </template>

    <VPNavBarMenuLink v-for="item in frameworkLinks" :key="item.text" :item="item" />

    <VPNavBarMenuGroup v-if="languageLinks" :item="languageLinks" />
  </nav>
</template>

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
