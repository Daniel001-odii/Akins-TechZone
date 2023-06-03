<template>
    <div class="page-grid-container">
      <div class="Navigation">
          <NavBar/>
      </div>
    <div class="Left-Nav">
         <LeftNav/>
    </div>
    <div class="Page-header">
          <div class="page-title"><slot name="page-title">Work Explorer</slot></div>
          <div class="page-filters">
             <PageFilter>
                <!-- <button class="filter-menu" style="margin-left: 10px;">Last 1 hour</button> -->
           <div class="filter-search">
                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 25 26" fill="none">
                    <path d="M11.1311 0.727295C17.1339 0.727295 22.0058 5.59917 22.0058 11.602C22.0058 17.6049 17.1339 22.4767 11.1311 22.4767C5.12822 22.4767 0.256348 17.6049 0.256348 11.602C0.256348 5.59917 5.12822 0.727295 11.1311 0.727295ZM11.1311 20.0601C15.8036 20.0601 19.5892 16.2745 19.5892 11.602C19.5892 6.9283 15.8036 3.1439 11.1311 3.1439C6.45736 3.1439 2.67295 6.9283 2.67295 11.602C2.67295 16.2745 6.45736 20.0601 11.1311 20.0601ZM21.3835 20.1459L24.8018 23.563L23.0921 25.2727L19.675 21.8545L21.3835 20.1459V20.1459Z" fill="#45494F"/>
                </svg>
                <input type="search" class="ft-search" v-model="searchTerm" placeholder="Search...">
           </div>
           
           <button class="filter-menu">Full-time</button>
           <button class="filter-menu">Remote</button>
           <button class="filter-menu">Last 1 hour</button>
             </PageFilter>
          </div>
          <div class="page-tabs">
              <!-- <slot name="page-tabs"> -->
                  <RouterLink to="/jobs"><div class="job-category">Available Jobs</div></RouterLink>
                  <RouterLink to="requested-jobs"><div class="job-category job-category-active">Requested (0)</div></RouterLink>
                  <RouterLink to="/jobs/assigned-jobs"><div class="job-category">Assigned (5)</div></RouterLink>
                  <RouterLink to="/jobs/completed-jobs"><div class="job-category">Completed (15)</div></RouterLink>
                  <RouterLink to="/jobs/declined-jobs"><div class="job-category">Declined (4)</div></RouterLink>
              <!-- </slot> -->
          </div>
          
    </div>


<div class="Page-contents">
      <!--this container houses two extra individually scrollable containers: The Job cards(by the left) and the Job full detail (by the right)-->

