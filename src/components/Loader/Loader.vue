<script setup>
import {defineProps} from 'vue'
const props = defineProps({
  theme: String
})
</script>
<template>
  <div class="loader" :id="props.theme"/>
</template>
<style scoped>
@import url("./Loader.css");
</style>
