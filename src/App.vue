<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <nav>
      <RouterLink to="/posts">POSTS</RouterLink>
        <div class="separator" />
      <RouterLink to="/post/form">CREATE</RouterLink>
    </nav>
  </header>

  <main>
    <RouterView />
  </main>
</template>

<style scoped>
header {
  background-color: #eee;
}

nav {
  display: flex;
  justify-content: center;
  font-size: 12px;
  text-align: center;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 1rem;
}

nav a:first-of-type {
  border: 0;
}

.separator {
  border-left: 1px solid var(--color-border);
  margin: 1rem 0;
}

main {
  display: flex;
  justify-content: center;
  padding-top: 1rem;
}
</style>
