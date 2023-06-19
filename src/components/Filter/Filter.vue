<script setup lang="ts">
import { IconChevronDown } from "@tabler/icons-vue";
import { ref, defineProps } from "vue";

const open = ref(false);
const handleClick = () => (open.value = !open.value);

const props = defineProps({
  theme: String
})
</script>
<template>
  <button class="select_country" @click="handleClick" :id="props.theme">
    <span>Filter by Region</span> <span><IconChevronDown :size="16" /></span>
  </button>
</template>
<style scoped>
@import url("./Filter.css");
</style>
