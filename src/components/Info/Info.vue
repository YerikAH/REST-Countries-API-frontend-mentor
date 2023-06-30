<script setup lang="ts">
import { defineProps } from "vue";
import {
  populationSeparate,
  arrayToString,
  objectToString,
  getNameMoney,
  getNameByCode
} from "../../helpers/helpers";
import { Country } from "../../interface/data";

const props = defineProps({
  theme: String,
  nativeName: String,
  population: String,
  region: String,
  subRegion: String,
  capital: String,
  topLevelDomain: String,
  currencies: String,
  languages: String,
  borderCountries: String,
  country: {
    type: Object as () => Country,
    required: true,
  },
});
</script>
<template>
  <div class="detail_country_two" :id="props.theme">
    <h2>{{ props.country.name.common }}</h2>
    <div class="detail_country_two_boxgrid">
      <div class="boxgrid_one grid">
        <span class="boxgrid_types">
          <b>{{ props.nativeName }}</b>
          <p>{{ props.country.name.official ?? "No Native Name" }}</p>
        </span>
        <span class="boxgrid_types">
          <b>{{ props.population }}</b>
          <p>{{ populationSeparate(props.country.population) }}</p>
        </span>
        <span class="boxgrid_types">
          <b>{{ props.region }}</b>
          <p>{{ props.country.region }}</p>
        </span>
        <span class="boxgrid_types">
          <b>{{ props.subRegion }}</b>
          <p>{{ props.country.subregion }}</p>
        </span>
        <span class="boxgrid_types">
          <b>{{ props.capital }}</b>
          <p>{{ arrayToString(props.country.capital) }}</p>
        </span>
      </div>
      <div class="boxgrid_two grid">
        <span class="boxgrid_types">
          <b>{{ props.topLevelDomain }}</b>
          <p>{{ arrayToString(props.country.tld) }}</p>
        </span>
        <span class="boxgrid_types">
          <b>{{ props.currencies }}</b>
          <p>{{ getNameMoney(props.country.currencies) }}</p>
        </span>
        <span class="boxgrid_types">
          <b>{{ props.languages }}</b>
          <p>{{ objectToString(props.country.languages) }}</p>
        </span>
      </div>
    </div>
    <div class="detail_country_two_boxflex">
      <p>{{ props.borderCountries }}</p>
      <div class="box_flex_buttons">{{ getNameByCode(props.country.borders)}}</div>
    </div>
  </div>
</template>
<style scoped>
@import url("./Info.css");
</style>
