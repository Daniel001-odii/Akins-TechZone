<template>
    <div class="page-grid-container">
        <div class="Navigation">
            <NavBar/>
        </div>
        <div class="Left-Nav">
            <LeftNav/>
        </div>
        <!-- <div class="Page-header">
            <div class="page-title"><slot name="page-title">Application</slot></div>
        </div>  this page has no header-->
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
                    <div class="tz-client-tab">
                        <div class="activity">Activity</div>
                        <div class="job-details">Job Details</div>
                    </div>

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
        </div>
        <div class="footer"><Footer/></div>
      
    </div>
      </template>
      
      <script>
      import { RouterLink } from 'vue-router';
      import Footer from '../components/Footer.vue';
      import JobCard from '../components/JobCard.vue';
      import NavBar from '../components/NavBar.vue';
      import ProfileNavBar from '../components/ProfileNavBar.vue';
      import { reactive } from 'vue';
      import LeftNav from '../components/Client_LeftNav.vue'
      import PageFilter from '../components/PageFilter.vue';
      import axios from 'axios';
      import jobsData from '@/pages/JobLists.json';
      import { ref } from 'vue';


      const api_url = "https://techzoneapp.herokuapp.com/api/jobs";
    
      
          export default {
              components:{ JobCard, NavBar, ProfileNavBar, Footer, RouterLink, LeftNav, PageFilter },
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
    padding: 10px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
}


.cards-container{
    margin-top: 10px;
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