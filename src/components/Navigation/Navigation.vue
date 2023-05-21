<script setup lang="ts">
import { IconMoon } from "@tabler/icons-vue";

const props = defineProps({
  title: String,
  button: String,
  theme: String,
  to: String,
});
</script>

<template>
  <header class="header" :id="theme">
    <nav class="header_nav">
      <ul class="nav_ul">
        <li>
          <RouterLink :to="props.to" tabindex="1" class="ul_link">{{
            props.title
          }}</RouterLink>
        </li>
        <li>
          <button tabindex="1" class="ul_button">
            <IconMoon /> {{ props.button }}
          </button>
        </li>
      </ul>
    </nav>
  </header>
</template>

<style scoped>
@import url("./Navigation.css");
</style>
