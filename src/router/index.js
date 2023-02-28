import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../pages/HomePage.vue'
import NewPage from '../pages/JobsPage.vue'
import Login from '../pages/login.vue'
import SignUp from '../pages/SignUp.vue'


const routes = [
    {path: '/', component: HomePage},
    {path: '/jobs', component: NewPage},
    {path: '/login', component: Login},
    {path: '/signUp', component: SignUp}
]


const router = createRouter({
    history: createWebHistory(),
    routes
})


export default router