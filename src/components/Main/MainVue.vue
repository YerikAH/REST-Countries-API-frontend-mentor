<script setup lang="ts">
import { theme } from '../../store/store'
import SectionsVue from './Sections/SectionsVue.vue'
</script>

<template>
  <main class="main_style" :id="theme">
    <SectionsVue/>
  </main>
</template>
<style scoped>
.main_style {
  width: 100%;
  display: grid;
  place-items: center;
}
#dark {
  background-color: var(--very-black);
}
</style>
