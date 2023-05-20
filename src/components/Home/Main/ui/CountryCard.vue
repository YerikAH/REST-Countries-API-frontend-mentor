<script setup lang="ts">
import {computed} from 'vue';
import type { Country } from '../../../../interface/data'
import { populationSeparate, capitalDefined } from '../../../../helpers/helpers'
const props = defineProps({
  data: { type: Object as () => Country, required: true }
})
</script>
<template>
  <RouterLink class="card_country" :to="`/country/${data.name.common}`" >
    <img :src="data.flags.png" alt="country" />
    <div class="country_info">
      <h5 class="info_name">{{ props.data.name.common }}</h5>
      <span class="info_types">
        <b>Population: </b>
        <p>{{ populationSeparate(props.data.population) }}</p>
      </span>
      <span class="info_types">
        <b>Region: </b>
        <p>{{ props.data.region }}</p>
      </span>
      <span class="info_types">
        <b>Capital: </b>
        <p>{{ capitalDefined(props.data.capital) }}</p>
      </span>
    </div>
  </RouterLink>
</template>
<style scoped>
#dark .card_country {
  background-color: var(--dark-blue);
}
#dark .info_name {
  color: var(--white);
}
#dark .info_types b {
  color: var(--white);
}

#dark .info_types p {
  color: var(--white);
}
.card_country {
  width: 100%;
  max-width: 15.625rem;
  background-color: var(--white);
  border-radius: 0.2rem;
  overflow: hidden;
  position: relative;
  transition: 0.3s;
  transition-timing-function: cubic-bezier(0.48, 0.25, 0.14, 0.91);
}
.card_country img {
  width: 100%;
  height: 10rem;
  object-fit: cover;
}
.country_info {
  padding: 1rem 1rem 2rem 1rem;
}
.info_name {
  margin-bottom: 1rem;
  font: normal normal 800 1.1rem/1.5rem var(--font-primary);
  color: var(--very-dark-blue-text);
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.info_types {
  display: flex;
  gap: 0.4rem;
}
.info_types b {
  font: normal normal 600 0.8rem/1.2rem var(--font-primary);
  color: var(--very-dark-blue-text);
}
.info_types p {
  font: normal normal 300 0.8rem/1.2rem var(--font-primary);
  color: var(--very-dark-blue-text);
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
</style>
