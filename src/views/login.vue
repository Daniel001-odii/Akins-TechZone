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
                <div class="tz_alert_box" v-if="show_errors">
                    <span>{{ errors.message }}</span>
                    <span class="tz_alert_box_closeBtn" @click="show_errors = !show_errors">&times;</span>
                </div>


                  <form @submit.prevent="login">
                  <div class="form-section">
                      <label for="email">Email Address</label>
                      <input class="form-input" name="email" placeholder="email address" v-model="email" type="email" required>
                  </div>

                  <div class="form-section">
                      <label for="password">Password</label>
                      <input class="form-input" placeholder="password" v-model="password" :type="showPassword ? 'text' : 'password'" required>
                  </div>


                  <div class="form-issues">
                      <div class="check-container">
                          <div class="checkbox-wrapper-46">
                              <input class="inp-cbx" id="rememberDetails" v-model="showPassword" type="checkbox"/>
                              <label class="cbx" for="rememberDetails">
                              <span>
                                  <svg width="12px" height="10px" viewbox="0 0 12 10"><polyline points="1.5 6 4.5 9 10.5 1"></polyline></svg>
                              </span>
                              <span>show password</span>
                              </label>
                          </div>
                      </div>
                      <RouterLink to="/reset-password"><p>Forgot password?</p></RouterLink>
                  </div>

                      <button class="form-btn" type="submit" :disabled="isLoading"  :class="{ 'disabled-button': isLoading }">
                          <span v-if="isLoading" class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                          <span v-if="isLoading === true">Signing in...</span>
                          <span v-else>Sign in</span>
                      </button>
                  </form>
                  <!-------form ends here----------------->

                  <div style="font-size: 0.8em; display: flex; flex-direction: row; padding: 20px; justify-content: center;">
                  <p class="form-en">Don't have account yet?</p>
                  <div style="padding-left: 10px;" class="signup-on-form">
                              <p style="color: blue; cursor: pointer;" @click="signup_options=!signup_options">Sign Up</p>
                              <div class="signup-options" v-if="signup_options">
                                  <RouterLink to="/client/signup"><div class="options">As Employer</div></RouterLink>
                                  <RouterLink to="/talent/signup"><div class="options">As Talent</div></RouterLink>
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
                  errors: '',
                  isLoading: false,
                  showPassword: false,
                //   ...................
                  show_errors: false,
              }
          },
          methods: {
  async login() {
    this.isLoading = true;
    try {
      const response = await axios.post(`${this.api_url}/login`, {
        email: this.email,
        password: this.password
      });
      const token = response.data.accessToken;
      localStorage.setItem('token', token);
      console.log(token);

      // Get the intended route from query parameter, if available
      const redirect = this.$route.query.redirect || '/jobs';

      this.$router.push(redirect); // Redirect to the intended route
    }
    catch (error) {
    this.errors = JSON.parse(error.request.response);
      console.error("main error: " + error.request.response);
      this.show_errors = true;
      this.isLoading = false;
    }
  },





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

   .tz_alert_box{
    display: flex;
    flex-direction: row;
    max-width: 300px;
    justify-content: space-between;
    padding: 10px;
    background: #f8d7da;
    color: #721c24;
    align-items: center;
    border-radius: 5px;
    margin: 20px 0px;
    border: 1px solid #f5c6cb;
    transition: 1s;
   }

   .tz_alert_box_closeBtn{
    cursor: pointer;
   }
  </style>