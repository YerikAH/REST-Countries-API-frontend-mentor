<script lang="ts" setup>
import { defineProps, defineEmits } from "vue";
import { Options } from "../../interface/app";

const emit = defineEmits(['onSelectOption'])
const props = defineProps({
  theme: String,
  show: Boolean,
  options: {
    type: Array as () => Options[],
    required: true,
  },
});

const onClick = (option: string) => {
  emit('onSelectOption', option)
};
</script>
<template>
  <Transition>
    <div class="filter_options" :id="props.theme" v-show="props.show">
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
  </Transition>
</template>
<style scoped>
@import url("./Options.css");
</style>
