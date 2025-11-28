import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/styles/index.css'
import { initStorage } from './utils/storage'

initStorage()

createApp(App).use(router).mount('#app')