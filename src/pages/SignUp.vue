<template>
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
                    <h2 style="font-weight: bolder;">Create a freelancer account</h2>
                    <p>Please enter your details to register</p>
    
    
                    <!-------- show login errors here-------->
                    <!-- <p v-for="error in errors" :key="error">{{ error }}</p> -->
                    <div v-for="error in errors" :key="error">
                      <p class="alert alert-danger" v-for="lines in error" :key="lines" role="alert">{{ lines }}</p>
                    </div>
                    <form @submit.prevent="signup">
    
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
                        <button class="form-btn" type="submit" :disabled="isLoading"  :class="{ 'disabled-button': isLoading }">
                            <span v-if="isLoading" class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                            <span v-if="isLoading === true">Loading...</span>
                            <span v-else>Sign Up</span>
                        </button>
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
      const Api_url = "http://127.0.0.1:8000/api/register";
      // const form_error = [];
      
      export default {
        data() {
          return {
            user:{
                    firstname: '',
                    lastname: '',
                    email: '',
                    password: '',
                    password_confirmation: ''},
                    errors: {},
                    isLoading: false,
                    
            // passwordConfirmation: '',
          };
          
        },
        methods: {
          async signup() {
            this.isLoading = true;
            try {
              const response = await axios.post(Api_url, this.user);
              console.log(response.data);
              this.isLoading = true;
                        //handle successful signup
                        this.$router.push('/employer/login');
                        console.log(response.data);
            } catch (error) {
              this.isLoading = false;
              // console.error(error);
              // this.form_error = error.request.response
              // console.log(JSON.stringify(this.form_error))
              // this.buttonDisabled = false
              if (error.response && error.response.data && error.response.data.errors) {
                this.errors = error.response.data.errors;
              }
            } 
          },
          
        },
      };
      </script>
      