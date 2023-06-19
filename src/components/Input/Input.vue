<script setup lang="ts">
import { ref } from "vue";
import { IconSearch } from "@tabler/icons-vue";

const input = ref("");
const props = defineProps({
  placeholder: String,
  theme: String,
});
</script>

<template>
  <div class="search_country" :id="props.theme">
    <button class="search_country_button">
      <IconSearch :size="18" color="#848484" />
    </button>
    <input type="text" v-model="input" :placeholder="props.placeholder" />
  </div>
</template>
<style scoped>
@import url("./Input.css");
</style>
