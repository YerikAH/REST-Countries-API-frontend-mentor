<script setup lang="ts">
import { countryData } from '../../../../store/store'
</script>
<template>
  <div class="detail_country_one">
    <img :src="countryData.data[0].flags.svg" :alt="countryData.data[0].flags.alt ?? 'country'" class="detail_country_one_image" />
  </div>
</template>
<style scoped>
.detail_country_one {
  width: 100%;
  display: grid;
  place-items: center;
}
.detail_country_one_image {
  width: 100%;
  max-width: 37.5rem;
  object-fit: cover;
}
@media (min-width: 720px) {
  .detail_country_one_image {
    height: 25rem;
  }
}
</style>
