import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

import './assets/css/style.css'
import 'bootstrap-icons/font/bootstrap-icons.css';



createApp(App).use(store).use(router).mount('#app')
