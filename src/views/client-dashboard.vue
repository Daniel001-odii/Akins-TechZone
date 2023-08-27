<template>
    <div class="page-grid-container">
        <div class="Navigation">
            <Navbar>
                <template #action-1><RouterLink to="/client/post-job">Post Job</RouterLink></template>
                <template #action-2><RouterLink to="/client/post-job">Direct Route</RouterLink></template>
            </Navbar>
        </div>
        <div class="Left-Nav">
            <LeftNav/>
        </div>
        <div class="Page-header">
            <!-- <div class="page-title"><slot name="page-title">Dashboard</slot></div> -->
        </div> 
        <div class="Page-contents">
               <div class="container">
                    <div class="tz-client-header">
                        <h4 class="tz-client-title">Welcome back, Charles</h4>
                        <RouterLink to="/client/post-job">
                            <button class="post-job-btn">
                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                                    <path d="M6.06641 12H18.0664" stroke="#4E79BC" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M12.0459 17.6558V5.65576" stroke="#4E79BC" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                                Post Job
                            </button>
                        </RouterLink>
                    </div>
                    <!-- <div class="tz-client-tab"> -->
                <ul class="nav nav-pills mb-3 tz-client-tab" id="pills-tab" role="tablist">
                    <li class="nav-item" role="presentation">
                        <button class="nav-link active activity" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none">
                            <path d="M12.92 2.26003L19.43 5.77003C20.19 6.18003 20.19 7.35003 19.43 7.76003L12.92 11.27C12.34 11.58 11.66 11.58 11.08 11.27L4.57 7.76003C3.81 7.35003 3.81 6.18003 4.57 5.77003L11.08 2.26003C11.66 1.95003 12.34 1.95003 12.92 2.26003Z" stroke="#45494F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M3.61 10.13L9.66 13.16C10.41 13.54 10.89 14.31 10.89 15.15V20.87C10.89 21.7 10.02 22.23 9.28 21.86L3.23 18.83C2.48 18.45 2 17.68 2 16.84V11.12C2 10.29 2.87 9.75999 3.61 10.13Z" stroke="#45494F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M20.3904 10.13L14.3404 13.16C13.5904 13.54 13.1104 14.31 13.1104 15.15V20.87C13.1104 21.7 13.9804 22.23 14.7204 21.86L20.7704 18.83C21.5204 18.45 22.0004 17.68 22.0004 16.84V11.12C22.0004 10.29 21.1304 9.75999 20.3904 10.13Z" stroke="#45494F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                            Activity</button>
                    </li>
                    <li class="nav-item" role="presentation">
                        <button class="nav-link activity" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 25 24" fill="none">
                            <path d="M10.1768 14.7L11.6768 16.2L15.6768 12.2" stroke="#4E79BC" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M10.8672 6H14.8672C16.8672 6 16.8672 5 16.8672 4C16.8672 2 15.8672 2 14.8672 2H10.8672C9.86719 2 8.86719 2 8.86719 4C8.86719 6 9.86719 6 10.8672 6Z" stroke="#4E79BC" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M16.8672 4.02002C20.1972 4.20002 21.8672 5.43002 21.8672 10V16C21.8672 20 20.8672 22 15.8672 22H9.86719C4.86719 22 3.86719 20 3.86719 16V10C3.86719 5.44002 5.53719 4.20002 8.86719 4.02002" stroke="#4E79BC" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                            Job Details</button>
                    </li>
                </ul>
                <div class="tab-content" id="pills-tabContent">
                <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                    <div class="cards-container">
                        <div class="collapsible-card">
                        <div class="card-header" @click="toggleCard">
                            <span>
                                <span class="switch" :class="{'rotate': isCollapsed}">+</span>
                                <slot name="header">Job Created by Bob Charlie</slot>
                            </span>
                        </div>
                        <!-- <div class="card-body" v-show="!isCollapsed"> -->
                            <div class="card-body" v-show="isCollapsed">
                            <slot>
                                Senior Software Developer (Java)<br/>
                                We are seeking a highly experienced and skilled Senior Software Developer to join our dynamic team. The successful candidate will have a proven track... 
                            </slot>
                        </div>
                        </div>
                        <div class="collapsible-card">
                        <div class="card-header" @click="toggleCard">
                            <span>
                                <span class="switch" :class="{'rotate': isCollapsed}">+</span>
                                <slot name="header">Job Created by Bob Charlie</slot>
                            </span>
                        </div>
                        <div class="card-body" v-show="!isCollapsed">
                            <slot>
                                Senior Software Developer (Java)<br/>
                                We are seeking a highly experienced and skilled Senior Software Developer to join our dynamic team. The successful candidate will have a proven track... 
                            </slot>
                        </div>
                        </div>
                    </div>
                </div>
                <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
                    <div class="cards-container">
                        <div class="sub-card-container">
                            <div class="cols">All applicants</div>
                            <div class="cols">Shortlisted</div>
                            <div class="cols">Hired</div>
                        </div>
                    </div>
                </div>
                </div>
               </div>
        </div>
        <div class="footer"><Footer/></div>
      
    </div>
      </template>
      
      <script>
      import { RouterLink } from 'vue-router';
      import Footer from '../components/Footer.vue';
      import JobCard from '../components/JobCard.vue';
      import Navbar from '../components/NavBar.vue';
      import ProfileNavBar from '../components/ProfileNavBar.vue';
      import { reactive } from 'vue';
      import LeftNav from '../components/Client_LeftNav.vue'
      import PageFilter from '../components/PageFilter.vue';
      import axios from 'axios';
      import jobsData from '@/views/JobLists.json';
      import { ref } from 'vue';


      const api_url = "https://techzoneapp.herokuapp.com/api/jobs";
    
      
          export default {
              components:{ JobCard, Navbar, ProfileNavBar, Footer, RouterLink, LeftNav, PageFilter },
              data() {
                    return {
                    isCollapsed: true,
                    };
                },
                methods: {
                    toggleCard() {
                    this.isCollapsed = !this.isCollapsed;
                    },
                },
                
    }
    
      </script>       
      
      
      <style scoped>
