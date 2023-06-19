<script lang="ts" setup>
import { defineProps } from "vue";
import { Options } from "../../interface/app";

const props = defineProps({
  theme: String,
  options: {
    type: Array as () => Options[],
    required: true,
  },
});

const onClick = (option: string) => {
  $emit("onClick", option);
};
</script>
<template>
  <div class="filter_options" :id="props.theme">
    <button
      class="option"
      v-for="option in props.options"
      :key="option.id"
      @click="() => onClick(option.word_clave)"
    >
      {{ option.name }}
    </button>
  </div>
</template>
<style scoped>
@import url("./Options.css");
</style>
