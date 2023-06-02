<template>
  <Loader v-if="loading"></Loader>

    <div class="form-container">
        <div class="leftSide">
                <RouterLink to="/">
                    <div class="backBtn">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 48 47" fill="none">
                            <path d="M11.484 20.334L27.576 4.24197L23.334 -3.05176e-05L0 23.334L23.334 46.668L27.576 42.426L11.484 26.334H48V20.334H11.484Z" fill="#4E79BC"/>
                        </svg>
                    </div>
                </RouterLink>

            <div class="subDiv">

                
                <div class="left-content">
                <h2 style="font-weight: bolder;">Welcome Back!</h2>
                <p>Please enter your login details</p>

                <!--form starts here ------------------------------->
                <!-------- show login errors here-------->
                <!-- the alert class has been inherted from native bootstrap classses -->
                <div v-for="error in errors" :key="error">
                  <p class="alert alert-danger" v-for="lines in error" :key="lines" role="alert">{{ lines }}</p>
                </div>
                <form @submit.prevent="login">
                <div class="form-section">
                    <label for="email">Email Address</label>
                    <input class="form-input" name="email" placeholder="email address" v-model="email" type="email" required>
                </div>
            
                <div class="form-section">
                    <label for="password">Password</label>
                    <input class="form-input" placeholder="password" v-model="password" type="password" required>
                </div>


                <div class="form-issues">
                    <div class="check-container">
                        <div class="checkbox-wrapper-46">
                            <input class="inp-cbx" id="rememberDetails" type="checkbox"/>
                            <label class="cbx" for="rememberDetails">
                            <span>
                                <svg width="12px" height="10px" viewbox="0 0 12 10"><polyline points="1.5 6 4.5 9 10.5 1"></polyline></svg>
                            </span>
                            <span>Remember Details</span>
                            </label>
                        </div>
                    </div>
                    <RouterLink to="/reset-password"><p>Forgot password?</p></RouterLink>
                </div>

                    <button class="form-btn" type="submit" :disabled="isLoading"  :class="{ 'disabled-button': isLoading }">
                        <span v-if="isLoading" class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                        <span v-if="isLoading === true">Loading...</span>
                        <span v-else>Login</span>
                    </button>
                </form>
                <!-------form ends here----------------->

                <div style="font-size: 0.8em; display: flex; flex-direction: row; padding: 20px; justify-content: center;">
                <p class="form-en">Don't have account yet?</p>
                <div style="padding-left: 10px;" class="signup-on-form">
                            <p style="color: blue; cursor: pointer;" @click="signup_options=!signup_options">Sign Up</p>
                            <div class="signup-options" v-if="signup_options">
                                <RouterLink to="/client-signUp"><div class="options">As Employer</div></RouterLink>
                                <RouterLink to="/talent-signUp"><div class="options">As Talent</div></RouterLink>
                            </div>
                </div>
                </div>

                </div>
            
            </div>
    </div>
        <div class="rightSide">
            <div class="ima"><img style="width: 250px;" src="../components/Logos_icons/techZoneVertical.png"></div>
        </div>  
    </div>
</template>

<script>
import axios from 'axios';
import Loader from '../components/loader.vue';
import {ref} from 'vue';


//make sure loader is set to invisible .....
const loading = ref(false);


const Api_url = "https://techzoneapp.herokuapp.com";

    export default {
        components:{Loader},
        setup(){
            return {loading};
        },
        data(){
            return{
                // show: true,
                email: '',
                password: '',
                signup_options: false,
                errors: {},
                isLoading: false,
            }
        },
        // mounted(){
        //     setTimeout(() => {
        //         this.show = false
        //     }, 30000);
        // },
        methods: {
    async login() {
        this.isLoading = true;
        try {
            const response = await axios.post(`${Api_url}/api/employer/login`, {
            email: this.email,
            password: this.password
            });
            localStorage.setItem('token', response.data.access_token);
            
            //display token in console...
            console.log(response.data.access_token)

            // Redirect the user to the home page
            this.$router.push('/client/dashboard');
        } 
        catch (error) {
            if (error.response && error.response.data && error.response.data.errors) {this.errors = error.response.data.errors}
            console.error("main error: " + error.request.response);
        }
}



  }
    }
</script>

<style scoped>
 .signup-on-form{
    position: relative;
 }
 .signup-options{
    width: 100px;
    top: 30px !important;
    right: -50px;

 }
</style>