small{font-size: 12px;}
.Page-contents{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;
    width: 100%;
    padding: 5px;
    overflow-y: scroll  ;
}
.page-grid-container{
    background: #F6F9FF;
}
.container{
    width: 80%;
}
.tz-client-header{
    /* border: 2px solid red; */
    width: 100%;
    height: 100px;
    /* padding: 15px; */
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
}

.tz-client-title{
    font-weight: bolder;
    color: var(--app-blue);
}
.post-job-btn{
    border: none;
    border-radius: 5px;
    padding: 10px;
    background: #fff;
    color: var(--app-blue);
    font-weight: bold;
}
.post-job-btn:hover{
    box-shadow: 0px 4px 10px #0000000c;
}

.tz-client-tab{
    width: 100%;
    background: #fff;
    border-radius: 5px;
    /* padding: 10px; */
    display: flex;
    flex-direction: row !important;
    justify-content: flex-start;
    align-items: center;
    margin: 0 auto;
    /* height: 40px; */
}


.cards-container{
    margin-top: 10px;
}
.sub-card-container{
    width: 100%;
    background: #fff;
    height: 50vh;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: flex-start;
    gap: 5px;
    padding: 5px;
}
.cols{
    background: var(--app-blue-light);
    padding: 10px;
    color: #000;
    width: 100%;
    font-weight: bold;
}
.collapsible-card {
  /* border: 1px solid #ccc; */
  width: 100%;
  margin-bottom: 10px;
}

.card-header {
  background-color: #ffffff;
  padding: 10px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 10px !important;
  height: 60px;
  font-weight: bold;
}

.rotate {
  transform: rotate(45deg);
}
.switch{
    padding-right: 10px;
    padding-left: 10px;
}

.card-body {
  background: #fff;
  padding: 30px;
  margin-top: 5px;
}

.activity, .job-details{
    height: 100% !important;
    min-width: 50px;
    max-width: 250px;
    color: var(--app-blue) !important;
    padding: 8px !important;
    border-radius: 5px 0px 0px 5px;
    font-weight: bold;
    text-align: left !important;
}
.active{
    background: var(--app-blue-light) !important;;
}
.tab-pane{
    background: none !important;
}





@media screen and (max-width: 600px) {
    .container{
        width: 100%;
    }
}

@media screen and (max-width: 600px) {
.tz-client-header{
    flex-direction: column;
    align-items: flex-start;
    padding: 10px;
}
}

      </style>