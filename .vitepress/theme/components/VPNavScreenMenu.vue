<script lang="ts" setup>
import { useData } from 'vitepress'
import { useDocsNav } from '../composables/nav'
import VPNavScreenMenuLink from 'vitepress/dist/client/theme-default/components/VPNavScreenMenuLink.vue'
import VPNavScreenMenuGroup from 'vitepress/dist/client/theme-default/components/VPNavScreenMenuGroup.vue'

const { theme } = useData()
const docsNav = useDocsNav()
</script>

<template>
  <nav v-if="theme.nav || docsNav" class="VPNavScreenMenu">
    <template v-for="item in theme.nav" :key="item.text">
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
      v-for="item in docsNav"
      :text="item.text"
      :link="item.link"
    />
  </nav>
</template>
