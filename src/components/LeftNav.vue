<template>
    <div v-if="userIsUser">
        <div class="spacer"></div>
        <RouterLink to="/jobs">
        <div class="jobs"  :class="{ 'active-nav': isJobs }">
            <i class="bi bi-briefcase-fill" ></i>
            <span class="navtext">Work Explorer</span>
            </div>
        </RouterLink>

        <RouterLink to="/messages">
        <div class="message"  :class="{ 'active-nav': isPayments }">
            <i class="bi bi-chat-left-text-fill"></i>
            <span class="navtext">Messages</span>
        </div>
        </RouterLink>
        
        <RouterLink to="/savedJobs">
        <div class="saved-jobs" :class="{ 'active-nav': isSaveJobs }">
            <i class="bi bi-archive"></i>
            <span class="navtext">Saved Jobs</span>
        </div>
        </RouterLink>
    </div>

    <div v-if="userIsEmployer" :class="['theme-transition', { 'dark': themeStore.darkMode }]">
        <div class="spacer"></div>
        <RouterLink to="/client/dashboard">
        <div class="jobs"  :class="{ 'active-nav': isDashboard }">
            <i class="bi bi-soundwave"></i>
            <span class="navtext">Dashboard</span>
        </div>
        </RouterLink>

        <RouterLink to="/client/messages">
        <div class="message"  :class="{ 'active-nav': ismessages }">
            <i class="bi bi-chat-left-text-fill"></i>
            <span class="navtext">Messages</span>
        </div>
        </RouterLink>

        <RouterLink to="/client/saved-jobs">
        <div class="message"  :class="{ 'active-nav': isJobs }">
            <i class="bi bi-briefcase-fill" ></i>
            <span class="navtext">My Jobs</span>
        </div>
        </RouterLink>
    </div>
    <div v-if="userNotLoggedIn">
        <div class="spacer"></div>
        <RouterLink to="/jobs">
        <div class="jobs"  :class="{ 'active-nav': isJobs }">
            <i class="bi bi-briefcase-fill" ></i>
            <span class="navtext">Work Explorer</span>
            </div>
        </RouterLink>
    </div>

</template>

<script>
import { RouterLink } from 'vue-router';
import themeStore from '@/theme/theme';

    export default {
        setup(){
              // Accessing themeStore properties and methods
                const toggleTheme = themeStore.toggleTheme;
                return{
                    themeStore,
                    toggleTheme,
                };
        },
    components: { RouterLink },
    data(){
        return{
            userNotLoggedIn: false,
            userIsUser: false,
            userIsEmployer: false,
        }
    },
    computed: {
        isPayments() { return this.$route.path.startsWith("/messages"); },
        isSaveJobs() { return this.$route.path.startsWith("/savedJobs"); },
        isJobs() { return this.$route.path.startsWith("/jobs"); },
        isInsights() { return this.$route.path.startsWith("/insights"); },
        isDashboard() { return this.$route.path.startsWith("/client/dashboard"); },
        isJobs() { return this.$route.path.startsWith("/client/saved-jobs"); },
        ismessages() { return this.$route.path.startsWith("/client/messages"); },
    },
    methods:{
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
        },
    mounted() {
        this.checkLoginStatus();
    },


}

</script>

<style scoped>

*{
    font-size: 0.85rem !important;
}

  .Left-Nav {
        background: #fff; 
        grid-area: Left-Nav;
        display: flex;
        flex-direction: column;
        z-index: 999;
        /* border: 1px solid red !important; */
    }

    .jobs, .saved-jobs, .insights, .message{
        display: flex;
        justify-content: flex-start;
        padding: 10px;
        height: 80px;
        align-items: center;
        /* border-left: 5px solid #fff; */
    }
    .jobs:hover, .saved-jobs:hover, .insights:hover, .message:hover{
        background: #F7F9FF;
        color: #4E79BC;
        fill: #4E79BC !important;
        /* border-left: 5px solid #ff0505; */
    }
    .navtext{
        padding-left: 5px;
    }
    .active-nav{
        background: #F7F9FF; 
        border-left: 5px solid #4E79BC !important;
        color: #4E79BC !important;
        fill: var(--app-blue);
        }
    
        .dark .active-nav{
            background: var(--accent-dark);
        }
        .dark .active-nav:hover{
            background: var(--accent-dark) !important;
        }

        @media screen and (max-width: 1000px) {
            .navtext{display: none;}
            .jobs, .saved-jobs, .insights, .message{
                justify-content: center !important;
            }
        }
</style>