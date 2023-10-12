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
import PublicUserProfile from '../views/Profile_public.vue'
//views based on job category......
import requestedJobs from '../views/RequestedJobs.vue'
import assignedJobs from '../views/AssignedJobs.vue'
import completedJobs from '../views/CompletedJobs.vue'
import declinedJobs from '../views/DeclinedJobs.vue'
import JobDetail from '../views/JobDetail.vue'
import AppliedJobsPage from '../views/AppliedJobsPage.vue'
//Introduction views for both clients and talents...
import customize from '../views/customizeProfile.vue'
import customize_client from '../views/clientCustomize.vue'

//Authentication views.........
// import EmployerSignup from '../views/SignUp_2.vue'
import ResetPassword from '../views/PassReset.vue'
import ResetPassword2 from '../views/PassReset2.vue'

import Login from '../views/login.vue'
import ClientLogin from '../views/ClientLogin.vue'
import SignUp from '../views/SignUp.vue'
import SignUpClient from '../views/SignUpClient.vue'


//clients based views
import client_dashboard from '../views/client-dashboard.vue'
import post_job from '../views/post-job.vue'
import edit_job from '../views/edit-job.vue'
import JobSuccess from '../views/JobSuccess.vue' ///page is deprecated and has been replaced with a moda instead..
import client_jobs from '../views/Client_Jobs.vue'
import client_messages from '../views/Client_MessagesPage.vue'
import client_payment from '../views/Payment.vue'
import Client_Profile from '../views/Client_Profile.vue'
// import


const routes = [
  {path: '/', component: HomePage, name: "Techzone"},
  {path: '/user/:user_id', component: UserProfile, name: "Techzone - profile", },
  // the profile_public actually belongs to the client ...
  {path: '/client/:user_id', component: Client_Profile, name: "Techzone - client", meta: { requiresAuth: true, role: 'employer' }},
  // {path: '/user/:user_id/', component: PublicUserProfile, name: "Techzone - profile"},
  {path: '/jobs', name:'Techzone - jobs', component: NewPage},
  {path: '/myjobs', name:'Techzone - My jobs', component: AppliedJobsPage},
  {path: '/login', name: 'Login', component: Login},
  {path: '/employer/login', name: 'Employer - login', component: ClientLogin},
  {path: '/talent-signUp', component: SignUp, name: "Signup"},
  {path: '/employer/signup', component: SignUpClient, name: "Employer signup"},
  // {path: '/insights', component: Insight, name: "Techzone - insights"},
  {path: "/404", name: "PageNotFound", component: PageNotFound},
  {path: "/:catchAll(.*)", redirect: "/404"},
  {path: "/savedJobs", name: 'Techzone - Saved jobs', component: SavedJobs, meta: { requiresAuth: true, role: 'user' }},
  {path: "/messages", name: 'Techzone - Messages', component: Messages, meta: { requiresAuth: true, role: 'user' }},
  {path: "/talent/customize-profile", component: customize},
  {path: "/employer/customize-profile", component: customize_client},
  {path: "/jobs/:job_id/application", name: 'Techzone - Application', component: JobDetail, meta: { requiresAuth: true, role: 'user' }},
  {path: "/notifications", name:  "Techzone - Notifications", component: Notifications},
  {path: "/reset-password", name: "Password - reset", component: ResetPassword},
  {path: "/reset-password-main", name: "Password - reset2", component: ResetPassword2},

  //job categories.......
  {path: "/jobs/requested-jobs", component: requestedJobs, meta: { requiresAuth: true, role: 'user' }},
  {path: "/jobs/assigned-jobs", component: assignedJobs, meta: { requiresAuth: true, role: 'user' }},
  {path: "/jobs/completed-jobs", component: completedJobs, meta: { requiresAuth: true, role: 'user' }},
  {path: "/jobs/declined-jobs", component: declinedJobs, meta: { requiresAuth: true, role: 'user' }},

  //client based views
  {path: "/client/dashboard", name: "Techzone - dashboard", component: client_dashboard, meta: { requiresAuth: true, role: 'employer' }},
  {path: "/client/saved-jobs", component: client_jobs, meta: { requiresAuth: true, role: 'user' }},
  {path: "/client/post-job", name: "Techzone - Post", component: post_job, meta: { requiresAuth: true, role: 'employer' }},
  {path: "/client/edit-job/:job_id", name: "Techzone - Edit Job", component: edit_job, meta: { requiresAuth: true, role: 'employer' }},
  {path: "/client/messages", name: "Techzone - Client Messages", component: Messages, meta: { requiresAuth: true, role: 'employer' }},
  {path: "/client/payment", name: "Techzone - Client payment", component: client_payment, meta: { requiresAuth: true }},
  {path: "/client/successful", component: JobSuccess, meta: { requiresAuth: true }},
  {path: "/support", name: "Techzone - support", component: SupportPage},
  {path: "/support/form", name: "Techzone - form", component: SupportForm},
];







const router = createRouter({
    history: createWebHistory(),
    routes
})




// Global navigation guard
let redirectToLogin = false; // Initialize a flag to redirect to login after authentication
let requestedRoute = null; // Initialize a variable to store the requested route

router.beforeEach((to, from, next) => {
  const token = localStorage.getItem('token');
  const userRole = token ? JSON.parse(atob(token.split('.')[1])).role : null;

  // Check if the route has a "requiresAuth" meta field and matches the user's role
  if (to.meta.requiresAuth && to.meta.role !== userRole) {
    redirectToLogin = true; // Set the flag to true
    requestedRoute = to.fullPath; // Store the requested route
    next('/login'); // Redirect to login for unauthorized access
  } else {
    next(); // Proceed to the route
  }
});



// Create a navigation guard
router.beforeEach((to, from, next) => {
  // Check if the user is logged in (you should replace this condition)
  const token = localStorage.getItem('token');
  const userRole = token ? JSON.parse(atob(token.split('.')[1])).role : null;

  // If the user is logged in and is trying to visit the root URL
  if (userRole && userRole == 'user' && to.path === '/') {
    // Redirect users to /jobs
    next('/jobs')

  } else if(userRole && userRole == 'employer' && to.path === '/') {
    // redirect clients to their dashboard
    next('/client/dashboard');
  }
    else{
      // Otherwise, proceed with the navigation
      next()
    }

  })


export default router