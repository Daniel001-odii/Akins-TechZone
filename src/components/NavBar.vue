<template>    
<div>
    <div v-if="isOnline" class="popup online">You're online!</div>
    <div v-else class="popup offline">You're offline.</div>
</div>


<div v-if="!userIsLoggedIn" :class="['theme-transition', { 'dark': themeStore.darkMode }]">
    <nav class="Tz-navbar container-fluid">
            <div class="Tz-brand-area">
                    
                    <RouterLink to="/"  class="navbar-brand">
                        <img class="nav-img" src="../components/Logos_icons/techzone.png">
                    </RouterLink>
            

                    <div class="nav-contents"> 
                        <div class="Tz-nav-links">
                            <span><RouterLink to="/jobs" class="tz-page-link">Find Work</RouterLink></span>
                            <span><RouterLink to="/client/dashboard" class="tz-page-link">Hire Talent</RouterLink></span>
                            <span><RouterLink to="/support" class="tz-page-link">Support</RouterLink></span>
                        </div>
                    </div>
            </div>

            <div class="search"><Search/></div>
        
                <div class="nav-auth-buttons">
                    <button class="cust-btn login" style="background: none; color: #000000; border: 1px solid var(--app-blue);">
                    <span>Sign in</span>
                    <div class="login-options">
                        <RouterLink to="/employer/login"><div class="options">As Employer</div></RouterLink>
                        <RouterLink to="/login"><div class="options">As Talent</div></RouterLink>
                    </div>
                    </button>

                    <button class="cust-btn signUp">
                    <span>Sign Up</span>
                    <div class="signup-options">
                        <RouterLink to="/employer/signup"><div class="options">As Employer</div></RouterLink>
                        <RouterLink to="/talent-signUp"><div class="options">As Talent</div></RouterLink>
                    </div>
                    </button>
                </div>

                    <div class="nav-toggler">
                        <i class="bi bi-list menu-toggle" style="color: #fff !important;"  @click="showMenu = !showMenu"></i>
                    </div>
        </nav>
        <transition name="slide" :class="['theme-transition', { 'dark': themeStore.darkMode }]">
            <div class="menu-from-nav" :class="{ 'navActive': showMenu }" v-if="showMenu">
            <div class="menu-header">
                <RouterLink to="/"  class="navbar-brand">
                    <img class="nav-img" src="../components/Logos_icons/techzone.png">
                </RouterLink>
                    <span class="closeBtn" @click="showMenu=false">&times;</span>
            </div>

            <RouterLink to="/jobs" class="menu-item"><div><span class="menu-item-label">Find Job</span></div></RouterLink>
            <RouterLink to="/client" class="menu-item"><div><span class="menu-item-label">Hire Talent</span></div></RouterLink>
                <div class="menu-item">
                    <div class="menu-item-label" @click="signup_options =!signup_options; signin_options=false"><span>Sign Up</span> 
                        <span>
                        <i v-if="!signup_options" class="bi bi-caret-down-fill"></i>
                        <i v-if="signup_options" class="bi bi-caret-up-fill"></i>
                        </span>
                    </div>
                </div>
                    <div class="sub-signUp menu-item" v-if="signup_options">
                        <RouterLink to="/employer/signup" class="options"><div>As Employer</div></RouterLink>
                        <RouterLink to="/talent-signUp" class="options"><div>As Talent</div></RouterLink>
                    </div>
                <div class="menu-item">
                    <div class="menu-item-label" @click="signin_options =!signin_options; signup_options=false"><span>Sign In</span> 
                        <span>
                        <i v-if="!signin_options" class="bi bi-caret-down-fill"></i>
                        <i v-if="signin_options" class="bi bi-caret-up-fill"></i>
                        </span>
                    </div>
                </div>
                <div class="sub-signUp menu-item" v-if="signin_options">
                        <RouterLink to="/employer/login" class="options"><div>As Employer</div></RouterLink>
                        <RouterLink to="/login" class="options"><div>As Talent</div></RouterLink>
                </div>
                <RouterLink to="/support" class="menu-item"><div><span class="menu-item-label">support</span></div></RouterLink>

            </div>
        </transition>
</div>

