<script setup lang="ts">
import {IconMoon} from '@tabler/icons-vue'
</script>

<template>
  <header class="header">
    <nav class="header_nav">
      <ul class="nav_ul">
        <li><a href="#" tabindex="1">Where in the world?</a></li>
        <li>
          <button tabindex="1"><IconMoon /> Dark mode</button>
        </li>
      </ul>
    </nav>
  </header>
</template>

<style scoped>
.header {
  display: grid;
  width: 100%;
  place-items: center;
  padding: 1.5rem 1rem;
  box-shadow: 0px 0px 4px 4px #0002;
}
.header_nav {
  width: 100%;
  max-width: 1228px;
}
.nav_ul {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.nav_ul a {
  font: normal normal 800 0.9rem/1.2rem var(--font-primary);
  color: var(--very-dark-blue-text);
}
.nav_ul button {
  font: normal normal 600 0.8rem/1.2rem var(--font-primary);
  border: none;
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  color: var(--very-dark-blue-text);
}
@media (min-width: 720px) {
  .nav_ul button {
    font: normal normal 600 1rem/1.2rem var(--font-primary);
  }
  .nav_ul a {
    font: normal normal 800 1.5rem/2rem var(--font-primary);
  }
  .header {
    padding: 1.5rem 2rem;
  }
}
</style>
