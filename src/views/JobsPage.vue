<template>

<!-- <p>
    {{ authErrors.message }} please login
</p> -->

<div class="page-grid-container" :class="['theme-transition', { 'dark': themeStore.darkMode }]">
      <div class="Navigation" :class="['theme-transition', { 'dark': themeStore.darkMode }]">
          <NavBar/>
      </div>
    <div class="Left-Nav">
         <LeftNav/>
    </div>
    <div class="Page-header">
          <div class="page-title"><slot name="page-title">Work Explorer</slot></div>
          <div class="page-filters">
                 <!-- Search input fields and form -->
    <form @submit.prevent="searchJobs" style=" display: flex; flex-direction: row; gap: 10px;">
           <div class="filter-search">
                <i class="bi bi-search"></i>
                <input type="search" class="ft-search" v-model="keywords" placeholder="Search all types of jobs">
           </div>
           <button class="filter-menu" style="background: rgb(4, 197, 4) !important; border: none; color: #fff;" type="submit">Search</button>
           <select class="filter-menu" v-model="jobType">
                <option value="">All type</option>
                <option value="small">small</option>
                <option value="medium">medium</option>
                <option value="large">large</option>
           </select>
           <select class="filter-menu" v-model="posted">
                <option value="">All time</option>
                <option value="under 24 hrs">under 24 hrs</option>
                <option value="under a week">under a week </option>
                <option value="under a month">under a month </option>
                <option value="over a month">over a month </option>
           </select>
    </form>
          </div>
          <div class="page-tabs">
              <!-- <slot name="page-tabs"> -->
                  <!-- <RouterLink to=""><div class="job-category job-category-active">Available Jobs ({{ jobs.length }})</div></RouterLink> -->
                  <RouterLink to=""><div class="job-category job-category-active">Available Jobs</div></RouterLink>
                  <RouterLink to="/jobs/assigned-jobs"><div class="job-category">Assigned</div></RouterLink>
                  <RouterLink to="/jobs/completed-jobs"><div class="job-category">Completed</div></RouterLink>
                  <RouterLink to="/jobs/declined-jobs"><div class="job-category">Declined</div></RouterLink>
              <!-- </slot> -->
          </div>
    </div>


