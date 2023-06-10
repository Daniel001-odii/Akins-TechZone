<template>
    <nav class="Tz-navbar">
            <div class="Tz-brand-area">
                <div class="nav-toggler">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 33 20" fill="none" class="menu-toggle" @click="showMenu = !showMenu">
                        <path d="M1.94727 1.75464H31.6308" stroke="#292D32" stroke-width="1.9789" stroke-linecap="round"/>
                        <path d="M1.94727 10.0001H31.6308" stroke="#292D32" stroke-width="1.9789" stroke-linecap="round"/>
                        <path d="M1.94727 18.2455H31.6308" stroke="#292D32" stroke-width="1.9789" stroke-linecap="round"/>
                    </svg>
                </div>
                    <RouterLink to="/"  class="navbar-brand">
                        <img class="nav-img" src="../components/Logos_icons/techzone.png">
                    </RouterLink>
            </div>

            <div class="nav-contents">
                
                <div class="Tz-nav-links">
                    <slot>
                    <span><RouterLink to="/jobs">Find Job </RouterLink></span>
                    <span><RouterLink to="/client">Hire Talent</RouterLink></span>
                    </slot>
                </div>

                <div class="nav-auth-buttons">
                    <RouterLink to="/login"><button class="cust-btn signIn">Sign in</button></RouterLink>
                    <button @click="signup_options = !signup_options" class="cust-btn signUp">Sign Up</button>
                </div>
                <div class="signup-options" v-if="signup_options">
                    <RouterLink to="/employer/signup"><div class="options">As Employer</div></RouterLink>
                    <RouterLink to="/talent-signUp"><div class="options">As Talent</div></RouterLink>
                </div>
            </div>
    </nav>

<transition name="slide">
    <div class="menu-from-nav" :class="{ 'navActive': showMenu }" v-if="showMenu">
       <div class="menu-header">
        <RouterLink to="/"  class="navbar-brand">
            <img class="nav-img" src="../components/Logos_icons/techzone.png">
        </RouterLink>
            <span class="closeBtn" @click="showMenu=false">&times;</span>
       </div>

       <RouterLink to="/jobs" class="menu-item">
        <div>
            <span class="menu-item-label">Find Job</span>
        </div>
        </RouterLink>

        <RouterLink to="/client" class="menu-item">
        <div>
            <span class="menu-item-label">Hire Talent</span>
        </div>
        </RouterLink>

        
        <!-- <RouterLink to="/signUp" class="menu-item"> -->
        <div class="menu-item">
            <div class="menu-item-label" @click="signup_options =!signup_options"><span>Sign Up</span> 
                <span>
                <i v-if="!signup_options" class="bi bi-caret-down-fill"></i>
                <i v-if="signup_options" class="bi bi-caret-up-fill"></i>
                </span></div>
            </div>
                <div class="sub-signUp menu-item" v-if="signup_options">
                    <RouterLink to="/talent-signUp" class="options"><div>As Employer</div></RouterLink>
                    <RouterLink to="/employer/signup" class="options"><div>As Talent</div></RouterLink>
                </div>
        <!-- </RouterLink> -->
                
        
        <RouterLink to="/login" class="menu-item">
        <div>
            <span class="menu-item-label">Sign In</span>
        </div>
        </RouterLink>

    </div>
</transition>
</template>

<script>
import 'bootstrap/dist/js/bootstrap.js';
import Search from './Search.vue';
import { inject } from 'vue';
import { reactive } from 'vue';
import { RouterLink } from 'vue-router';

const api_url = "https://techzoneapp.herokuapp.com/api/";

export default {
    components:{
    Search,
    RouterLink
},
data(){
        return{
            showMenu:false,
            signup_options:false,
            userIsLoggedIn: false,
        };
    },
    mounted() {
    this.checkLoginStatus();
  },
    methods: {
    checkLoginStatus() {
      // Perform your logic to check the user login status
      // For example, you could check if there's a valid authentication token in local storage or a Vuex store
      const token = localStorage.getItem('token');
      this.userIsLoggedIn = !!token; // Set isLoggedIn to true if a token exists, otherwise false
      console.log("user is logged in? " + this. userIsLoggedIn);
    },
  },
  };

</script>


<style>
</style>
