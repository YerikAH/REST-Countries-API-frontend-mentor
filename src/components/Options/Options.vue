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
};
</script>
<template>
  <div class="filter_options" :id="props.theme">
    <button
      class="option"
      v-for="(option, idx) in props.options"
      :key="idx"
      @click="() => onClick(option.word_clave)"
      tabindex="1"
    >
      {{ option.name }}
    </button>
  </div>
</template>
<style scoped>
@import url("./Options.css");
</style>
