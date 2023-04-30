<script setup lang="ts">
import CountryOption from '../ui/CountryOption.vue'
import CardsVue from '../ui/CardsVue.vue'
</script>

<template>
  <section class="section_show_country">
    <CountryOption/>
    <CardsVue/>
  </section>
</template>
<style scoped>
.section_show_country{
  max-width: 1228px;
  width: 100%;
  display: grid;
  place-items: center;
}
</style>
