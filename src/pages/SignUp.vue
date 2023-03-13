<template>
    <Loader v-if="loading"></Loader>

    <div class="form-container">
        <div class="leftSide">
            <div class="topLeftImage">
                <a href='/#'><img class="brand-img" src="../components/Logos_icons/techzone.png"></a>
            </div>

            <div class="subDiv">
                
                <div class="left-content">
                <h2 style="font-weight: bolder;">Welcome Back!</h2>
                <p>Please enter your login details</p>

                <form @submit.prevent="signup">
                    <span v-for="error in msg" :key="error">
                        <ul class="error-msg" style="list-style-type:none">
                            <li v-if="error.firstname" >{{ error.firstname[0] }}</li>
                            <li v-if="error.lastname">{{ error.lastname[0] }}</li>
                            <li v-if="error.email">{{ error.email[0] }}</li>
                            <li v-if="error.password">{{ error.password[0] }}</li>
                            <li v-if="error.password_confirmation">{{ error.password_confirmation[0] }}</li>
                        </ul>
                    </span>

                <div class="form-section" style="flex-direction: row;">
                    <div class="name-section">
                        <label for="firstname">First Name</label>
                        <!-- <li class="error-msg" v-if="msg" v-for="error in msg" :key="error">{{ error.firstname[0] }}</li> -->
                        <input class="form-input" placeholder="First Name" type="name" v-model="user.firstname" required>
                    </div>
                    <div class="name-section">
                        <label for="lastname">Last Name</label>
                        <!-- <li class="error-msg" v-if="msg" v-for="error in msg" :key="error">{{ error.lastname[0] }}</li> -->
                        
                        <input class="form-input" placeholder="Last Name" type="name" v-model="user.lastname" required>
                    </div>
                </div>
            
                <div class="form-section">
                    
                </div>

                <div class="form-section">
                    <label for="email">Email Address</label>
                    <!-- <li class="error-msg" v-if="msg" v-for="error in msg" :key="error">{{ error.email[0] }}</li> -->
                    <input class="form-input" placeholder="Email here" type="email" v-model="user.email" required>
                </div>

                <div class="form-section">
                    <label for="password">Password</label>
                    <!-- <li class="error-msg" v-if="msg" v-for="error in msg" :key="error">{{ error.password[0] }}</li> -->
                    <input class="form-input" placeholder="Enter your password" type="password" v-model="user.password" name="password" required>
                </div>

                <div class="form-section">
                    <!-- <li class="error-msg" v-if="msg" v-for="error in msg" :key="error">{{ error.password_confirmation[0] }}</li> -->
                    <label for="password_confirmation">Confirm Password</label>
                    <input class="form-input" placeholder="Enter your password" type="password" v-model="user.password_confirmation" name="password_confirmation" required>
                </div>

                <div class="form-section">
                    <!-- @click="showLoader=!showLoader" -->
                    <button  class="form-btn" type="submit">Continue <i class="bi bi-upload"></i></button>
                </div>
                </form>
                <p class="form-end"> Already have an account?  <RouterLink to="/login">Sign in</RouterLink></p>
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

const Api_url = "http://127.0.0.1:8000/api/register";

    export default {
        components: {Loader},
        setup(){
            return {loading};
        },
        data(){
            return{
                
                user:{
                firstname: '',
                lastname: '',
                email: '',
                password: '',
                password_confirmation: '',
                },
                errors: [],
                msg: [],
                
            }
        },
        methods:{
            async signup(){
                ////////spawns loader at the top of screen.....
                loading.value = true;


                axios.post(Api_url, this.user)
                .then(response =>{
                    //handle successful signup
                    this.$router.push('/login');
                    console.log(response.data);
                })
                .catch(error =>{
                    //handle errors from request
                    let message = error.response.data.errors;
                    //push error from api into error array....
                    this.msg.push(error.response.data.errors);

                    //errors are also logged into console for developments only....
                    console.log("Error:: ", message);
                    for(const key in message){
                        console.log("the errors cleaned are: ", `${key}: ${message[key]}`);
                        this.errors.push(`${message[key]}`);
                    };

                    //stop loader....
                    loading.value = false;
                    
                })
                    
                }
            },
        }
    
</script>

<style>
    .error-msg{
        color: red;
        font-size: 0.8em;
        list-style-type: none !important;
    }


/*---- roots has been declared in the main.css file------*/

</style>