<div v-if="userIsLoggedIn" :class="['theme-transition', { 'dark': themeStore.darkMode }]">
<nav class="Tz-navbar" :class="['theme-transition', { 'dark': themeStore.darkMode }]">
        <div class="Tz-brand-area">
                
                <span v-if="!userIsLoggedIn">
                    <RouterLink to="/jobs"  class="navbar-brand"><img class="nav-img" src="../components/Logos_icons/techzone.png"></RouterLink>
                </span>
                <span v-if="userIsLoggedIn">
                    <RouterLink to="/"  class="navbar-brand"><img class="nav-img" src="../components/Logos_icons/techzone.png"></RouterLink>
                </span>
                <div class="nav-contents">
                    <div class="Tz-nav-links">
                            <span><slot name="action-1"><RouterLink to="/jobs">Find Work</RouterLink></slot></span>
                            <!-- <span><slot name="action-2"><RouterLink to="/client/dashboard">Hire Talent</RouterLink></slot></span> -->
                    </div>
                </div>
        </div>


        <div class="search"><Search/></div>
                    <div class="Tz-nav-actions">
                            <span class="notifications">
                                <i class="bi bi-bell"></i>
                                <!---notifications modal-->
                                <div class="notification-modal" :class="['theme-transition', { 'dark': themeStore.darkMode }]">
                                    <div class="notifications-header">Notifications</div>
                                    <div class="notify">
                                        <div>
                                        <i class="bi bi-check-circle-fill"></i>
                                        <slot name="notification-item"> New login detected</slot>
                                        </div>
                                        <span class="notify-time">Just now</span>
                                    </div>
                                    
                                    <div class="notifications-footer"><RouterLink to="/notifications"> See all Notifications</RouterLink></div>
                                </div>
                            </span>
                           
                            <i class="bi bi-three-dots-vertical"></i>
                        
                        <!--Logged in user credential display-->
                        <div class="user-menu-toggle" style="width: 150px; display:flex; flex-direction: row; justify-content: center; align-items: center; gap: 8px; margin-right: 10px;">
                            <div @click="userMenuIsShown=!userMenuIsShown" class="tz-user-thumbnail"></div>
                            <span  style="font-size: 12px;">Youre signed in! <br/><button class="logout">user@email.com</button> <br/></span>
                        
                            <div class="tz-user-menu">
                                <RouterLink to="/user/profile" :class="['theme-transition', { 'dark': themeStore.darkMode }]">
                                    <div class="tz-menu-content">
                                        <i class="bi bi-person-circle"></i>
                                    View profile</div>
                                </RouterLink>
                                <div class="tz-menu-content">
                                    <i class="bi bi-gear-fill"></i>
                                    Settings</div>
                                <RouterLink to="/support" :class="['theme-transition', { 'dark': themeStore.darkMode }]">
                                    <div class="tz-menu-content">
                                        <i class="bi bi-question-circle-fill"></i>
                                    Support</div>
                                </RouterLink>
                                <div @click="logout" class="tz-menu-content">
                                    <i class="bi bi-box-arrow-right"></i>
                                    Log out
                                </div>
                                <div class="tz-menu-content" :class="['theme-transition', { 'dark': themeStore.darkMode }]">
                                    <!-- <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-toggle-on" viewBox="0 0 16 16">
                                    <path d="M5 3a5 5 0 0 0 0 10h6a5 5 0 0 0 0-10H5zm6 9a4 4 0 1 1 0-8 4 4 0 0 1 0 8z"/>
                                    </svg> -->
                                    <i>
                                    <label class="switch"> 
                                    <input type="checkbox" @click="themeStore.toggleTheme">
                                    <span class="slider round"></span>
                                    </label></i>
                                    Switch modes
                                    
                                    <!-- <button class="tz_mode_switch" @click="themeStore.toggleTheme">Toggle Theme {{ darkMode }}</button> -->
                                </div>
                            </div>
                        </div>
                    </div>
        <!-- </div> -->
                <!-- <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 33 20" fill="none"  class="menu-toggle"  @click="showMenu = !showMenu">
                    <path d="M1.94727 1.75464H31.6308" stroke="#292D32" stroke-width="1.9789" stroke-linecap="round"/>
                    <path d="M1.94727 10.0001H31.6308" stroke="#292D32" stroke-width="1.9789" stroke-linecap="round"/>
                    <path d="M1.94727 18.2455H31.6308" stroke="#292D32" stroke-width="1.9789" stroke-linecap="round"/>
                </svg> -->
                <i class="bi bi-list menu-toggle"  @click="showMenu = !showMenu"></i>
    </nav>

