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
                <h2 style="font-weight: bolder;">Create a client account</h2>
                <p>Please enter your details to register</p>

                <form @submit.prevent="signup">
                    <!-- <span v-for="error in msg" :key="error">
                        <ul class="error-msg" style="list-style-type:none">
                            <li v-if="error.firstname" >{{ error.firstname[0] }}</li>
                            <li v-if="error.lastname">{{ error.lastname[0] }}</li>
                            <li v-if="error.email">{{ error.email[0] }}</li>
                            <li v-if="error.password">{{ error.password[0] }}</li>
                            <li v-if="error.password_confirmation">{{ error.password_confirmation[0] }}</li>
                        </ul>
                    </span> -->

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
                    <button class="form-btn">Next <i class="bi bi-arrow-right"></i></button>
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
import { RouterLink } from 'vue-router';

//make sure loader is set to invisible .....
const loading = ref(false);



// const Api_url = "http://127.0.0.1:8000/api/register";
const Api_url = "https://techzone.herokuapp.com/register";


/*
    export default {
        components: { Loader, RouterLink },
        setup(){
            return {loading};
        },
        data() {
    return {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      passwordConfirmation: '',
    };
  },
  methods: {
    async signup() {
      try {
        const response = await axios.post(`${Api_url}/register`, {
          first_name: this.firstName,
          last_name: this.lastName,
          email: this.email,
          password: this.password,
          password_confirmation: this.passwordConfirmation,
        });
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    },
  },
        }
*/
        


        export default {
            components: { Loader, RouterLink },
        setup(){
            return {loading};
        },
  data() {
    return {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      passwordConfirmation: '',
    };
  },
  methods: {
    async signup() {
      try {
        const response = await axios.post('/api/register', {
          first_name: this.firstName,
          last_name: this.lastName,
          email: this.email,
          password: this.password,
          password_confirmation: this.passwordConfirmation,
        });
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    },
  },
};


    
</script>

<style>
    .error-msg{
        color: red;
        font-size: 0.8em;
        list-style-type: none !important;
    }


/*---- roots has been declared in the main.css file------*/

</style>