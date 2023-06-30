<script setup lang="ts">

import { ref, defineProps, defineEmits } from "vue";

const emit = defineEmits(["click"]);

const props = defineProps({
  theme: String,
  text: String,
  padding: String,
  radius: String,
  size: String,
});
const onClick = () => {
  emit("click");
};
</script>
<template>
  <button
    class="select_country"
    @click="onClick"
    :id="props.theme"
    tabindex="1"
    :style="{
      padding: `${props.padding}`,
      borderRadius: `${props.radius}`,
      fontSize: `${size}`,
    }"
  >
    <slot />
  </button>
</template>
<style scoped>
@import url("./Button.css");
</style>
