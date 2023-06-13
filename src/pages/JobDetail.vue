<template>
    <div class="page-grid-container">
        <div class="Navigation">
            <!-- <div v-if="isLoading">Loading...</div> -->
            <NavBar/>
        </div>
        <div class="Left-Nav">
            <LeftNav/>
        </div>
        <div class="Page-header">
            <div class="page-title">Application</div>
        </div>
        <div v-if="!isLoading" class="Page-contents">
                <div class="tz-job-content-area">
                    <div class="tz-company-header-img"></div>
                    <div class="job-detail-header">
                        <div class="jdh-left">
                            <span><b>{{ job.job_tag }}</b></span>
                            <small>microsot Imc. <i>Stars</i></small>
                                <!---------------clock icon-------------->
                            <span class="jdh-detail">
                                <!---------------location icon-------------->
                                <span class="jdh-detail">
                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 15 20" fill="none">
                                    <path d="M7.5 19.0532L2.19667 13.7499C1.14779 12.701 0.433489 11.3646 0.144107 9.90979C-0.145275 8.45494 0.0032557 6.94695 0.570915 5.57651C1.13858 4.20607 2.09987 3.03473 3.33323 2.21063C4.5666 1.38652 6.01664 0.946655 7.5 0.946655C8.98336 0.946655 10.4334 1.38652 11.6668 2.21063C12.9001 3.03473 13.8614 4.20607 14.4291 5.57651C14.9967 6.94695 15.1453 8.45494 14.8559 9.90979C14.5665 11.3646 13.8522 12.701 12.8033 13.7499L7.5 19.0532ZM11.625 12.5716C12.4407 11.7558 12.9963 10.7164 13.2213 9.58482C13.4463 8.45328 13.3308 7.28042 12.8892 6.21455C12.4477 5.14868 11.7 4.23768 10.7408 3.59673C9.78149 2.95578 8.6537 2.61368 7.5 2.61368C6.3463 2.61368 5.21851 2.95578 4.25924 3.59673C3.29996 4.23768 2.55229 5.14868 2.11076 6.21455C1.66923 7.28042 1.55368 8.45328 1.77871 9.58482C2.00374 10.7164 2.55926 11.7558 3.375 12.5716L7.5 16.6966L11.625 12.5716ZM7.5 10.1133C7.05797 10.1133 6.63405 9.93766 6.32149 9.6251C6.00893 9.31254 5.83333 8.88861 5.83333 8.44659C5.83333 8.00456 6.00893 7.58064 6.32149 7.26808C6.63405 6.95552 7.05797 6.77992 7.5 6.77992C7.94203 6.77992 8.36595 6.95552 8.67851 7.26808C8.99107 7.58064 9.16667 8.00456 9.16667 8.44659C9.16667 8.88861 8.99107 9.31254 8.67851 9.6251C8.36595 9.93766 7.94203 10.1133 7.5 10.1133Z" fill="#4E79BC"/>
                                </svg>
                                Lekki Phase 1, Lagos 
                                </span>
                                <!---------------clock icon-------------->
                                <span class="jdh-detail">
                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 20 22" fill="none">
                                    <path d="M18.75 12.25C18.75 17.08 14.83 21 10 21C5.17 21 1.25 17.08 1.25 12.25C1.25 7.42 5.17 3.5 10 3.5C14.83 3.5 18.75 7.42 18.75 12.25Z" stroke="#4E79BC" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M10 7V12" stroke="#4E79BC" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M7 1H13" stroke="#4E79BC" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>Posted sample ago
                                </span>
                            </span>
                            <span class="jdh-detail">
                                <!------------wallet icon-------------->
                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 20 18" fill="none">
                                    <path d="M16 4H19C19.2652 4 19.5196 4.10536 19.7071 4.29289C19.8946 4.48043 20 4.73478 20 5V17C20 17.2652 19.8946 17.5196 19.7071 17.7071C19.5196 17.8946 19.2652 18 19 18H1C0.734784 18 0.48043 17.8946 0.292893 17.7071C0.105357 17.5196 0 17.2652 0 17V1C0 0.734784 0.105357 0.48043 0.292893 0.292893C0.48043 0.105357 0.734784 0 1 0H16V4ZM2 6V16H18V6H2ZM2 2V4H14V2H2ZM13 10H16V12H13V10Z" fill="#4E79BC"/>
                                </svg>
                                {{ job.budget_des }} : {{ job.budget }}
                            </span>
                        </div>
                        <!-- <div class="jdh-right">
                            <span style="padding: 5px 10px;">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 25 25" fill="none">
                                    <path d="M0.485051 8.71692C-0.160649 8.50169 -0.166834 8.1541 0.497421 7.93268L24.1075 0.0630534C24.7619 -0.154654 25.1367 0.21149 24.9536 0.852243L18.2072 24.4611C18.0216 25.1155 17.6444 25.1378 17.3673 24.5168L12.9216 14.5121L20.3434 4.61635L10.4476 12.0382L0.485051 8.71692Z" fill="#4E79BC"/>
                                </svg>
                            </span>
                        </div> -->
                    </div>
                    <div class="tz-job-content-description">
                            <p class="tz-form-title">Job Description</p>
                            {{ job.job_des }}
                    </div>
                    <div class="tz-job-content-description">
                            <p class="tz-form-title">Skills Required</p>
                            <div class="skill_set">
                            <div v-for="(skills,index) in job.skill_set.split(', ')" :key="index">
                                    <div class="skills">{{ skills }}</div>
                            </div>
                            </div>
                    </div>
                    <div class="tz-job-content-description">
                            <p class="tz-form-title">Project type</p>
                            {{ job.work_period }}
                    </div>
                    <div class="tz-job-content-description">
                            <p class="tz-form-title">Payment type</p>
                            {{ job.budget_des }}
                    </div>
                    <div class="tz-job-content-description">
                            <p class="tz-form-title">Share this job post</p>
                            {{ shareLink }}
                    </div>
                </div>
                <div class="tz-form-area">
                    <form>
                        <div class="tz-form-content">
                            <span class="tz-form-title">Cover Letter</span>
                            <textarea class="tz-form-textarea" placeholder="write a convincing cover letter here..." v-model="converLetter" required></textarea>
                        </div>
                        <div class="tz-form-content">
                            <span class="tz-form-title">Attachment</span>
                            <div class="drop-zone" @drop="handleDrop" @dragover.prevent>
                                <!-- <img src="../components/Logos_icons/content.png" class="cloud"> -->
                                <span v-if="!selectedFile">Drag and drop files or <i  @click="handleButtonClick" style="color:blue; cursor: pointer;">upload</i> project files here.</span>
                                <span v-else>{{ selectedFile.name }}</span>
                            </div>
                                <input type="file" ref="fileInput" @change="handleFileInputChange" style="display: none">
                                <span @click="handleButtonClick" style="color:blue; cursor: pointer;margin: 0;" class="cust-bt">Upload files</span>
                        </div>
                        <div class="tz-form-content">
                            <span class="tz-form-title">Counter offer</span>
                            <div class="form-sub">
                                <p>Requesting Fee</p>
                                <div class="amount-input">
                                    <div class="currency">NGN</div>
                                    <input type="number" class="counterOffer" placeholder="0.00" v-model="counterOffer">
                                </div>
                                
                                <small>input the amount you want to get paid for this job</small>
                            </div>
                            <div class="form-sub">
                                <p>Reason</p>
                                <input type="textarea">
                                <small>give a detailed reason for countering the offer</small>
                            </div>
                        </div>
                        <div class="tz-form-content">
                            <button class="tz-form-submit-btn cust-btn" type="submit">Submit Application</button>
                        </div>
                    </form>
                </div>
        </div>
        <div v-else style="height: 100vh; width: 100%; display: flex; justify-content: center; align-items: center;">
            <div class="loader"></div>
        </div>
        
        <!-- <div class="footer"><Footer/></div> -->
      
    </div>
      </template>
      
      <script>
      import { RouterLink , useRoute  } from 'vue-router';
      import Footer from '../components/Footer.vue';
      import JobCard from '../components/JobCard.vue';
      import NavBar from '../components/NavBar.vue';
      import ProfileNavBar from '../components/ProfileNavBar.vue';
      import { reactive } from 'vue';
      import LeftNav from '../components/LeftNav.vue'
      import PageFilter from '../components/PageFilter.vue';
      import axios from 'axios';
      import draggable from 'vuedraggable';
      import jobsData from '@/pages/JobLists.json'; // import the JSON file
      import { ref, onMounted} from 'vue';

      const api_url = 'https://techzoneapp.herokuapp.com/api/jobs/';
      
      export default {
        name: 'Application',
        components: {
            JobCard,
            NavBar,
            ProfileNavBar,
            Footer,
            RouterLink,
            LeftNav,
            PageFilter,
            draggable
        },
        data() {
            return {
            job: null,
            isLoading: true,
            shareLink: window.location.href
            };
        },
        methods: {
            fetchJobListings() {
            const jobId = this.$route.params.id;
            axios
                .get(`https://techzoneapp.herokuapp.com/api/jobs/${jobId}`)
                .then(response => {
                this.job = response.data;
                console.log(response.data);
                })
                .catch(error => {
                console.error(error);
                })
                .finally(() => {
                this.isLoading = false;
                });
            },
        },
        created() {
            this.fetchJobListings();
        },
        };



      </script>       
      
      
      <style scoped>
      .loader,
