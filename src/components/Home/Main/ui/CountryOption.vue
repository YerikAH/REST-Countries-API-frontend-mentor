<script setup lang="ts">
import { IconSearch, IconChevronDown} from '@tabler/icons-vue'
import FilterRegion from '../Modals/FilterRegion.vue'
import {ref} from 'vue';
const open = ref(false)
</script>

<template>
  <div class="country_option">
    <div class="search_country">
      <button class="search_country_button"><IconSearch :size="18" color="#848484" /></button>
      <input type="text"  placeholder="Search for a country..."/>
    </div>
    <button class="select_country">
      <span>Filter by Region</span> <span><IconChevronDown :size="16"/></span>
      <FilterRegion v-show="open"/>
    </button>
  </div>
</template>

<style scoped>
#dark .search_country{
  background-color: var(--dark-blue);
}
#dark .search_country > input{
  color: var(--white);
}
#dark .search_country > input::placeholder{
  color: var(--white);
}
#dark .search_country_button{
  stroke: var(--white);
  color: var(--white);
}
#dark .select_country{
  background-color: var(--dark-blue);
  color: var(--white);
}
.country_option {
  width: 100%;
  display: flex;
  align-items: start;
  justify-content: start;
  gap: 2rem;
  margin-top: 2rem;
  flex-direction: column;
}
.search_country{
  transition: 0.3s;
  transition-timing-function: cubic-bezier(0.48, 0.25, 0.14, 0.91);
  position: relative;
  overflow: hidden;
  display: flex;
  max-width: 34.375rem;
  width: 100%;
  border-radius: 0.5rem;
  background-color: var(--white);
}
.search_country input{
  width: 100%;
  font: normal normal 600 0.8rem/1rem var(--font-primary);
  color: var(--very-dark-blue-text);
  display: flex;
  border: none;
  padding: 1rem 1rem 1rem 3.5rem;
  background-color: transparent;
}
.search_country input::placeholder{
  color: var(--dark-gray);
}
.search_country_button{
  transition: 0.3s;
  transition-timing-function: cubic-bezier(0.48, 0.25, 0.14, 0.91);
  background-color: transparent;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 1rem;
  left: 1.2rem;
}
.select_country{
  position: relative;
  transition: 0.3s;
  transition-timing-function: cubic-bezier(0.48, 0.25, 0.14, 0.91);
  display: flex;
  background-color: var(--white);
  border: none;
  justify-content: space-between;
  align-items: center;
  font: normal normal 600 0.8rem/1.2rem var(--font-primary);
  color: var(--very-dark-blue-text);
  padding: 1rem 1.5rem;
  gap: 1rem;
  border-radius: 0.5rem;
}
@media (min-width: 720px) {
  .country_option {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
}
</style>
