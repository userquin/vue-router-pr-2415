import { createWebHistory } from 'vue-router'
import { handleHotUpdate, resolver } from 'vue-router/auto-resolver'
import { experimental_createRouter } from 'vue-router/experimental'

export const router = experimental_createRouter({
  history: createWebHistory(),
  resolver,
})

if (import.meta.hot) {
  handleHotUpdate(router)
}
