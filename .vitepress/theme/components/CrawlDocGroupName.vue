<template>
  <div v-if="groupTitle" class="group-title sr-only" aria-hidden="true">
    {{ groupTitle }}
  </div>
</template>

<script setup lang="ts">
import { useGroupTitle } from '../composables/nav'

const groupTitle = useGroupTitle()
</script>
