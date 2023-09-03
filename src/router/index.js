import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import SupportPage from '../views/support.vue'
import SupportForm from '../views/support_form.vue'

import NewPage from '../views/JobsPage.vue'
import PageNotFound from '../views/PageNotFound.vue'
import Insight from '../views/InsightPage.vue'
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

// import 


const routes = [
  {path: '/', component: HomePage},
  {path: '/user/profile', component: UserProfile},
  {path: '/jobs', name:'Techzone', component: NewPage},
  {path: '/login', name: 'Login', component: Login},
  {path: '/employer/login', name: 'Employer:login', component: ClientLogin},
  {path: '/talent-signUp', component: SignUp},
  {path: '/employer/signup', component: SignUpClient},
  {path: '/insights', component: Insight},
  {path: "/404", name: "PageNotFound", component: PageNotFound},
  {path: "/:catchAll(.*)", redirect: "/404"},
  {path: "/savedJobs", name: 'Saved jobs', component: SavedJobs, meta: { requiresAuth: false }},
  {path: "/messages", name: 'Messages', component: Messages, meta: { requiresAuth: false }},
  {path: "/talent/customize-profile", component: customize},
  {path: "/employer/customize-profile", component: customize_client},
  {path: "/jobs/:job_id/application", name: 'Application', component: JobDetail, meta: { requiresAuth: false }},
  {path: "/notifications", component: Notifications, meta: { requiresAuth: false }},
  {path: "/reset-password", component: ResetPassword},

  //job categories.......
  {path: "/jobs/requested-jobs", component: requestedJobs, meta: { requiresAuth: false }},
  {path: "/jobs/assigned-jobs", component: assignedJobs, meta: { requiresAuth: false }},
  {path: "/jobs/completed-jobs", component: completedJobs, meta: { requiresAuth: false }},
  {path: "/jobs/declined-jobs", component: declinedJobs, meta: { requiresAuth: false }},

  //client based views
  {path: "/client/dashboard", component: client_dashboard, meta: { requiresAuth: false }},
  {path: "/client/saved-jobs", component: client_jobs, meta: { requiresAuth: false }},
  {path: "/client/post-job", component: post_job, meta: { requiresAuth: false }},
  {path: "/client/successful", component: JobSuccess, meta: { requiresAuth: false }},
  {path: "/support", component: SupportPage},
  {path: "/support/form", component: SupportForm},
];

routes.forEach(route => {
  if (!route.name) {
      const pathParts = route.path.split('/');
      route.name = pathParts[pathParts.length - 1];
  }
});



const router = createRouter({
    history: createWebHistory(),
    routes
})

// router.beforeEach((to, from, next) => {
//     const isAuthenticated = localStorage.getItem('token') !== null;
    
//     if (to.meta.requiresAuth && !isAuthenticated) {
//       const intendedRoute = to.path;
//       const loginUrl = `/login?redirect=${encodeURIComponent(intendedRoute)}`;
//       next(loginUrl); // Redirect to the login page with the intended route as a query parameter
//     } else {
//       next(); // Proceed to the requested route
//     }
//   });
  

export default router