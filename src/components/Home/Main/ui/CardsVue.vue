<script setup lang="ts">
import CountryCard from './CountryCard.vue'
import {getAllData, data} from '../../../../store/store'
getAllData()
</script>

<template>
  <div class="cards">
    <CountryCard v-for="(country ,idx) in data.data" :key="idx" :data="country"/>
  </div>
</template>
<style scoped>
.cards {
  width: 100%;
  margin-top: 2rem;
  display: grid;
  grid-template-columns: repeat(auto-fill, 250px);
  gap: 4rem;
  justify-content: center;
  align-items: center;
}
@media (min-width: 720px) {
  .cards {
    margin-top: 3rem;
    justify-content: space-between;
  }
}
</style>
