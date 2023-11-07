<template>

<!--  this is the modal displayed when a user tries logging out....... -->
<div class="logout-modal" v-if="showModal">
    <div class="modal-content" :class="['theme-transition', { 'dark': themeStore.darkMode }]">
        <span>Are you sure you want to logout?</span>
        <div class="modal-options">
            <span class="yes" @click="realLogout">Yes</span>
            <span class="no" @click="showModal = !showModal">No</span>
        </div>
    </div>
</div>

<!--  this is the modal displayed when a user tries logging out....... -->
<div class="logout-modal" v-if="showTokenExpiredModal">
    <div class="modal-content" :class="['theme-transition', { 'dark': themeStore.darkMode }]">
        <span>Your session expired, please login.</span>
        <div class="modal-options">
            <span class="yes" @click="realLogout">Okay</span>
        </div>
    </div>
</div>




<!-- <div v-if="isOffline" class="offline-message">
    Internet connection is lost. Please check your network.
    <span @click="isOffline = !isOffline">&times;</span>
</div> -->

<div v-if="userNotLoggedIn" :class="['theme-transition', { 'dark': themeStore.darkMode }]">
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

            <div class="search">
                <form @submit.prevent="searchJobs" style=" display: flex; flex-direction: row; gap: 10px;">
                    <div class="filter-search">
                            <i class="bi bi-search"></i>
                            <input type="search" class="ft-search" v-model="keywords" placeholder="Search all types of jobs">
                    </div>
                </form>
            </div>

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

