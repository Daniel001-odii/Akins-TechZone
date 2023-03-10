import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../pages/HomePage.vue'
import NewPage from '../pages/JobsPage.vue'
import Login from '../pages/login.vue'
import SignUp from '../pages/SignUp.vue'
import PageNotFound from '../pages/PageNotFound.vue'
import Insight from '../pages/InsightPage.vue'
import Payment from '../pages/PaymentPage.vue'
import SavedJobs from '../pages/SavedJobsPage.vue'

import customize from '../pages/customizeProfile.vue'
import JobDetail from '../pages/JobDetail.vue'

const routes = [
    {path: '/', component: HomePage},
    {path: '/jobs', component: NewPage},
    {path: '/login', component: Login},
    {path: '/signUp', component: SignUp},
    {path: '/insight', component: Insight},
    {path: "/404", name: "PageNotFound", component: PageNotFound},
    {path: "/:catchAll(.*)", redirect: "/404"},
    {path: "/savedJobs", component: SavedJobs},
    {path: "/payments", component: Payment},
    {path: "/customize-profile", component: customize},
    {path: "/job-detail", component: JobDetail},
]


const router = createRouter({
    history: createWebHistory(),
    routes
})


export default router