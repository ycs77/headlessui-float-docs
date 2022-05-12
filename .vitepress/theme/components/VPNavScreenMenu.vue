<script lang="ts" setup>
import { computed } from 'vue'
import { useConfig } from '../composables/config'
import { useLanguageLinks, useFrameworkLinks } from '../composables/nav'
import VPNavScreenMenuLink from './VPNavScreenMenuLink.vue'
import VPNavScreenMenuGroup from './VPNavScreenMenuGroup.vue'

const { config } = useConfig()
const languageLinks = useLanguageLinks()
const frameworkLinks = useFrameworkLinks()
const show = computed(() => config.value.nav || languageLinks.value || frameworkLinks.value)
</script>

<template>
  <nav v-if="show" class="VPNavScreenMenu">
    <template v-for="item in config.nav" :key="item.text">
      <VPNavScreenMenuLink
        v-if="'link' in item"
        :text="item.text"
        :link="item.link"
      />
      <VPNavScreenMenuGroup
        v-else
        :text="item.text || ''"
        :items="item.items"
      />
    </template>

    <VPNavScreenMenuLink
      v-for="item in frameworkLinks"
      :text="item.text"
      :link="item.link"
    />

    <VPNavScreenMenuGroup
      v-if="languageLinks"
      :text="languageLinks.text || ''"
      :items="languageLinks.items"
    />
  </nav>
</template>
