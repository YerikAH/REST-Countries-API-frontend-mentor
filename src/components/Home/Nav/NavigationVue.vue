<script setup lang="ts">
import { changeTheme, theme } from '../../../store/store'
import { IconMoon } from '@tabler/icons-vue'
import { PathApp } from '../../../enum/enum'

const handleClick = () => {
  changeTheme()
}

</script>

<template>
  <header class="header" :id="theme">
    <nav class="header_nav">
      <ul class="nav_ul">
        <li><RouterLink :to="PathApp.main" tabindex="1" class="ul_link">Where in the world?</RouterLink></li>
        <li>
          <button tabindex="1" class="ul_button" @click="handleClick">
            <IconMoon /> Dark mode
          </button>
        </li>
      </ul>
    </nav>
  </header>
</template>

<style scoped>
#dark {
  background-color: var(--dark-blue);
}
#dark a {
  color: var(--white);
}
#dark button {
  color: var(--white);
}
#dark svg {
  fill: var(--white);
  stroke: var(--white);
}

.header {
  transition: 0.3s;
  transition-timing-function: cubic-bezier(0.48, 0.25, 0.14, 0.91);
  display: grid;
  width: 100%;
  place-items: center;
  padding: 1.5rem 1rem;
  box-shadow: 0px 0px 4px 4px #0002;
  background-color: var(--white);
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
svg {
  stroke-width: 1.5;
  stroke: var(--very-dark-blue-text);
  transition: 0.3s;
  transition-timing-function: cubic-bezier(0.48, 0.25, 0.14, 0.91);
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
