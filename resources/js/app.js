// require('./bootstrap');

import {createApp} from 'vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import { createPinia } from 'pinia'
import router from './router'


import App from './App.vue'

const pinia = createPinia()
const app = createApp(App)
app.use(pinia)
app.use(router)
app.mount('#app')