<div class="Page-contents">
    <div class="page-content-sub" v-if="jobs.length > 0" :class="['theme-transition', { 'dark': themeStore.darkMode }]">
        <div class="job-cards-area">
                <slot name="job-cards">
                <div v-for="(job, index) in jobs" :key="index">
                    <JobCard  @click="showFullJob(index)" :style="{ background: selectedJob === index ? '#F7F9FF' : '' }" :class="['theme-transition', { 'dark': themeStore.darkMode }]">
                        <template #job-title>
                            <span class="mobile-link" @click="navigateToJobDetails(jobs[selectedJob]._id)">{{ job.job_title }} <i class="bi bi-box-arrow-up-right"></i></span>
                            <span class="desktop-link">{{ job.job_title }}</span>
                        </template>
                        <template #job-post-company><span v-if="getUserById(job.employer).profile">{{ getUserById(job.employer).profile.company_name }}</span></template>
                        <template #job-amount>(₦){{ formatBudgetAmount(job.budget) }}</template>
                        <template #job-duration> {{ job.period }}</template>
                        <template #job-description>{{ job.job_description.substring(0,200) }}...</template>
                        <template #job-post-time>{{ getHoursTillDate(job.created_at) }}</template>
                        <template #save-button>
                            <button class="save-btn" style="" @click="NewSaveJob(index)">
                                <div>
                                    <i v-if="checkSavedJobs(jobs[index]._id)" class="bi bi-heart-fill" style="color: var(--app-blue)"></i>
                                    <i v-else class="bi bi-heart"></i>
                                </div>
                            </button>
                        </template>
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
                        <span><b>{{ jobs[selectedJob].job_title }}</b></span>
                        <small>
                            <span v-if="getUserById(jobs[selectedJob].employer).profile">{{ getUserById(jobs[selectedJob].employer).profile.company_name }} |</span>
                            <i class="bi bi-star-fill"></i>
                            <i class="bi bi-star-fill"></i>
                            <i class="bi bi-star-fill"></i>
                            <i class="bi bi-star-half"></i>
                        </small>
                        <!-- <span>Job is saved: {{ checkSavedJobs(jobs[selectedJob]._id) }}</span> -->
                            <!---------------clock icon-------------->
                        <span class="jdh-detail">
                            <!---------------location icon-------------->
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 15 20" fill="none">
                                <path d="M7.5 19.0532L2.19667 13.7499C1.14779 12.701 0.433489 11.3646 0.144107 9.90979C-0.145275 8.45494 0.0032557 6.94695 0.570915 5.57651C1.13858 4.20607 2.09987 3.03473 3.33323 2.21063C4.5666 1.38652 6.01664 0.946655 7.5 0.946655C8.98336 0.946655 10.4334 1.38652 11.6668 2.21063C12.9001 3.03473 13.8614 4.20607 14.4291 5.57651C14.9967 6.94695 15.1453 8.45494 14.8559 9.90979C14.5665 11.3646 13.8522 12.701 12.8033 13.7499L7.5 19.0532ZM11.625 12.5716C12.4407 11.7558 12.9963 10.7164 13.2213 9.58482C13.4463 8.45328 13.3308 7.28042 12.8892 6.21455C12.4477 5.14868 11.7 4.23768 10.7408 3.59673C9.78149 2.95578 8.6537 2.61368 7.5 2.61368C6.3463 2.61368 5.21851 2.95578 4.25924 3.59673C3.29996 4.23768 2.55229 5.14868 2.11076 6.21455C1.66923 7.28042 1.55368 8.45328 1.77871 9.58482C2.00374 10.7164 2.55926 11.7558 3.375 12.5716L7.5 16.6966L11.625 12.5716ZM7.5 10.1133C7.05797 10.1133 6.63405 9.93766 6.32149 9.6251C6.00893 9.31254 5.83333 8.88861 5.83333 8.44659C5.83333 8.00456 6.00893 7.58064 6.32149 7.26808C6.63405 6.95552 7.05797 6.77992 7.5 6.77992C7.94203 6.77992 8.36595 6.95552 8.67851 7.26808C8.99107 7.58064 9.16667 8.00456 9.16667 8.44659C9.16667 8.88861 8.99107 9.31254 8.67851 9.6251C8.36595 9.93766 7.94203 10.1133 7.5 10.1133Z" fill="#4E79BC"/>
                            </svg>
                            {{ jobs[selectedJob].location }}
                        </span>
                        <span class="jdh-detail">
                            <!---------------clock icon-------------->
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 20 22" fill="none">
                                <path d="M18.75 12.25C18.75 17.08 14.83 21 10 21C5.17 21 1.25 17.08 1.25 12.25C1.25 7.42 5.17 3.5 10 3.5C14.83 3.5 18.75 7.42 18.75 12.25Z" stroke="#4E79BC" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M10 7V12" stroke="#4E79BC" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M7 1H13" stroke="#4E79BC" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>Posted {{ getHoursTillDate(jobs[selectedJob].created_at) }} ago
                        </span>

                        <span class="jdh-detail">
                            <!------------wallet icon-------------->
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 20 18" fill="none">
                                <path d="M16 4H19C19.2652 4 19.5196 4.10536 19.7071 4.29289C19.8946 4.48043 20 4.73478 20 5V17C20 17.2652 19.8946 17.5196 19.7071 17.7071C19.5196 17.8946 19.2652 18 19 18H1C0.734784 18 0.48043 17.8946 0.292893 17.7071C0.105357 17.5196 0 17.2652 0 17V1C0 0.734784 0.105357 0.48043 0.292893 0.292893C0.48043 0.105357 0.734784 0 1 0H16V4ZM2 6V16H18V6H2ZM2 2V4H14V2H2ZM13 10H16V12H13V10Z" fill="#4E79BC"/>
                            </svg>(₦){{ formatBudgetAmount(jobs[selectedJob].budget) }} {{ jobs[selectedJob].budget_des }}
                        </span>
                    </div>

                    <div class="jdh-right">

                            <button class="cust-btn" style="border-radius: 5px;" @click="navigateToJobDetails(jobs[selectedJob]._id)">{{ checkJobApplication(jobs[selectedJob]._id) }} </button>
                    </div>
                </div>
                <!--------- job details header ends here------------->
                <div class="job-detail-content">
                    <div class="jd-section">
                        <span class="jdh-title">Job Description</span>
                        <p style="width:100%;">{{ jobs[selectedJob].job_description }}</p>
                    </div>
                    <div class="jd-section">
                        <span class="jdh-title">Payment type</span>
                       {{ jobs[selectedJob].budget_type }}
                    </div>
                    <div class="jd-section">
                        <span class="jdh-title">Project type</span>
                            {{ jobs[selectedJob].period }}
                    </div>

                    <div class="jd-section">
                        <span class="jdh-title">Skills Required</span>
                        <div class="skill_set">
                            <div v-for="(skills,index) in jobs[selectedJob].skills.split(', ')" :key="index">
                                <div class="skills">{{ skills }}</div>
                            </div>
                        </div>
                    </div>

                    <div class="jd-section">
                        <span class="jdh-title">About the recruiter</span>
                        <div v-if="getUserById(jobs[selectedJob].employer)" class="little-employer" :class="['theme-transition', { 'dark': themeStore.darkMode }]">
                            <img style="height: 40px; width: 40px; border-radius: 20%" :src="getUserById(jobs[selectedJob].employer).profile.profileImage">
                            <div>
                                <b>{{ getUserById(jobs[selectedJob].employer).profile.company_name }}</b> | {{ getUserById(jobs[selectedJob].employer).profile.city }}
                                <br/>{{ getUserById(jobs[selectedJob].employer).profile.tagline }}
                                <br/>web: {{ getUserById(jobs[selectedJob].employer).profile.website }}
                            </div>
                        </div>
                    </div>
                    <div class="jd-section">
                        <span>
                            <span @click="navigateToJobDetails(jobs[selectedJob]._id)" style="color: var(--app-blue) !important; padding: 25px 0px; cursor: pointer;"><i class="bi bi-box-arrow-up-right"></i>Open job in a new window</span>
                        </span>

                    </div>
                </div>
            </slot>
            </div>

        </div>
    </div>




    <DotLoader v-if="isLoading"/>
    <span  v-if="jobs.length == undefined || jobs.length == 0" class="no-job-screen"><p>You are all caught up, there are no jobs at this time</p></span>


