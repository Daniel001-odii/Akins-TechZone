<template>

    <div class="page-grid-container" :class="['theme-transition', { 'dark': themeStore.darkMode }]">
        <div class="Navigation">
            <Navbar/>
        </div>
        <div class="Left-Nav">
            <LeftNav/>
        </div>
        <!-- <div class="Page-header"></div> -->

        <div v-if="profileErrorMessage" class="offline-message">
            please complete your profile to post a job.
        </div>

        <div class="Page-contents">
               <div class="container">
                    <div class="tz-client-header"  :class="['theme-transition', { 'dark': themeStore.darkMode }]">
                        <div style="color: #000">
                            <span>Welcome back, </span> <br/>
                            <span class="tz-client-title"> {{ userDetails.firstname }} {{ userDetails.lastname }}</span>
                        </div>
                        <RouterLink to="/client/post-job" v-if="calculateProfileCompletion() == 100">
                            <button class="post-job-btn" :class="['theme-transition', { 'dark': themeStore.darkMode }]">
                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                                    <path d="M6.06641 12H18.0664" stroke="#4E79BC" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M12.0459 17.6558V5.65576" stroke="#4E79BC" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                                Post a Job
                            </button>
                        </RouterLink>
                        <button v-else class="post-job-btn" :class="['theme-transition', { 'dark': themeStore.darkMode }]" @click="profileErrorMessage = !profileErrorMessage">
                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                                    <path d="M6.06641 12H18.0664" stroke="#4E79BC" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M12.0459 17.6558V5.65576" stroke="#4E79BC" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                                Post a Job
                            </button>
                    </div>

                    <!-- <div class="profile_completion">
                        <span>Profile completion</span>
                        <span>
                            <progress style="color: red" min="0" max="100" :value="calculateProfileCompletion()"></progress>
                            {{ calculateProfileCompletion() }}%
                        </span>
                    </div> -->

                    <!-- <div class="tz-client-tab"> -->
                <ul class="nav nav-pills mb-3 tz-client-tab" id="pills-tab" role="tablist" :class="['theme-transition', { 'dark': themeStore.darkMode }]">
                    <li class="nav-item" role="presentation">
                        <button class="nav-link active activity" id="pills-jobsActivity-tab" data-bs-toggle="pill" data-bs-target="#pills-jobsActivity" type="button" role="tab" aria-controls="pills-jobsActivity" aria-selected="true" >
                            <i class="bi bi-activity"></i>
                           Jobs Activity</button>
                    </li>
                    <li class="nav-item" role="presentation">
                        <button class="nav-link activity" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">
                            <i class="bi bi-three-dots"></i>
                           Notifications</button>
                    </li>
                </ul>
                <div class="tab_content" id="pills-tabContent">
                <div class="tab-pane fade show active" id="pills-jobsActivity" role="tabpanel" aria-labelledby="pills-home-tab">
                    <div class="cards-container">
                        <div class="tz_accordion">
                        <!-- <div class="zero-job" v-if="jobsLoading">Loading...</div> -->
                        <DotLoader v-if="jobsLoading"/>
                        <div class="zero-job" v-if="hasFinishedLoad && jobs.length == 0">you havent posted any jobs yet... <RouterLink to="/client/post-job"><span> Post a job</span></RouterLink></div>

                        <div class="tz_accordion-item" v-for="(job, index) in jobs" :key="index" >
                            <div class="tz_accordion_header" @click="toggleItem(index)" :class="['theme-transition', { 'dark': themeStore.darkMode }]">
                                <div>
                                    <b>Job Created by {{ userDetails.firstname }} {{ userDetails.lastname }}  - {{ getHoursTillDate(job.created_at) }} ago</b>
                                    <i :class="['arrow', { 'arrow-down': job.open, 'arrow-right': !job.open }]"></i>
                                </div>
                                <span v-if="!job.open"><b>{{job.job_title}}</b><br/>{{ job.job_description.substring(0,100) }}...</span>
                            </div>
                            <transition name="fade">
                                <div v-if="job.open" class="tz_accordion_body" :class="['theme-transition', { 'dark': themeStore.darkMode }]">
                                    <div style="display: flex; flex-direction: row; justify-content: space-between; flex-wrap: wrap;">
                                        <div class="accordion_body_first">
                                            <b>{{job.job_title}}</b><br/>{{ job.job_description.substring(0,200) }}...

                                            <br/> <span style="color: var(--app-blue)">hires: {{ job.hiredUsers.length }}</span>
                                            <br/> <span style="color: var(--app-blue)">Status: <span v-if="job.isCompleted">Completed</span><span v-else>Open</span></span>

                                            <div class="job_effect_btns">
                                                <button class="job-btn edit-btn" @click="editJobPost(job._id)"><i class="bi bi-pencil-square"></i> Edit</button>
                                                <!-- <button class="job-btn delete-btn"  @click="deleteJob(job._id)" ><i class="bi bi-trash-fill"></i> Delete</button> -->
                                                <span class="job-btn delete-btn"  @click="deleteJobOptions = !deleteJobOptions">
                                                    <i class="bi bi-trash-fill"></i> Delete
                                                </span>
                                            </div>
                                                <div class="hireModal" v-if="deleteJobOptions">
                                                    <div class="hireModalSub">
                                                        Are you sure you want to delete the job: <br/> <b> {{job.job_title}}</b> ? <br/><strong style="color: red">Job cannot be retrieved after deletion!</strong>
                                                            <div class="hireModalBtn">
                                                                <button class="cust-btn" style="border-radius: 5px; background: red;" @click="deleteJob(job._id)">Delete</button>
                                                                <button class="cust-btn" style="border-radius: 5px; background: #fff; border: 1px solid #000; color: #000;" @click="deleteJobOptions = !deleteJobOptions">cancel</button>
                                                            </div>
                                                        </div>
                                                </div>
                                        </div>
                                        <button v-if="job.applications.length > 0" class="accordion_applicants" @click="toggleFullDetails(index)">
                                            <span v-if="!job.showDetails" class="spinner-grow spinner-grow-sm" role="status">
                                                <!-- <span class="sr-only">Loading...</span> -->
                                            </span>
                                            Applicants: {{ job.applications.length }}
                                        </button>
                                        <button v-else class="accordion_applicants"> Applicants: {{ job.applications.length }} </button>
                                    </div>
                                    <div v-if="job.showDetails" class="tz_accordion_bodylg" :class="['theme-transition', { 'dark': themeStore.darkMode }]">
                                    <div class="tab_content" id="pills-tabContent">
                                        <b>All Applicants</b>
                                        <!-- <div class="tab-pane fade show active" id="pills-applicants" role="tabpanel" aria-labelledby="pills-applicants-tab"> -->
                                        <div class="accordion_body_firs" v-for="(applicant, index) in getJobApplications(index)" :key="index">
                                            <div class="applicants_card">
                                                <span class="close_btn" @click="toggleFullDetails(index)">&times;</span>
                                                <!-- {{ getJobApplications(index) }} -->
                                            <div v-if="getUserById(applicant.user)">
                                                <img @click="navigateToUserprofile(applicant.user)" class="tz-user-thumbnail-big" :src="getUserById(applicant.user).profile.profileImage">
                                                <br/>
                                                <span style="color: var(--app-blue); text-decoration: underline;" @click="navigateToUserprofile(applicant.user)"> {{ getUserById(applicant.user).firstname }} {{ getUserById(applicant.user).lastname }}</span><br/>
                                                <b>Cover letter: </b> {{ applicant.coverLetter }} <br/>
                                                <b>Attached files: </b> {{  applicant.attachment }} <br/>
                                                <b>Counter offer: </b> {{  applicant.counterOffer }} <br/>
                                                <b>Reason for counter offer: </b> {{ applicant.reasonForCounterOffer }} <br/>
                                                <div class="job-effect-btns" style="padding: 15px 0px;">
                                                    <button class="cust-btn" style="border-radius: 5px;" v-if="checkUser(applicant.user, job.job_title)"> <RouterLink style="color: #fff !important;" to="/client/messages"> See messages </RouterLink></button>
                                                    <button class="cust-btn" style="border-radius: 5px;" v-if="!checkUser(applicant.user, job.job_title)" @click="messageUser(job.job_title, applicant.user)"> Message </button>

                                                    <button class="cust-btn" style="background: var(--app-grey); border-radius: 5px; margin-left: 10px;" v-if="job.hiredUsers.includes(applicant.user)">Hired</button>
                                                    <button class="cust-btn" style="border-radius: 5px; margin-left: 10px;" v-else  @click="hireModalDisplay = !hireModalDisplay">Hire</button>
                                                </div>
                                                <div class="hireModal" v-if="hireModalDisplay">
                                                    <div class="hireModalSub">
                                                        Are you sure you want to hire <br/> <b> {{ getUserById(applicant.user).firstname }} {{ getUserById(applicant.user).lastname }} </b> for the contract: <br/> <b>{{job.job_title}}</b> ?
                                                            <div class="hireModalBtn">
                                                                <button class="cust-btn" style="border-radius: 5px" @click="hireUser(job._id, applicant.user)">Yes Hire</button>
                                                                <button class="cust-btn" style="border-radius: 5px; background: #fff; border: 1px solid #000; color: #000;" @click="hireModalDisplay = !hireModalDisplay">cancel</button>
                                                            </div>
                                                        </div>
                                                </div>
                                            </div>
                                            <!-- {{ applicant }} -->
                                            </div>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                            </transition>


                        </div>

                        </div>



                    </div>


                </div>
                <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab" :class="['theme-transition', { 'dark': themeStore.darkMode }]">
                </div>
                </div>
               </div>
        </div>
        <!-- <div class="footer"><Footer/></div> -->

    </div>
      </template>

      <script>
      import { RouterLink } from 'vue-router';
      import Footer from '../components/Footer.vue';
      import JobCard from '../components/JobCard.vue';
      import Navbar from '../components/NavBar.vue';
      import ProfileNavBar from '../components/ProfileNavBar.vue';
      import { reactive } from 'vue';
      import LeftNav from '../components/LeftNav.vue'
      import PageFilter from '../components/PageFilter.vue';
      import axios from 'axios';
      import { ref } from 'vue';
      import themeStore from '@/theme/theme';
      import DotLoader from '../components/DotLoader.vue'


          export default {
            setup(){
                const toggleTheme = themeStore.toggleTheme;
                return{
                    themeStore,
                    toggleTheme,
                }
            },
              components:{ JobCard, Navbar, ProfileNavBar, Footer, RouterLink, LeftNav, PageFilter, DotLoader },
              data() {
                    return {
                    isCollapsed: true,
                    userDetails: '',
                    applicantDetailsMap: {},
                    jobs:'',
                    //
                    rooms: [],
                    applicantDetails: {},
                    jobsLoading: false,
                    hasFinishedLoad: false,
                    //
                    deleteJobOptions: false,
                    profileErrorMessage: false,

                    hireModalDisplay: false,
                    };
                },
                methods: {
                    calculateProfileCompletion(){
                    const user = this.userDetails;
                    let tempPercentage = 10;

                    if(this.userDetails){
                    if(user.profile){
                        tempPercentage += 0;
                    }
                    if(user.profile.tagline){
                        tempPercentage += 5;
                    }
                    if (user.profile.description){
                        tempPercentage += 10;
                    }
                    if (user.profile.company_name){
                        tempPercentage += 5;
                    }
                    if (user.profile.website){
                        tempPercentage += 5;
                    }
                    if (user.profile.industry_type){
                        tempPercentage += 5;
                    }
                    if(user.profile.phone){
                        tempPercentage += 5;
                    }
                    if(user.profile.location){
                        tempPercentage += 5;
                    }
                    if(user.profile.city){
                        tempPercentage += 5;
                    }
                    if(user.profile.socialAccount){
                        tempPercentage += 5;
                    }
                    if(user.profile.profileImage){
                        tempPercentage += 20;
                    }
                    if(user.isVerified){
                        tempPercentage += 20
                    }

                    return tempPercentage;
                }
                    },
                    toggleItem(index) {
                    this.jobs[index].open = !this.jobs[index].open;
                    },
                    toggleFullDetails(index) {
                    this.jobs[index].showDetails = !this.jobs[index].showDetails;
                    },

                    getJobApplications(index){
                        return this.jobs[index].applications;
                    },

                    // the function below is responsible for getting the currently signed in employer...
                    async getUserDetails() {
                        const token = localStorage.getItem('token'); // Get the token from localStorage
                        const user_url = `${this.api_url}/employer-info`; // Assuming user-info is the endpoint for user details

                        // Set up headers with the token
                        const headers = {
                            Authorization: `JWT ${token}`, // Assuming it's a JWT token
                        };

                        await axios.get(user_url, { headers })
                            .then((response) => {
                            // Handle the response here
                            // For example, you can set user details in your component's data
                            this.userDetails = response.data.employer;
                            console.log(response.data) // Assuming userDetails is a data property
                            this.isLoading = false;
                            this.getJobsByEmployer();
                            })
                            .catch((error) => {
                            // Handle errors
                            console.error(error);
                            });
                        },

                    getJobsByEmployer() {

                            this.jobsLoading = true;

                            const employer_id = this.userDetails.id;
                            // console.log(employer_id)
                            axios.get(`${this.api_url}/employer/${employer_id}/jobs`)
                            .then(response => {
                                this.jobsLoading = false;
                                this.hasFinishedLoad = true;
                                this.jobs = response.data.jobs;
                                this.jobs.reverse();
                                this.jobs.forEach(job => {
                                    job.open = false;
                                    job.showDetails = false;
                                    // this.applicantDetails = job.applications;
                                });
                                if(this.jobs.length > 0){
                                    this.jobs[0].open = true;
                                }


                                console.log("client jobs: ", this.jobs)
                                // console.log("job applicants: ", this.applicantDetails)
                                // Handle the list of jobs as needed
                            })
                            .catch(error => {
                                console.error('Error fetching jobs by employer:', error);
                                this.jobsLoading = false;
                                // Handle errors
                            });
                        },
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


                    getUserById(id) {
                        if (!this.applicantDetails[id]) {
                            axios.get(`${this.api_url}/get-info/${id}`)
                            .then(response => {
                                this.applicantDetails[id] = response.data.user;
                                console.log("user detail: ", response.data.user);
                            })
                            .catch(error => {
                                console.error('Error fetching user or employer details:', error);
                                // Handle errors
                            });
                        }
                            return this.applicantDetails[id];
                        },


                    // Fetch and store applicant details if not already stored
                    async getApplicantDetails(userId) {
                    if (!this.applicantDetailsMap[userId]) {
                        try {
                        const response = await axios.get(`${this.api_url}/get-info/${userId}`);
                        this.applicantDetailsMap[userId] = response.data.user;
                        console.log(this.applicantDetailsMap)
                        } catch (error) {
                        console.error('Error fetching user or employer details:', error);
                        // Handle errors
                        }
                    }
                    return this.applicantDetailsMap.userId;
                    },
                    //this function opens up in a new page the details of any job clicked...
                    navigateToUserprofile(user_id) {
                    const route = this.$router.resolve({ name: "Techzone - profile", params: { user_id: user_id } });
                    window.open(route.href, '_blank');
                    },

                    showUserProfile(user_id){

                    },

                    async deleteJob(job_id){
                        // Set up headers with the token
                        const token = localStorage.getItem('token');
                        const headers = {
                            Authorization: `JWT ${token}`, // Assuming it's a JWT token
                        };

                        try{
                        const response = await axios.delete(`${this.api_url}/jobs/${job_id}`, {headers});
                        if(response.status === 200){
                            console.log("job deleted successfully!");
                            console.log(response.data);

                            // after job is deleted successfully refresh job list...
                            this.getJobsByEmployer();
                        }
                        else{console.error("error deleting job")}
                        }catch (error){
                        console.error("network error: ", error);}
                        this.deleteJobOptions = false;
                    },

                     //this function opens up in a new page the details of any job clicked...
                    editJobPost(job_id) {
                        const route = this.$router.resolve({name: "Techzone - Edit Job", params: { job_id: job_id } });
                        window.open(route.href, '_blank');
                    },

                    async hireUser(jobId, userId) {
                        try {
                        // Retrieve the JWT token from local storage
                        const token = localStorage.getItem('token');
                        // Make a POST request to the API endpoint
                        const response = await axios.post(
                            `${this.api_url}/jobs/${jobId}/hire/${userId}`,
                            {},
                            {headers: {Authorization: `JWT ${token}`},}
                        );

                        if (response.status === 200) {
                            // Handle a successful hiring (e.g., show a success message)
                            this.getUserDetails();
                            // alert('User hired successfully');
                            this.$router.push(`/funding/${userId}/${jobId}`);


                        } else {
                            // Handle errors (e.g., display an error message)
                            console.error('Error hiring user');
                        }
                        } catch (error) {
                        console.error('Error hiring user:', error);
                        }
                    },

                    async messageUser(JobTitle, userId){
                        const roomDetails = {
                            name:JobTitle,
                            employerId: this.userDetails.id,
                            userId: userId
                        }
                        try{
                            const response = await axios.post(`${this.message_api_url}/api/rooms`, roomDetails);
                            console.log("message success...");
                            this.$router.push('/client/messages');
                        }catch (error){
                            console.log("user mesage error: ", error);
                        }
                    },

                    async fetchRooms() {
                    this.isLoading = true;
                    const response = await axios.get(`${this.message_api_url}/api/rooms/${this.userDetails.id}`);
                    this.rooms = response.data.reverse();
                    console.log("this is the room data", this.rooms);
                    },

                    checkUser(userId, roomName){
                        const rooms = this.rooms;
                        for(let i = 0; i < rooms.length; i++){
                            if(rooms[i].userId == userId && rooms[i].name == roomName){
                                return true
                            }
                            else{
                                return false
                            }
                        }
                    },


                },
                created() {
                this.getUserDetails().then(() => {
                this.fetchRooms();
                this.isLoading = false;
                });
                },

    }

      </script>


      <style scoped>
      *{
        font-size: 0.99em !important;
      }
      .dark .card-header{
        background: var(--accent-dark) !important;
        color: #fff !important;
      }
      .dark .card-body{
        background: var(--accent-dark) !important;
        color: #fff !important;
      }
      .dark .tz-client-tab{
        background: var(--accent-dark) !important;
        color: #fff !important;
      }
      .dark .cols{
        background: var(--accent-dark) !important;
        color: #fff !important;
      }

      .dark .tz_accordion_header{
        background: var(--accent-dark) !important;
        color: #fff !important;
      }
      .dark .tz_accordion_bodylg{
        background: var(--accent-dark) !important;
        color: #fff !important;
      }

      .dark .tz_accordion_body{
        background: var(--accent-dark) !important;
        color: #fff !important;
      }
      .dark .activity{
        color: #fff !important;
      }
      /* .dark .active{
        background: var(--app-blue) !important;
      } */
      .dark .zero-job{
        background: none !important;
        color: #000;
      }
      .dark .cards-container{
        background: none !important;
      }

