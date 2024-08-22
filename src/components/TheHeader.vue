<script setup lang="ts">
import { useRoute } from 'vue-router'
import { NAVIGATION_LINKS } from '../constants/navigation'

const location = useRoute()
</script>

<template>
  <header>
    <nav>
      <RouterLink to="/">
        <div class="logo">
          <img src="@/assets/logo.svg" alt="logo" />

          <span>Noble9 Quiz</span>
        </div>
      </RouterLink>

      <ul class="navigation">
        <li>
          <RouterLink to="/" :class="{ active: location.path === NAVIGATION_LINKS.HOME }"
            >Home</RouterLink
          >
        </li>
        <li>
          <RouterLink to="/stats" :class="{ active: location.path === NAVIGATION_LINKS.STATS }"
            >Stats</RouterLink
          >
        </li>
        <li>
          <RouterLink to="/about" :class="{ active: location.path === NAVIGATION_LINKS.ABOUT }"
            >About</RouterLink
          >
        </li>
      </ul>
    </nav>
  </header>
</template>

<style scoped>
header {
  border: 1px solid transparent;
  border-bottom-color: #4caf50;
}

a {
  display: block;
  border-radius: 7px;
  padding: 15px;
  text-decoration: none;
  color: #000;

  transition: all 0.3s ease-in-out;
}

.logo {
  display: flex;
  align-items: center;
  gap: 15px;
  padding: 10px;
  box-shadow: 0 2px 4px 1px #4caf50;
}

.logo span {
  color: #4caf50;
  font-weight: 600;
}

nav {
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

ul {
  list-style-type: none;
  display: flex;
  gap: 2rem;
}

li a:hover {
  background: #4caf50;
  color: #fff;
}

.active {
  background: #4caf50;
  color: #fff;
}

@media (max-width: 600px) {
  .logo span {
    display: none;
  }

  .navigation {
    gap: 5px;
  }

  li a {
    font-size: 14px;
  }
}
</style>