<!-- <div> -->
<Transition name="fade">
    
    <div class="page-content-sub" v-if="filteredJobs.length > 0">
            <div class="job-cards-area">
                <slot name="job-cards">
                <div v-for="(job, index) in filteredJobs" :key="index">
                    <JobCard  @click="showFullJob(job.id)" :style="{ background: selectedJob === job.id ? '#F7F9FF' : '' }" >
                        <template #job-title>{{ job.job_tag }}</template>
                        <template #job-post-company></template>
                        <template #job-amount>(₦){{ job.budget }}</template>
                        <template #job-duration> {{ job.work_period }}</template>
                        <template #job-description>{{ job.job_des.substring(0,120) }}...</template>
                        <template #job-post-time>{{ getHoursTillDate(job.created_at) }}</template>
                    </JobCard>
                    
                </div>
                </slot>
            </div>
    
            <!-----------job  details from search results--------------------------------------------------->

            <!-- <div class="job-details-area card" v-for="item in filteredJobDetail" :key="item.id"> -->
            <div class="job-details-area card">
              <slot name="job-details">
                      <div class="job-detail">
                          <div class="job-detail-header">
                              <div class="jdh-left">
                                  <span><b>{{ jobs[selectedJob].job_tag }}</b></span>
                                  <small>microsot Imc. <i>Stars</i></small>
                                  <span class="jdh-detail">

                                    <!---------------clock icon-------------->
                                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 20 22" fill="none">
                                        <path d="M18.75 12.25C18.75 17.08 14.83 21 10 21C5.17 21 1.25 17.08 1.25 12.25C1.25 7.42 5.17 3.5 10 3.5C14.83 3.5 18.75 7.42 18.75 12.25Z" stroke="#4E79BC" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M10 7V12" stroke="#4E79BC" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M7 1H13" stroke="#4E79BC" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                    <!--------------------------------------->
                                    Posted {{ getHoursTillDate(jobs[selectedJob].created_at) }}ago</span>
                                  <span class="jdh-detail">
                                    <!------------wallet icon-------------->
                                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 20 18" fill="none">
                                        <path d="M16 4H19C19.2652 4 19.5196 4.10536 19.7071 4.29289C19.8946 4.48043 20 4.73478 20 5V17C20 17.2652 19.8946 17.5196 19.7071 17.7071C19.5196 17.8946 19.2652 18 19 18H1C0.734784 18 0.48043 17.8946 0.292893 17.7071C0.105357 17.5196 0 17.2652 0 17V1C0 0.734784 0.105357 0.48043 0.292893 0.292893C0.48043 0.105357 0.734784 0 1 0H16V4ZM2 6V16H18V6H2ZM2 2V4H14V2H2ZM13 10H16V12H13V10Z" fill="#4E79BC"/>
                                    </svg>
                                    (₦){{ jobs[selectedJob].budget }} | {{ jobs[selectedJob].work_period }}</span>
                              </div>
                              <div class="jdh-right">
                                <RouterLink to="/jobs/application">
                                  <button class="cust-btn" style="border-radius: 5px;">Apply Here</button>
                                </RouterLink>
                                  <!-- <i class="bi bi-heart"></i> -->
                              </div>
                          </div>
                          
                          <div class="job-detail-content">
                              <div class="full-job-description">
                                  <span class="jdh-title">Job Description</span>
                                  {{ jobs[selectedJob].job_des }}
                                  <span class="jdh-title">Payment type</span>
                                  {{ jobs[selectedJob].budget_des }}
                              </div>

                              <div class="jd-section">
                                <span class="jdh-title">Skills Required</span>
                                <div class="skill_set" v-for="(skills,index) in jobs[selectedJob].skill_set" :key="index">
                                    {{ skills }}
                                </div>
                             </div>
                            
                             <div class="jd-section">
                                <span class="jdh-title">About the recruiter</span>
                                {{ jobs[selectedJob].job_tag }} recruiter is recruiting for {{ jobs[selectedJob].budget_des }} payment
                             </div>

                             <div class="jd-section" style="color: var(--app-blue) !important">
                                <RouterLink to="/jobs/{{ jobs[selectedJob].id }}">
                                    <i class="bi bi-box-arrow-up-right"></i>
                                    <span>Open job in a new window</span>
                                </RouterLink>
                            </div>


                          </div>
                      </div>
                  </slot>
                  
            </div>

            
        </div>
        
        <div v-else-if="filteredJobs.length === 0" 
        style="display: flex;
                justify-content: center;
                align-items: center;
                padding: 30px;">
                <p>No job matches your query...</p>
        </div>
</Transition>
    


          <!-- </div> -->
</div>
  </div>
  
  <div class="footer">
      <Footer/>
  </div>
  
  
  </template>
  
  <script>
  import { RouterLink } from 'vue-router';
  import Footer from '../components/Footer.vue';
  import JobCard from '../components/JobCard.vue';
  import NavBar from '../components/NavBar.vue';
  import ProfileNavBar from '../components/ProfileNavBar.vue';
  import { reactive } from 'vue';
  import LeftNav from '../components/LeftNav.vue'
  import PageFilter from '../components/PageFilter.vue';
  import jobsData from '@/pages/JobLists.json'; // import the JSON file
  
      export default {
          components:{ JobCard, NavBar, ProfileNavBar, Footer, RouterLink, LeftNav, PageFilter },
            data() {
                return {
                selectedJob: 0, // index of currently selected job

                /*------ the area below ensures the search filter works, pls dont touch-----*/
                searchTerm: '',
                jobs:jobsData,
                filtered_Job_Detail:[],
                hoursDifference: null,
                }
            },
            methods: {
                showFullJob(index) {this.selectedJob = index; },
                getHoursTillDate(dateString) {
                const date = new Date(dateString)
                const now = new Date()
                const diff = now.getTime() - date.getTime()
                const diffInHours = Math.floor(diff / (1000 * 60 * 60))
                //calculate respectively......
                if (diffInHours < 24) {
                    return `${diffInHours} hours`
                } else if (diffInHours < 720) {
                    const diffInDays = Math.floor(diffInHours / 24)
                    return `${diffInDays} days`
                } else {
                    const diffInMonths = Math.floor(diffInHours / 720)
                    return `${diffInMonths} months`
                }
                }
            },
            
            computed: {
                filteredJobs() {
                    if (!this.searchTerm) {
                        return this.jobs;
                    }
                    return this.jobs.filter(job => {
                        return job.job_tag.toLowerCase().includes(this.searchTerm.toLowerCase()) || job.job_des.toLowerCase().includes(this.searchTerm.toLowerCase()) 
                        || job.budget.toLowerCase().includes(this.searchTerm.toLowerCase()) || job.budget_des.toLowerCase().includes(this.searchTerm.toLowerCase())
                    });
            },
            },

            mounted(){
                // console.log("filtered job detail: " + JSON.stringify(this.filteredItems));
                // console.log("the selected job is: " + this.JobSelected);
            },
}

  </script>       
  
  
  <style>
  </style>