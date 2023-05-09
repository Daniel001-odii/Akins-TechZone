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
                <button class="filter-menu" style="margin-left: 10px;">Last 1 hour</button>
           <div class="filter-search">
                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 25 26" fill="none">
                    <path d="M11.1311 0.727295C17.1339 0.727295 22.0058 5.59917 22.0058 11.602C22.0058 17.6049 17.1339 22.4767 11.1311 22.4767C5.12822 22.4767 0.256348 17.6049 0.256348 11.602C0.256348 5.59917 5.12822 0.727295 11.1311 0.727295ZM11.1311 20.0601C15.8036 20.0601 19.5892 16.2745 19.5892 11.602C19.5892 6.9283 15.8036 3.1439 11.1311 3.1439C6.45736 3.1439 2.67295 6.9283 2.67295 11.602C2.67295 16.2745 6.45736 20.0601 11.1311 20.0601ZM21.3835 20.1459L24.8018 23.563L23.0921 25.2727L19.675 21.8545L21.3835 20.1459V20.1459Z" fill="#45494F"/>
                </svg>
                <input type="search" class="ft-search" v-model="searchTerm" placeholder="Search...">
           </div>
           
           <button class="filter-menu">Full-time</button>
           <button class="filter-menu">Remote</button>
           <button class="filter-menu">Last 1 hour</button>
           <button class="filter-menu">Company</button>
             </PageFilter>
          </div>
          <div class="page-tabs">
              <!-- <slot name="page-tabs"> -->
                  <RouterLink to=""><div class="job-category job-category-active">Available Jobs</div></RouterLink>
                  <RouterLink to="/jobs/requested-jobs"><div class="job-category">Requested (0)</div></RouterLink>
                  <RouterLink to="/jobs/assigned-jobs"><div class="job-category">Assigned (5)</div></RouterLink>
                  <RouterLink to="/jobs/completed-jobs"><div class="job-category">Completed (15)</div></RouterLink>
                  <RouterLink to="/jobs/declined-jobs"><div class="job-category">Declined (4)</div></RouterLink>
              <!-- </slot> -->
          </div>
          
    </div>
    <div class="Page-contents">
      <!--this container houses two extra individually scrollable containers: The Job cards(by the left) and the Job full detail (by the right)-->

      <!-- :style="{ border: selectedJob === index ? '2px solid blue' : '2px solid black' }"
      @click="showFullJob(index)" -->

     


<div class="page-content-sub">
    <div class="job-cards-area">
            
    <div v-for="item in filteredItems" :key="item.id">
        <JobCard  @click="showFullJob(item.id)" :style="{ background: selectedJob === item.id ? '#F7F9FF' : '' }">
            <template #job-title>{{ item.job_tag }}</template>
            <template #job-post-company></template>
            <template #job-amount>(₦){{ item.budget }}</template>
            <template #job-duration> {{ item.work_period }}</template>
            <template #job-description>{{ item.job_des.substring(0,120) }}...</template>
            <template #job-post-time></template>
        </JobCard>
      
    </div>
            <!-- <div v-for="(job_list, index) in Available_jobs" :key="index">
                <div v-for="(job, index) in job_list" :key="index">
                    <JobCard  @click="showFullJob(index)" :style="{ background: selectedJob === index ? '#F7F9FF' : '' }">
                        <template #job-title>{{ job.job_tag }}</template>
                        <template #job-post-company></template>
                        <template #job-amount>(₦){{ job.budget }}</template>
                        <template #job-duration> {{ job.work_period }}</template>
                        <template #job-description>{{ job.job_des.substring(0,120) }}...</template>
                        <template #job-post-time></template>
                    </JobCard>
                </div>
            </div> -->