<transition name="slide" :class="['theme-transition', { 'dark': themeStore.darkMode }]">
    <div class="menu-from-nav" :class="{ 'navActive': showMenu }" v-if="showMenu">
       <div class="menu-header">
        <!-- <RouterLink to="/"  class="navbar-brand">
            <img class="nav-img" src="../components/Logos_icons/techzone.png">
        </RouterLink> -->
        <!--now you have to decide which item is preffered to appear at the top of the menu-->
        <Search/>
            <span class="closeBtn" @click="showMenu=false">&times;</span>
       </div>

       <RouterLink to="/jobs" class="menu-item">
        <div>
            <!-- <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 25 26" fill="none">
            <path d="M6.25 5.5V1.75C6.25 1.41848 6.3817 1.10054 6.61612 0.866116C6.85054 0.631696 7.16848 0.5 7.5 0.5H17.5C17.8315 0.5 18.1495 0.631696 18.3839 0.866116C18.6183 1.10054 18.75 1.41848 18.75 1.75V5.5H23.75C24.0815 5.5 24.3995 5.6317 24.6339 5.86612C24.8683 6.10054 25 6.41848 25 6.75V24.25C25 24.5815 24.8683 24.8995 24.6339 25.1339C24.3995 25.3683 24.0815 25.5 23.75 25.5H1.25C0.918479 25.5 0.600537 25.3683 0.366116 25.1339C0.131696 24.8995 0 24.5815 0 24.25V6.75C0 6.41848 0.131696 6.10054 0.366116 5.86612C0.600537 5.6317 0.918479 5.5 1.25 5.5H6.25ZM2.5 19.25V23H22.5V19.25H2.5ZM2.5 16.75H22.5V8H2.5V16.75ZM8.75 3V5.5H16.25V3H8.75ZM11.25 13H13.75V15.5H11.25V13Z" fill="#4E79BC"/>
            </svg> -->
            <span class="menu-item-label">Work Explorer</span>
            </div>
        </RouterLink>

        <RouterLink to="/savedJobs" class="menu-item">
        <div>
            <!-- <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 21 22" fill="none">
            <path d="M0.767317 8.00682C0.257317 7.80182 0.263317 7.49682 0.801317 7.31782L19.8873 0.95582C20.4163 0.77982 20.7193 1.07582 20.5713 1.59382L15.1173 20.6798C14.9673 21.2088 14.6423 21.2328 14.4003 20.7498L9.84432 11.6368L0.767317 8.00682ZM5.65732 7.80682L11.2933 10.0618L14.3333 16.1438L17.8793 3.73382L5.65632 7.80682H5.65732Z" fill="#45494F"/>
            </svg> -->
            <span class="menu-item-label">Saved Jobs</span>
        </div>
        </RouterLink>
       
        <RouterLink to="/notifications" class="menu-item">
        <div>
            <!-- <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 40 40" fill="none">
                            <circle cx="20.0459" cy="20" r="17.5375" stroke="#4E79BC" stroke-width="3.05"/>
                            <path d="M27.7264 24.3451H29.5765V26.1953H11.0747V24.3451H12.9249V17.8695C12.9249 15.9067 13.7046 14.0243 15.0925 12.6364C16.4804 11.2485 18.3628 10.4688 20.3256 10.4688C22.2884 10.4688 24.1708 11.2485 25.5587 12.6364C26.9466 14.0243 27.7264 15.9067 27.7264 17.8695V24.3451ZM25.8762 24.3451V17.8695C25.8762 16.3974 25.2914 14.9856 24.2505 13.9447C23.2095 12.9037 21.7977 12.3189 20.3256 12.3189C18.8535 12.3189 17.4417 12.9037 16.4008 13.9447C15.3599 14.9856 14.7751 16.3974 14.7751 17.8695V24.3451H25.8762ZM17.5504 28.0455H23.1009V29.8957H17.5504V28.0455Z" fill="#4E79BC"/>
                        </svg> -->
            <span class="menu-item-label">Notifications</span>
        </div>
        </RouterLink>

        <RouterLink to="/support" class="menu-item">
        <div>
            <!-- <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 39 40" fill="none">
                            <path d="M19.1709 39.0625C8.64268 39.0625 0.108398 30.5282 0.108398 20C0.108398 9.47178 8.64268 0.9375 19.1709 0.9375C29.6991 0.9375 38.2334 9.47178 38.2334 20C38.2334 30.5282 29.6991 39.0625 19.1709 39.0625ZM19.1709 35.25C23.2155 35.25 27.0943 33.6433 29.9543 30.7834C32.8142 27.9234 34.4209 24.0446 34.4209 20C34.4209 15.9554 32.8142 12.0766 29.9543 9.21662C27.0943 6.35669 23.2155 4.75 19.1709 4.75C15.1263 4.75 11.2474 6.35669 8.38752 9.21662C5.52759 12.0766 3.9209 15.9554 3.9209 20C3.9209 24.0446 5.52759 27.9234 8.38752 30.7834C11.2474 33.6433 15.1263 35.25 19.1709 35.25V35.25ZM17.2646 25.7188H21.0771V29.5312H17.2646V25.7188ZM21.0771 22.583V23.8125H17.2646V20.9531C17.2646 20.4476 17.4655 19.9627 17.823 19.6052C18.1805 19.2477 18.6653 19.0469 19.1709 19.0469C19.7124 19.0468 20.2428 18.893 20.7003 18.6033C21.1579 18.3137 21.5237 17.9 21.7553 17.4105C21.987 16.921 22.0748 16.3758 22.0087 15.8384C21.9426 15.3009 21.7252 14.7932 21.3818 14.3745C21.0385 13.9557 20.5833 13.6431 20.0692 13.4729C19.5551 13.3028 19.0032 13.2821 18.4778 13.4133C17.9524 13.5446 17.4751 13.8223 17.1014 14.2142C16.7277 14.6061 16.4729 15.096 16.3668 15.6271L12.6267 14.8779C12.8586 13.7191 13.394 12.6426 14.1783 11.7585C14.9625 10.8744 15.9675 10.2144 17.0904 9.84602C18.2133 9.47761 19.4139 9.414 20.5695 9.66167C21.725 9.90935 22.7941 10.4594 23.6674 11.2557C24.5407 12.052 25.1869 13.0658 25.5399 14.1937C25.8929 15.3215 25.9401 16.5229 25.6767 17.675C25.4132 18.827 24.8486 19.8885 24.0405 20.7508C23.2323 21.6131 22.2097 22.2454 21.0771 22.583V22.583Z" fill="#45494F"/>
                        </svg> -->
            <span class="menu-item-label">Help & Support</span>
        </div>
        </RouterLink>

        <RouterLink to="/user/profile" class="menu-item">
        <div>
            <!-- <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 51 50" fill="none">
                            <circle cx="25.8086" cy="25" r="25" fill="#4E79BC"/>
                            <path d="M18.0367 34L24.4173 16.3588H26.9671L33.3477 34H31.0419L29.3095 29.1688H22.0993L20.3303 34H18.0367ZM22.6727 27.0948H28.7117L25.7105 18.5914L22.6727 27.0948Z" fill="white"/>
                        </svg> -->
            <span class="menu-item-label">Profile Settings</span>
        </div>
        </RouterLink>

        <span class="menu-item">
        <div>
            <!-- <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 51 50" fill="none">
                            <circle cx="25.8086" cy="25" r="25" fill="#4E79BC"/>
                            <path d="M18.0367 34L24.4173 16.3588H26.9671L33.3477 34H31.0419L29.3095 29.1688H22.0993L20.3303 34H18.0367ZM22.6727 27.0948H28.7117L25.7105 18.5914L22.6727 27.0948Z" fill="white"/>
                        </svg> -->
            <span class="menu-item-label" @click="logout">Logout</span>
        </div>
        </span>
        <span class="menu-item">
            <label class="switch">
                <input type="checkbox" @click="themeStore.toggleTheme">
                <span class="slider round"></span>
            </label>
            <span class="menu-item-label" style="padding-left: 10px;">Switch theme</span>
        </span>
       

    </div>
