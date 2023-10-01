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
                <p>Please enter your New password.</p> <small>becareful this time so you dont forget it again.</small>

                <!--form starts here ------------------------------->
                <form  style="margin-top: 10px"  @submit.prevent="resetPassword">
                    <span v-for="error in msg" :key="error"  >
                        <ul class="error-msg fade-out"  style="z-index:999999;">
                            <li class="" v-if="show">{{ error }}</li>
                        </ul>
                    </span>
                <div class="form-section">
                    <label for="email">New Password</label>
                    <input class="form-input" name="password" placeholder="input your new password" v-model="password" type="password" required>
                </div>


                <button style="margin-top: 10px" class="form-btn" type="submit">
                    <span v-if="isLoading" class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                            <span v-if="isLoading === true">Loading...</span>
                            <span v-else>Reset password</span>
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
                password: '',
                errors: [],
                msg: [],
                isLoading: false,
            }
        },
        mounted(){
            setTimeout(() => {
                this.show = false
            }, 30000);
        },
        methods:{


            async resetPassword() {
                this.isLoading = true;
                const resetToken = this.$route.params.token;
                console.log("the reset token from the url: ", resetToken);
                try {
                    const response = await fetch(`${this.api_url}/reset-password`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ newPassword: this.password, resetToken: resetToken }),
                    });

                    if (response.ok) {
                    this.isLoading = false;
                    const data = await response.json();
                    console.log(data);
                    // Redirect the user to the login page or do something else
                    this.$router.push('/login');

                    // Clear the form inputs or redirect to a login page
                    } else {
                    const data = await response.json();
                    this.message = data.message;
                    }
                } catch (error) {
                    console.error('Error resetting password:', error);
                    this.message = 'Internal server error';
                }
    },



    },
}
</script>

<style>

</style>