<div v-if="userIsUser" :class="['theme-transition', { 'dark': themeStore.darkMode }]">
    <nav class="Tz-navbar" :class="['theme-transition', { 'dark': themeStore.darkMode }]">
        <div class="Tz-brand-area">
                    <RouterLink to="/jobs"  class="navbar-brand"><img class="nav-img" src="../components/Logos_icons/techzone.png"></RouterLink>
                <div class="nav-contents">
                    <div class="Tz-nav-links">
                            <span><slot name="action-1"><RouterLink to="/jobs">Find Work</RouterLink></slot></span>
                            <span><slot name="action-2"></slot></span>
                    </div>
                </div>
        </div>


        <div class="search">
            <form @submit.prevent="searchJobs" style=" display: flex; flex-direction: row; gap: 10px;">
                <div class="filter-search">
                        <i class="bi bi-search"></i>
                        <input type="search" class="ft-search" v-model="keywords" placeholder="Search all types of jobs">
                </div>
            </form>
        </div>
                    <div class="Tz-nav-actions">
                            <div class="notifications">
                                <i class="bi bi-bell"></i>
                                <div class="notification-dot" v-if="userNotifications && userNotifications.length > 0" style="
                                    background: red;
                                    height: 15px;
                                    width: 15px;
                                    color: #fff;
                                    font-size: 0.7em !important;
                                    border-radius: 50%;
                                    display: flex;
                                    justify-content: center;
                                    align-items: center;
                                    position: absolute;
                                    left: 10px;
                                    top: -3px;

                                ">{{ userNotifications.length }}</div>
                                <!---notifications modal-->
                                <div class="notification-modal notification-modal-sw" :class="['theme-transition', { 'dark': themeStore.darkMode }]">
                                    <div class="notifications-header">Notifications</div>
                                    <div v-if="userNotifications" class="notify">
                                        <div class="notify-line" v-for="(notify, index) in userNotifications" :key="index">
                                            <div>
                                                <!-- <i class="notify_icon bi bi-check-circle-fill"></i> -->
                                                <i class="notify_icon bi bi-person-circle"></i>
                                                <span name="notification-item">
                                                    <div>{{ notify.message }}</div>
                                                    <small style="font-size: 9px !important;">{{ formatTimestamp(notify.createdAt) }}</small>
                                                </span>
                                                <span class="notifications_dismiser" @click="markNotificationAsRead(notify._id)">&times;</span>
                                            </div>
                                        </div>

                                    </div>

                                    <div class="notifications-footer"><RouterLink to="/notifications"> See all Notifications</RouterLink></div>
                                </div>
                            </div>

                            <i class="bi bi-three-dots-vertical" style="margin-right: 8px"></i>

                        <!--Logged in user credential display-->
                        <div class="user-menu-toggle">
                            <!-- <div class="tz-user-thumbnail" :style="setUser"></div> -->
                            <div v-if="userDetails.profile">
                                <img  :src="userDetails.profile.profileImage" class="tz-user-thumbnail">
                            </div>

                            <div  style="font-size: 12px;">
                                <div class="">{{ userDetails.firstname }} {{ userDetails.lastname }}</div>
                                <div class="logout"> {{ userDetails.email }}</div>
                            </div>

                            <div class="tz-user-menu tz-user-menu-sw">
                                <!-- <RouterLink to="/user/profile" :class="['theme-transition', { 'dark': themeStore.darkMode }]"> -->
                                    <div class="tz-menu-content" @click="navigateToUserprofile(userDetails.id)">
                                        <i class="bi bi-person-circle"></i>
                                    View profile</div>
                                <!-- </RouterLink> -->
                                <div class="tz-menu-content">
                                    <i class="bi bi-gear-fill"></i>
                                    Settings</div>
                                <RouterLink to="/myjobs" :class="['theme-transition', { 'dark': themeStore.darkMode }]">
                                    <div class="tz-menu-content">
                                        <i class="bi bi-send-check-fill"></i>
                                    My Applications</div>
                                </RouterLink>
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
                                        <input v-model="isDarkMode" type="checkbox" @click="themeStore.toggleTheme">
                                    <span class="slider round"></span>
                                    </label></i>theme

                                    <!-- <button class="tz_mode_switch" @click="themeStore.toggleTheme">Toggle Theme {{ darkMode }}</button> -->
                                </div>
                            </div>
                        </div>
                    </div>
                <i class="bi bi-list menu-toggle"  @click="showMenu = !showMenu">
                    <div class="notification-dot" v-if="userNotifications && userNotifications.length > 0" style="
                                    background: red;
                                    height: 8px;
                                    width: 8px;
                                    color: #fff;
                                    font-size: 0.7em !important;
                                    border-radius: 50%;
                                    display: flex;
                                    justify-content: center;
                                    align-items: center;
                                    position: absolute;
                                    right: 22px;
                                    top: 18px;

                                "></div>
                </i>
    </nav>

<transition name="slide" :class="['theme-transition', { 'dark': themeStore.darkMode }]">
    <div class="menu-from-nav" :class="{ 'navActive': showMenu }" v-if="showMenu">
       <div class="menu-header">
        <RouterLink to="/"  class="navbar-brand">
            <img class="nav-img" src="../components/Logos_icons/techzone.png">
        </RouterLink>
        <!--now you have to decide which item is preffered to appear at the top of the menu-->
        <!-- <Search/> -->
            <span class="closeBtn" @click="showMenu=false">&times;</span>
       </div>

        <RouterLink to="/jobs" class="menu-item">
        <div>
            <span class="menu-item-label">Work Explorer</span>
            </div>
        </RouterLink>

        <RouterLink to="/messages" class="menu-item">
        <div>
            <span class="menu-item-label">Messages</span>
        </div>
        </RouterLink>

        <span class="menu-item"  @click="navigateToUserprofile(userDetails.id)">
        <div>
            <span class="menu-item-label">Profile Settings</span>
        </div>
        </span>

        <RouterLink to="/savedJobs" class="menu-item">
        <div>
            <span class="menu-item-label">Saved Jobs</span>
        </div>
        </RouterLink>

        <RouterLink to="/myjobs" class="menu-item">
        <div>
            <span class="menu-item-label">My Applications</span>
        </div>
        </RouterLink>

        <RouterLink to="/notifications" class="menu-item">
        <div>
            <span class="menu-item-label">Notifications <span class="badge badge-danger" v-if="userNotifications.length > 0">{{ userNotifications.length }}</span></span>
        </div>
        </RouterLink>





        <span class="menu-item">
        <div>
            <span class="menu-item-label" @click="logout">Logout</span>
        </div>
        </span>
        <span class="menu-item">
            <label class="switch">
                <input v-model="isDarkMode" type="checkbox" @click="themeStore.toggleTheme">
                <span class="slider round"></span>
            </label>
            <span class="menu-item-label" style="padding-left: 10px;">Switch theme</span>
        </span>


    </div>
