<template>

    <div class="page-grid-container" :class="['theme-transition', { 'dark': themeStore.darkMode }]">
          <div class="Navigation" :class="['theme-transition', { 'dark': themeStore.darkMode }]">
            <Navbar>
                <template #action-1><RouterLink to="/client/post-job">Post Job</RouterLink></template>
                <template #action-2><RouterLink to="/client/post-job">Direct Route</RouterLink></template>
            </Navbar>
          </div>
        <div class="Left-Nav" :class="['theme-transition', { 'dark': themeStore.darkMode }]">
             <LeftNav/>
        </div>
        <div class="Page-header">
              <div class="page-title"><slot name="page-title">My Jobs</slot></div>
              <div class="page-filters">
                 <PageFilter>
               <div class="filter-search">
                    <i class="bi bi-search"></i>
                    <input type="search" class="ft-search" v-model="searchTerm" placeholder="Search all types of jobs">
               </div>
                 </PageFilter>
              </div>
              <div class="page-tabs">
                    
              </div>
        </div>
    
    
    <div class="Page-contents" :class="['theme-transition', { 'dark': themeStore.darkMode }]">
    
        <div class="page-content-sub" v-if="jobs.length > 0" :class="['theme-transition', { 'dark': themeStore.darkMode }]">
            <div class="job-cards-area">
                    <slot name="job-cards">
                    <div v-for="(job, index) in filteredJobs" :key="index">
                        <JobCard  @click="showFullJob(index)" :style="{ background: selectedJob === index ? '#F7F9FF' : '' }" :class="['theme-transition', { 'dark': themeStore.darkMode }]">
                            <template #job-title>
                                <span class="mobile-link" @click="navigateToJobDetails(filteredJobs[selectedJob].id)">{{ job.job_tag }}</span>
                                <span class="desktop-link">{{ job.job_tag }}</span>
                            </template>
                            <template #job-post-company></template>
                            <template #job-amount>(₦){{ formatBudgetAmount(job.budget) }}</template>
                            <template #job-duration> {{ job.work_period.substring(0,5) }}...</template>
                            <template #job-description>{{ job.job_des.substring(0,120) }}...</template>
                            <template #job-post-time>{{ getHoursTillDate(job.created_at) }}</template>
                        </JobCard>
                        
                    </div>
                    </slot>
            </div>
        
                <!-----------job  details from search results--------------------------------------------------->
            <div class="job-details-area card" :class="['theme-transition', { 'dark': themeStore.darkMode }]">
                <div style="overflow-y: scroll;">
                <slot name="job-details">
                    <div class="job-detail-header">
                        <div class="jdh-left">
                            <span><b>{{ filteredJobs[selectedJob].job_tag }}</b></span>
                            <small>microsot Imc. <i>Stars</i></small>
                                <!---------------clock icon-------------->
                            <span class="jdh-detail">
                                <!---------------location icon-------------->
                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 15 20" fill="none">
                                    <path d="M7.5 19.0532L2.19667 13.7499C1.14779 12.701 0.433489 11.3646 0.144107 9.90979C-0.145275 8.45494 0.0032557 6.94695 0.570915 5.57651C1.13858 4.20607 2.09987 3.03473 3.33323 2.21063C4.5666 1.38652 6.01664 0.946655 7.5 0.946655C8.98336 0.946655 10.4334 1.38652 11.6668 2.21063C12.9001 3.03473 13.8614 4.20607 14.4291 5.57651C14.9967 6.94695 15.1453 8.45494 14.8559 9.90979C14.5665 11.3646 13.8522 12.701 12.8033 13.7499L7.5 19.0532ZM11.625 12.5716C12.4407 11.7558 12.9963 10.7164 13.2213 9.58482C13.4463 8.45328 13.3308 7.28042 12.8892 6.21455C12.4477 5.14868 11.7 4.23768 10.7408 3.59673C9.78149 2.95578 8.6537 2.61368 7.5 2.61368C6.3463 2.61368 5.21851 2.95578 4.25924 3.59673C3.29996 4.23768 2.55229 5.14868 2.11076 6.21455C1.66923 7.28042 1.55368 8.45328 1.77871 9.58482C2.00374 10.7164 2.55926 11.7558 3.375 12.5716L7.5 16.6966L11.625 12.5716ZM7.5 10.1133C7.05797 10.1133 6.63405 9.93766 6.32149 9.6251C6.00893 9.31254 5.83333 8.88861 5.83333 8.44659C5.83333 8.00456 6.00893 7.58064 6.32149 7.26808C6.63405 6.95552 7.05797 6.77992 7.5 6.77992C7.94203 6.77992 8.36595 6.95552 8.67851 7.26808C8.99107 7.58064 9.16667 8.00456 9.16667 8.44659C9.16667 8.88861 8.99107 9.31254 8.67851 9.6251C8.36595 9.93766 7.94203 10.1133 7.5 10.1133Z" fill="#4E79BC"/>
                                </svg>
                                Lekki Phase 1, Lagos State
                            <!-- </span> -->
                            <!-- <span> -->
                                <!---------------clock icon-------------->
                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 20 22" fill="none">
                                    <path d="M18.75 12.25C18.75 17.08 14.83 21 10 21C5.17 21 1.25 17.08 1.25 12.25C1.25 7.42 5.17 3.5 10 3.5C14.83 3.5 18.75 7.42 18.75 12.25Z" stroke="#4E79BC" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M10 7V12" stroke="#4E79BC" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M7 1H13" stroke="#4E79BC" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>Posted {{ getHoursTillDate(filteredJobs[selectedJob].created_at) }} ago
                            </span>
                            <span class="jdh-detail">
                                <!------------wallet icon-------------->
                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 20 18" fill="none">
                                    <path d="M16 4H19C19.2652 4 19.5196 4.10536 19.7071 4.29289C19.8946 4.48043 20 4.73478 20 5V17C20 17.2652 19.8946 17.5196 19.7071 17.7071C19.5196 17.8946 19.2652 18 19 18H1C0.734784 18 0.48043 17.8946 0.292893 17.7071C0.105357 17.5196 0 17.2652 0 17V1C0 0.734784 0.105357 0.48043 0.292893 0.292893C0.48043 0.105357 0.734784 0 1 0H16V4ZM2 6V16H18V6H2ZM2 2V4H14V2H2ZM13 10H16V12H13V10Z" fill="#4E79BC"/>
                                </svg>(₦){{ formatBudgetAmount(filteredJobs[selectedJob].budget) }} {{ filteredJobs[selectedJob].budget_des }}
                            </span>
                        </div>
                        <div class="jdh-right">
                                <button @click="navigateToJobDetails(filteredJobs[selectedJob].id)" class="cust-btn" style="border-radius: 5px;">Apply Here</button>
                        </div>
                    </div>
                    <!--------- job details header ends here------------->
                    <div class="job-detail-content">
                        <div class="jd-section">
                            <span class="jdh-title">Job Description</span>
                            <span style="width:100%;">{{ filteredJobs[selectedJob].job_des }}</span>
                        </div>
                        <div class="jd-section">
                            <span class="jdh-title">Payment type</span>
                           {{ filteredJobs[selectedJob].budget_des }}
                        </div>
                        <div class="jd-section">
                            <span class="jdh-title">Project type</span>
                                {{ filteredJobs[selectedJob].work_period }}
                        </div>
                        
                        <div class="jd-section">
                            <span class="jdh-title">Skills Required</span>
                            <div class="skill_set">
                                <div v-for="(skills,index) in filteredJobs[selectedJob].skill_set.split(', ')" :key="index">
                                    <div class="skills">{{ skills }}</div>
                                </div>
                            </div>
                        </div>
                                
                        <div class="jd-section">
                            <span class="jdh-title">About the recruiter</span>
                            {{ filteredJobs[selectedJob].job_tag }} recruiter is recruiting for {{ filteredJobs[selectedJob].budget_des }} payment
                        </div>
                        <div class="jd-section">
                            <span>
                                <span @click="navigateToJobDetails(filteredJobs[selectedJob].job_id)" style="color: var(--app-blue) !important; padding: 25px 0px; cursor: pointer;"><i class="bi bi-box-arrow-up-right"></i>Open job in a new window</span>
                            </span>
                        </div>
                    </div>
                </slot>
                </div>
                      
            </div>
        </div>
            
    
        <DotLoader v-if="isLoading"/>
        <span v-if="jobs.length === 0 && isLoading != true" 
                style="display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                height: 60vh;
                padding: 50px;">
        <i class="bi bi-search" style="font-size: 20px; padding: 0; margin: 0;"></i><br/>
                <b>Sorry, No jobs found</b>
        </span>
            
    
    </div>
      
      <!--<div class="footer">
          <Footer/>
      </div>-->
      
      </div>
      </template>
      
      <script>
      import { RouterLink, useRouter } from 'vue-router';
      import Footer from '../components/Footer.vue';
      import JobCard from '../components/JobCard.vue';
      import Navbar from '../components/NavBar.vue';
      import ProfileNavBar from '../components/ProfileNavBar.vue';
      import { reactive } from 'vue';
      import LeftNav from '../components/LeftNav.vue'
      import PageFilter from '../components/PageFilter.vue';
      import axios from 'axios';
      import Loader from '../components/loader.vue'
      import Skeleton from '../components/pageSkeleton.vue'
      import DotLoader from '../components/DotLoader.vue'
      import themeStore from '@/theme/theme';
    
      const api_url = "https://techzoneapp.herokuapp.com/api";
    
      
          export default {
            setup(){
                  // Accessing themeStore properties and methods
                    const toggleTheme = themeStore.toggleTheme;
                    return{
                        themeStore,
                        toggleTheme,
                    };
            },
              components:{ JobCard, Navbar, ProfileNavBar, Footer, RouterLink, useRouter, LeftNav, PageFilter, Loader, Skeleton, DotLoader },
                data() {
                    return {
                    selectedJob: 0, // index of currently selected job
    
                    /*------ the area below ensures the search filter works, pls dont touch-----*/
                    searchTerm: '',
                    jobs:[],
                    hoursDifference: null,
                    timeInSeconds: 0,
                    timeInMinutes: 0,
                    isLoading: false,
                    
                    }
                },
                methods: {
                    formatBudgetAmount(value){
                        const formattedValue = new Intl.NumberFormat('en-US').format(value);
                        return formattedValue;
                    },
                    showFullJob(index) {
                        this.selectedJob = index; 
                        },
    
    
                    fetchJobListings(){
                        this.isLoading = true;
                        axios.get(`${this.api_url}/jobs`).then(response => {
                            this.jobs = response.data;
                            this.jobs.reverse();
                            // console.log(response.data); logs all jobs to the console to test for data type....
                            this.isLoading = false;
                        }).catch(error => {
                            this.isLoading = false;
                            console.error(error);
                        })
                    },
    
    
                    //this function opens up in a new page the details of any job clicked...
                    navigateToJobDetails(jobId) {
                    const route = this.$router.resolve({ name: 'Application', params: { id: jobId } });
                    window.open(route.href, '_blank');
                    },
    
    
                //converts the created_at property of the api to readable, hours, days, months, years text for display
                getHoursTillDate(dateString) {
                    const date = new Date(dateString)
                    const now = new Date()
                    const diff = now.getTime() - date.getTime()
                    const diffInHours = Math.floor(diff / (1000 * 60 * 60))
                    const diffInMins = Math.floor(diff / (1000 * 60))
                    const diffInSecs = Math.floor(diff / (1000))
    
                    const timeInSeconds = Math.floor(date.getTime() / 1000); // Convert to seconds
                        // console.log("time in minutes is: " + diffInMins)
                    //calculate respectively......
                    if (diffInMins < 60) {
                        return `${diffInMins} minutes`
                    }
                    else if (diffInHours < 24) {
                        if(diffInHours <= 1){return `${diffInHours} hour`}
                        else{return `${diffInHours} hours`}
    
                    } else if (diffInHours < 720) {
                        const diffInDays = Math.floor(diffInHours / 24)
                        if(diffInDays <= 1){ return `${diffInDays} day`}
                        else{return `${diffInDays} days`}
                        
                    } else {
                        const diffInMonths = Math.floor(diffInHours / 720)
                        if(diffInMonths <= 1){ return `${diffInMonths} month`}
                        else{return `${diffInMonths} months`;}
                    }
                    },
                },
                
                computed: {
                    filteredJobs() {
                    if (!this.searchTerm) {
                        return this.jobs;
                    }
                    return this.jobs.filter((job) => {
                        return (
                        job.job_tag.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
                        job.job_des.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
                        job.budget.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
                        job.budget_des.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
                        job.work_period.toLowerCase().includes(this.searchTerm.toLowerCase())
                        );
                    });
        },
                },
    
                mounted(){
                    this.fetchJobListings();
                    this.getHoursTillDate();
                },
    }
    
      </script>       
      
      
      <style>
        /* @media screen and (max-width: 650px) {} */
      </style>