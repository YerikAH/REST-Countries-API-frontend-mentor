<script setup lang="ts">
import {computed} from 'vue';
import type { Country } from '../../../../interface/data'

const props = defineProps({
  data: { type: Object as () => Country, required: true }
})
const capitalDefined = computed(()=>{
  const capital: string | undefined = props.data.capital?.[0]
  if(capital === undefined){
    return 'Has no capital'
  }else{
    return capital
  }  
})
const populationSeparate = computed(()=>{
  const numberToArray = props.data.population.toString().split('').reverse()
  let newArray = []
  for(let i=0; i<numberToArray.length; i++){
    const item = numberToArray[i]
    newArray.push(item) 
    if((i + 1) % 3 === 0){
      newArray.push(',')
    }
  }
  if(numberToArray.length % 3 === 0){
    newArray.reverse().shift()
    return newArray.join('')
  }else{
    return newArray.reverse().join('')
  }
})
</script>
<template>
  <div class="card_country">
    <img :src="data.flags.png" alt="country" />
    <div class="country_info">
      <h5 class="info_name">{{ props.data.name.common }}</h5>
      <span class="info_types">
        <b>Population: </b>
        <p>{{ populationSeparate }}</p>
      </span>
      <span class="info_types">
        <b>Region: </b>
        <p>{{ props.data.region }}</p>
      </span>
      <span class="info_types">
        <b>Capital: </b>
        <p>{{ capitalDefined }}</p>
      </span>
    </div>
  </div>
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
