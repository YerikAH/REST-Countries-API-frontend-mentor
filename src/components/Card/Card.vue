<script setup lang="ts">
import { populationSeparate, capitalDefined } from "../../helpers/helpers";
import { Country } from "../../interface/data";
import { defineProps, ref } from "vue";
import Image from "../Image/Image.vue";

const props = defineProps({
  population: String,
  capital: String,
  region: String,
  theme: String,
  country: {
    type: Object as () => Country,
    required: true,
  },
});
</script>
<template>
  <RouterLink
    class="card_country"
    :to="`/country/${props.country.to}`"
    :id="props.theme"
  >
    <div class="card_country__image">
      <Image
        :styles="{ width: '100%', height: '100%' }"
        :theme="props.theme"
        :src="props.country.flags.png"
      />
    </div>
    <div class="country_info">
      <h5 class="info_name">{{ props.country.name.common }}</h5>
      <span class="info_types">
        <b>{{ population }}</b>
        <p>{{ populationSeparate(props.country.population) }}</p>
      </span>
      <span class="info_types">
        <b>{{ region }}</b>
        <p>{{ props.country.region }}</p>
      </span>
      <span class="info_types">
        <b>{{ capital }}</b>
        <p>{{ capitalDefined(props.country.capital) }}</p>
      </span>
    </div>
  </RouterLink>
</template>
<style scoped>
@import url("./Card.css");
</style>
