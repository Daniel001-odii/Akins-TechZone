import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import SupportPage from '../views/support.vue'
import SupportForm from '../views/support_form.vue'

import NewPage from '../views/JobsPage.vue'
import PageNotFound from '../views/PageNotFound.vue'
// import Insight from '../views/InsightPage.vue'
import Messages from '../views/MessagesPage.vue'
import SavedJobs from '../views/SavedJobs.vue'
import Notifications from '../views/notifications.vue'
import UserProfile from '../views/Profile.vue'
//views based on job category......
import requestedJobs from '../views/RequestedJobs.vue'
import assignedJobs from '../views/AssignedJobs.vue'
import completedJobs from '../views/CompletedJobs.vue'
import declinedJobs from '../views/DeclinedJobs.vue'
import JobDetail from '../views/JobDetail.vue'
//Introduction views for both clients and talents...
import customize from '../views/customizeProfile.vue'
import customize_client from '../views/clientCustomize.vue'

//Authentication views.........
// import EmployerSignup from '../views/SignUp_2.vue'
import ResetPassword from '../views/PassReset.vue'
import Login from '../views/login.vue'
import ClientLogin from '../views/ClientLogin.vue'
import SignUp from '../views/SignUp.vue'
import SignUpClient from '../views/SignUpClient.vue'


//clients based views
import client_dashboard from '../views/client-dashboard.vue'
import post_job from '../views/post-job.vue'
import JobSuccess from '../views/JobSuccess.vue' ///page is deprecated and has been replaced with a moda instead..
import client_jobs from '../views/Client_Jobs.vue'
import client_messages from '../views/Client_MessagesPage.vue'
import client_payment from '../views/Payment.vue'

// import 


const routes = [
  {path: '/', component: HomePage, name: "Techzone"},
  {path: '/user/profile', component: UserProfile, name: "Techzone - profile"},
  {path: '/jobs', name:'Techzone - jobs', component: NewPage},
  {path: '/login', name: 'Login', component: Login},
  {path: '/employer/login', name: 'Employer - login', component: ClientLogin},
  {path: '/talent-signUp', component: SignUp, name: "Signup"},
  {path: '/employer/signup', component: SignUpClient, name: "Employer signup"},
  // {path: '/insights', component: Insight, name: "Techzone - insights"},
  {path: "/404", name: "PageNotFound", component: PageNotFound},
  {path: "/:catchAll(.*)", redirect: "/404"},
  {path: "/savedJobs", name: 'Techzone - Saved jobs', component: SavedJobs, meta: { requiresAuth: true }},
  {path: "/messages", name: 'Techzone - Messages', component: Messages, meta: { requiresAuth: true }},
  {path: "/talent/customize-profile", component: customize},
  {path: "/employer/customize-profile", component: customize_client},
  {path: "/jobs/:job_id/application", name: 'Techzone - Application', component: JobDetail, meta: { requiresAuth: true }},
  {path: "/notifications", name:  "Techzone - Notifications", component: Notifications, meta: { requiresAuth: true }},
  {path: "/reset-password", name: "Password - reset", component: ResetPassword},

  //job categories.......
  {path: "/jobs/requested-jobs", component: requestedJobs, meta: { requiresAuth: true }},
  {path: "/jobs/assigned-jobs", component: assignedJobs, meta: { requiresAuth: true }},
  {path: "/jobs/completed-jobs", component: completedJobs, meta: { requiresAuth: true }},
  {path: "/jobs/declined-jobs", component: declinedJobs, meta: { requiresAuth: true }},

  //client based views
  {path: "/client/dashboard", name: "Techzone - dashboard", component: client_dashboard, meta: { requiresAuth: true }},
  {path: "/client/saved-jobs", component: client_jobs, meta: { requiresAuth: true }},
  {path: "/client/post-job", name: "Techzone - Post", component: post_job, meta: { requiresAuth: true }},
  {path: "/client/messages", name: "Techzone - Client Messages", component: client_messages, meta: { requiresAuth: true }},
  {path: "/client/payment", name: "Techzone - Client payment", component: client_payment, meta: { requiresAuth: true }},
  {path: "/client/successful", component: JobSuccess, meta: { requiresAuth: true }},
  {path: "/support", name: "Techzone - support", component: SupportPage},
  {path: "/support/form", name: "Techzone - form", component: SupportForm},
];







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