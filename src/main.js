// import { createApp } from 'vue'
// changed from top code to code below ...
import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
// import App from './App.vue'

import bootstrap from 'bootstrap/dist/css/bootstrap.css'
import popper from 'bootstrap/dist/js/bootstrap.bundle'


// createApp(App).mount('#app')

import HomePage from './Home.vue'
import NewPage from './pages/JobsPage.vue'

const routes = [
    {path: '/home', component: HomePage},
    {path: '/new-page', component: NewPage}
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

const app = createApp({})
app.use(router)
app.mount('#app')
// 