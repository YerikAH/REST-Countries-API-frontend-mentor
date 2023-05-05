<script setup lang="ts">
import DetailCountryText from '../ui/DetailCountryText.vue'
import DetailCountryImage from '../ui/DetailCountryImage.vue'
import { IconArrowNarrowLeft } from '@tabler/icons-vue'
import { RouterLink } from 'vue-router'
</script>
<template>
  <section>
    <div class="detail_country_one_button">
      <RouterLink to="/"> <IconArrowNarrowLeft /> Back</RouterLink>
    </div>
    <div class="detail_country">
      <DetailCountryImage />
      <DetailCountryText />
    </div>
  </section>
</template>
<style scoped>

#dark .detail_country_one_button a{
  color: var(--white);
  background-color: var(--dark-blue);
  box-shadow: 0px 0px 4px 0px #fff1;
}
section {
  margin-top: 3rem;
  max-width: 1228px;
  width: 100%;
  margin-bottom: 5rem;
}
.detail_country_one_button {
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: start;
  margin-bottom: 3rem;
}
.detail_country_one_button a {
  display: flex;
  transition: 0.3s;
  transition-timing-function: cubic-bezier(0.48, 0.25, 0.14, 0.91);
  gap: 0.5rem;
  padding: 0.5rem 2rem;
  border: none;
  background-color: var(--white);
  font: normal normal 300 0.8rem/1rem var(--font-primary);
  color: var(--very-dark-blue-text);
  justify-content: center;
  align-items: center;
  border-radius: 0.2rem;
  box-shadow: 0px 0px 4px 0px #0001;
}
.detail_country {
  width: 100%;
  display: grid;
}
@media (min-width: 720px) {
  .detail_country_one_button a {
    font-size: 1rem;
  }
}
@media (min-width: 1024px)  {
  .detail_country {
    grid-template-columns: repeat(2, 50%);
  }
  section {
    margin-top: 4rem;
  }
  .detail_country_one_button {
    margin-bottom: 4rem;
  }
}
</style>
