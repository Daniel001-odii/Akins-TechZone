<template>

    <!--  this is the modal displayed when a user tries changing profile image...... -->
<!--  this is the modal displayed when a user tries changing profile image...... -->
<div class="logout-modal" v-if="showImageModal">
    <div class="modal-content">
        <span>Upload a new image for your profile</span>


        <div class="image-upload-modal">
            <div class="image-container">
            <div class="circle">
                <img :src="imageUrl" :style="{ transform: `scale(${scale})` }" />
            </div>
            <input
                type="range"
                min="1"
                max="5"
                step="0.5"
                v-model="scale"
                class="slider"
            />
            </div>
            <!-- <button @click="uploadImage">Upload</button> -->
        </div>
        <input type="file" @change="handleImageSelect" accept="image/*" />
        <!-- <button @click="uploadProfileImage">Upload</button> -->
        <div class="modal-options">
            <span class="yes" @click="uploadProfileImage">Upload</span>
            <span class="no" @click="showImageModal = !showImageModal">Cancel</span>
        </div>
    </div>
</div>



    <div v-if="editProfileMenu" class="editProfileModal" style="">
    <!-- <div class="editProfileModal" style=""> -->
        <form @submit.prevent="updateuserProfile" id="userProfile.profile" class="editProfileModalMain">
            <span @click="this.editProfileMenu = !this.editProfileMenu;" class="closeBtn">&times;</span>
            <div class="tagline profile-field">
                <span>Full name</span>
                <div class="profile_field_inner">
                    <input class="profile-input" type="text" :value="userDetails.firstname" disabled>
                    <input class="profile-input" type="text" :value="userDetails.lastname" disabled>
                </div>
            </div>
            <div class="tagline profile-field">
                <span>Company name</span>
                <input class="profile-input" type="text" placeholder="your company Name" v-model="userProfile.profile.company_name">
            </div>
            <div class="tagline profile-field">
                <span>Company tagline</span>
                <input class="profile-input" type="text" placeholder="say something about yourself" v-model="userProfile.profile.tagline">
            </div>
            <div class="location profile-field">
                <span>Company address</span>
                <input class="profile-input" type="text" placeholder="your location goes here..." v-model="userProfile.profile.location">
            </div>
            <div class="social profile-field">
                <span>City of location</span>
                <input class="profile-input" type="text" placeholder="city location of industry" v-model="userProfile.profile.city">
            </div>
            <div class="phone profile-field">
                <span>Phone</span>
                <input class="profile-input" type="number" placeholder="your phone goes here..." v-model="userProfile.profile.phone">
            </div>
            <div class="skillTitle profile-field">
                <span>Company bio</span>
                <textarea class="profile-input" type="textarea" style="height: 200px" placeholder="write a short note about your company" v-model="userProfile.profile.description"></textarea>
            </div>
            <div class="skills profile-field">
                <span>Company type</span>
                <input class="profile-input" type="text" placeholder="what is you company's category" v-model="userProfile.profile.industry_type">
            </div>
            <div class="social profile-field">
                <span>Company social media link</span>
                <input class="profile-input" type="text" placeholder="link to you fav social account" v-model="userProfile.profile.socialAccount">
            </div>
            <div class="social profile-field">
                <span>Company website <link rel="stylesheet" href="style.css"></span>
                <input class="profile-input" type="text" placeholder="link to you fav social account" v-model="userProfile.profile.website">
            </div>

            <button type="submit" class="cust-btn">save and exit</button>
        </form>

    </div>

    <NavBar/>


    <!-- this particular banner is only actve when the current user hasnt verified their account,..... -->
    <div class="verifyEmailAlert" v-if="!isLoading && !userDetails.isVerified">
        Please verify your email to update your profile.
    </div>



        <!-- <div class="tz_alert_box" v-if="showError">
            <span>{{ formErrors }}</span>
            <span class="tz_alert_box_closeBtn" @click="showError = !showError">&times;</span>
        </div> -->

        <DotLoader v-if="isLoading"/>



    <div class="body" :class="['theme-transition', { 'dark': themeStore.darkMode }]" v-if="!isLoading">




        <div class="tz-profile-card" :class="['theme-transition', { 'dark': themeStore.darkMode }]">
                <div class="tz-profile-left">
                    <div class="profileImgSwitch">
                        <div class="icon">
                            <span @click="showImageModal = !showImageModal">
                                <i class="bi bi-pencil"></i>
                            </span>
                           </div>
                        <img :src="userDetails.profile.profileImage" class="tz-user-thumbnail">
                    </div>
                    <div class="tz-user-details">
                        <p  class="tz-user-name">{{ userDetails.firstname }} {{ userDetails.lastname }}</p>
                        <div class="tz-user-skill">{{ userDetails.profile.company_name }}</div>
                        <div class="tz-user-skill">{{ userDetails.email }}</div>
                        <div class="tz-btn-array">
                            <button v-if="userDetails.isVerified" class="cust-btn" @click="editProfileMenu = !editProfileMenu">
                                <span v-if="calculateProfileCompletion() < 100">Complete profile</span>
                                <span v-else>Edit Profile</span>
                            </button>
                            <button v-else class="cust-btn" @click="sendVerificationEmail">{{ verificationMessage }}</button>
                        </div>
                    </div>
                </div>
                <!-- <div class="section-divider"></div> -->
                <div class="tz-profile-right">
                    <div class="profile-item">
                        <span  v-if="userDetails.isVerified" style="color: green">Email is Verified</span>
                        <span v-else>email is not verified</span>
                    </div>
                    <div class="profile-item">joined:
                        <span>{{ formatTimestamp(userDetails.created) }}</span>
                    </div>
                    <div class="profile-item">location:
                        <span>{{ userDetails.profile.location }}</span>
                    </div>
                    <div class="profile_completion">
                        <span>Profile completion</span>
                        <span>
                            <progress style="color: red" min="0" max="100" :value="calculateProfileCompletion()"></progress>
                            {{ calculateProfileCompletion() }}%
                        </span>
                    </div>
                </div>
        </div>

        <div class="tz-profile-header" :class="['theme-transition', { 'dark': themeStore.darkMode }]">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M12.1197 12.78C12.0497 12.77 11.9597 12.77 11.8797 12.78C10.1197 12.72 8.71973 11.28 8.71973 9.50998C8.71973 7.69998 10.1797 6.22998 11.9997 6.22998C13.8097 6.22998 15.2797 7.69998 15.2797 9.50998C15.2697 11.28 13.8797 12.72 12.1197 12.78Z" stroke="#4E79BC" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M18.7398 19.3801C16.9598 21.0101 14.5998 22.0001 11.9998 22.0001C9.39977 22.0001 7.03977 21.0101 5.25977 19.3801C5.35977 18.4401 5.95977 17.5201 7.02977 16.8001C9.76977 14.9801 14.2498 14.9801 16.9698 16.8001C18.0398 17.5201 18.6398 18.4401 18.7398 19.3801Z" stroke="#4E79BC" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#4E79BC" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <b>Profile</b>
        </div>
        <div class="tz-profile-last" >
            <div class="about-area" :class="['theme-transition', { 'dark': themeStore.darkMode }]">
                <div class="tz-user-about">
                    <div class="about-header">About</div>
                    <div class="user-about">
                        <span>{{ userDetails.profile.description }}</span>
                    </div>
                </div>
                <div class="tz-user-about">
                    <div class="about-header">Jobs posted</div>
                    <div class="user-about" v-for="job in jobs">
                        <span style="color: var(--app-blue)">{{ job.job_title }}</span><br/>
                        <span>{{ formatBudgetAmount(job.budget) }}</span><br/>
                        <span>{{ formatTimestamp(job.created_at) }}</span>
                        <br/><br/>
                    </div>
                </div>
            </div>

            <div class="tagline-area" style="margin-top: 40px; padding: 10px;" :class="['theme-transition', { 'dark': themeStore.darkMode }]">
                <div class="tz-emphasis">
                    <b>Phone Number</b>
                    <span>+234{{ userDetails.profile.phone }} </span>
                </div>
                <div class="tz-emphasis">
                    <b>Email Adrress</b>
                    <span>{{ userDetails.email }}</span>
                </div>
                <div class="tz-emphasis">
                    <b>industry type</b>
                    <span>{{ userDetails.profile.industry_type }}</span>
                </div>
                <div class="tz-emphasis">
                    <b>location</b>
                    <span>{{ userDetails.profile.location }}</span>
                    <span>City: {{ userDetails.profile.city }}</span>
                </div>
                <div class="tz-emphasis">
                    <b>Social Account</b>
                    <span>{{ userDetails.profile.socialAccount }}</span>
                </div>
                <div class="tz-emphasis">
                    <b>website</b>
                    <span>{{ userDetails.profile.website }}</span>
                </div>
                <div class="tz-emphasis">
                    <b>Date joined</b>
                    <span>{{ formatTimestamp(userDetails.created) }}</span>
                </div>

            </div>

        </div>

    </div>

        <!-- <footer>
            <Footer/>
        </footer> -->
    </template>

    <script>






    import NavBar from '../components/NavBar.vue';
    import Footer from '../components/Footer.vue';
    import 'bootstrap/dist/js/bootstrap.js';
    import axios from 'axios';
    import themeStore from '@/theme/theme';
    import DotLoader from '../components/DotLoader.vue';

