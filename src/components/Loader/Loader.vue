<script setup>
import {defineProps} from 'vue'
const props = defineProps({
  theme: String
})
</script>
<template>
    <span class="loader" :id="props.theme"></span>
</template>
<style scoped>
@import url("./Loader.css")
</style>
