import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'

const app = createApp(App)

// Add router debugging
console.log('Available routes:', router.getRoutes())

router.beforeEach((to, from, next) => {
  console.log(`Navigating from ${from.path} to ${to.path}`)
  next()
})

app.use(router)
app.use(vuetify)

app.mount('#app')