export default {
    components:{NavBar, Footer, DotLoader},
            setup(){
                    // Accessing themeStore properties and methods
                      const toggleTheme = themeStore.toggleTheme;
                      return{
                          themeStore,
                          toggleTheme,
                      };
              },
              data(){
                return{
                    userDetails:'',
                    isLoading: true,
                    editProfileMenu: false,
                    showError: false,
                    showImageModal: false,
                    verificationMessage: "verify email",

                    imageUrl: '', // Bind to the selected image URL
                    scale: 1, // Initial scale value

                    // profileCompletion: 0,



                userProfile: {
                    profile:{
                        tagline: '',
                        description: '',
                        company_name: '',
                        website: '',
                        industry_type: '',
                        location: '',
                        city: '',
                        socialAccount: '',
                        phone: '',
                        },
                    },
                    jobs: '',
                }
              },
    methods:{
    getUserById(id) {
            this.isLoading = true;
                axios.get(`${this.api_url}/get-info/${id}`)
                    .then(response => {
                        this.isLoading = false;
                        this.userDetails = response.data.employer;

                        // autopopulate the user form
                        this.userProfile.profile = this.userDetails.profile;
                        console.log(response.data.employer);
                        })
                        .catch(error => {
                        console.error('Error fetching user or employer details:', error);
                        this.isLoading = false;
                                    // Handle errors
                    });
    },
    formatBudgetAmount(value){
                    const formattedValue = new Intl.NumberFormat('en-US').format(value);
                    return `₦${formattedValue}`;
                },
    getJobsByEmployer(employer_id) {

    this.jobsLoading = true;

    // const employer_id = this.userDetails.id;
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
    })
    .catch(error => {
        console.error('Error fetching jobs by employer:', error);
        this.jobsLoading = false;
        // Handle errors
    });
    },
    formatTimestamp(timestamp) {
                    const date = new Date(timestamp);
                    const options = { year: "numeric", month: "long", day: "numeric" };
                    return date.toLocaleDateString(undefined, options);
    },

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
    async updateuserProfile(){
                const token = localStorage.getItem('token'); // Get the token from localStorage

                // Set up headers with the token
                const headers = {
                    Authorization: `JWT ${token}`, // Assuming it's a JWT token
                };
                    try {
                const response = await axios.put(`${this.api_url}/employer`, this.userProfile, {headers});
                console.log(response.data);
                this.editProfileMenu = !this.editProfileMenu;
                this.showError = true;

            } catch (error) {
                console.log(error);

            }
    },
    autoFill(){
        this.userProfile.profile = this.userDetails.profile;
    },
    showMessage(message, type){
    },


    handleImageSelect(event) {
        this.selectedFile = event.target.files[0];
      if (this.selectedFile) {
        // Convert the selected image to a data URL
        const reader = new FileReader();
        reader.onload = (e) => {
          this.imageUrl = e.target.result;
        };
        reader.readAsDataURL(this.selectedFile);
      }
    },
    handleFileUpload(event) {
      // Store the selected file in the component's data
      this.selectedFile = event.target.files[0];
    },
    scaleImage(imageUrl, scale) {
        // Create a temporary image element
        const img = new Image();
        img.src = imageUrl;

        // Create a canvas element
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');

        // Set canvas size based on scaled dimensions
        canvas.width = img.width * scale;
        canvas.height = img.height * scale;

        // Draw the scaled image on the canvas
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

        // Convert the canvas to a data URL
        return canvas.toDataURL('image/jpeg'); // Adjust format as needed
        },
    // Function to convert data URL to Blob
    dataURLtoBlob(dataURL) {
      const parts = dataURL.split(',');
      const contentType = parts[0].split(':')[1].split(';')[0];
      const byteString = atob(parts[1]);
      const arrayBuffer = new ArrayBuffer(byteString.length);
      const uint8Array = new Uint8Array(arrayBuffer);

      for (let i = 0; i < byteString.length; i++) {
        uint8Array[i] = byteString.charCodeAt(i);
      }

      return new Blob([arrayBuffer], { type: contentType });
    },

    async uploadProfileImage() {
        // Scale the image using the this.scale value
        const scaledImageUrl = this.scaleImage(this.imageUrl, this.scale);
        // Convert the scaled image data URL to Blob
        const scaledImageBlob = this.dataURLtoBlob(scaledImageUrl);
        // Upload the scaled image Blob (send to server)
      console.log('Uploading scaled image:', scaledImageBlob);


        // console.log(scaledImageUrl)
        if (!scaledImageBlob) {
            return;
        }

        try {
            const formData = new FormData();
            formData.append('profileImage', scaledImageBlob);

            // Retrieve the JWT token from local storage
            const token = localStorage.getItem('token');

            // Check if the token exists
            if (!token) {
            console.error('JWT token not found in local storage');
            return;
            }

            const headers = {
            Authorization: `JWT ${token}`, // Add the JWT token to the authorization header
            };

            const response = await fetch(`${this.api_url}/upload-client-image`, {
            method: 'POST',
            body: formData,
            headers: headers, // Pass the headers with the JWT token
            });

            if (response.ok) {
            const data = await response;
            console.log('Image upload successful:', data);
            this.scale = 1;
            this.imageUrl = '';

            // Optionally, update the user's profile with the image URL received from the server
            // ... (add code to update the user's profile)

            // Reload page to show the new upload
            this.getUserById(this.$route.params.user_id);

            // Close the image upload modal upon upload success
            this.showImageModal = false;
            } else {
            console.error('Error uploading profile image:', response.statusText);
            }
        } catch (error) {
            console.error('Error uploading profile image:', error);
        }
    },
    async sendVerificationEmail() {
      try {
        const email = this.userDetails.email; // Replace with the user's email
        const userType = 'employer'; // Replace with the user's type

        // Make an HTTP POST request to your server's endpoint
        const response = await fetch(`${this.api_url}/send-verification-email`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email, userType }),
        });

        if (response.status === 200) {
          const data = await response.json();
          this.verificationMessage = "email sent..."
          console.log(data.message); // Verification email sent successfully
        } else {
          const errorData = await response.json();
          console.error(errorData.message); // Error sending verification email
        }
      } catch (error) {
        console.error('Error sending verification email:', error);
      }
    },



    },

    created(){
        this.getUserById(this.$route.params.user_id);
        this.getJobsByEmployer(this.$route.params.user_id);
        this.calculateProfileCompletion
        }
}
    </script>