</transition>
</div> 
  
    
</template>

<script>
import 'bootstrap/dist/js/bootstrap.js';
import Search from './Search.vue';
import { inject } from 'vue';
import { reactive } from 'vue';
import LeftNav from './LeftNav.vue';
import { RouterLink } from 'vue-router';
import axios from 'axios';
import { ref } from 'vue';
import { onMounted, onUnmounted } from 'vue';
import themeStore from '@/theme/theme';

const api_url = "https://techzoneapp.herokuapp.com/api/logout";

const token = localStorage.getItem('token');
const isDropdownOpen = ref(false);

export default {
    name: 'ConnectionStatus',
 
    setup() {
    const isDropdownOpen = ref(false);
    const toggleDropdown = () => {
      isDropdownOpen.value = !isDropdownOpen.value;
    };
    // Accessing themeStore properties and methods
    const toggleTheme = themeStore.toggleTheme;

    //code that handles when user is off and online.......
    return {
      isDropdownOpen,
      toggleDropdown,
      themeStore,
      toggleTheme
    };
  },
  
    components:{ Search, LeftNav, RouterLink },
    data(){
        return{
            userMenuIsShown: false,
            showMenu:false,
            userIsLoggedIn: false,
            signup_options:false,
            signin_options:false,
            userIsOffline: false,
            stateText: "You are offline",
            isOnline: navigator.onLine,
        };
    },
    created() {
            window.addEventListener('online', this.updateOnlineStatus);
            window.addEventListener('offline', this.updateOnlineStatus);
        },


    methods: {
        logout(){
        localStorage.removeItem('token');
        this.$router.push('/');
        },

        checkLoginStatus(){
            const token = localStorage.getItem('token');
            this.userIsLoggedIn = !!token; 
            console.log("user is logged in? " + this.userIsLoggedIn);
            },

        updateOnlineStatus(event) {
            this.isOnline = navigator.onLine;
            },
        },
        beforeDestroy() {
            window.removeEventListener('online', this.updateOnlineStatus);
            window.removeEventListener('offline', this.updateOnlineStatus);
        },

    mounted() {
            this.checkLoginStatus();
        },
       
  }

