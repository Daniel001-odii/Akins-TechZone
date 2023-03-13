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
                <form  style="margin-top: 10px"  @submit.prevent="login">
                    <span v-for="error in msg" :key="error"  >
                        <ul class="error-msg fade-out"  style="z-index:999999;">
                            <li class="" v-if="show">{{ error }}</li>
                        </ul>
                    </span>
                <div class="form-section">
                    <label for="email">Email Address</label>
                    <input class="form-input" name="email" placeholder="email address" v-model="email" type="email" required>
                </div>


                <button style="margin-top: 10px" class="form-btn" type="submit">Send Reset Link</button>
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


const Api_url = "http://127.0.0.1:8000/api/login";

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
                msg: [],
            }
        },
        mounted(){
            setTimeout(() => {
                this.show = false
            }, 30000);
        },
        methods:{
            login(){
                ////////spawns loader at the top of screen.....
                loading.value = true;


                axios.post(Api_url, {email: this.email,password: this.password})
                .then(response =>{
                    //handle succef=sful login...
                    localStorage.setItem('token', response.data.token);
                    this.$router.push('/jobs');
                })
                .catch(error =>{
                    //handle errors from request
                    let message = error.response.data.error;
                    //push error from api into error array....
                    this.msg.push(message);

                    //errors are also logged into console for developments only....
                    console.log("Error:: ", message);
                    // for(const key in message){
                    //     console.log("the errors cleaned are: ", `${key}: ${message[key]}`);
                    //     this.errors.push(`${message[key]}`);
                    // };

                    
                    //stop loader....
                    loading.value = false;
                }
                    )}
        }
    }
</script>

<style>
   /* .fade-out{
    opacity: 1;
    animation: fadeout 6s;
   }

   @keyframes fadeout{
    0%{
        opacity: 1;
    }
    100%{
        opacity: 0;
    }
   } */
</style>