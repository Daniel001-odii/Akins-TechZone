<template>


    <div v-if="editProfileMenu" class="editProfile" style="
    height: 100dvh;
    width: 100%;
    background: #efefef;
    position: absolute;
    z-index: 99999;
    ">
        <form @submit.prevent="updateuserProfile" id="userProfile.profile">
            <span >close</span>
            <div class="bio">
                <input type="text" :value="userDetails.firstname" disabled>
                <input type="text" :value="userDetails.lastname" disabled>
            </div>
            <div class="bio">
                <input type="text" placeholder="say something about yourself" v-model="userProfile.profile.bio">
            </div>
            <div class="location">
                <input type="text" placeholder="your location goes here..." v-model="userProfile.profile.location">
            </div>
            <div class="phone">
                <input type="number" placeholder="your phone goes here..." v-model="userProfile.profile.phone">
            </div>
            <div class="profilePics">
                Your profile image here
                <input type="file" placeholder="your phone goes here..." >
            </div>
            <div class="skillTitle">
                <input type="text" placeholder="write what best describes you" v-model="userProfile.profile.skillTitle">
            </div>
            <div class="skills">
                <input type="text" placeholder="list your skills here" v-model="userProfile.profile.skillsList">
            </div>
            <div class="social">
                <input type="text" placeholder="link to you fav social account" v-model="userProfile.profile.socialAccount">
            </div>
            <button type="submit">save and exit</button>
        </form>

    </div>

        <NavBar/>

        <div class="tz_alert_box" v-if="showError">
            <span>{{ formErrors }}</span>
            <span class="tz_alert_box_closeBtn" @click="showError = !showError">&times;</span>
        </div>

        <DotLoader v-if="isLoading"/>


    <div class="body" :class="['theme-transition', { 'dark': themeStore.darkMode }]" v-if="!isLoading">

        <div class="tz-profile-card" :class="['theme-transition', { 'dark': themeStore.darkMode }]">
                <div class="tz-profile-left">
                    <div class="tz-user-thumbnail"></div>
                    <div class="tz-user-details">
                        <p  class="tz-user-name">{{ userDetails.firstname }} {{ userDetails.lastname }}</p>
                        <!-- <div class="tz-user-skill">{{ userDetails.profile.skillTitle }}</div> -->
                        <!-- <div class="tz-user-skill">{{ userDetails.email }}</div> -->
                        <div class="tz-btn-array">
                            <button class="cust-btn" @click="editProfileMenu = !editProfileMenu">Edit Profile</button>
                            <button class="cust-btn" style="border: 1px solid var(--app-blue); color: var(--app-blue); background: #fff;">View Resume</button>
                        </div>
                    </div>
                </div>
                <!-- <div class="section-divider"></div> -->
                <div class="tz-profile-right">
                    <table style="text-align: center;">
                        <tbody>
                        <tr>
                            <td>verification:</td>
                            <td v-if="userDetails.isVerified" style="color: green">Verified <i class="bi bi-check-circle-fill"></i></td>
                            <td v-else>not verified <i class="bi bi-check-circle-fill"></i></td>
                        </tr>
                        <tr>
                            <td>joined:</td>
                            <td>{{ formatTimestamp(userDetails.created) }}</td>
                        </tr>
                        <tr>
                            <td>Location</td>
                            <!-- <td>{{ userDetails.profile.location }}</td> -->
                        </tr>
                        </tbody>
                    </table>
                    <div class="tz-user-socials">
                        <div class="tz-social">
                            <svg xmlns="http://www.w3.org/2000/svg" width="35" height="34" viewBox="0 0 35 34" fill="none">
                            <circle cx="17.5008" cy="16.6102" r="16.6102" fill="#F6F9FF"/>
                            <path d="M25.7806 21.8673C25.7806 22.1662 25.7141 22.4735 25.5729 22.7725C25.4318 23.0715 25.249 23.3539 25.0082 23.6196C24.6012 24.0681 24.1528 24.392 23.6462 24.5996C23.1479 24.8073 22.608 24.9152 22.0267 24.9152C21.1795 24.9152 20.2743 24.7159 19.3192 24.309C18.3641 23.902 17.409 23.3539 16.4623 22.6645C15.5072 21.9669 14.6019 21.1945 13.7382 20.3391C12.8828 19.4754 12.1104 18.5701 11.4211 17.6234C10.7401 16.6766 10.1919 15.7298 9.79328 14.7913C9.39463 13.8445 9.19531 12.9393 9.19531 12.0756C9.19531 11.5108 9.29497 10.971 9.4943 10.4727C9.69362 9.96607 10.0092 9.50099 10.4494 9.08573C10.9809 8.56251 11.5623 8.30505 12.1768 8.30505C12.4094 8.30505 12.6419 8.35488 12.8495 8.45455C13.0655 8.55421 13.2565 8.7037 13.406 8.91963L15.3328 11.6354C15.4823 11.843 15.5902 12.034 15.665 12.2167C15.7397 12.3912 15.7812 12.5656 15.7812 12.7234C15.7812 12.9227 15.7231 13.122 15.6068 13.313C15.4989 13.504 15.3411 13.7034 15.1418 13.9027L14.5106 14.5588C14.4192 14.6501 14.3777 14.7581 14.3777 14.891C14.3777 14.9574 14.386 15.0156 14.4026 15.082C14.4275 15.1484 14.4524 15.1983 14.469 15.2481C14.6185 15.5222 14.876 15.8793 15.2414 16.3112C15.6151 16.743 16.0138 17.1832 16.4457 17.6234C16.8941 18.0635 17.326 18.4705 17.7662 18.8442C18.198 19.2096 18.5551 19.4588 18.8375 19.6083C18.879 19.6249 18.9289 19.6498 18.987 19.6747C19.0534 19.6996 19.1199 19.7079 19.1946 19.7079C19.3358 19.7079 19.4438 19.6581 19.5351 19.5667L20.1663 18.9439C20.374 18.7362 20.5733 18.5784 20.7643 18.4788C20.9553 18.3625 21.1463 18.3044 21.354 18.3044C21.5118 18.3044 21.6779 18.3376 21.8606 18.4123C22.0433 18.4871 22.2343 18.5951 22.4419 18.7362L25.1909 20.6879C25.4068 20.8374 25.5563 21.0118 25.6477 21.2195C25.7307 21.4271 25.7806 21.6347 25.7806 21.8673Z" stroke="#292D32" stroke-width="1.24576" stroke-miterlimit="10"/>
                            </svg>
                            <span>Phone</span>
                        </div>
                        <div class="tz-social">
                            <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 34 34" fill="none">
                            <circle cx="17.1102" cy="16.6102" r="16.6102" fill="#FBF0E7"/>
                            <path d="M12.9588 16.6102C9.63672 16.6102 9.63672 18.0968 9.63672 19.9323V20.7628C9.63672 23.055 9.63672 24.9153 13.7893 24.9153H20.4333C23.7554 24.9153 24.5859 23.055 24.5859 20.7628V19.9323C24.5859 18.0968 24.5859 16.6102 21.2638 16.6102C20.4333 16.6102 20.2008 16.7846 19.7689 17.1085L18.9218 18.0055C17.9418 19.0519 16.2808 19.0519 15.2925 18.0055L14.4537 17.1085C14.0218 16.7846 13.7893 16.6102 12.9588 16.6102Z" stroke="#292D32" stroke-width="1.24576" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M22.924 16.6103V11.6272C22.924 9.79179 22.924 8.30518 19.602 8.30518H14.6189C11.2969 8.30518 11.2969 9.79179 11.2969 11.6272V16.6103" stroke="#292D32" stroke-width="1.24576" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M15.9062 14.3097H18.6718" stroke="#292D32" stroke-width="1.24576" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M15.2168 11.8181H19.3693" stroke="#292D32" stroke-width="1.24576" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                            <span>Email</span>
                        </div>
                        <div class="tz-social">
                            <i class="bi bi-github"></i>
                            <span>Github</span>
                        </div>

                    </div>
                    <!-- <div class="tz-availablity">Availability</div>
                    <div class="tz-location">Location</div>
                    <div class="tz-yrs-exp">Years of Experience</div>
                    <div class="tz-socials"></div> -->
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
                        <!-- <div class="user-about" v-if="userDetails.isverified"> -->
                        <!-- <span>{{ userDetails.profile.bio }}</span> -->
                    </div>
                    <!-- <span v-else>user not verified</span> -->
                    <div class="about-header">
                        Skills
                    </div>
                    <!-- <div class="user-about" v-if="userDetails.isverified">
                        Meet our dummy user, John Doe! John is a fictional character created to help demonstrate the features and functionality of our website. Although not a real person, John embodies the qualities of an average user, making him relatable and easy to understand. With his diverse background and interests, John represents a wide range of users who can benefit from our platform. Whether it's exploring new features, engaging with the community, or simply enjoying the user-friendly interface, John is always enthusiastic about discovering what our website has to offer. So, join John on this exciting journey as we showcase the capabilities and possibilities that await you on our platform!
                    </div> -->
                    <!-- <span>{{ userDetails.profile.skillsList }}</span> -->
                </div>
            </div>

            <div class="bio-area" :class="['theme-transition', { 'dark': themeStore.darkMode }]">
                <div class="tz-emphasis">
                    <b>Phone Number</b>
                    <!-- <span> {{ userDetails.profile.phone }} </span> -->
                </div>
                <div class="tz-emphasis">
                    <b>Email Adrress</b>
                    <span>{{ userDetails.email }}</span>
                </div>
                <div class="tz-emphasis">
                    <b>Connected accounts</b>
                    <!-- <span>{{ userDetails.profile.socialAccount }}</span> -->
                </div>
                <div class="tz-emphasis">
                    <b>Date joined</b>
                    <!-- <span>{{ formatTimestamp(userDetails.created) }}</span> -->
                </div>

            </div>

        </div>

    </div>

        <footer>
            <Footer/>
        </footer>
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

                userProfile: {
                    profile:{
                        bio: '',
                        location: '',
                        phone: '',
                        profilePicture: '',
                        skillTitle: '',
                        skillsList: '',
                        socialAccount: '',
                        },
                    }
                }
              },
              methods:{
        /// this function gets the users details via api route
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
                    // For example, you can set user details in your component's data
                    this.userDetails = response.data.user;
                    console.log("the user ", this.userDetails.profile) // Assuming userDetails is a data property
                    this.isLoading = false;

                    //auto populate user form...
                    this.autoFill();
                    })
                    .catch((error) => {
                    // Handle errors
                    this.isLoading = false;
                    console.error(error);
                    });
                },
        getClientProfileView() {
                const user_id = this.$route.params.job_id;
                axios.get(`http://127.0.0.1:5000/api/jobs/${jobId}`)
                    .then(response => {
                        this.data.push(response.data.job);
                        console.log(this.data[0]);
                    })
                    .catch(error => {
                    console.error(error);
                    })
                    .finally(() => {
                    this.isLoading = false;
                    });
                },
        getUserById(id) {
            this.isLoading = true;
                axios.get(`${this.api_url}/get-info/${id}`)
                    .then(response => {
                        if(response.data.user){
                            this.userDetails = response.data.user;
                            console.log("user details: ", response.data.user);
                        }
                        else if(response.data.employer){
                            this.userDetails = response.data.employer;
                            console.log("employer details: ", response.data.employer);
                        }
                        this.isLoading = false;
                        })
                        .catch(error => {
                        console.error('Error fetching user or employer details:', error);
                        this.isLoading = false;
                                    // Handle errors
                    });
                },
        formatTimestamp(timestamp) {
                    const date = new Date(timestamp);
                    const options = { year: "numeric", month: "long", day: "numeric" };
                    return date.toLocaleDateString(undefined, options);
                },
        async updateuserProfile(){
                const token = localStorage.getItem('token'); // Get the token from localStorage

                // Set up headers with the token
                const headers = {
                    Authorization: `JWT ${token}`, // Assuming it's a JWT token
                };
                    try {
                const response = await axios.put(`${this.api_url}/user`, this.userProfile, {headers});
                console.log(response.data);
                this.editProfileMenu = !this.editProfileMenu;
                showError = true;

            } catch (error) {
                console.log(error.request.response);

            }
                },
        autoFill(){
                this.userProfile.profile = this.userDetails.profile;
                },
        showMessage(message, type){

        },

              },




              mounted() {
                // this.getUserDetails();
                this.getUserById(this.$route.params.user_id);
            },
        }
    </script>

    <style scoped>
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
            width: 80%;
            padding: 20px;
            background: #fff;
            margin: 0 auto;
            display: flex;
            flex-direction: row;
            align-items: center;
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
            /* background: url("../components/Logos_icons/dummy_user.png"); */
            background-size: cover;
            background-repeat: no-repeat;
            background-position: center;
            outline: 4px solid var(--app-blue);
            outline-offset: 5px;
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
            justify-content: center;
            align-items: center;
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
            width: 100%;
            background: #ffffff;
            padding: 10px;
        }
        .about-header{
            font-weight: bolder;
            border-bottom: 1px solid var(--app-hover);
            margin-bottom: 10px;
            margin-top: 10px;
        }
        .back-btn{
            display: block;
            margin-left: 110px;
            padding: 20px;
        }

        @media only screen and (max-width: 720px) {
            .tz-profile-card{
                flex-direction: column;
                width: 100%;
            }
            .tz-profile-left{
                flex-direction: column;
                /* align-items: flex-start; */
            }
            .tz-user-details{
            align-items: flex-start;
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
            .tz-profile-right{
                align-content: center;
                width: 100%;
                padding: 0px;
            }
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
                flex-direction: column;
            }
            .tz-user-details{
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }
        .tz-user-thumbnail{
            align-self: center;
        }
        }
    </style>ss