</transition>
</div>


<div v-if="userIsEmployer" :class="['theme-transition', { 'dark': themeStore.darkMode }]">
<nav class="Tz-navbar" :class="['theme-transition', { 'dark': themeStore.darkMode }]">
        <div class="Tz-brand-area">
                    <RouterLink to="/client/dashboard"  class="navbar-brand"><img class="nav-img" src="../components/Logos_icons/techzone.png"></RouterLink>
                <div class="nav-contents">
                    <div class="Tz-nav-links">
                        <RouterLink to="/client/dashboard">Dashboard</RouterLink>
                        <RouterLink to="/client/post-job">Post Job</RouterLink>
                    </div>
                </div>
        </div>
        <div class="search">
            <form @submit.prevent="searchUsers" style=" display: flex; flex-direction: row; gap: 10px;">
                <div class="filter-search">
                        <i class="bi bi-search" @click="searchUsers"></i>
                        <input type="search" class="ft-search" v-model="user_search_keywords" placeholder="Search for freelancers">
                </div>
            </form>
        </div>
        <div class="Tz-nav-actions">
                            <div class="notifications">
                                <i class="bi bi-bell"></i>
                                <div class="notification-dot" v-if="userNotifications && userNotifications.length > 0" style="
                                    background: red;
                                    height: 15px;
                                    width: 15px;
                                    color: #fff;
                                    font-size: 0.7em !important;
                                    border-radius: 50%;
                                    display: flex;
                                    justify-content: center;
                                    align-items: center;
                                    position: absolute;
                                    left: 10px;
                                    top: -3px;

                                ">{{ userNotifications.length }}</div>
                                <!---notifications modal-->
                                <div class="notification-modal notification-modal-sw" :class="['theme-transition', { 'dark': themeStore.darkMode }]">
                                    <div class="notifications-header">Notifications</div>
                                    <div v-if="userNotifications" class="notify">
                                        <div class="notify-line" v-for="(notify, index) in userNotifications" :key="index">
                                            <div>
                                                <i class="notify_icon bi bi-check-circle-fill"></i>
                                                <span name="notification-item">
                                                    <div>{{ notify.message }}</div>
                                                    <small style="font-size: 9px !important;">{{ formatTimestamp(notify.createdAt) }}</small>
                                                </span>
                                                <span class="notifications_dismiser" @click="markNotificationAsRead(notify._id)">&times;</span>
                                            </div>
                                        </div>

                                    </div>

                                    <div class="notifications-footer"><RouterLink to="/notifications"> See all Notifications</RouterLink></div>
                                </div>
                            </div>

                            <i class="bi bi-three-dots-vertical"></i>

                        <!--Logged in user credential display-->
                        <div class="user-menu-toggle">
                            <div v-if="employerDetails.profile">
                                <img  :src="employerDetails.profile.profileImage" class="tz-user-thumbnail">
                            </div>
                            <span  style="font-size: 12px;">{{ employerDetails.firstname }} {{ employerDetails.lastname }}<br/><button class="logout"> {{ employerDetails.email }}</button> <br/></span>

                            <div class="tz-user-menu tz-user-menu-sw">
                                <!-- <RouterLink to="/client/profile" :class="['theme-transition', { 'dark': themeStore.darkMode }]"> -->
                                    <div class="tz-menu-content" @click="navigateToClientprofile(employerDetails.id)">
                                        <i class="bi bi-person-circle"></i>
                                    View profile</div>
                                <!-- </RouterLink> -->
                                <div class="tz-menu-content">
                                    <i class="bi bi-gear-fill"></i>
                                    billings & hires</div>
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
                                    <input v-model="isDarkMode" type="checkbox" @click="themeStore.toggleTheme">
                                    <span class="slider round"></span>
                                    </label></i>theme
                                </div>
                            </div>
                        </div>
        </div>
        <i class="bi bi-list menu-toggle"  @click="showMenu = !showMenu">

        </i>
