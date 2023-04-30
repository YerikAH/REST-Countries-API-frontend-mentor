<script setup lang="ts">
import { IconArrowLeft } from '@tabler/icons-vue'
import { RouterLink } from 'vue-router'
</script>
<template>
  <div class="detail_country_one">
    <div class="detail_country_one_button">
      <RouterLink to="/"> <IconArrowLeft /> Back</RouterLink>
    </div>
    <img src="" alt="country" class="detail_country_one_image" />
  </div>
</template>
