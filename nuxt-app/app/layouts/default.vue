<script setup lang="ts">
</script>

<template>
  <div>
    <header>
      <h1>Custom Route Resolvers test</h1>
      <nav>
        <RouterLink to="/">
          Go Home
        </RouterLink>
        <RouterLink to="/a">
          Go to A
        </RouterLink>
        <RouterLink to="/b">
          Go to B
        </RouterLink>
      </nav>
    </header>
    <main>
      <slot />
    </main>
  </div>
</template>

<style scoped>
header {
  padding: 1rem 2rem;
  border-bottom: 1px solid #333;
  margin-bottom: 2rem;
}
h1 {
  margin: 0 0 1rem;
}
nav {
  display: flex;
  gap: 1rem;
}
nav a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
}
.router-link-active {
  color: #42b983;
}
main {
  padding: 0 2rem;
}
</style>
