<script setup lang="ts">
import { theme } from '@/store/store'
import SectionsVue from './Sections/SectionsVue.vue'
</script>

<template>
  <main class="main_style" :id="theme">
    <SectionsVue />
  </main>
</template>

<style scoped>
.main_style {
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  background-color: var(--very-light-gray);
  height: 100vh;
  overflow: auto;
  padding: 0 1rem;
  transition: 0.3s;
  transition-timing-function: cubic-bezier(0.48, 0.25, 0.14, 0.91);
}
#dark {
  background-color: var(--very-dark-blue-bg);
}
</style>
