<template>
  <Loader v-if="loading"></Loader>

    <div class="form-container">
        <div class="leftSide">
            <div class="topLeftImage">
                <RouterLink to="/"><img class="brand-img" src="../components/Logos_icons/techzone.png"></RouterLink>
            </div>

            <div class="subDiv">

                
                <div class="left-content">
                <h2 style="font-weight: bolder;">Reset Your Password</h2>
                <p>Please enter your Email Address.</p> <small>If your email address appears, we'll slide into your inbox like a ninja and drop a password reset link like it's hot, so you can regain access to your account.</small>

                <!--form starts here ------------------------------->
                <form  style="margin-top: 10px"  @submit.prevent="sendResetLink">
                <div class="form-section">

                    <div class="tz_alert_box" v-if="showErrors">
                            <span>{{ errors }}</span>
                            <span class="tz_alert_box_closeBtn" @click="showErrors = !showErrors">&times;</span>
                    </div>
                    <div class="tz_alert_box_green" v-if="showErrors" style="background: lightgreen;">
                            <span>{{ messages }}</span>
                            <span class="tz_alert_box_closeBtn" @click="showErrors = !showErrors">&times;</span>
                    </div>


                    <label for="email">Email Address</label>
                    <input class="form-input" name="email" placeholder="email address" v-model="email" type="email" required>
                </div>


                <button style="margin-top: 10px" class="form-btn" type="submit">
                    <span v-if="isLoading" class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                            <span v-if="isLoading === true">Loading...</span>
                            <span v-else>Send Reset Link</span>
                </button>
                </form>
                <!-------form ends here----------------->

                <div style="font-size: 0.8em; display: flex; flex-direction: row; padding: 20px; justify-content: center;">
                <p class="form-en">Don't have account yet?</p>
                <div class="dropdown" style="padding-left: 10px;">
                            <p href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" style="color: blue">Sign Up</p>
                                <ul class="dropdown-menu">
                                    <li> <RouterLink class="dropdown-item" to="/signUp-employer">As Employer</RouterLink></li>
                                    <li><RouterLink class="dropdown-item" to="/signUp">As Talent</RouterLink></li>
                                </ul>
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


const Api_url = "https://techzoneapp.herokuapp.com/api/login";

    export default {
        components:{Loader},
        setup(){
            return {loading};
        },
        data(){
            return{
                show: true,
                email: '',
                password: '',
                errors: [],
                messages: '',
                isLoading: false,
                showErrors: false,
            }
        },
        mounted(){
            setTimeout(() => {
                this.show = false
            }, 30000);
        },
        methods:{
            async sendResetLink() {
                try {
                    const response = await fetch(`${this.api_url}/sendpassreset`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ email: this.email }),
                    });

                    if (response.status === 200) {
                        alert("Password reset email sent successfully.");
                        console.log('Password reset email sent successfully.');
                        // send to the main password reset page...
                        this.$router.push('/reset-password-main');
                    } else {
                    const data = await response.json();
                    console.log(data);
                    this.errors = data.message;
                    }
                } catch (error) {

                    this.showErrors = true;

                    this.errors = error;
                    console.error('Error sending reset email:', error);
                    
                    this.message = 'An error occurred while sending the reset email.';
                }
                },
                }
    }
</script>

<style>

</style>