.loader:before,
.loader:after {
  width: 20px; /* update this to control the size */
  aspect-ratio: .5;
  display: grid;
  background: radial-gradient(#000 68%,#0000 72%) center/100% 50% no-repeat;
  animation: load 1.2s infinite linear calc(var(--_s,0)*.4s);
  transform: translate(calc(var(--_s,0)*150%));
}
.loader:before,
.loader:after {
  content: "";
  grid-area: 1/1;
}
.loader:before {--_s: -1}
.loader:after  {--_s:  1}

@keyframes load {
  20% {background-position: top   }
  40% {background-position: bottom}
  60% {background-position: center}
}




small{font-size: 12px;}
.Page-contents{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;
    width: 100%;
    /* border: 2px solid red; */
    padding: 5px;
    
}
.tz-company-header-img{
    height: 200px;
    width: 100%;
    background: url("../assets/imgs/companyImg.png");
    background-size: cover;
    background-position: center;
    margin-bottom: 20px;
    border-radius: 5px;
}
.tz-job-content-description{
    margin-top: 20px;
}
.tz-job-content-area, .tz-form-area{
    /* border: 2px solid green; */
    width: 50%;
    padding: 20px;
    overflow-y: scroll;
    height: 90vh;
}

.tz-form-content{
    display: flex;
    flex-direction: column;
    padding: 10px;
}
.tz-form-title{
    font-size: 16px;
    font-weight: bold;
    padding-bottom: 5px;
    margin: 0;
}
.tz-form-textarea{
    border-radius: 5px;
    height: 150px;
    padding: 10px;
    border: 1px solid var(--app-blue);
}
.form-sub{
    display: flex;
    flex-direction: column;
    width: 300px;
    /* border: 2px solid red; */
}
.amount-input{
    width: 90%;
    border: 1px solid var(--app-blue);
    border-radius: 5px;
    display: flex;
    flex-direction: row;
    padding: 10px;
    align-items: center;
    justify-content: center;
}
.counterOffer{
    border: none;
    width: 100%;
    margin-left: 15px;
    font-size: 18px;
    /* outline: none; */
}
.cust-btn{
    width: 150px;
    /* margin: 0 auto; */
}
.tz-form-submit-btn{
    border-radius: 5px;
    color: #fff;
    padding: 10px;
    background: var(--app-blue);
    border: none;
}
.app {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
}

.drop-zone {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 150px;
  border: 2px dashed #ccc;
  border-radius: 5px;
  margin-bottom: 20px;
}
.cloud{
    height: 68px;
    width: 160px;
}
butto {
  padding: 10px 20px;
  background: #4CAF50;
  color: white;
  border: none;
  cursor: pointer;
}

@media screen and (max-width: 1200px) {
    .Page-contents{
        flex-direction: column;
        overflow-y: scroll;
    }
    .tz-job-content-area, .tz-form-area{
        width: 100%;
        overflow: visible;
        height: auto;
        border: 2px solid red;
    }
}
      </style>