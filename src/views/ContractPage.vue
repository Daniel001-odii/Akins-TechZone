<template>

<Alert
    v-if="showAlertBox"
    :message="alertMessage"
    :icon="alertIcon"
    :alertType="alertType" />


     <div v-if="showFeedbackModal" class="feedback_modal">
        <div class="feedback_modal_inner">

            <form class="modal-body" @submit.prevent="sendClientFeedBack">
                    <div>
                        <div class="feedback_col">
                            <h2>Submit A feedback</h2>
                            <small style="width: 300px !important;">a very sincere feedback tells alot about the client and helps other freelancers to work better with the client.</small>
                        </div>
                          <!-- Example 1: Communication -->
                        <div class="feedback_row">Communication
                        <div class="rating">
                            <label v-for="value in 5" :key="value" class="rating-item">
                            <input type="radio" :value="value" v-model="rating.grade_a" :id="'communication-' + value" name="communication" class="sr-only" />
                            <div :class="{ 'selected': value <= rating.grade_a }" class="custom-rating-box tz_rate" @click="selected(value, 'grade_a')">
                                {{ value }}
                            </div>
                            </label>
                        </div>
                        </div>

                        <!-- Example 2: Requirements -->
                        <div class="feedback_row">Requirements
                        <div class="rating">
                            <label v-for="value in 5" :key="value" class="rating-item">
                            <input type="radio" :value="value" v-model="rating.grade_b" :id="'requirements-' + value" name="requirements" class="sr-only" />
                            <div :class="{ 'selected': value <= rating.grade_b }" class="custom-rating-box tz_rate" @click="selected(value, 'grade_b')">
                                {{ value }}
                            </div>
                            </label>
                        </div>
                        </div>

                        <!-- Example 3: Payment Promptness -->
                        <div class="feedback_row">Payment Promptness
                        <div class="rating">
                            <label v-for="value in 5" :key="value" class="rating-item">
                            <input type="radio" :value="value" v-model="rating.grade_c" :id="'payment-' + value" name="payment" class="sr-only" />
                            <div :class="{ 'selected': value <= rating.grade_c }" class="custom-rating-box tz_rate" @click="selected(value, 'grade_c')">
                                {{ value }}
                            </div>
                            </label>
                        </div>
                        </div>

                        <!-- Example 4: Project Clarity and Scope -->
                        <div class="feedback_row">Project Clarity and Scope
                        <div class="rating">
                            <label v-for="value in 5" :key="value" class="rating-item">
                            <input type="radio" :value="value" v-model="rating.grade_d" :id="'project-' + value" name="project" class="sr-only" />
                            <div :class="{ 'selected': value <= rating.grade_d }" class="custom-rating-box tz_rate" @click="selected(value, 'grade_d')">
                                {{ value }}
                            </div>
                            </label>
                        </div>
                        </div>

                        <!-- Example 4: Project Clarity and Scope -->
                        <div class="feedback_row">Overall Satisfaction
                        <div class="rating">
                            <label v-for="value in 5" :key="value" class="rating-item">
                            <input type="radio" :value="value" v-model="rating.grade_e" :id="'satisfaction-' + value" name="satisfaction" class="sr-only" />
                            <div :class="{ 'selected': value <= rating.grade_e }" class="custom-rating-box tz_rate" @click="selected(value, 'grade_e')">
                                {{ value }}
                            </div>
                            </label>
                        </div>
                        </div>

                    </div>
            </form>
            <div class="feedback_modal_footer">
                <button type="button" class="btn btn-secondary" @click="showFeedbackModal = !showFeedbackModal">Close</button>
                <button type="button" class="btn btn-primary" @click="sendClientFeedBack">Submit feedback</button>
            </div>
        </div>
    </div>


    <!-- add message toast to page -->
    <Toast ref="toast"></Toast>



    <div class="page-grid-container" :class="['theme-transition', { 'dark': themeStore.darkMode }]">
        <div class="Navigation">
            <!-- <div v-if="isLoading">Loading...</div> -->
            <NavBar/>
        </div>
        <div class="Left-Nav">
            <LeftNav />
        </div>
        <div class="Page-header">
            <div class="page-title" :class="['theme-transition', { 'dark': themeStore.darkMode }]">Contract<span v-if="isEmployer">-Review</span></div>
        </div>


        <div v-if="!isLoading" class="Page-contents" :class="['theme-transition', { 'dark': themeStore.darkMode }]">
               <div class="tz_job_content_area">

                <!-- add all alerts and badges immediately below this comment...... -->
                <div class="alert alert-danger alert-success alert-dismissible fade show" v-if="jobIsDeclined">You declined the contract offer!
                    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                </div>
                <div class="alert alert-success alert-dismissible fade show" v-if="jobIsAccepted">You accepted the contract offer!
                    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                </div>

                    <div class="job-detail-header" :class="['theme-transition', { 'dark': themeStore.darkMode }]">
                        <div class="jdh-left">
                            <!-- <div class="alert alert-success" style="width: 100%;" v-if="job.completedBy.includes(this.$route.params.user_id.toString())">Project completed successfully!</div> -->
                            <!-- <div class="alert alert-info" v-if="requestedReview">You have requested for review</div> -->
                            <span><b>{{ job.job_title }}</b></span>
                            <span>{{ job.employer_company }}</span>
                                <!---------------clock icon-------------->
                                <!---------------location icon-------------->
                                <span class="jdh-detail">
                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 15 20" fill="none">
                                    <path d="M7.5 19.0532L2.19667 13.7499C1.14779 12.701 0.433489 11.3646 0.144107 9.90979C-0.145275 8.45494 0.0032557 6.94695 0.570915 5.57651C1.13858 4.20607 2.09987 3.03473 3.33323 2.21063C4.5666 1.38652 6.01664 0.946655 7.5 0.946655C8.98336 0.946655 10.4334 1.38652 11.6668 2.21063C12.9001 3.03473 13.8614 4.20607 14.4291 5.57651C14.9967 6.94695 15.1453 8.45494 14.8559 9.90979C14.5665 11.3646 13.8522 12.701 12.8033 13.7499L7.5 19.0532ZM11.625 12.5716C12.4407 11.7558 12.9963 10.7164 13.2213 9.58482C13.4463 8.45328 13.3308 7.28042 12.8892 6.21455C12.4477 5.14868 11.7 4.23768 10.7408 3.59673C9.78149 2.95578 8.6537 2.61368 7.5 2.61368C6.3463 2.61368 5.21851 2.95578 4.25924 3.59673C3.29996 4.23768 2.55229 5.14868 2.11076 6.21455C1.66923 7.28042 1.55368 8.45328 1.77871 9.58482C2.00374 10.7164 2.55926 11.7558 3.375 12.5716L7.5 16.6966L11.625 12.5716ZM7.5 10.1133C7.05797 10.1133 6.63405 9.93766 6.32149 9.6251C6.00893 9.31254 5.83333 8.88861 5.83333 8.44659C5.83333 8.00456 6.00893 7.58064 6.32149 7.26808C6.63405 6.95552 7.05797 6.77992 7.5 6.77992C7.94203 6.77992 8.36595 6.95552 8.67851 7.26808C8.99107 7.58064 9.16667 8.00456 9.16667 8.44659C9.16667 8.88861 8.99107 9.31254 8.67851 9.6251C8.36595 9.93766 7.94203 10.1133 7.5 10.1133Z" fill="#4E79BC"/>
                                </svg>
                                {{ job.location }}
                                </span>
                                <!---------------clock icon-------------->
                                <span class="jdh-detail">
                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 20 22" fill="none">
                                    <path d="M18.75 12.25C18.75 17.08 14.83 21 10 21C5.17 21 1.25 17.08 1.25 12.25C1.25 7.42 5.17 3.5 10 3.5C14.83 3.5 18.75 7.42 18.75 12.25Z" stroke="#4E79BC" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M10 7V12" stroke="#4E79BC" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M7 1H13" stroke="#4E79BC" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                                {{ getHoursTillDate( job.created_at) }} ago
                                </span>
                                <span class="jdh-detail">
                                    <!------------wallet icon-------------->
                                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 20 18" fill="none">
                                        <path d="M16 4H19C19.2652 4 19.5196 4.10536 19.7071 4.29289C19.8946 4.48043 20 4.73478 20 5V17C20 17.2652 19.8946 17.5196 19.7071 17.7071C19.5196 17.8946 19.2652 18 19 18H1C0.734784 18 0.48043 17.8946 0.292893 17.7071C0.105357 17.5196 0 17.2652 0 17V1C0 0.734784 0.105357 0.48043 0.292893 0.292893C0.48043 0.105357 0.734784 0 1 0H16V4ZM2 6V16H18V6H2ZM2 2V4H14V2H2ZM13 10H16V12H13V10Z" fill="#4E79BC"/>
                                    </svg>
                                    {{ job.budget_type }} : (₦){{ formatBudgetAmount(job.budget) }}
                                </span>
                        </div>
                    </div>
                    <div class="tz-job-content-description" >
                            <p class="tz-form-title">Job Description</p>
                            {{ job.job_description }}
                    </div>

                    <div class="tz-job-content-description">
                            <p class="tz-form-title">Payment type</p>
                            {{ job.budget_type }}
                    </div>
                    <div class="tz-job-content-description" v-if="getUserById(job.employer)">
                            <p class="tz-form-title">About recruiter</p>
                            <div class="jd-section">
                        <div v-if="getUserById(job.employer)" class="little-employe" :class="['theme-transition', { 'dark': themeStore.darkMode }]">
                            <img style="height: 70px; width: 70px; border-radius: 20%" :src="getUserById(job.employer).profile.profileImage">
                            <div>
                                <span style="color: var(--app-blue);">{{ getUserById(job.employer).profile.company_name }} | {{ getUserById(job.employer).profile.tagline }}</span>
                                <br/>location: {{ getUserById(job.employer).profile.city }}
                                <br/>web: {{ getUserById(job.employer).profile.website }}
                                <br/>company type: {{  getUserById(job.employer).profile.industry_type }}
                            </div>
                        </div>
                    </div>
                    </div>


                    <div class="tz-job-content-description">
                            <p class="tz-form-title">Contract actions</p>
                            <div class=""  v-if="jobIsLoaded && userIsLoaded">
                                <!-- the buttons below will only show if the job in view is a an assigned job....... -->
                                <!-- options below should only show when job is still under pending..... -->
                                <span v-if="jobIsPending">
                                    <p>contract pending</p>
                                    <button class="btn btn-secondary" @click="declineJob">Decline</button> or
                                    <button class="btn btn-primary" @click="accceptJob">Accept</button><br/><br/>
                                </span>

                                <!-- other options should be displyed if only contract has been accepted -->
                                <span v-if="jobIsAccepted">
                                    <p  v-if="isUser && job.requestedReview.includes(this.$route.params.user_id.toString())">Contract review request has been sent to the client</p>
                                    <button class="btn btn-primary" @click="requestApproval" v-if="isUser && job.requestedReview.includes(this.$route.params.user_id.toString()) && !job.completedBy.includes(this.$route.params.user_id.toString())"><span v-if="!requestLoading">submit contract for review </span><span v-if="requestLoading">loading...</span></button>
                                    <!-- <button class="btn btn-primary" disabled>contract review request sent</button> -->
                                    <button class="btn btn-success" disabled v-if="job.completedBy.includes(this.$route.params.user_id.toString())">Job completed</button>
                                </span>
                                <span v-if="jobIsDeclined">You declined the contract offer</span>

                                <!-- the buttons below will only show if the job in view is a contract....... -->
                                <span v-if="contractType === 'recruit' && !jobIsDeclined">
                                    <button class="btn btn-primary" @click="requestApproval" v-if="isUser && !job.requestedReview.includes(this.$route.params.user_id.toString())"><span v-if="!requestLoading">submit contract for review </span><span v-if="requestLoading">loading...</span></button>
                                    <!-- <button class="btn btn-primary" v-if="isUser && job.requestedReview.includes(this.$route.params.user_id.toString())" disabled>contract review request sent2</button> -->
                                </span>



                            </div>
                            <div> <!-- FOR EMPLOYERRRR VUEWING!!! -->
                                <button @click="markJobAsComplete(job._id)" v-if="isEmployer && !job.completedBy.includes(this.$route.params.user_id.toString()) && job.requestedReview.includes(this.$route.params.user_id.toString())" class="btn btn-primary" >Approve job completion request</button>
                                <button class="btn btn-primary" v-if="isEmployer && job.requestedReview.includes(this.$route.params.user_id.toString()) && this.job.completedBy.includes(this.$route.params.user_id.toString())"  disabled>contract review request approved</button>
                            </div>

                    </div>
                    <div class="tz-job-content-description">
                        <p class="tz-form-title">Contract timeline</p>
                        <div>
                            <span v-if="jobIsDeclined" style="color: red">contract offer declined</span>
                            <div  v-if="!jobIsDeclined">
                                <span class="contract_timeline timeline_active">contract started</span>
                                <i class="bi bi-arrow-right"></i>
                                <span class="contract_timeline" :class="job.requestedReview.includes(this.$route.params.user_id.toString()) ? 'timeline_active':''">contract review request sent</span>
                                <i class="bi bi-arrow-right"></i>
                                <span class="contract_timeline" :class="job.completedBy.includes(this.$route.params.user_id.toString()) ? 'timeline_active':''">contract review approved</span>
                                <i class="bi bi-arrow-right"></i>
                                <span class="contract_timeline" :class="job.completedBy.includes(this.$route.params.user_id.toString()) ? 'timeline_active':''"> job completed</span>
                            </div>

                            <!-- <i class="bi bi-arrow-right"></i>
                            <span class="contract_timeline" :class="job.userFeedbacks.includes(this.$route.params.user_id.toString()) ? 'timeline_active':''">feedback and review sent </span> -->
                        </div>
                    </div>

                    <div class="tz-job-content-description">
                        <p class="tz-form-title">Feedback</p>
                        <div class="btn_ro">
                            <button type="button" class="btn btn-secondary" v-if="isEmployer && job.requestedReview.includes(this.$route.params.user_id.toString()) && this.job.completedBy.includes(this.$route.params.user_id.toString())">submit Freelancer feedback</button>
                            <button type="button" class="btn btn-secondary" @click="showFeedbackModal = !showFeedbackModal" v-if="isUser && job.requestedReview.includes(this.$route.params.user_id.toString()) && job.completedBy.includes(this.$route.params.user_id.toString())">submit job feedback</button>

                            <span v-if="isUser && job.requestedReview.includes(this.$route.params.user_id.toString()) && !job.completedBy.includes(this.$route.params.user_id.toString())">Awaiting client approval before job feedback is available</span> <br/><br/>
                            <p v-if="isEmployer && job.requestedReview.includes(this.$route.params.user_id.toString()) && !job.completedBy.includes(this.$route.params.user_id.toString())" style="color:grey">Job not yet valid for feedback <br/><small>feedbacks can only be given after the contract has been completed.</small></p>

                            <!-- <i v-if="isEmployer" class="bi bi-arrow-return-right"></i>  -->



                            <!-- <span v-if="job.completedBy.includes(this.$route.params.user_id.toString()) && job.requestedReview.includes(this.$route.params.user_id.toString()) && isUser">the client sent you a feedback</span> -->
                            <!-- <span v-else><i v-if="isEmployer" class="bi bi-arrow-return-right"></i> you sent a feedback</span> -->
                            <!-- <span>Contract Feedback submitted</span> -->
                        </div>
                    </div>

                </div>

        </div>

        <div v-else style="height: 100vh; width: 100%; display: flex; justify-content: center; align-items: center;" class="Page-contents">
            <DotLoader/>
            <!-- <SkeletonLoader/> -->
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
      import DotLoader from '../components/DotLoader.vue'
      import { ref, onMounted} from 'vue';
      import Toast from '@/components/Toast.vue';
      import themeStore from '@/theme/theme';
      import SkeletonLoader from '../components/pageSkeleton.vue'
      import Modal from '../components/modal.vue'
      import Alert from '../components/Alert.vue'

      const toggleTheme = themeStore.toggleTheme;
      const token = localStorage.getItem('token'); // Get the user's JWT token from localStorage

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
            draggable,
            DotLoader,
            Toast,
            SkeletonLoader,
            Modal,
            Alert,
        },
        setup() {
                    return {
                    themeStore,
                    toggleTheme,

                    };
                },
        data() {
            return {
            job: '',
            isLoading: true,
            shareLink: window.location.href,
            job_id: '',
            showFeedbackModal: false,

            userDetails: '',
            employerDetails: [],

            selectedFiles: [],
            filesToUpload: '',

            userAppliedJobs: '',
            jobIsApplied: null,
            jobIsCompleted: null,

            coverLetter: '',
            counterOffer: '',
            reasonForCounterOffer: '',
            attachment: '',

            isSubmitting: null,
            employerJob: [],
            isUser: true,
            isEmployer: null,

            rating: {
                grade_a: 0,
                grade_b: 0,
                grade_c: 0,
                grade_d: 0,
                grade_e: 0,
            },

            selectedRating: null,
            userCompletedContract: false,

            requestedReview: false,
            showAlertBox: false,

            // making ure data is ready before usage and conditionals..
            userIsLoaded: false,
            jobIsLoaded: false,
            jobIsPending: null,
            jobIsAccepted: null,
            jobIsDeclined: null,

            requestLoading: false,
            contractType: null,

            // fluentError: '',

            };
        },
        methods: {
            showAlert(type, message, icon){
                    this.showAlertBox = !this.showAlertBox;
                    this.alertType = type;
                    this.alertMessage = message;
                    this.alertIcon = icon;
                },

                copyText() {
                    const contentToCopy = document.getElementById('contentToCopy').innerText;
                    navigator.clipboard.writeText(contentToCopy)
                        .then(() => {
                        this.$refs.toast.showSuccessToast('Successfully copied to clipboard');
                        })
                        .catch((error) => {
                        console.error('Error copying to clipboard:', error);
                        });
                    },

                async fetchJobListings() {
                    const jobId = this.$route.params.job_id;
                    this.isLoading = true;

                    try{
                        const response = await axios.get(`${this.api_url}/jobs/${jobId}`);
                        this.job = response.data.job;
                        this.isLoading = false;
                        this.jobIsLoaded = true;
                    }
                    catch(error){
                            console.log(error);
                            this.showAlert("error", "The requested job does not exist",);
                            // this.isLoading = false;
                    }

                },

                async fetchEmployerJobs(jobId) {
                try {
                    if (!this.employerJob[jobId]) {
                    const response = await axios.get(`${this.api_url}/jobs/${jobId}`);

                    if (response && response.data && response.data.job) {
                        this.employerJob[jobId] = response.data.job;
                    }
                    }
                    return this.employerJob[jobId];
                } catch (error) {
                    console.error(error);
                    // Handle error scenarios as needed
                    return null; // or throw error
                }
                },


                getHoursTillDate(dateString) {
                const date = new Date(dateString)
                const now = new Date()
                const diff = now.getTime() - date.getTime()
                const diffInHours = Math.floor(diff / (1000 * 60 * 60))
                const diffInMins = Math.floor(diff / (1000 * 60))
                const diffInSecs = Math.floor(diff / (1000))
                const timeInSeconds = Math.floor(date.getTime() / 1000);
                //calculate respectively......
                if (diffInMins < 60) {return `${diffInMins} minutes`}
                else if (diffInHours < 24) {return `${diffInHours} hours`}
                else if (diffInHours < 720) {
                    const diffInDays = Math.floor(diffInHours / 24)
                    return `${diffInDays} days`
                } else {
                    const diffInMonths = Math.floor(diffInHours / 720)
                    return `${diffInMonths} months`
                }
                },

                formatBudgetAmount(value){
                    const formattedValue = new Intl.NumberFormat('en-US').format(value);
                    return formattedValue;
                },

                async submitApplication() {
                    this.isSubmitting = true;

                    const applying_jobId = this.job_id; // Replace with the actual job ID you want to apply for

                    const applicationData = {
                    coverLetter: this.coverLetter, // Replace with the user's cover letter
                    attachment: this.attachment, // Replace with the user's attachment (file data or file path)
                    counterOffer: this.counterOffer, // Replace with the user's counter offer value
                    reasonForCounterOffer: this.reasonForCounterOffer, // Replace with the user's reason for the counter offer
                    };

                    const config = {
                    headers: {
                        Authorization: `JWT ${token}`,
                    },
                    };

                    try {
                    const response = await axios.post(`${this.api_url}/apply/${this.$route.params.job_id}`, applicationData, config);
                    // console.log('Job application successful:', response.data);
                    this.showModal = true;
                    this.isSubmitting = false;

                    // Optionally, you can show a success message or perform other actions here.
                    } catch (error) {
                    console.error('Error applying for job:', error);
                    this.isSubmitting = false;
                    // Handle errors, e.g., show an error message to the user.
                    }
                },

                getUserDetails() {
                    this.isLoading = true;
                    const token = localStorage.getItem('token'); // Get the token from localStorage
                    const user_url = `${this.api_url}/user-info`; // Assuming user-info is the endpoint for user details
                    // Set up headers with the token
                    const headers = {
                        Authorization: `JWT ${token}`, // Assuming it's a JWT token
                    };
                    axios.get(user_url, { headers })
                        .then((response) => {
                        // Handle the response here
                        this.userDetails = response.data.user;
                        this.userIsLoaded = true;
                        console.log("user details: ", this.userDetails);

                        // check for the state of the current job in view...
                            if(this.userIsLoaded){
                                // first check if the job is in a pending state waiting for users response.....
                                this.jobIsPending = this.userDetails.pending_jobs.some(job => String(job.job_id) === String(this.$route.params.job_id));
                                // second check if job is accepted and set state as accepted.....
                                this.jobIsAccepted = this.userDetails.accepted_jobs.some(job => String(job.job_id) === String(this.$route.params.job_id));
                                // thirdly check if the job has been declined.....
                                this.jobIsDeclined = this.userDetails.declined_jobs.some(job => String(job.job_id) === String(this.$route.params.job_id));


                            }
                        })
                        .catch((error) => {
                        // Handle errors
                        this.isLoading = false;
                        console.error(error);
                        });
                },

                 // now we try to get the employer's details ......
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

                async fetchUserAppliedJobs() {
                    if(this.jobIsLoaded){
                        try {
                    this.isLoading = true;
                    const response = await axios.get(`${this.api_url}/user-applied-jobs`, {
                    headers: {
                        Authorization: `JWT ${localStorage.getItem('token')}`,
                    },
                    });

                    if (response && response.data && response.data.jobs) {
                    this.userAppliedJobs = response.data.jobs;

                    const isJobApplied = this.userAppliedJobs.some(
                        (job) => job._id === this.$route.params.job_id
                    );
                    this.jobIsApplied = isJobApplied;

                    for (let i = 0; i < this.job.applications.length; i++) {
                        if (this.job.applications[i].user.includes(this.userDetails.id)) {
                        this.applicationForm = this.job.applications[i];
                        this.coverLetter = this.job.applications[i].coverLetter;
                        this.counterOffer = this.job.applications[i].counterOffer;
                        this.reasonForCounterOffer = this.job.applications[i].reasonForCounterOffer;
                        }
                    }

                    }
                } catch (error) {
                    console.error(error);
                    // Handle errors as needed
                } finally {
                    this.isLoading = false;
                };
                    }

                },


                handleButtonClick(){
                    const fileInput = document.querySelector('input[type="file"]');
                    fileInput.click();
                    },

                handleDrop(event){
                    event.preventDefault();
                    const file = event.dataTransfer.files[0];
                    selectedFiles.value = file;
                    },
                handleFileChange(event) {
                    // Get the selected files and update the selectedFiles array
                    const files = event.target.files;
                    this.selectedFiles = Array.from(files).map((file) => file.name);
                    // Store the selected files in a data property or component state
                    this.filesToUpload = files;
                    },

                async markJobAsComplete(jobId) {
                    const userId = this.$route.params.user_id;
                    const employerId = this.job.employer;
                    // console.log("job id:", jobId, "user id:", userId, "employer id:", employerId)
                    try {
                    const response = await axios.post(`${this.api_url}/approve-review-request`,
                    {
                        jobId: jobId,
                        userId: userId,
                        employerId: employerId},
                    {
                        headers: {
                        Authorization: `JWT ${token}`},
                    }
                    );

                    this.showAlert("success", "Review request approved",);
                    // alert("review request approved!");
                    // refresh the page...
                    window.location.reload();

                } catch (error) {
                    console.error('Error marking job a complete:', error);
                }
                    },
                async sendClientFeedBack(){
                    this.showAlert("success", "feedback sent successfully")
                    try{
                    const jobId = this.job._id;
                    const employerId = this.job.employer;
                    const userId = this.userDetails.id;
                    const ratedValue = (this.rating.grade_a + this.rating.grade_b + this.rating.grade_c + this.rating.grade_d + this.rating.grade_e)/5;

                    // console.log(jobId, employerId, userId, ratedValue)
                    const response = await axios.post(`${this.api_url}/employer/${employerId}/rating`, {
                            jobId,
                            userId,
                            ratedValue
                            });
                        console.log(response.data);
                         // close modal
                         this.showFeedbackModal = false;
                    }

                    catch(error){
                        // console.error('Error sending feedback rating:', error.message);
                        this.showAlert("error", error.message)
                    }
                },
                async requestApproval(){
                    try{
                    this.requestLoading = true;
                    const jobId = this.job._id;
                    const employerId = this.job.employer;
                    const userId = this.userDetails.id;
                    const response = await axios.post(`${this.api_url}/jobs/requestApproval`, {
                            jobId,
                            userId,
                            employerId
                            });
                        console.log(response.data);
                        this.requestLoading = false;
                        window.location.reload();
                    }
                    catch(error){
                        console.error('Error requesting for approval:', error.message);
                    }
                },
                checkLoginStatus(){
                const token = localStorage.getItem('token');
                const userRole = token ? JSON.parse(atob(token.split('.')[1])).role : null;

                if (userRole === 'user') {
                this.isUser = true;
                this.isEmployer = false; // Corrected variable name
                } else if (userRole === 'employer') {
                this.isUser = false;
                this.isEmployer = true;
                } else {
                this.userNotLoggedIn = true;
                }

                // console.log("logged in as", userRole);
                },
                checkForCompletion(){
                    this.userCompletedContract = true;
                    // console.log("job completed by: ", this.job.completedBy);
                    if(this.job.completedBy.includes(this.$route.params.user_id.toString())){
                        alert("user already closed contract...")
                    };
                },
                async accceptJob(){
                    const jobId = this.$route.params.job_id;
                    const userId = this.$route.params.user_id;

                    try{
                        const response = await axios.post(`${this.api_url}/offer/accept`,
                        {
                            jobId: jobId,
                            userId: userId,
                        },
                        {
                            headers: {Authorization: `JWT ${token}`},
                        }
                        );
                        // console.log(response);
                        // window.navigator.reload();
                        this.showAlert("success", "You accepted the offer!",);
                        // this.isLoading = true;
                        // setTimeout(this.isLoading = true, 3000);
                    }
                    catch(error){
                        console.error('Error accepting job:', error);
                    }
                },

                async declineJob(){
                    const jobId = this.$route.params.job_id;
                    const userId = this.$route.params.user_id;

                    try{
                        const response = await axios.post(`${this.api_url}/offer/decline`,
                        {
                            jobId: jobId,
                            userId: userId,
                        },
                        {
                            headers: {Authorization: `JWT ${token}`},
                        }
                        );
                        this.showAlert("error", "You declined the offer!",);
                        window.location.reload();
                        // this.isLoading = true;
                        // setTimeout(this.isLoading = true, 3000);
                    }
                    catch(error){
                        console.error('Error declining job:', error);
                    }
                },

                selected(value, section) {
                    this.rating[section] = value;
                },

                checkJobState() {
                    if(this.userIsLoaded){
                        const jobIdToCheck = this.$route.params.job_id;
                        console.log('checking for job: ', jobIdToCheck);
                        const index = this.userDetails.pending_jobs.findIndex(job => String(job.job_id) === String(jobIdToCheck));
                        if (index !== -1) {
                            this.jobIsPending = true;
                            console.log(`Job with id '${jobIdToCheck}' found successfully.`);
                        } else {
                            this.jobIsPending = false;
                            console.log(`No job found with id '${jobIdToCheck}'.`);
                        }
                    }
                },




        },
        created() {
            this.checkLoginStatus();
            if(this.isUser){
                this.getUserDetails();
                this.fetchUserAppliedJobs();
                this.checkJobState();
                // this.checkForCompletion();
            }
            this.contractType = this.$route.params.type || 'default';
            this.fetchJobListings();




//             this.getUserDetails().then(() => {
//   this.fetchRooms(this.userDetails.id);
//   this.isLoading = false;
//   });

        },
        mounted(){

        }
        };



      </script>


