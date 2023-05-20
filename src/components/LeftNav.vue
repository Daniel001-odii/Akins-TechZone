<template>
        <div class="spacer"></div>
        <RouterLink to="/jobs" :class="{ 'active-nav': isJobs }">
        <div class="jobs" >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 25 26" fill="none">
            <path :class="{ 'active-nav': isJobs }" d="M6.25 5.5V1.75C6.25 1.41848 6.3817 1.10054 6.61612 0.866116C6.85054 0.631696 7.16848 0.5 7.5 0.5H17.5C17.8315 0.5 18.1495 0.631696 18.3839 0.866116C18.6183 1.10054 18.75 1.41848 18.75 1.75V5.5H23.75C24.0815 5.5 24.3995 5.6317 24.6339 5.86612C24.8683 6.10054 25 6.41848 25 6.75V24.25C25 24.5815 24.8683 24.8995 24.6339 25.1339C24.3995 25.3683 24.0815 25.5 23.75 25.5H1.25C0.918479 25.5 0.600537 25.3683 0.366116 25.1339C0.131696 24.8995 0 24.5815 0 24.25V6.75C0 6.41848 0.131696 6.10054 0.366116 5.86612C0.600537 5.6317 0.918479 5.5 1.25 5.5H6.25ZM2.5 19.25V23H22.5V19.25H2.5ZM2.5 16.75H22.5V8H2.5V16.75ZM8.75 3V5.5H16.25V3H8.75ZM11.25 13H13.75V15.5H11.25V13Z" fill="#000"/>
            </svg>
            <span class="navtext">Work Explorer</span>
            </div>
        </RouterLink>
        
        <RouterLink to="/savedJobs"  :class="{ 'active-nav': isSaveJobs }">
        <div class="saved-jobs">
            <svg xmlns="http://www.w3.org/2000/svg" width="21" height="22" viewBox="0 0 21 22">
                <path :class="{ 'active-nav': isSaveJobs }" d="M0.767745 8.00688C0.257745 7.80188 0.263745 7.49688 0.801745 7.31788L19.8877 0.955881C20.4167 0.779881 20.7197 1.07588 20.5717 1.59388L15.1177 20.6799C14.9677 21.2089 14.6427 21.2329 14.4007 20.7499L9.84474 11.6369L0.767745 8.00688ZM5.65774 7.80688L11.2937 10.0619L14.3337 16.1439L17.8797 3.73388L5.65674 7.80688H5.65774Z" fill="#45494F"/>
            </svg>
            <span class="navtext">Saved Jobs</span>
        </div>
        </RouterLink>
        
        <RouterLink to="/insights" :class="{ 'active-nav': isInsights}">
        <div class="insights" >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 25 26" fill="var(--app-blue)">
            <path :class="{ 'active-nav': isInsights}" d="M2.6728 0.5V22.7222H24.0552V25.5H0V0.5H2.6728ZM23.1103 5.07361L25 7.0375L17.3732 14.9639L13.364 10.7986L7.62682 16.7597L5.73716 14.7958L13.364 6.86944L17.3732 11.0347L23.1103 5.07361Z" fill="#45494F"/>
            </svg>
            <span class="navtext">Insights</span>
        </div>
        </RouterLink>

        <RouterLink to="/messages" :class="{ 'active-nav': isPayments }">
        <div class="message" >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 27 26">
                <path :class="{ 'active-nav': isPayments }" d="M15.8537 25.5L12.439 21.2317H6.09756C5.77413 21.2317 5.46394 21.1032 5.23524 20.8745C5.00653 20.6458 4.87805 20.3356 4.87805 20.0122V6.72317C4.87805 6.39974 5.00653 6.08955 5.23524 5.86085C5.46394 5.63214 5.77413 5.50366 6.09756 5.50366H25.6098C25.9332 5.50366 26.2434 5.63214 26.4721 5.86085C26.7008 6.08955 26.8293 6.39974 26.8293 6.72317V20.0122C26.8293 20.3356 26.7008 20.6458 26.4721 20.8745C26.2434 21.1032 25.9332 21.2317 25.6098 21.2317H19.2683L15.8537 25.5ZM18.0963 18.7927H24.3902V7.94268H7.31707V18.7927H13.611L15.8537 21.5951L18.0963 18.7927ZM1.21951 0.5H21.9512V2.93902H2.43902V16.3537H0V1.71951C0 1.39608 0.128484 1.08589 0.357187 0.857187C0.58589 0.628484 0.896077 0.5 1.21951 0.5Z" fill="#09121F"/>
            </svg>
            <span class="navtext">Messages</span>
        </div>
        </RouterLink>


</template>

<script>
import { RouterLink } from 'vue-router';

    export default {
    components: { RouterLink },
    computed: {
        isPayments() { return this.$route.path.startsWith("/messages"); },
  isSaveJobs() { return this.$route.path.startsWith("/savedJobs"); },
  isJobs() { return this.$route.path.startsWith("/jobs"); },
  isInsights() { return this.$route.path.startsWith("/insights"); },
  },


}

</script>

<style scoped>

path:hover{
    fill: red;
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
        border-left: 5px solid #fff;
    }
    .jobs:hover, .saved-jobs:hover, .insights:hover, .message:hover{
        background: #F7F9FF;
        color: #4E79BC;
        fill: #4E79BC !important;
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

        @media screen and (max-width: 1000px) {
            .navtext{display: none;}
            .jobs, .saved-jobs, .insights, .message{
                justify-content: center !important;
            }
        }
</style>