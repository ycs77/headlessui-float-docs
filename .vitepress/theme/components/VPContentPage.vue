<script lang="ts" setup>
import { useData } from 'vitepress'
import VPFooter from './VPFooter.vue'

const { frontmatter } = useData()
</script>

<template>
  <div class="VPContentPage">
    <main>
      <Content />
    </main>

    <slot name="footer-before" />
    <VPFooter v-if="frontmatter.footer !== false" />
    <slot name="footer-after" />
  </div>
</template>

<style scoped>
.VPContentPage {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.VPContentPage main {
  flex: 1;
}
</style>