</div>

  <!-- <div class="footer">
      <Footer/>
  </div> -->

  </div>
</template>

<script>
  import { RouterLink, useRouter } from 'vue-router';
  import Footer from '../components/Footer.vue';
  import JobCard from '../components/JobCard.vue';
  import NavBar from '../components/NavBar.vue';
  import ProfileNavBar from '../components/ProfileNavBar.vue';
  import { reactive } from 'vue';
  import LeftNav from '../components/LeftNav.vue'
  import PageFilter from '../components/PageFilter.vue';
  import axios from 'axios';
  import Loader from '../components/loader.vue'
  import Skeleton from '../components/pageSkeleton.vue'
  import DotLoader from '../components/DotLoader.vue'
  import Alert from '../components/Alert.vue'
  import themeStore from '@/theme/theme';

      export default {
        setup(){
              // Accessing themeStore properties and methods
                const toggleTheme = themeStore.toggleTheme;
                return{
                    themeStore,
                    toggleTheme,
                };
        },
          components:{ JobCard, NavBar, ProfileNavBar, Footer, RouterLink, useRouter, LeftNav, PageFilter, Loader, Skeleton, DotLoader, Alert },
            data() {
                return {
                selectedJob: 0, // index of currently selected job

                /*------ the area below ensures the search filter works, pls dont touch-----*/
                searchTerm: '',
                jobs:'',
                hoursDifference: null,
                timeInSeconds: 0,
                timeInMinutes: 0,
                isLoading: false,
                userDetails:'',
                userSavedJobs:[],

                jobEmployers:[],

                userAppliedJobs: '',
                jobIsSaving: false,

                isSaving: [],

                authErrors: false,
                employerDetails: [],

                //
                applied_jobs:'',
                // variables for search functionalities.....
                keywords: '',
                budgetMin: '',
                budgetMax: '',
                posted: '',
                location: '',
                jobType: '',
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
                        this.jobs = response.data.jobs.reverse();
                        this.isSaving.length = this.jobs.length;
                        this.isLoading = false;
                    }).catch(error => {
                        this.isLoading = false;
                        console.error(error);
                    })
                },

                getUserDetails() {
                    const token = localStorage.getItem('token'); // Get the token from localStorage
                    const user_url = `${this.api_url}/user-info`; // Assuming user-info is the endpoint for user details

                    // Set up headers with the token
                    const headers = {
                        Authorization: `JWT ${token}`, // Assuming it's a JWT token
                    };

                    axios.get(user_url, { headers })
                        .then((response) => {
                        // Handle the response here
                        // For example, you can set user details in your component's data
                        this.userDetails = response.data.user;
                        this.userSavedJobs = this.userDetails.saved_jobs;

                        this.isLoading = false;
                        })
                        .catch((error) => {
                        // Handle errors
                        console.error(error);
                        });
                },

                // Function to check if a job ID is saved
                checkSavedJobs(jobId) {
                return this.userSavedJobs.includes(jobId);
                },

                async NewSaveJob(index) {
                // console.log("jobid you are trying to save:", this.jobs[this.selectedJob]._id);
                const token = localStorage.getItem('token');
                this.isSaving[index] = true;
                try {
                    const config = {
                    headers: {
                        Authorization: `JWT ${token}`,
                    },
                    };
                    const jobId = this.jobs[index]._id;
                    const response = await axios.post(`${this.api_url}/jobs/save/${jobId}`, {}, config);
                    this.getUserDetails();
                    this.isSaving[index] = false;
                    console.log(response);

                } catch (error) {
                    console.error('Error saving job:', error.response.data);
                    this.jobIsSaving = false;
                    this.authErrors = error.response.data;
                    this.$refs.toast.showToast(error.response.data.message, 5000);
                    this.isSaving[index] = false;
                }
                },

                //this function opens up in a new page the details of any job clicked...
                navigateToJobDetails(job_id) {
                const route = this.$router.resolve({ name: 'Techzone - Application', params: { job_id: job_id } });
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

                async fetchUserAppliedJobs() {
                this.isLoading = true;

                try {
                    // Fetch user-applied jobs using the route you created
                    const response = await axios.get(`${this.api_url}/user-applied-jobs`, {
                    headers: {
                        Authorization: `JWT ${localStorage.getItem('token')}`, // Include the JWT token from localStorage
                    },
                    });

                    this.userAppliedJobs = response.data.jobs;
                    this.isLoading = false;
                    // console.log("user appied jobs: ", this.userAppliedJobs);
                } catch (error) {
                    this.isLoading = false;
                    console.error(error);
                }
                },

                checkJobApplication(jobId) {
                // Use the forEach method to iterate through the userAppliedJobs array
                // and check if any item matches the given jobId
                if(this.userAppliedJobs){
                const foundJob = this.userAppliedJobs.find(job => job._id === jobId);
                // If a matching job is found, return "View Application"
                if (foundJob) {
                    return "View Application";
                }};
                // If no match is found or the array is empty, return "Apply here"
                return "Apply here";
                },

                getEmployerDetails(employerId){
                // Use the forEach method to iterate through the jobEmployers array
                // and check if any item matches the given employerId
                if(this.jobEmployers){
                const foundEmployer = this.jobEmployers.find(employer => employer._id === employerId);
                // If a matching employer is found, return "View Application"
                if (foundEmployer) {
                    return "View Employer";
                }};
                // If no match is found or the array is empty, return "Apply here"
                return "Apply here";
                },


                async searchJobs() {
                    this.isLoading = true;
                    // Define your search criteria here
                    const keywords = this.keywords; // Assuming you have a data property named 'keywords'
                    const budgetMin = this.budgetMin; // Assuming you have a data property named 'budgetMin'
                    const budgetMax = this.budgetMax; // Assuming you have a data property named 'budgetMax'
                    const jobType = this.jobType; // Assuming you have a data property named 'jobType'
                    const posted = this.posted;
                    // const location = this.location; // Assuming you have a data property named 'location'

                    try {
                    // Make an Axios GET request to your search endpoint
                    const response = await axios.get(`${this.api_url}/search`, {
                        params: {
                        keywords,
                        budgetMin,
                        budgetMax,
                        posted,
                        jobType,
                        // location,
                        },
                    });

                    // Handle the response data (jobs) as needed
                    this.isLoading = false;
                    this.jobs = response.data.jobs.reverse(); // Assuming you have a data property named 'jobs'
                    } catch (error) {
                    this.isLoading = false;
                    console.error('Error searching jobs:', error);
                    // Handle errors, e.g., show an error message to the user
                    }
                },

                // now we try to get the employer's details ......
                getUserByI(id) {
                    axios.get(`${this.api_url}/get-info/${id}`)
                        .then(response => {
                            this.isLoading = false;
                            this.employerDetails = response.data.employer;

                            })
                            .catch(error => {
                            console.error('Error fetching user or employer details:', error);
                            this.isLoading = false;
                                        // Handle errors
                        });
                    },


                getUserById(id) {
                if (!this.employerDetails[id]) {
                    axios.get(`${this.api_url}/get-info/${id}`)
                    .then(response => {
                    this.employerDetails[id] = response.data.employer;
                    })
                    .catch(error => {
                    console.error('Error fetching user or employer details:', error);
                    });
                }
                return this.employerDetails[id];
                },
            },

            computed: {
            },

            mounted(){

            },
            beforeMount(){
                const token = localStorage.getItem('token');
                if(token){
                    this.fetchUserAppliedJobs();
                }
                this.fetchJobListings();
                this.getUserDetails();


            },
}
</script>


  <style scoped>
    @media screen and (max-width: 650px) {}

#user-top-navigation-container .nav-tooltip {
    position: absolute;
    top: 50px;
    left: 50%;
    transform: translate(-50%);
    padding: 10px;
    text-transform: none;
    background-color: var(--nav-tooltip-bg);
    color: var(--nav-tooltip-text);
    border-radius: var(--nav-tooltip-radius);
    box-shadow: var(--nav-tooltip-shadow);
    white-space: nowrap;
    z-index: var(--nav-tooltip-zindex);
    cursor: default;
    visibility: hidden;
    opacity: 0;
    transition: opacity .1s ease-in-out;
    transition-delay: .5s;
}

  </style>