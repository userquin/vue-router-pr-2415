<script setup lang="ts">
import { watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const router = useRouter()
const route = useRoute()
watch(route, (to) => {
  // eslint-disable-next-line no-console
  console.log('Route changed to:', to.fullPath)
})
router.beforeEach((to, from) => {
  // eslint-disable-next-line no-console
  console.log('beforeEach: updating route to:', to.fullPath, 'from:', from?.fullPath)
})
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
      <RouterView v-slot="{ Component }">
        <transition
          name="slide-fade"
          mode="out-in"
        >
          <component :is="Component" :key="route.path" />
        </transition>
      </RouterView>
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

/* --- 2. Animaciones para el <transition> de VUE (el fallback) --- */

.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 0.3s ease-out;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateY(20px);
  opacity: 0;
}
</style>
