import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../pages/HomePage.vue'
import SupportPage from '../pages/support.vue'

import NewPage from '../pages/JobsPage.vue'
import PageNotFound from '../pages/PageNotFound.vue'
import Insight from '../pages/InsightPage.vue'
import Messages from '../pages/MessagesPage.vue'
import SavedJobs from '../pages/SavedJobs.vue'
import Notifications from '../pages/notifications.vue'
import UserProfile from '../pages/Profile.vue'
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
import JobSuccess from '../pages/JobSuccess.vue' ///page is deprecated and has been replaced with a moda instead..
import client_jobs from '../pages/Client_Jobs.vue'

// import 


const routes = [
    {path: '/', component: HomePage},
    {path: '/user/profile', component: UserProfile},
    {path: '/jobs', component: NewPage},
    {path: '/login', component: Login},
    {path: '/employer/login', component: ClientLogin},
    {path: '/talent-signUp', component: SignUp},
    {path: '/employer/signup', component: SignUpClient},
    {path: '/insights', component: Insight},
    {path: "/404", name: "PageNotFound", component: PageNotFound},
    {path: "/:catchAll(.*)", redirect: "/404"},
    {path: "/savedJobs", component: SavedJobs, meta: { requiresAuth: true },},
    {path: "/messages", component: Messages, meta: { requiresAuth: true },},
    {path: "/talent/customize-profile", component: customize},
    {path: "/employer/customize-profile", component: customize_client},
    {path: "/jobs/application", component: JobDetail, meta: { requiresAuth: true },},
    {path: "/notifications", component: Notifications, meta: { requiresAuth: true },},
    // {path: "/signUp-employer", component: EmployerSignup},
    {path: "/reset-password", component: ResetPassword},

    //job categories.......
    {path: "/jobs/requested-jobs", component: requestedJobs, meta: { requiresAuth: true },},
    {path: "/jobs/assigned-jobs", component: assignedJobs, meta: { requiresAuth: true },},
    {path: "/jobs/completed-jobs", component: completedJobs, meta: { requiresAuth: true },},
    {path: "/jobs/declined-jobs", component: declinedJobs, meta: { requiresAuth: true },},

    //client based views
    {path: "/client/dashboard", component: client_dashboard, meta: { requiresAuth: true },},
    {path: "/client/saved-jobs", component: client_jobs, meta: { requiresAuth: true },},
    {path: "/client/post-job", component: post_job, meta: { requiresAuth: true },},
    {path: "/client/successful", component: JobSuccess, meta: { requiresAuth: true },},
    {path: "/support", component: SupportPage},

]


const router = createRouter({
    history: createWebHistory(),
    routes
})

router.beforeEach((to, from, next) => {
    const isAuthenticated = localStorage.getItem('token') !== null;
    
    if (to.meta.requiresAuth && !isAuthenticated) {
      const intendedRoute = to.path;
      const loginUrl = `/login?redirect=${encodeURIComponent(intendedRoute)}`;
      next(loginUrl); // Redirect to the login page with the intended route as a query parameter
    } else {
      next(); // Proceed to the requested route
    }
  });
  
  

  


export default router