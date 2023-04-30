<script setup lang="ts">
import CountryCard from './CountryCard.vue'
</script>

<template>
  <div class="cards">
    <CountryCard />
    <CountryCard />
    <CountryCard />
    <CountryCard />
    <CountryCard />
    <CountryCard />
    <CountryCard />
    <CountryCard />
    <CountryCard />
    <CountryCard />
    <CountryCard />
    <CountryCard />
    <CountryCard />
    <CountryCard />
    <CountryCard />
    <CountryCard />
    <CountryCard />
    <CountryCard />
    <CountryCard />
    <CountryCard />
    <CountryCard />
    <CountryCard />
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
    justify-content: space-between;
  }
}
</style>