</div>


          <!-------the full job description goes below here... and is made scrollable, except the header part which remains static------>
          <!-- <div class="job-details-area card" v-for="(job_list, index) in Available_jobs" :key="index"> -->
        <div class="job-details-area card"  v-for="item in filteredDetail" :key="item.id">
              <slot name="job-details">
                      <div class="job-detail">
                          <div class="job-detail-header">
                              <div class="jdh-left">
                                  <span><b>{{ item.job_tag }}</b></span>
                                  <small>microsot Imc. <i>Stars</i></small>
                                  <span class="jdh-detail">Posted 1 hour ago</span>
                                  <!-- <span class="jdh-detail">N{{ job_list[selectedJob].budget }} | {{ job_list[selectedJob].work_period }}</span> -->
                              </div>
                              <div class="jdh-right">
                                  <button class="cust-btn" style="border-radius: 5px;">Apply Here</button>
                                  <!-- <i class="bi bi-heart"></i> -->
                              </div>
                          </div>
                          
                          <div class="job-detail-content">
                              <div class="full-job-description">
                                  <span class="jdh-title">Job Description</span>
                                  <!-- {{ job_list[selectedJob].job_des }} -->
                              </div>

                              <span class="jdh-title">Qualification & Skills</span>
                              <ul>
                                  <li>Lead the development of software solutions, ensuring that they are efficient, scalable, and maintainable.</li>
                                  <li>Collaborate with project managers and other developers to ensure that software solutions are delivered on time and within budget.</li>
                                  <li>Develop high-quality, reliable, and maintainable code using best practices and coding standards.</li>
                                  <li>Conduct code reviews and provide feedback to other developers to ensure that code quality is consistent.</li>
                                  <li>Work collaboratively with other developers to troubleshoot and resolve software defects.</li>
                                  <li>Participate in the design and development of software architecture and infrastructure.</li>
                                  <li>Stay up-to-date with the latest technologies and trends in software development.</li>
                              </ul>
                          </div>
                      </div>
                  </slot>
              </div>
          </div>
      </div>
          <!-- <div class="job-cards-area">
              <slot name="job-cards"><p>You havent imported any Job cards yet...</p></slot>
          </div> -->
  
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
                Available_jobs:[],

                /*------ the area below ensures the search filter works, pls dont touch-----*/
                searchTerm: '',
                items:jobsData,
                }
            },
            methods: {
                showFullJob(index) {
                this.selectedJob = index;
                }
            },
            mounted(){
                this.Available_jobs.push(jobsData);
                console.log(this.Available_jobs);
            },
            computed: {
                filteredItems() {
                    return this.items.filter(item => {
                        return item.job_tag.toLowerCase().includes(this.searchTerm.toLowerCase()) || item.job_des.toLowerCase().includes(this.searchTerm.toLowerCase());
                    });
                    },
                filteredDetail(){
                    return this.items[this.selectedJob]
                }
  }
}

  </script>       
  
  
  <style>
      .page-grid-container {
      display: grid;
      grid-template-areas:
          'Navigation Navigation      Navigation      Navigation      Navigation      Navigation'
          'Left-Nav   Page-header     Page-header     Page-header     Page-header     Page-header'
          'Left-Nav   Page-contents   Page-contents   Page-contents   Page-contents   Page-contents'
          'footer     footer          footer          footer          footer          footer';
      gap: 0;
      background: #fff;
      padding: 0;
      grid-template-columns: 180px 1fr;
      grid-template-rows: 60px auto auto;
      height: 100vh;
      }
      
      .Navigation { grid-area: Navigation; }
      .Left-Nav {
          background: #fff; 
          grid-area: Left-Nav;
          display: flex;
          flex-direction: column;
          z-index: 999;
      }
      .Left-Nav:hover > .page-grid-container{
          grid-template-rows: 200px auto auto;
      }
  
      .spacer{
          border-bottom: 1px solid #C8C6C6; 
          height: 61px !important;
          width: 100% !important;
      }
  
      .Page-title { grid-area: Page-title; }
      .Page-header { 
          grid-area: Page-header;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          font-size: 0.8em !important;
          border-bottom: 1px solid #C8C6C6;
          border-left: 1px solid #C8C6C6; 
      }
      .page-title{
          padding: 15px;
          display: flex;
          justify-content: flex-start;
          align-items: center;
          width: 100%;
          height: 60px;
          font-size: 20px;
      }
      .page-filters{
          max-height: 45px;
          display: inline-flex;
          gap: 10px;
          overflow-x: scroll;
          width: 100%;
          border-top: 0.5px solid #C8C6C6;
          border-bottom: 0.5px solid #C8C6C6;
      }
      /* hide al scroll bars in page................*/
      *::-webkit-scrollbar{
          display: none;
      }
      .page-tabs {
          display: flex;
          align-items: flex-end;
          gap: 20px;
          padding-left: 20px;
          padding-right: 20px;
          height: 30px;
          width: 100%;
          overflow-x: scroll;
      }
      .job-category{
          width: 100px !important;
          text-align: center;
      }
      .job-category-active{
          border-bottom: 3px solid var(--app-blue);
          color: var(--app-blue);
      }
      .Page-contents { 
          grid-area: Page-contents; 
          /* overflow: scroll; */
          height: 70vh;
          /* border: 2px solid red; */
      }
  
      .filter-menu{
          border: 5px;
          border: 1px solid #C8C6C6;
          padding: 5px;
          border-radius: 5px;
          background: #fff;
          margin: 6px 0px;
          min-width: 100px;
          height: 30px;
      }
  
      .footer{
          grid-area: footer;
          background: #fff;
      }
  
      .job-listings{
          display: flex;
          flex-direction: row;
          padding: 10px;
      }

      .page-content-sub{
          display: flex;
          flex-direction: row;
      }

      .job-cards-area{
          margin-top: 10px;
          /* border: 2px solid red; */
          height: 70vh;
          width: 50%;
          overflow: scroll;
      }
      .job-details-area{
          /* border: 2px solid green !important; */
          margin-top: 10px;
          margin-right: 10px;
          height: 68vh !important;
          width: 50%;
          font-size: 0.8em;
          border: 1px solid grey;
      }

      .job-detail-header{
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          border-bottom: 1px solid #C8C6C6;
      }
      .jdh-left{
          display: flex;
          flex-direction: column;
          padding: 10px;
          /* border: 2px solid green; */
      }
      .jdh-right{
          display: flex;
          flex-direction: row;
          padding: 10px;
          /* border: 2px solid red; */
          align-items: flex-start;
      }
      .jdh-title{
          font-size: 15px;
          display: block;
          font-weight: bold;
          padding-top: 10px;
      }
      .jdh-detail{
          padding: 5px 0px;
      }
      .job-detail-content{
          padding: 10px;
          overflow-y: scroll;
          height: 52vh; 
          /* border: 2px solid red; */
      }
    

    .filter-search{
        border-radius: 5px;
        background: var(--app-hover);
        color: #000;
        border: none;
        height: 30px;
        margin: 6px 0px;
        outline: none;
        padding-left: 10px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .ft-search{
        height: 100%;
        border: none;
        background: none;
        outline: none;
        padding: 5px;
    }
  
    @media screen and (max-width: 500px) {
      .page-grid-container {
          display: grid;
          grid-template-areas:
              'Navigation      Navigation      Navigation      Navigation      Navigation'
              'Page-header     Page-header     Page-header     Page-header     Page-header'
              'Page-contents   Page-contents   Page-contents   Page-contents   Page-contents'
              'footer          footer          footer          footer          footer';
          }
  .Left-Nav{
      display: none;
  }
      .page-tabs {
          font-size: 0.9em;
          /* border: 1px solid red; */
          overflow: scroll;
      }
    }
  
  @media screen and (max-width: 720px) {
  .page-grid-container {
      grid-template-columns: 80px 1fr;
  }
  }
  </style>


<!-- <template>
    <PageTemplate>
        <template #page-tabs>
            <RouterLink to=""><div class="job-category job-category-active">Available Jobs</div></RouterLink>
            <RouterLink to="/jobs/requested-jobs"><div class="job-category">Requested (0)</div></RouterLink>
            <RouterLink to="/jobs/assigned-jobs"><div class="job-category">Assigned (5)</div></RouterLink>
            <RouterLink to="/jobs/completed-jobs"><div class="job-category">Completed (15)</div></RouterLink>
            <RouterLink to="/jobs/declined-jobs"><div class="job-category">Declined (4)</div></RouterLink>
        </template>
        <template #job-cards v-for="(job_list, index) in Available_jobs" :key="index">
            <div v-for="(job, index) in job_list" :key="index">
                <JobCard  @click="showFullJob(index)">
                    <template #job-title>{{ job.job_tag }}</template>
                    <template #job-post-company></template>
                    <template #job-location></template>
                    <template #job-amount></template>
                    <template #job-time></template>
                    <template #job-description></template>
                    <template #job-post-time></template>
                </JobCard>
            </div> -->

    <!-- <div class="job-listing__full">
      <h2>{{ jobs[selectedJob].title }}</h2>
      <p>{{ jobs[selectedJob].fullDescription }}</p>
    </div>
  </div> -->
        <!-- </template> -->
        <!-- <template #job-details>
            <div class="job-detail-content">
                    <div class="mini-job-description">
                        We are seeking a highly experienced and skilled Senior Software Developer to join our dynamic team. 
                        The successful candidate will have a proven track... 
                    </div>
                    <p class="job-title">Job Title</p>
                        <div class="full-job-description">
                            We are seeking a highly experienced and skilled Senior Software Developer to join our dynamic team. The successful candidate will have a proven track record in designing and developing software solutions, as well as a strong understanding of programming principles and best practices. The role will involve working collaboratively with other developers, project managers, 
                            and stakeholders to design and implement high-quality software solutions.
                        </div>
                        <p class="job-title">Qualification & Skills</p>
                        <ul>
                                <li>Lead the development of software solutions, ensuring that they are efficient, scalable, and maintainable.</li>
                                <li>Collaborate with project managers and other developers to ensure that software solutions are delivered on time and within budget.</li>
                                <li>Develop high-quality, reliable, and maintainable code using best practices and coding standards.</li>
                                <li>Conduct code reviews and provide feedback to other developers to ensure that code quality is consistent.</li>
                                <li>Work collaboratively with other developers to troubleshoot and resolve software defects.</li>
                                <li>Participate in the design and development of software architecture and infrastructure.</li>
                                <li>Stay up-to-date with the latest technologies and trends in software development.</li>
                            </ul>
                </div>
        </template> -->
    <!-- </PageTemplate>
  </template>
  
  <script>
  import PageTemplate from './PageTemplate.vue'
  import jobsData from '@/pages/JobLists.json'; // import the JSON file

  import JobCard from '../components/JobCard.vue';

  
  
      export default {
            components:{PageTemplate, JobCard,},
            data() {
                return {
                jobs: jobsData, // assign the imported JSON data to the jobs data property
                selectedJob: 0, // index of currently selected job
                Available_jobs:[],
                }
            },
            methods: {
                showFullJob(index) {
                this.selectedJob = index;
                }
            },
            mounted(){
                this.Available_jobs.push(jobsData);
                console.log(this.Available_jobs);
            }
}

  </script> -->
