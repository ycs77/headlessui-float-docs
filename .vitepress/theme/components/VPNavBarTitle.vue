<script setup lang="ts">
import { useData } from 'vitepress'
import { useSidebar } from 'vitepress/dist/client/theme-default/composables/sidebar.js'
import VPImage from 'vitepress/dist/client/theme-default/components/VPImage.vue'

const { site, theme, localePath } = useData()
const { hasSidebar } = useSidebar()
</script>

<template>
  <div class="VPNavBarTitle" :class="{ 'has-sidebar': hasSidebar }">
    <a class="title" :href="localePath">
      <slot name="nav-bar-title-before" />
      <!-- <VPImage class="logo" :image="theme.logo" />
      <template v-if="theme.siteTitle">{{ theme.siteTitle }}</template>
      <template v-else-if="theme.siteTitle === undefined">{{ site.title }}</template> -->
      <span><span class="text-brand">Headless UI</span> Float</span>
      <slot name="nav-bar-title-after" />
    </a>
  </div>
</template>

<style scoped>
.VPNavBarTitle {
  flex-shrink: 0;
  border-bottom: 1px solid transparent;
}

@media (min-width: 960px) {
  .VPNavBarTitle.has-sidebar {
    margin-right: 32px;
    width: calc(var(--vp-sidebar-width) - 64px);
    border-bottom-color: var(--vp-c-divider-light);
    background-color: var(--vp-c-bg-alt);
  }
}

.title {
  display: flex;
  align-items: center;
  width: 100%;
  height: var(--vp-nav-height);
  font-size: 16px;
  font-weight: 600;
  color: var(--vp-c-text-1);
  transition: opacity 0.25s;
}

.title:hover {
  opacity: 0.6;
}

@media (min-width: 960px) {
  .title {
    flex-shrink: 0;
  }
}

:deep(.logo) {
  margin-right: 8px;
  height: 24px;
}

.text-brand {
  color: var(--vp-c-brand-light);
  transition: color 0.5s;
}
.dark .text-brand {
  color: var(--vp-c-brand-lighter);
}
</style>
