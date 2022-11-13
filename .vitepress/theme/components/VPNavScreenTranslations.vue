<template>
  <div v-if="languageLinks" class="VPNavScreenTranslations" :class="{ open: isOpen }">
    <button class="title" @click="toggle">
      <VPIconLanguages class="icon lang" />
      {{ languageLinks.text }}
      <VPIconChevronDown class="icon chevron" />
    </button>

    <ul class="list">
      <li v-for="locale in languageLinks.items" :key="locale.link" class="item">
        <a class="link" :href="locale.link">{{ locale.text }}</a>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useLanguageLinks } from '../composables/nav'
import VPIconChevronDown from 'vitepress/dist/client/theme-default/components/icons/VPIconChevronDown.vue'
import VPIconLanguages from 'vitepress/dist/client/theme-default/components/icons/VPIconLanguages.vue'

const languageLinks = useLanguageLinks()

const isOpen = ref(false)

function toggle() {
  isOpen.value = !isOpen.value
}
</script>

<style scoped>
.VPNavScreenTranslations {
  height: 24px;
  overflow: hidden;
}

.VPNavScreenTranslations.open {
  height: auto;
}

.title {
  display: flex;
  align-items: center;
  font-size: 14px;
  font-weight: 500;
  color: var(--vp-c-text-1);
}

.icon {
  width: 16px;
  height: 16px;
  fill: currentColor;
}

.icon.lang {
  margin-right: 8px;
}

.icon.chevron {
  margin-left: 4px;
}

.list {
  padding: 4px 0 0 24px;
}

.link {
  line-height: 32px;
  font-size: 13px;
  color: var(--vp-c-text-1);
}
</style>
