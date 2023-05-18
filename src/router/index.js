import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../pages/HomePage.vue'
import NewPage from '../pages/JobsPage.vue'

import PageNotFound from '../pages/PageNotFound.vue'
import Insight from '../pages/InsightPage.vue'
import Payment from '../pages/PaymentsPage.vue'
import SavedJobs from '../pages/SavedJobs.vue'
import Notifications from '../pages/notifications.vue'
//pages based on job category......
import requestedJobs from '../pages/RequestedJobs.vue'
import assignedJobs from '../pages/AssignedJobs.vue'
import completedJobs from '../pages/CompletedJobs.vue'
import declinedJobs from '../pages/DeclinedJobs.vue'
import JobDetail from '../pages/JobDetail.vue'

//Introduction pages for both clients and talents...
import customize from '../pages/customizeProfile.vue'
import customize_client from '../pages/clientCustomize.vue'



//Authentication pages.........
// import EmployerSignup from '../pages/SignUp_2.vue'
import ResetPassword from '../pages/PassReset.vue'
import Login from '../pages/login.vue'
import ClientLogin from '../pages/ClientLogin.vue'
import SignUp from '../pages/SignUp.vue'
import SignUpClient from '../pages/SignUpClient.vue'


//clients based pages
import client_dashboard from '../pages/client-dashboard.vue'
import post_job from '../pages/post-job.vue'
import JobSuccess from '../pages/JobSuccess.vue'

const routes = [
    {path: '/', component: HomePage},
    {path: '/jobs', component: NewPage},
    {path: '/login', component: Login},
    {path: '/employer/login', component: ClientLogin},
    {path: '/talent-signUp', component: SignUp},
    {path: '/client-signUp', component: SignUpClient},
    {path: '/insights', component: Insight},
    {path: "/404", name: "PageNotFound", component: PageNotFound},
    {path: "/:catchAll(.*)", redirect: "/404"},
    {path: "/savedJobs", component: SavedJobs},
    {path: "/payments", component: Payment},
    {path: "/customize-profile", component: customize},
    {path: "/customize-profile-client", component: customize_client},
    {path: "/job-detail", component: JobDetail},
    {path: "/notifications", component: Notifications},
    // {path: "/signUp-employer", component: EmployerSignup},
    {path: "/reset-password", component: ResetPassword},

    //job categories.......
    {path: "/jobs/requested-jobs", component: requestedJobs},
    {path: "/jobs/assigned-jobs", component: assignedJobs},
    {path: "/jobs/completed-jobs", component: completedJobs},
    {path: "/jobs/declined-jobs", component: declinedJobs},

    //client based views
    {path: "/client", component: client_dashboard},
    {path: "/client/post-a-job", component: post_job},
    {path: "/client/successful", component: JobSuccess}
]


const router = createRouter({
    history: createWebHistory(),
    routes
})


export default router