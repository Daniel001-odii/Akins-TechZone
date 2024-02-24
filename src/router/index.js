import { createRouter, createWebHistory } from 'vue-router'

import LandingPageViewVue from '@/views/LandingPageView.vue'
import JobsPageViewVue from '@/views/JobsPageView.vue'
import MessagePageViewVue from '@/views/MessagePageView.vue'
import SavedJobsViewVue from '@/views/SavedJobsView.vue'
import ApplicationPageViewVue from '@/views/ApplicationPageView.vue'
import ContractPageViewVue from '@/views/ContractPageView.vue'
import ContractsListPageViewVue from '@/views/ContractsListPageView.vue'
import MyApplicationsPageViewVue from '@/views/MyApplicationsPageView.vue'
import ProfilePageViewVue from '@/views/ProfilePageView.vue'
import LoginViewVue from '@/views/LoginView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: LandingPageViewVue
  },

  {
    path: '/login',
    name: 'login',
    component: LoginViewVue
  },


  {
    path: '/jobs',
    name: 'jobs',
    component: JobsPageViewVue
  },

  {
    path: '/profile',
    name: 'profile',
    component: ProfilePageViewVue
  },

  {
    path: '/jobs/applications',
    name: 'applications',
    component: MyApplicationsPageViewVue
  },

  {
    path: '/jobs/:job_id/application',
    name: 'application',
    component: ApplicationPageViewVue
  },

  {
    path: '/contracts',
    name: 'contracts',
    component: ContractsListPageViewVue
  },

  {
    path: '/contracts/:contract_id',
    name: 'contract',
    component: ContractPageViewVue
  },


  {
    path: '/messages',
    name: 'messages',
    component: MessagePageViewVue
  },

  {
    path: '/saved-jobs',
    name: 'saved-job',
    component: SavedJobsViewVue
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