.close_btn{
    font-size: 30px !important;
    position: absolute;
    right: 30px;
    top: 20px;
}

small{font-size: 12px;}
.Page-contents{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;
    width: 100%;
    padding: 5px;
    /* overflow-y: scroll; */
}
.page-grid-container{
    background: #F6F9FF;
}
.container{
    width: 80%;
}
.tz-client-header{
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
    padding: 30px !important;
    background: url('../components/Logos_icons/dashboard.png');
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    border-radius: 10px;
}

.tz-client-title{
    font-weight: bold;
    font-size: 1.8em !important;
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
    margin-top: 20px;
    /* height: 40px; */
}


.cards-container{
    margin-top: 10px;
    height: 80vh;
    overflow-y: scroll;
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


.tz_accordion {
  width: 100%;
}

.tz_accordion-item {
  /* border: 1px solid #ccc; */
  margin-bottom: 8px;
  border-radius: 10px 10px 0px 0px;
}

.tz_accordion_header {
  background-color: #fff;
  padding: 15px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: space-between;
  border-radius: 15px;
  border-bottom: 1px solid #efefef;
}
.tz_accordion_header > div{
    display: flex;
    flex-direction: row;
  justify-content: space-between;
  align-items: space-between;
}

.tz_accordion_body{
  padding: 15px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 25px;
  justify-content: space-between;
  border-radius: 0px 0px 15px 15px;
}

.tz_accordion_bodylg{
  padding: 20px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: space-between;
  border-radius: 15px;
  margin-top: 10px;
}

.applicants_card{
    /* position: absolute;
    z-index: 99999;
    background: #fff;
    height: 100dvh;
    top: 100px;
    left: 0;
    width: 100%;
    padding: 100px 20px; */
    /* margin: 10px 0px; */
    /* border-bottom: 1px solid #efefef; */
    padding: 10px;
}
.accordion_applicants{
    background: var(--app-blue);
    border: none;
    color: #fff;
    height: 50px;
    padding: 10px;
    border-radius: 5px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 5px;
    margin: 6px;
}
@keyframes glowing {
        0% {
          background-color: var(--app-blue);
          box-shadow: 0 0 2px var(--app-blue);
        }
        50% {
          background-color: var(--app-blue);
          box-shadow: 0 0 10px var(--app-blue);
        }
        100% {
          background-color: var(--app-blue);
          box-shadow: 0 0 2px var(--app-blue);
        }
      }
.accordion_body_first{
    max-width: 400px;
}

.arrow {
  width: 12px;
  height: 12px;
  border-style: solid;
  border-width: 1px 1px 0 0;
  display: inline-block;
  transform: rotate(-45deg);
  transition: transform 0.3s ease-in-out;
}

.arrow-down {
  transform: rotate(132deg);
}

.job_effect_btns{
    display: flex;
    flex-direction: row;
    gap: 10px;
    padding: 20px 0px 0px 5px;
}

.job-btn{
padding: 5px 10px;
border: 1px solid #efefef;
border-radius: 5px;
color: #fff !important;
font-size: 0.6em;
cursor: pointer;
}

.job-btn:hover{
    background: #e80000;
}
.edit-btn{
background: green;
}

.delete-btn{
background: red;
}

.deleteOptions > span{
    text-decoration: underline;
    cursor: pointer;
}

.zero-job{
    display: flex;
    flex-direction: column;
    height: 50vh;
    justify-content: center;
    align-items: center;
    text-align: center;
    background: none !important;
}


.error-message {
  background-color: #ffcccb;
  color: #4b0707;
  padding: 10px;
  text-align: center;
  position: fixed;
  left: 0;
  right: 0;
  z-index: 99999;
  margin: 0 auto;
  max-width: 500px;
  border-radius: 10px;
  margin-top: 10px;
}


.hireModal{
    position: fixed;
    top: 0;
    left: 0;
    z-index: 99999999;
    height: 100vh;
    width: 100%;
    background: #00000079;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    overflow: auto;
}
.hireModalSub{
    width: 350px;
    text-align: center;
    padding: 30px;
    border-radius: 5px;
    background: #fff;
    gap: 10px;
}

.hireModalBtn{
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
    margin-top: 20px;
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