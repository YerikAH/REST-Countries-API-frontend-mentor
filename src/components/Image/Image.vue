<script setup>
import { defineProps, ref, onMounted, watch } from "vue";
import Loader from '../Loader/Loader.vue'

const image = ref(null);
const loadImage = ref(true);
const style = ref("");

const props = defineProps({
  theme: String,
  src: String,
  styles: Object
});
watch(
  () => props.src,
  () => {
    image.value.src = props.src;
    loadImage.value = true;
    style.value = "--hidden";
  }
);
watch(image, () => {
  image.value.src = props.src;
});
const onToggleImage = () => {
  loadImage.value = false;
  style.value = "";
};
</script>
<template>
  <div :style="props.styles">
    <img
      :class="`image ${style}`"
      ref="image"
      alt="image"
      @load="onToggleImage"
    />
    <Loader :theme="props.theme" v-if="loadImage"/>
  </div>
</template>
<style scoped>
@import url("./Image.css");
</style>