<style scoped>
/* Style the circular frame */
.circle {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  overflow: hidden;
  position: relative;
  border: 3px dotted var(--app-blue);
}

/* Style the image within the circle */
.circle img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transform-origin: center;
}

/* Style the slider */
.slider {
  width: 80%;
  margin: 0 auto;
  display: block;
}


.closeBtn{
    color: #000;
    font-size: 30px !important;
    position: absolute;
    right: 30px;
    top: 20px;
}


.profile_completion{
    display: flex;
    flex-direction: column;
    border: 1px solid #efefef;
    padding: 15px;
    border-radius: 10px;
}






*{
    font-size: 0.9rem !important;

}
.body{
    padding-top: 50px;
    padding-bottom: 50px;
    background: transparent;
}
th, td{
    padding: 5px;
    /* border: 1px solid red; */
}
.section-divider{
        height: 150px !important;
        width: 1px !important;
        background: var(--app-grey) !important;
    }
    .tz-profile-card{
        /* width: 80%; */
        padding: 20px;
        background: #fff;
        margin: 0 auto;
        display: flex;
        flex-direction: row;
        align-items: flex-start;
        justify-content: center;
        flex-wrap: wrap;
        gap: 20px;
        color: #000;
    }
    .tz-profile-card > *{
        /* border: 1px solid red; */
    }




    .tz-user-thumbnail{
        display: flex;
        align-self: flex-start;
        height: 100px;
        width: 100px;
        border-radius: 50%;
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
        outline: 4px solid var(--app-blue);
        outline-offset: 5px;
    }
    .profileImgSwitch{
        border-radius: 50%;
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;

    }
    .icon{
        position: absolute;
        color: #ffffff;
        /* background: #ff0000; */
        /* opacity: 0.5; */
        z-index: 999;
        margin: 0 auto;
        height: 100%;
        width: 100%;
        border-radius: 50%;
        display: flex;
        align-items: flex-end;
        justify-content: flex-end;
        transition-duration: 2s;
        animation-duration: 2s;
    }

    .icon > span{
        font-size: 0.2rem !important;
        color: #000000;
        border: 1px solid #000;
        border-radius: 50%;
        background: #fff;
        cursor: pointer;
        height: 25px;
        width: 25px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .icon:hover .icon{
        display: flex;
    }







    .tz-profile-left{
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        gap: 30px;
    }
    .tz-user-details{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
    }
    .tz-profile-right{
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        /* border: 1px solid red; */
    }
    .tz-profile-left, .tz-profile-right{
        /* justify-content: center; */
    }
    .tz-user-name{
        font-size: 60px;
        font-weight: bolder;
        margin: 0; padding: 0;
    }
    .tz-user-skill{
        font-size: 15px;
        font-weight: 300;
        margin: 0; padding: 0;
    }
    .tz-user-bio{
        font-size: 14px;
        /* max-width: 300px; */
    }
    .tz-btn-array{
        gap: 5px;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap !important;
        margin-top: 10px;
    }
    .cust-btn{
        border-radius: 5px;
    }
.tz-user-socials{
    display: flex;
    flex-direction: row;
    gap: 20px;
}
    .tz-social{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 50px;
        padding: 10px;
        margin-left: 10px;
        /* border: 1px solid red; */
    }

    .tz-profile-header{
        border: 1px solid rgba(184, 184, 184, 0.4);
        color: var(--app-blue);
        width: 80%;
        background: #fff;
        padding: 10px;
        margin:0 auto;
        margin-top: 20px;
        gap: 5px;
        display: flex;
    }
    .tz-profile-last{
        width: 80%;
        margin:0 auto;
        margin-top: 5px;
        /* margin-bottom: 50px !important; */
        gap: 5px;
        display: flex;
        flex-direction: row;
        color: #000;
        justify-content: space-between;
    }

    .tz-emphasis{
        display: flex;
        flex-direction: column;
        margin-bottom: 15px;
    }

    .bio-area{
        width: 35%;
        background: #fff;
        padding: 10px;
    }
    .about-area{
        width: 80%;
        background: #ffffff;
        padding: 10px;
    }
    .about-header{
        font-weight: bolder;
        border-bottom: 1px solid var(--app-hover);
        margin-bottom: 10px;
        margin-top: 30px;
    }
    .back-btn{
        display: block;
        margin-left: 110px;
        padding: 20px;
    }


    .verifyEmailAlert{
        flex-direction: row;
        text-align: center;
        padding: 10px;
        background: #f8d7da;
        color: #721c24;
        border: 1px solid #f5c6cb;
        transition: 1s;
    }

    .editProfileModal{
        gap: 50px;
        position: fixed;
        z-index: 99999;
        height: 100vh !important;
        background: #0000008b;
        width: 100%;
        margin: 0 auto;
        left: 0;
        right: 0;
        padding: 10px;
    }


    .editProfileModalMain{
        max-width: 750px;
        background: #fff;
        border-radius: 10px;
        margin: 0 auto;
        padding: 50px;
        display: flex;
        flex-direction: column;
        gap: 10px;
        height: 90%;
        overflow: scroll;
        position: relative;
    }
    .profile-field{
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 5px;
        margin-bottom: 20px;
    }

    .profile_field_inner{
        display: flex;
        flex-direction: row;
        gap: 10px;
        display: flex;
    }


    .profile-input{
        padding: 10px;
        border: 1px solid var(--app-blue);
        border-radius: 10px;
        width: 100%;
        /* border-radius: 5px; */
    }





   .logout-modal{
    height: 100dvh;
    width: 100%;
    background: #000000d3;
    position: fixed;
    z-index: 999999;
    display: flex;
    flex: column;
    align-items: center;
    justify-content: center;
    text-align: center;
}
.modal-content{
    /* height: 200px; */
    background: #fff;
    max-width: 400px;
    border-radius: 10px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 25px;
}
.modal-content > span{
    font-size: 1.5em !important;
}
.modal-options{
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-around;
}

.modal-options > span{
    border: 1px solid var(--app-blue);
    padding: 10px;
    border-radius: 5px;
    color: var(--app-blue);
    font-size: 1rem !important;
    width: 40%;
    cursor: pointer;
}
.no{
    background: var(--app-blue);
    color: #fff !important;
}











    @media only screen and (max-width: 720px) {
        .tz-profile-card{
            flex-direction: column;
            width: 100%;
        }
        .tz-profile-left{
            flex-direction: column !important;
            align-items: flex-start;
        }
        .tz-user-details{
        align-items: flex-start;
        justify-content: flex-start;
        }
        .tz-user-thumbnail{
            align-items: flex-start !important;
        }
        .section-divider{
            display: none;
        }
        .tz-profile-last{
            flex-direction: column;
            gap: 5px;
            padding: 10px;
        }
        /* .tz-profile-right{
            align-content: center;
            justify-items: center;
            width: 100%;
            padding: 0px;
        } */
        .about-area{
            /* height: 400px; */
        }
        .tz-profile-header, .tz-profile-last, .about-area{
            width: 100%;
            margin-top: 5px !important;
        }
        .bio-area{
        width: 100%;
        }
    }

    @media only screen and (max-width: 1000px) {
        .tz-profile-left{
            flex-direction: row;
        }
        .tz-user-details{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
    }
    .tz-user-thumbnail{
        align-self: center;
    }
    }
</style>