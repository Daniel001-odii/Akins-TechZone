<template>
     <Modal v-if="showModal">
        <template #message>Application successfuly sent</template>
        <template #buttonAndText>
            <RouterLink to="/jobs">
                  <button class="cust-btn">Okay</button>
            </RouterLink>
        </template>
    </Modal>

    <Alert
    v-if="showAlertBox"
    :message="alertMessage"
    :icon="alertIcon"
    :alertType="alertType" />



    <div class="page-grid-container" :class="['theme-transition', { 'dark': themeStore.darkMode }]">
        <div class="Navigation">
            <!-- <div v-if="isLoading">Loading...</div> -->
            <NavBar/>
        </div>
        <div class="Left-Nav">
            <LeftNav />
        </div>
        <div class="Page-header">
            <div class="page-title" :class="['theme-transition', { 'dark': themeStore.darkMode }]">Application</div>
        </div>

        <div v-if="!isLoading" class="Page-contents" :class="['theme-transition', { 'dark': themeStore.darkMode }]">

               <div class="tz-job-content-area">
            <div v-if="jobIsApplied" class="alert alert-info">
                You already submitted an application for this job . . .
            </div>
                    <!-- <div class="tz-company-header-img"></div> -->
                    <div class="job-detail-header" :class="['theme-transition', { 'dark': themeStore.darkMode }]">
                        <div class="jdh-left">
                            <span><b>{{ job.job_title }}</b></span>
                            <span>{{ job.employer_company }}</span>
                                <!---------------clock icon-------------->
                                <!---------------location icon-------------->
                                <span class="jdh-detail">
                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 15 20" fill="none">
                                    <path d="M7.5 19.0532L2.19667 13.7499C1.14779 12.701 0.433489 11.3646 0.144107 9.90979C-0.145275 8.45494 0.0032557 6.94695 0.570915 5.57651C1.13858 4.20607 2.09987 3.03473 3.33323 2.21063C4.5666 1.38652 6.01664 0.946655 7.5 0.946655C8.98336 0.946655 10.4334 1.38652 11.6668 2.21063C12.9001 3.03473 13.8614 4.20607 14.4291 5.57651C14.9967 6.94695 15.1453 8.45494 14.8559 9.90979C14.5665 11.3646 13.8522 12.701 12.8033 13.7499L7.5 19.0532ZM11.625 12.5716C12.4407 11.7558 12.9963 10.7164 13.2213 9.58482C13.4463 8.45328 13.3308 7.28042 12.8892 6.21455C12.4477 5.14868 11.7 4.23768 10.7408 3.59673C9.78149 2.95578 8.6537 2.61368 7.5 2.61368C6.3463 2.61368 5.21851 2.95578 4.25924 3.59673C3.29996 4.23768 2.55229 5.14868 2.11076 6.21455C1.66923 7.28042 1.55368 8.45328 1.77871 9.58482C2.00374 10.7164 2.55926 11.7558 3.375 12.5716L7.5 16.6966L11.625 12.5716ZM7.5 10.1133C7.05797 10.1133 6.63405 9.93766 6.32149 9.6251C6.00893 9.31254 5.83333 8.88861 5.83333 8.44659C5.83333 8.00456 6.00893 7.58064 6.32149 7.26808C6.63405 6.95552 7.05797 6.77992 7.5 6.77992C7.94203 6.77992 8.36595 6.95552 8.67851 7.26808C8.99107 7.58064 9.16667 8.00456 9.16667 8.44659C9.16667 8.88861 8.99107 9.31254 8.67851 9.6251C8.36595 9.93766 7.94203 10.1133 7.5 10.1133Z" fill="#4E79BC"/>
                                </svg>
                                <!-- {{ job.location }} -->
                                {{ job.location.address }}, {{ job.location.state }}
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
                            <p class="tz-form-title">Skills Required</p>
                            <div class="skill_set">
                            <div v-for="(skills,index) in job.skills.split(', ')" :key="index">
                                    <div class="skills">{{ skills }}</div>
                            </div>
                            </div>
                    </div>
                    <div class="tz-job-content-description">
                            <p class="tz-form-title">Project type</p>
                            {{ job.period }}
                    </div>
                    <div class="tz-job-content-description">
                            <p class="tz-form-title">Payment type</p>
                            {{ job.budget_type }}
                    </div>
                    <div class="tz-job-content-description" v-if="getUserById(job.employer)">
                            <p class="tz-form-title">About recruiter</p>
                            <div class="jd-section">
                        <div v-if="getUserById(job.employer)" class="little-employer" :class="['theme-transition', { 'dark': themeStore.darkMode }]">
                            <img style="height: 70px; width: 70px; border-radius: 20%" :src="getUserById(job.employer).profile.profileImage">
                            <div>
                                <b>{{ getUserById(job.employer).profile.company_name }}</b> | {{ getUserById(job.employer).profile.city }}
                                <br/>{{ getUserById(job.employer).profile.tagline }}
                                <br/>web: {{ getUserById(job.employer).profile.website }}
                                <br/><span class="rating" v-html="convertToStars(getUserById(job.employer).ratedValue)"></span>
                            </div>
                        </div>
                    </div>
                    </div>
                    <div class="tz-job-content-description">
                        <p class="tz-form-title">Job location in map</p>

                        <div ref="map" style="height: 400px;">map loading...</div>
                        <!-- <button @click="drawJobMap">See map</button> -->
                    </div>
                    <div class="tz-job-content-description">
                            <p class="tz-form-title">Share this job post</p>
                            <div class="tz-copy-link" style="padding: none !important;">
                                <input type="text" style="border: none; width: 100%;" :value="shareLink" disabled>
                            </div>
                            <span class="bi bi-clipboar" @click="copyText"><u>copy link</u></span>
                    </div>
                </div>


                <div class="tz-form-area" :class="['theme-transition', { 'dark': themeStore.darkMode }]">
                    <span class="tz-form-title">Submit an application for this job</span>
                    <form @submit.prevent="submitApplication">
                        <div class="tz-form-content">
                            <span class="tz-form-title">Cover Letter</span>
                            <textarea class="tz-form-textarea" placeholder="write a convincing cover letter here..." v-model="coverLetter" required :disabled="jobIsApplied"></textarea>
                        </div>
                        <div class="tz-form-content">
                            <span class="tz-form-title">Attachment</span>
                            <div class="drop-zone" @drop="handleDrop" @dragover.prevent>
                                <img v-if="selectedFiles.length == 0" @click="handleButtonClick" style="cursor: pointer;" src="../components/Logos_icons/cloud.png" class="cloud">
                                <span v-if="selectedFiles.length == 0">Drag and drop files or upload project files here.</span>
                                <!-- <span v-else>{{ selectedFiles.name }}</span> -->
                                <!-- Display selected file names -->
                                <ul>
                                    <li v-for="(fileName, index) in selectedFiles" :key="index">{{ fileName }}</li>
                                </ul>
                            </div>
                                <!-- <input type="file" ref="fileInput" @change="handleFileInputChange" style="display: none" :disabled="jobIsApplied"> -->
                                <!-- File input for multiple attachments -->
                                <input type="file" ref="fileInput" multiple @change="handleFileChange" style="display: none" :disabled="jobIsApplied"/>
                                <span @click="handleButtonClick" style="color:blue; cursor: pointer;margin: 0;" class="cust-bt">Upload files</span>
                        </div>
                        <div class="tz-form-content row">
                            <span class="tz-form-title">Counter offer</span>
                            <div class="form-sub">
                                <p>Requesting Fee</p>
                                <div class="amount-input">
                                    <div class="currency">NGN</div>
                                    <input type="number" class="counterOffer" placeholder="0.00" v-model="counterOffer" :disabled="jobIsApplied">
                                </div>

                                <small>input the amount you want to get paid for this job</small>
                            </div>
                            <div class="form-sub">
                                <p>Reason</p>
                                <textarea type="textarea" class="tz-form-textarea" style="height: 70px;" placeholder="...." v-model="reasonForCounterOffer" :disabled="jobIsApplied"></textarea>
                                <small>give a detailed reason for countering the offer</small>
                            </div>
                        </div>
                        <div class="tz-form-content">
                            <span v-if="!jobIsApplied">
                                <button class="tz-form-submit-btn cust-btn" type="submit" :disabled="isSubmitting" ><span v-if="isSubmitting">processing...</span><span v-else>Submit Application</span></button>
                            </span>
                        </div>
                        <div class="tz-form-content" v-if="checkForHires(userDetails.id)">
                            <span>
                                <!-- <button class="tz-form-submit-btn cust-btn" :disabled="isSubmitting" @click.prevent()="getContractPage(job._id, userDetails.id)">view contract</button> -->
                                <RouterLink :to="'/contract/' + job._id + '/' + userDetails.id">View contract</RouterLink>
                            </span>
                        </div>
                    </form>
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

      import L from 'leaflet';
      import 'leaflet/dist/leaflet.css';
      import 'leaflet-routing-machine';

      const toggleTheme = themeStore.toggleTheme;
      const token = localStorage.getItem('token'); // Get the user's JWT token from localStorage

      export default {
        mounted() {

    },
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
            showModal: false,

            userDetails: '',
            employerDetails: [],

            selectedFiles: [],
            filesToUpload: '',

            userAppliedJobs: '',
            jobIsApplied: false,

            coverLetter: '',
            counterOffer: '',
            reasonForCounterOffer: '',
            attachment: '',

            isSubmitting: false,
            employerJob: [],

            userIsHired: false,
            showAlertBox: false,

            map: null,
            showMap: false
            // map: ref('map'),
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
                // const contentToCopy = document.getElementById('contentToCopy').innerText;
                navigator.clipboard.writeText(this.shareLink)
                    .then(() => {
                    // this.$refs.toast.showSuccessToast('Successfully copied to clipboard');
                    this.showAlert("success", "Link copied successfully!");
                    })
                    .catch((error) => {
                    console.error('Error copying to clipboard:', error);
                    });
                },

                fetchJobListings() {
                const jobId = this.$route.params.job_id;
                // console.log(this.$route.params.job_id);


                axios.get(`${this.api_url}/jobs/${jobId}`)
                    .then(response => {
                        // this.data.push(response.data.job);
                        this.job = response.data.job;
                        console.log("currrent job in view: ", this.job);

                    })
                    .catch(error => {
                    console.error(error);
                    })
                    .finally(() => {
                    this.isLoading = false;
                    setTimeout(this.drawJobMap, 10000);
                    });
                },

                fetchEmployerJobs(jobId) {
                    if(!this.employerJob[jobId]){
                axios.get(`${this.api_url}/jobs/${jobId}`)
                    .then(response => {
                        // this.data.push(response.data.job);
                        this.employerJob[jobId] = response.data.job;
                    })
                    .catch(error => {
                    console.error(error);
                    });
                }
                return this.employerJob[jobId];
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

                async submitApplicatio() {
                this.isSubmitting = true;

                    const formData = new FormData();
                    formData.append('coverLetter', this.coverLetter);
                    formData.append('counterOffer', this.counterOffer);
                    formData.append('reasonForCounterOffer', this.reasonForCounterOffer);
                    for (const file of this.filesToUpload) {
                    formData.append('attachment', file);
                    }

                    // for (const [key, value] of formData.entries()) {
                    // console.log(`form data:  ${key}: ${value}`);
                    // }

                    const token = localStorage.getItem('token'); // Get the JWT token from local storage


                try {
                    const response = await axios.post(
                    `${this.api_url}/apply/${this.$route.params.job_id}`,
                    formData,
                    {
                        headers: {
                        Authorization: `JWT ${token}`,
                        'Content-Type': 'multipart/form-data'},
                    }
                    );


                } catch (error) {
                    console.error('Error submitting application:', error);
                } finally {
                    this.isSubmitting = false;
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
                        // console.log("the user ", this.userDetails)
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

                fetchUserAppliedJobs() {
                    this.isLoading = true;
                    // Fetch user-applied jobs using the route you created
                    axios.get(`${this.api_url}/user-applied-jobs`, {
                        headers: {
                        Authorization: `JWT ${localStorage.getItem('token')}`, // Include the JWT token from localStorage
                        },
                    })
                    .then(response => {
                            this.userAppliedJobs = response.data.jobs;
                            console.log("user applied jobs: ", this.userAppliedJobs);
                            // Use the some method to check if any item in the userAppliedJobs array matches the given jobId
                            const isJobApplied = this.userAppliedJobs.some(job => job._id === this.$route.params.job_id);
                            if(isJobApplied){this.jobIsApplied = true}else{this.jobIsApplied = false};
                            // Log the result to the console
                            // console.log(`Job ID ${this.$route.params.job_id} is${isJobApplied ? '' : ' not'} found in user-applied jobs`);

                            // the code below checks if the user already applied for the job and prepopulates the form fields to avoid futher submission
                            for(let i = 0; i < this.job.applications.length; i++){
                               if(this.job.applications[i].user.includes(this.userDetails.id)){
                                    // console.log(this.applicationForm = this.job.applications[i]);
                                    this.applicationForm = this.job.applications[i]
                                    this.coverLetter = this.job.applications[i].coverLetter;
                                    this.counterOffer = this.job.applications[i].counterOffer;
                                    this.reasonForCounterOffer = this.job.applications[i].reasonForCounterOffer;
                               }
                            };
                            // Return a message based on whether the job is applied or not
                            // return isJobApplied ? "View Application" : "Apply here";
                    })
                    .catch(error => {
                        console.error(error);
                    })
                    .finally(() => {
                        this.isLoading = false;
                    });
                },

                getContractPage(jobId, userId) {
                    this.$router.push(`/contract/${jobId}/${user_id}`);
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

                convertToStars(ratingValue) {
                    if(!ratingValue || ratingValue == undefined || ratingValue <= 0){
                        return `<i class="bi bi-star"></i><i class="bi bi-star"></i><i class="bi bi-star"></i><i class="bi bi-star"></i><i class="bi bi-star"></i>`
                    }
                    const fullStars = Math.floor(ratingValue);
                    const halfStar = ratingValue - fullStars >= 0.5 ? 1 : 0;
                    const emptyStars = 5 - fullStars - halfStar;

                    const fullStarsHTML = `<i class='bi bi-star-fill'></i>`.repeat(fullStars);
                    const halfStarHTML = halfStar ? `<i class="bi bi-star-half"></i>` : '';
                    const emptyStarsHTML = `<i class="bi bi-star"></i>`.repeat(emptyStars);

                    return fullStarsHTML + halfStarHTML + emptyStarsHTML;

                },

                drawJobMap() {
                    const google = window.google;

                // Create a map instance
                const map = new google.maps.Map(this.$refs.map, {
                center: { lat: 0, lng: 0 }, // Default center coordinates
                zoom: 13 // Default zoom level
                });

                // Get the user's location (assuming it's available)
                navigator.geolocation.getCurrentPosition(position => {
                const userLat = position.coords.latitude;
                const userLng = position.coords.longitude;
                // Coordinates of the job location (replace with actual job coordinates)
                const jobLat = this.job.location.latitude;
                const jobLng = this.job.location.longitude;

                // Create instances for user marker and job marker
                const userMarker = new google.maps.Marker({
                position: { lat: parseFloat(userLat), lng: parseFloat(userLng) },
                map: map,
                title: 'Your Current Location'
                });

                const jobMarker = new google.maps.Marker({
                position: { lat: parseFloat(jobLat), lng: parseFloat(jobLng) },
                map: map,
                title: 'Job Location'
                });

                // Create a DirectionsService object to use the route from user's location to job location
                const directionsService = new google.maps.DirectionsService();

                // Create a DirectionsRenderer object to display the route
                const directionsRenderer = new google.maps.DirectionsRenderer({
                map: map,
                polylineOptions: {
                    strokeColor: 'red',
                    strokeOpacity: 0.7,
                    strokeWeight: 5
                }
                });

                // Set the route between user's location and job location
                const request = {
                origin: { lat: parseFloat(userLat), lng: parseFloat(userLng) },
                destination: { lat: parseFloat(jobLat), lng: parseFloat(jobLng) },
                travelMode: google.maps.TravelMode.DRIVING // Specify the travel mode
                };

                directionsService.route(request, function(response, status) {
                if (status === google.maps.DirectionsStatus.OK) {
                    directionsRenderer.setDirections(response);
                } else {
                    console.error('Error:', status);
                }
                });
                });
                },


                checkForHires(user_id){
                    if(this.job.hiredUsers.includes(user_id)){
                        this.userIsHired = true;
                        return true;
                    }
                    this.userIsHired = false;
                    return false;

                },

        },
        created() {
            this.getUserDetails();
            this.fetchJobListings();
            this.fetchUserAppliedJobs();

            // this.getUserById("651d62b22d5495c4ca702289");

            // this.checkJobApplication();
            if(this.userAppliedJobs.length > 0){
                console.log(this.userAppliedJobs);
            }
        },
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
.tz-job-content-area, .tz-form-area{
    /* border: 2px solid green; */
    width: 50%;
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

@media screen and (max-width: 1200px) {
    .Page-contents{
        flex-direction: column;
        overflow-y: scroll;
    }
    .tz-job-content-area, .tz-form-area{
        width: 100%;
        overflow: visible;
        height: auto;
        /* border: 2px solid red; */
    }
}


.tz_map{
    border: 1px solid red;
    height: 400px;
    width: 400px;
}
</style>