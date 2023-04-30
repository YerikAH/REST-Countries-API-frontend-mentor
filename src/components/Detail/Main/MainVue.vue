<script setup lang="ts">
import { theme } from '../../../store/store'
import SectionDetail from './Sections/SectionDetail.vue'
</script>
<template>
  <main class="main_style" :id="theme">
    <SectionDetail/>
  </main>
</template>
<style scoped>
.main_style {
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  overflow: hidden;
  padding: 0 1rem;
}
</style>
