<script lang="ts" setup>
import { computed } from 'vue'
import { useConfig } from '../composables/config'
import { useLanguageLinks } from '../composables/nav'
import VPNavScreenMenuLink from './VPNavScreenMenuLink.vue'
import VPNavScreenMenuGroup from './VPNavScreenMenuGroup.vue'

const { config } = useConfig()
const languageLinks = useLanguageLinks()
const show = computed(() => config.value.nav || languageLinks.value)
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

    <VPNavScreenMenuGroup
      v-if="languageLinks"
      :text="languageLinks.text || ''"
      :items="languageLinks.items"
    />
  </nav>
</template>
