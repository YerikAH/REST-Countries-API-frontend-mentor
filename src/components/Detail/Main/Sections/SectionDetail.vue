<script setup lang="ts">
import DetailCountryText from '../ui/DetailCountryText.vue'
import DetailCountryImage from '../ui/DetailCountryImage.vue'
</script>
<template>
  <section class="detail_country">
    <DetailCountryImage/>
    <DetailCountryText />
  </section>
</template>
<style scoped>
.detail_country{
  max-width: 1228px;
  width: 100%;
  display: grid;
  place-items: center;
}
@media (min-width: 720px) {
  .detail_country{
    grid-template-columns: repeat(2, 50%);
  }	
}
</style>
