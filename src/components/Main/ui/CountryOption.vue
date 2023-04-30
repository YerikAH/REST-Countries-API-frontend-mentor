<script setup lang="ts">
import { IconSearch, IconArrowDown } from '@tabler/icons-vue'
</script>

<template>
  <div class="country_option">
    <div class="search_country">
      <button class="search_country_button"><IconSearch /></button>
      <input type="text" />
    </div>
    <button class="select_country">
      <span>Filter by Region</span> <span><IconArrowDown /></span>
    </button>
  </div>
</template>

<style scoped>
.country_option {
  width: 100%;
  display: flex;
  align-items: start;
  justify-content: start;
  gap: 2rem;
  margin-top: 1rem;
}
.search_country{
  position: relative;
  overflow: hidden;
  display: flex;
  max-width: 34.375rem;
  padding: 1rem;
  width: 100%;
  border: 1px solid black;
  border-radius: 0.2rem;
}
.search_country input{
  width: 100%;
  font: normal normal 500 1rem/1.2rem var(--font-primary);
  color: var(--black);
  display: flex;
  border: none;
  background-color: transparent;
}
.search_country_button{
  background-color: transparent;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 1rem;
  left: 1rem;
}
.select_country{
  display: flex;
  background-color: transparent;
  border: none;
  justify-content: space-between;
  align-items: center;
}
@media (min-width: 720px) {
  .country_option {
    align-items: center;
    justify-content: space-between;
  }
}
</style>