<style scoped>
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
.tz_job_content_area, .tz-form-area{
    /* border: 2px solid green; */
    width:100%;
    padding: 20px;
    overflow-y: scroll;
    /* height: 90vh; */
}

.tz-form-content{
    display: flex;
    flex-direction: column;
    padding: 10px;
}
.row{
    flex-direction: row !important;
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

.btn_row{
    display: flex;
    flex-direction: row;
    gap: 20px;
}
.drop-zone {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 100%;
  height: 150px;
  border: 2px dashed #ccc;
  border-radius: 5px;
  margin-bottom: 20px;
}
/* .cloud{
    height: 68px;
    width: 160px;
} */
butto {
  padding: 10px 20px;
  background: #4CAF50;
  color: white;
  border: none;
  cursor: pointer;
}

.feedback_modal{
    height: 100vh;
    width: 100%;
    position: fixed;
    background: #0000007f;
    z-index: 99999;
    display: flex;
    justify-content: center;
    align-items: center;
}

.feedback_modal_inner{
    /* height: 300px; */
    background: #fff;
    /* max-width: 500px; */
    padding: 20px;
    border-radius: 30px;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    gap: 20px;
}
.feedback_modal_footer{
    display: flex;
    flex-direction: row;
    gap: 20px;
    /* border: 1px solid red; */
    justify-content: flex-end;
}
.feedback_col{
    padding: 20px;
}
.feedback_row{
    padding: 10px;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 20px;
    border: 0.5px solid #efefef;
    margin-bottom: 10px;
    border-radius: 10px;
}
.closeBtn{
    right: 0px !important;
}
.tz_rate{
    border: 1px solid #efefef;
    border-radius: 10px;
    height: 40px;
    width: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
}


@media screen and (max-width: 1200px) {
    .Page-contents{
        flex-direction: column;
        overflow-y: scroll;
    }
    .tz_job_content_area, .tz-form-area{
        width: 100%;
        overflow: visible;
        height: auto;
        /* border: 2px solid red; */
    }
}

/* This style is used to visually represent the rating as custom-designed boxes */
.rating {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 300px !important;
  font-size: 24px;
  gap: 20px;
}

.rating-item {
  position: relative;
  cursor: pointer;
}

/* Hide the radio buttons visually */
.sr-only {
  position: absolute;
  opacity: 0;
  clip: rect(0 0 0 0);
  width: 1px;
  height: 1px;
  margin: -1px;
  padding: 0;
  border: 0;
  overflow: hidden;
}

/* Style for the custom-designed rating boxes */
.custom-rating-box {
  /* border: 2px solid #000; */
  transition: background-color 0.3s ease-in-out, color 0.3s ease-in-out;
}

.selected {
  background-color:var(--app-blue);
  color: #000;
  color: #fff;
}

.contract_timeline {
    color: var(--app-grey);
}
.timeline_active{
    color: rgb(11, 164, 31);
    font-weight: bold;
}





/* syling for contract timeline.......... */
</style>
