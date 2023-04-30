<script setup lang="ts">
import { RouterView } from 'vue-router'
import { theme } from '../src/store/store'
import { onMounted, watch } from 'vue';
onMounted(() => {
  document.body.setAttribute('id', theme.value)
})
watch(theme, () => {
  document.body.setAttribute('id', theme.value)
})
</script>

<template>
  <RouterView />
</template>

<style scoped>

</style>
