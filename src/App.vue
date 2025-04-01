<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/post">post</RouterLink>
        <RouterLink to="/addpost">addpost</RouterLink>
      </nav>

<div class="view-area">
  <RouterView />
</div>
</template>

<style scoped>


nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
  border: 1px solid #000;
  display: flex;
  justify-content: center;
  align-items: center;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}
.view-area{
  width: 90%;
  border: 1px solid #000;
  height: 100vh;
  padding: 30px;
  margin-left: auto;
  margin-right: auto;
}

@media (min-width: 1024px) {


  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