</nav>

<transition name="slide" :class="['theme-transition', { 'dark': themeStore.darkMode }]">
    <div class="menu-from-nav" :class="{ 'navActive': showMenu }" v-if="showMenu">
       <div class="menu-header">
        <RouterLink to="/client/dashboard"  class="navbar-brand">
            <img class="nav-img" src="../components/Logos_icons/techzone.png">
        </RouterLink>
        <!--now you have to decide which item is preffered to appear at the top of the menu-->

        <span class="closeBtn" @click="showMenu=false">&times;</span>
       </div>

        <RouterLink to="/client/dashboard" class="menu-item">
            <div>
                <span class="menu-item-label">My Jobs</span>
            </div>
        </RouterLink>
        <span class="menu-item"  @click="navigateToClientprofile(employerDetails.id)">
            <div>
                <span class="menu-item-label">Profile</span>
            </div>
        </span>

        <RouterLink to="/client/messages" class="menu-item">
            <div>
                <!-- <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 21 22" fill="none">
                <path d="M0.767317 8.00682C0.257317 7.80182 0.263317 7.49682 0.801317 7.31782L19.8873 0.95582C20.4163 0.77982 20.7193 1.07582 20.5713 1.59382L15.1173 20.6798C14.9673 21.2088 14.6423 21.2328 14.4003 20.7498L9.84432 11.6368L0.767317 8.00682ZM5.65732 7.80682L11.2933 10.0618L14.3333 16.1438L17.8793 3.73382L5.65632 7.80682H5.65732Z" fill="#45494F"/>
                </svg> -->
                <span class="menu-item-label">Messages</span>
            </div>
        </RouterLink>

        <RouterLink to="/notifications" class="menu-item">
            <div>
                <span class="menu-item-label">Notifications <span class="badge badge-danger" v-if="userNotifications.length > 0">{{ userNotifications.length }}</span></span>
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
        <span class="menu-item">
            <div>
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
import Modal from './modal.vue';


