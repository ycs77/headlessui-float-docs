<template>
  <div v-if="currentFramework" class="framework-name sr-only" aria-hidden="true">
    {{ currentFramework.name }}
  </div>
</template>

<script setup lang="ts">
import { useFrameworkLinks } from '../composables/nav'

const { currentFramework } = useFrameworkLinks()
</script>
