<template>
  <span class="relative -top-[0.5em] inline-block px-1.5 py-0.5 bg-blue-400 text-white text-sm tracking-wide rounded">{{ label }}</span>
</template>

<script setup lang="ts">
defineProps<{
  label: string
}>()
</script>
