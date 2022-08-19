import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { makeServer } from './server'


const app = createApp(App)

app.config.warnHandler = function (msg, vm, trace) {
  return null
}

if (process.env.NODE_ENV === "development") {
  makeServer()
}

createApp(App).mount('#app')