</script>


<style scoped>

.logout{
    /* color: blue; */
    cursor: pointer;
    border: none;
    /* background: none; */

}
.user-menu-toggle:hover .tz-user-menu{
    display: block;
}
.notification-modal{
    display: none;
    position: absolute;
    width: 300px;
    background: #fff;
    box-shadow: 0px 12px 12px #F1F4F4;
    top: 45px;
    right: 60px;
    font-size: 0.8em;
    z-index: 999999;
}

.notifications:hover .notification-modal{
    display: block;
}

.notifications-header{
    text-align: center;
    padding: 12px;
    border-bottom: 1px solid var(--app-hover);
    margin-bottom: 3px;
}
.notify{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 15px;
    width: 100% !important;
}
.notify:hover{
    background: var(--app-hover);
}
.notifications-footer{
    padding: 12px;
    border-top: 1px solid var(--app-hover);
    margin-top: 5px;
}
.notifications-footer > *{
    /* color: var(--app-blue) !important; */
}
.notifications:hover{
    cursor: pointer !important;
}



.nav-links{
    display: flex;
    z-index: 9999999999;
    flex-direction: row;
}
.closeBtn{
    /* color: var(--app-blue); */
    font-size: 30px;
    position: absolute; 
    right: 20px;
    top:2px;
    cursor: pointer;
}
.navActive{
    display: block;
}

.menu-from-nav{
    position: fixed;
    top: 0;
    background-color: #fff;
    height: 0px;
    width: 100%;
    z-index: 99999;
    display: none;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    /* gap: 10px; */
}
.menu-header{
    /* background: red; */
    height: 100px;
    width: 100%;
    display: flex;
    padding: 30px;
    align-items: center;
    justify-content: center;
    margin-top: 30px;
}
.menu-header > h2{
    margin: 0;
    padding: 0;
}
.menu-item{
    height: 50px;
    border-bottom: 2px solid var(--app-hover);
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding-left: 30px;
}
.menu-item > div{
    display: flex;
    gap: 30px;
}
.menu-item:hover{
    background: var(--app-hover);
    /* color: #fff !important; */
}
.menu-from-nav.navActive{
    display: flex;
    height: 100vh;
}


.Tz-navbar{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    height: 60px;
    width: 100%;
    margin: 0 auto;
    padding: 10px;
    background: #fff;
    border-bottom: 0.5px solid #C8C6C6;
    z-index: 99999;
}

.Tz-nav-actions{
    gap: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: center;
}

.menu-toggle{
    margin: 0px 10px 0px 10px;
    cursor: pointer;
    display: none;
}

.cust-actions{
    display: flex;
    flex-direction: row;
}

.menu-toggle.active span:nth-child(1) {
    transform: rotate(45deg) translate(5px, 5px);
  }
  
  .menu-toggle.active span:nth-child(2) {
    opacity: 0;
  }
  
  .menu-toggle.active span:nth-child(3) {
    transform: rotate(-45deg) translate(5px, -5px);
  }
  

  
.nav-toggler{
    display: none;
}
.Tz-brand-area{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
}

