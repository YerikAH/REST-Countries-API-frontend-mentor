<script setup lang="ts">
import CountryBoxGrid from './CountryBoxGrid.vue'
import { countryData } from '@/store/store';
</script>
<template>
  <div class="detail_country_two">
    <h2>{{ countryData.data[0].name.common }}</h2>
    <CountryBoxGrid />
    <div class="detail_country_two_boxflex">
      <p>Border Countries:</p>
      <div class="box_flex_buttons">
	<button v-for="item in countryData.data[0].borders" :key="item">{{ item }}</button>
      </div>
    </div>
  </div>
</template>
<style scoped>
#dark button{
  color: var(--white);
 box-shadow: 0px 0px 4px 0px #fff1; 
  background-color: var(--dark-blue);
}
#dark h2 , #dark p , #dark b{
  color: var(--white);
}
.detail_country_two {
  width: 100%;
  overflow: hidden;
  position: relative;
  transition: 0.3s;
  transition-timing-function: cubic-bezier(0.48, 0.25, 0.14, 0.91);
}
.detail_country_two h2 {
  font: normal normal 800 1.2rem/1.5rem var(--font-primary);
  color: var(--very-dark-blue-text);
  margin: 2rem 0 1.5rem 0;
}
.detail_country_two_boxflex {
  display: flex;
  flex-direction: column;
  margin-top: 2rem;
}
.box_flex_buttons {
  display: flex;
  flex-wrap: wrap;
  justify-content: start;
  align-items: center;
  gap: 0.5rem;
  margin-top: 1rem;
  transition: 0.3s;
  transition-timing-function: cubic-bezier(0.48, 0.25, 0.14, 0.91);
}
.box_flex_buttons button {
  font: normal normal 300 0.8rem/1rem var(--font-primary);
  background-color: var(--white);
  color: var(--very-dark-blue-text);
  padding: 0.2rem 1rem;
  border: none;
  display: flex;
  justify-content: center;
  align-content: center;
  border-radius: 0.2rem;
  box-shadow: 0px 0px 4px 0px #0001;
}
.detail_country_two_boxflex p {
  font: normal normal 600 1rem/1rem var(--font-primary);
  color: var(--very-dark-blue-text);
  margin-right: 1rem;
}

@media (min-width: 720px) {
  .detail_country_two h2 {
    font-size: 1.7rem;
    line-height: 2rem;
  }
  .box_flex_buttons button {
    font-size: 1rem;
    line-height: 1.2rem;
  }
}
@media (min-width: 1024px) {
  .detail_country_two h2 {
    padding-left: 3rem;
  }
  .detail_country_two_boxflex {
    padding-left: 3rem;
  }
}
</style>
