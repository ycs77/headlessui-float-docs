<template>
  <VPFlyout
    v-if="languageLinks"
    class="VPNavBarTranslations"
    :icon="VPIconLanguages"
  >
    <div class="items">
      <p class="title">{{ languageLinks.text }}</p>

      <template v-for="locale in languageLinks.items" :key="locale.link">
        <VPMenuLink :item="locale" />
      </template>
    </div>
  </VPFlyout>
</template>

<script setup lang="ts">
import { useLanguageLinks } from '../composables/nav'
import VPIconLanguages from 'vitepress/dist/client/theme-default/components/icons/VPIconLanguages.vue'
import VPFlyout from 'vitepress/dist/client/theme-default/components/VPFlyout.vue'
import VPMenuLink from 'vitepress/dist/client/theme-default/components/VPMenuLink.vue'

const languageLinks = useLanguageLinks()
</script>

<style scoped>
.VPNavBarTranslations {
  display: none;
}

@media (min-width: 768px) {
  .VPNavBarTranslations {
    display: flex;
    align-items: center;
  }
}

.title {
  padding: 0 24px 0 12px;
  line-height: 32px;
  font-size: 14px;
  font-weight: 700;
  color: var(--vp-c-text-1);
}
</style>
