// import { createApp } from 'vue'
// changed from top code to code below ...
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js'

// import 'popper.js';

createApp(App).use(router).mount('#app')

// import HomePage from './Home.vue'
// import NewPage from './pages/JobsPage.vue'





// const app = createApp({})
// app.use(router)
// app.mount('#app')
// 