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
                    <div class="tz_alert_box" v-if="show_errors">
                        <span>{{ errors.message }}</span>
                        <span class="tz_alert_box_closeBtn" @click="show_errors = !show_errors">&times;</span>
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
    
                    <!-- <div class="form-section">
                        <label for="password_confirmation">Confirm Password</label>
                        <input class="form-input" placeholder="Enter your password" type="password" name="password_confirmation" required>
                    </div> -->
    
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
      
      export default {
  data() {
    return {
      user: {
        firstname: '',
        lastname: '',
        email: '',
        password: '',
      },
      isLoading: false,
      errors: '',
      // 
      show_errors: false,
    };
  },
  methods: {
    async signup() {
      this.isLoading = true;
      try {
        const response = await axios.post(`${this.api_url}/register`, this.user);
        console.log(response.data);
        this.isLoading = false;

        // Handle successful signup
        // Redirect the user to the login page or do something else
        this.$router.push('/login');
      } catch (error) {
        this.errors = JSON.parse(error.request.response);
        this.show_errors = true;
        this.isLoading = false;
        console.log(error.request.response);
        
      }
    },
  },
};

      </script>

<style>

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
      