.nav-contents{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-left: 20px;
    font-size: 0.9rem;
}

.Tz-nav-links{
    gap: 20px;
    display: flex;
    justify-content: space-between;
    /* width: 180px; */
    font-weight: 50px;
}
.nav-auth-buttons{
    /* width: 300px; */
    /* border: 1px solid goldenrod; */
    justify-content: space-between;
    display: flex;
    gap: 10px;
}

.signUp{
    background: var(--app-blue);
    border-radius: 5px;
}
.signUp:hover .signup-options{
    display: block;
}
.login{
    /* color: #000; */
    border-radius: 5px;
    background: none !important;
}
.login:hover{
    background: var(--app-hover) !important;
}
.login:hover .login-options{
    display: flex;
}

.signup-options{
    display: none;
    position: absolute;
    right: 10px;
    top: 45px;
    background: #fff;
    width: 100px;
    box-shadow: 0px 12px 12px #e2e2e2;
    text-align: right;
}

.tz-user-menu{
    display: none;
    flex-direction: column;
    background: #fff;
    box-shadow: 0px 5px 10px #efefef;
    position: absolute;
    top: 45px;
    right: 70px;
    z-index: 999;
    font-size: 0.9rem;
    overflow-x: hidden;
}
.login-options{
    display: none;
    flex-direction: column;
    position: absolute;
    right: 120px;
    top: 45px;
    background: #fff;
    box-shadow: 0px 5px 10px #efefef;
    text-align: right;
}
.tz-user-thumbnail{
    height: 35px;
    width: 35px;
    border-radius: 50%;
    background: url("./Logos_icons/dummy_user.png");
}
.tz-user-thumbnail:hover .tz-user-menu{
    /* background: red; */
    display: flex;
}
.tz-menu-content{
    cursor: pointer;
    padding: 8px;
    padding-right: 30px;
}
.tz-menu-content > svg{
    margin-right: 8px;
}
.tz-menu-content:hover{
    background: var(--app-hover);
}


.options{
    padding: 5px 10px;
    width: 100%;
}
.options:hover{
     background: var(--app-blue);
     color: #fff;
}
.options > div:hover{
    color: #fff;
}
.menu-item-label{
    width: 100%;
    display: flex;
    justify-content: space-between;
}

.sub-signUp{
    flex-direction: column;
    align-items: flex-start;
    padding-left: 50px;
    height: 80px;
    justify-content: center;
    width: 100%;
}
.sub-signUp > div{
    width: 100%;
}
.sub-signUp:hover{
    background: none;
}

/*-----------animation for menu---------------*/
.slide-enter-active,
.slide-leave-active {
  transition: margin 0.3s;
  margin-top: 0;
}

.slide-enter-from,
.slide-leave-to {
  /* opacity: 0; */
  margin-top: -100vh;
}

 /*--meida queries-------*/
 @media only screen and (max-width: 720px) {
    .Tz-navbar{
        justify-content: space-between;
        /* border: 1px solid red; */
    }
    .nav-contents{
        display: none;
    }
    .nav-toggler{
        display: block;
    }
    .search{
        display: none !important;
    }
    .help{
        display: none;
    }
    .Tz-nav-actions{
        width: auto;
        display: none;
        /* flex-direction: column; */
    }
    .Tz-nav-actions > svg{
        margin: 0px 5px 0px 5px;
    }
    .menu-toggle{
        display: inline-block;
    }
    .nav-auth-buttons{
        display: none;
    }
    }



/* network status checker */
.popup {
  position: fixed;
  bottom: 20px;
  right: 20px;
  padding: 10px;
  border-radius: 5px;
  color: #fff;
  font-size: 16px;
  z-index: 1000;
}

.online {
  background-color: green;
}

.offline {
  background-color: red;
}


/* The switch - the box around the slider */
.switch {
  position: relative;
  display: inline-block;
  width: 38px;
  height:23px;
}

/* Hide default HTML checkbox */
.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

/* The slider */
.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: .4s;
  transition: .4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 15px;
  width: 15px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  -webkit-transition: .4s;
  transition: .4s;
}

input:checked + .slider {
  background-color: #2196F3;
}

input:focus + .slider {
  box-shadow: 0 0 1px #2196F3;
}

input:checked + .slider:before {
  -webkit-transform: translateX(15px);
  -ms-transform: translateX(15px);
  transform: translateX(15px);
}

/* Rounded sliders */
.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}
</style>
