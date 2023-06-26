<script setup lang="ts">
import { IconChevronDown } from "@tabler/icons-vue";
import { ref, defineProps, defineEmits } from "vue";

const emit = defineEmits(['onOpenOptions'])
const open = ref(false);

const props = defineProps({
  theme: String,
  text: String,
})
const onClick = () => {
  open.value = !open.value
  emit('onOpenOptions', open.value)
}
</script>
<template>
  <button class="select_country" @click="onClick" :id="props.theme" tabindex="1">
    <span>{{text}}</span> <span><IconChevronDown :size="16" /></span>
  </button>
</template>
<style scoped>
@import url("./Filter.css");
</style>
