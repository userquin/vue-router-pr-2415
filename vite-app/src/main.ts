import { DataLoaderPlugin } from 'unplugin-vue-router/data-loaders'
import { createApp } from 'vue'
import { RouterLink, RouterView } from 'vue-router'
import App from './App.vue'
import { router } from './router.ts'

const app = createApp(App)
// @ts-expect-error: FIXME: should be doable
app.use(DataLoaderPlugin, { router })
app.component('RouterLink', RouterLink)
app.component('RouterView', RouterView)
app.use(router)
app.mount('#app')