const api_url = "http://127.0.0.1:5000/api"

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
      toggleTheme,
    //   dateFormatter,
    };
  },

    components:{ Search, LeftNav, RouterLink, Modal },
    data(){
        return{
            userDetails:[],
            employerDetails: [],
            userMenuIsShown: false,
            showMenu:false,
            userNotLoggedIn: false,
            signup_options:false,
            signin_options:false,
            userIsOffline: false,
            stateText: "You are offline",
            isOffline: !navigator.onLine, // Check the initial online status
            showStatus: false,

            userIsUser: false,
            userIsEmployer: false,
            keywords: '',
            user_search_keywords: '',

            showModal: false,
            isDarkMode: true,

            userNotifications: '',
            showTokenExpiredModal: false,

        };
    },
    created() {
            window.addEventListener('online', this.updateOnlineStatus);
            window.addEventListener('offline', this.updateOnlineStatus);
        },


    methods: {
        logout(){
        this.showModal = true;
        },

        realLogout(){
            localStorage.removeItem('token');
            this.$router.push('/');
        },
        // Function to trigger re-login
        async reLogin() {
            this.showTokenExpiredModal = true;
        },
        // Function to handle a failed API request
        async handleApiError(error) {
            if (error.response && error.response.status === 401 && token) {
                // Unauthorized error
                // Perform re-login
                localStorage.removeItem('token');
                await this.reLogin();
            } else {
                // Handle other errors
                console.error('API error:', error);
            }
        },

        checkLoginStatus(){
            const token = localStorage.getItem('token');
            const userRole = token ? JSON.parse(atob(token.split('.')[1])).role : null;

            if (userRole === 'user') {
            this.userIsUser = true;
            this.userIsEmployer = false; // Corrected variable name
            } else if (userRole === 'employer') {
            this.userIsUser = false;
            this.userIsEmployer = true;
            } else {
            this.userNotLoggedIn = true;
            }

            console.log("logged in as", userRole);
            },

        handleOnline() {
            this.isOffline = false;
            },
        handleOffline() {
            this.isOffline = true;
            },
            /// this function gets the users details via api route
        getUserDetails() {
                const token = localStorage.getItem('token'); // Get the token from localStorage
                const user_url = `${this.api_url}/user-info`; // Assuming user-info is the endpoint for user details

                // Set up headers with the token
                const headers = {
                    Authorization: `JWT ${token}`, // Assuming it's a JWT token
                };
                axios.get(user_url, { headers })
                    .then((response) => {
                        if(response.status === 401){
                            localStorage.removeItem('token');
                            this.$router.push('login');
                            alert("YOur session expired, please login.");
                        }
                    this.userDetails = response.data.user;
                    // console.log(this.userDetails) // Assuming userDetails is a data property
                    this.isLoading = false;
                    })
                    .catch((error) => {
                    // Handle errors
                    console.error(error);
                    });
        },

        //this function also helps to check when token has expired and redirects user to login
        getUserUnreadNotifications() {
                const token = localStorage.getItem('token'); // Get the token from localStorage
                // Set up headers with the token
                const headers = {
                    Authorization: `JWT ${token}`, // Assuming it's a JWT token
                };

                axios.get(`${this.api_url}/getunread`, { headers })
                    .then((response) => {
                    // Handle the response here
                    this.userNotifications = response.data;
                    console.log(this.userNotifications) // Assuming userDetails is a data property
                    // this.isLoading = false;
                    })
                    .catch((error) => {
                    // Handle the API request error
                    this.handleApiError(error);
                    console.error(error);
                    });
        },

        // this function gets the employer details via api route
        getEmployerDetails() {
                const token = localStorage.getItem('token'); // Get the token from localStorage
                const user_url = `${this.api_url}/employer-info`; // Assuming user-info is the endpoint for user details

                // Set up headers with the token
                const headers = {
                    Authorization: `JWT ${token}`, // Assuming it's a JWT token
                };

                axios.get(user_url, { headers })
                    .then((response) => {
                    this.employerDetails = response.data.employer;
                    // console.log("emplyer details: ", this.employerDetails) // Assuming userDetails is a data property
                    this.isLoading = false;

                    })
                    .catch((error) => {
                    // Handle errors
                    console.error(error);
                    });
        },
        navigateToUserprofile(user_id) {
            const route = this.$router.resolve({ name: "Techzone - profile", params: { user_id: user_id } });
            window.open(route.href, '_blank');
        },
        navigateToClientprofile(user_id) {
                    const route = this.$router.resolve({ name: "Techzone - client", params: { user_id: user_id } });
                    window.open(route.href, '_blank');
        },
        formatTimestamp(timestamp) {
        const date = new Date(timestamp);
        const options = {
            year: "numeric",
            month: "long",
            day: "numeric",
            hour: "numeric",
            minute: "numeric",
            hour12: true, // Use 12-hour format
        };
            return date.toLocaleDateString(undefined, options);
        },

        async searchUsers() {
                    this.isLoading = true;
                    const keywords = this.user_search_keywords;
                    console.log(keywords.length);
                    let userName, userId;
                    if(keywords.split(" ").length > 1 || keywords[0].length < 10){
                        userName = keywords;
                    } else {
                        userId = this.user_search_keywords;
                    }

                    // Define your search criteria here
                    try {
                    // Make an Axios GET request to your search endpoint
                    const response = await axios.get(`${this.api_url}/search/users`, {params:{userName, userId}});
                    console.log("matching users: ", response);

                    // Handle the response data (jobs) as needed
                    this.isLoading = false;
                } catch (error) {
                    this.isLoading = false;
                    console.error('Error searching user:', error);
                    // Handle errors, e.g., show an error message to the user
                    }
                },


        async markNotificationAsRead(notificationId) {
        try {
            const token = localStorage.getItem('token'); // Get the JWT token from local storage

            const response = await axios.put(
            `${this.api_url}/mark-notification/${notificationId}`,
            null,
            {
                headers: {
                Authorization: `JWT ${token}`,
                },
            }
            );

            console.log("the notify response: ", response);
            if (response.status == 200) {
            // Handle successful marking of the notification as read
            console.log('Notification marked as read successfully');
            this.getUserUnreadNotifications();
            } else {
            // Handle errors (e.g., display an error message)
            console.error('Error marking notification as read');
            }
        } catch (error) {
            console.error('Error marking notification as read:', error);
        }
        },


        },
        beforeDestroy() {
            window.removeEventListener('online', this.handleOnline);
            window.removeEventListener('offline', this.handleOffline);
            // this.showStatus = false;
        },

        created() {
            // Listen for the 'online' and 'offline' events
                window.addEventListener('online', this.handleOnline);
                window.addEventListener('offline', this.handleOffline);

                this.checkLoginStatus();
                this.getUserUnreadNotifications();
                if(this.userIsUser == true){this.getUserDetails();}
                if(this.userIsEmployer == true){this.getEmployerDetails();}
                // --------------- automatically set theme stuff --------------///
                const isDark = localStorage.getItem('darkMode');
                this.isDarkMode = isDark;


            },
  }

