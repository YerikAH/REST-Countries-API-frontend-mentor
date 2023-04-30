<script setup lang="ts">
import { FILTER_OPTIONS } from '../../../constant/constant'
</script>
<template>
  <div class="filter_options">
    <button class="option" v-for="option in FILTER_OPTIONS" :key="option.id">
      {{ option.name }}
    </button>
  </div>
</template>
<style scoped>
#dark .filter_options{
  background-color: var(--dark-blue);
}
#dark .option{
  color: var(--white);
}
.filter_options{
  transition: 0.3s;
  transition-timing-function: cubic-bezier(0.48, 0.25, 0.14, 0.91);
  background-color: var(--white);
  border-radius: 0.2rem;
  position: absolute;
  display: grid;
  width: 100%;
  left: 0;
  bottom: -11.3rem;
  z-index: 500;
  padding: 0.5rem 0;
}
.option{
  color: var(--very-dark-blue-text);
  padding: 0.5rem 1rem;
  background-color: transparent;
  border: none;
  font: normal normal 600 0.8rem/1rem var(--font-primary);
}

</style>