</script>


<style scoped>


*{
    font-size: 0.85rem !important;
}

.dark .tz-user-menu{
    border-radius: 6px;
    border: 1px solid var(--dark-gray-dark-gray-4, #3C464E);
    /* Shadow / Elevation 6 */
    box-shadow: 0px 40px 64px 0px rgba(91, 104, 113, 0.24), 0px 0px 1px 0px rgba(26, 32, 36, 0.32);
}
.dark .notification-modal{
    background-color: var(--accent-dark) !important;
    border-radius: 6px;
    border: 1px solid var(--dark-gray-dark-gray-4, #3C464E);
    /* Shadow / Elevation 6 */
    box-shadow: 0px 40px 64px 0px rgba(91, 104, 113, 0.24), 0px 0px 1px 0px rgba(26, 32, 36, 0.32);
}
.dark .notify:hover{
    background-color: var(--background-dark) !important;
}
.dark .login-options{
    background-color: var(--background-dark) !important;
    color: var(--text-light) !important;
    border-radius: 6px;
    border: 1px solid var(--dark-gray-dark-gray-4, #3C464E);
    /* Shadow / Elevation 6 */
    box-shadow: 0px 40px 64px 0px rgba(91, 104, 113, 0.24), 0px 0px 1px 0px rgba(26, 32, 36, 0.32);
}
.dark .signup-options{
    background-color: var(--background-dark) !important;
    color: var(--text-light) !important;
    border-radius: 6px;
    border: 1px solid var(--dark-gray-dark-gray-4, #3C464E);
    /* Shadow / Elevation 6 */
    box-shadow: 0px 40px 64px 0px rgba(91, 104, 113, 0.24), 0px 0px 1px 0px rgba(26, 32, 36, 0.32);
}


.bi-list{
    font-size: 1.5em !important;
}
.logout{
    color: blue;
    cursor: pointer;
    border: none;
    background: none;
    padding: 0;
}
.user-menu-toggle:hover .tz-user-menu{
    display: block;
}
.notification-modal{
    display: none;
    position: absolute;
    width: 300px;
    background: #fff;
    border: 1px solid #00000023;
    box-shadow: 0px 12px 12px #F1F4F4;
    top: 42px;
    left: -139px;
    right: 0;
    font-size: 0.8em;
    z-index: 999999;
    border-radius: 5px;
}

.notifications{
    position: relative;
    display: flex;
    /* background: red; */
}



.notification-modal-sw:before {
    left: auto;
    right: 142px;
    top: -14px;
}

.notification-modal:before {
    border: 7px solid #00000000;
    border-bottom: 7px solid #efefef;
}

.notification-modal:before {
    content: "";
    display: inline-block;
    position: absolute;
}










.notifications:hover .notification-modal{
    display: block;
}

.notifications-header{
    text-align: center;
    padding: 12px;
    border-bottom: 1px solid var(--app-hover);
}
.notify{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    /* padding: 15px; */
    width: 100% !important;
    max-height: 200px;
    overflow-y: scroll;
}
.notify-line > div{
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
    text-align: left;
    gap: 10px;
    /* border: 1px solid red; */
    height: 80px;
}
.notify-line{
    text-align: center;
    padding: 5px;
    /* border: 1px solid green; */
}
.notify-line:hover{
    background: var(--app-hover);
}
.notifications-footer{
    padding: 12px;
    border-top: 1px solid var(--app-hover);
}

.notify_icon{
    align-self: flex-start;
}
.notifications:hover{

}
.notifications_dismiser{
    cursor: pointer !important;
    font-size: 20px !important;
    padding: 10px;
}

.badge{
    background: red;
    margin-left: 5px;
    font-size: 0.9em !important;
    border-radius: 50%;
}

.nav-links{
    display: flex;
    z-index: 9999999999;
    flex-direction: row;
}
.closeBtn{
    /* color: var(--app-blue); */
    font-size: 25px !important;
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
    border-bottom: 1px solid var(--app-hover);
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
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: center;
    padding: 2px 10px;
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
    border: 1px solid #00000023;
    width: 180px;
    position: absolute;
    top: 50px;
    right: 40px;
    z-index: 999999;
    font-size: 0.8em;
    overflow-x: hidden;
    border-radius: 5px;
}
.tz-user-menu:after {
    content: "";
    display: inline-block;
    position: absolute;
}

.tz-user-menu-sw:after {
    left: auto;
    right: 120px;
    top: -14px;
    z-index: 99999999;
}

.tz-user-menu:after {
    border: 7px solid #00000000;
    border-bottom: 7px solid #fb0909;
    z-index: 99999999;
}


.user-menu-toggle {
display:flex;
flex-direction: row;
justify-content: center;
align-items: center;
margin-right: 10px; gap: 5px;
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






/*  the logout modal styles............ */
.logout-modal{
    height: 100dvh;
    width: 100%;
    background: #000000d3;
    position: fixed;
    z-index: 999999;
    display: flex;
    flex: column;
    align-items: center;
    justify-content: center;
    text-align: center;
}
.modal-content{
    height: 200px;
    background: #fff;
    width: 350px;
    border-radius: 10px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 25px;
}
.modal-content > span{
    font-size: 1.5em !important;
}
.modal-options{
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-around;
}

.modal-options > span{
    border: 1px solid var(--app-blue);
    padding: 10px;
    border-radius: 5px;
    color: var(--app-blue);
    font-size: 1rem !important;
    width: 40%;
    cursor: pointer;
}
.no{
    background: var(--app-blue);
    color: #fff !important;
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
  padding: 10px !important;
  border-radius: 5px;
  color: #fff;
  font-size: 16px;
  z-index: 999999;
}

#status_dismiss{
    padding-left: 10px;
    cursor: pointer;
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
