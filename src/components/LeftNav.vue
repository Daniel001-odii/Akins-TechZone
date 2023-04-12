<template>
        <div class="spacer"></div>
        <RouterLink to="/jobs" :class="{ 'active-nav': isJobs }">
        <div class="jobs" >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 25 26" fill="none">
            <path d="M6.25 5.5V1.75C6.25 1.41848 6.3817 1.10054 6.61612 0.866116C6.85054 0.631696 7.16848 0.5 7.5 0.5H17.5C17.8315 0.5 18.1495 0.631696 18.3839 0.866116C18.6183 1.10054 18.75 1.41848 18.75 1.75V5.5H23.75C24.0815 5.5 24.3995 5.6317 24.6339 5.86612C24.8683 6.10054 25 6.41848 25 6.75V24.25C25 24.5815 24.8683 24.8995 24.6339 25.1339C24.3995 25.3683 24.0815 25.5 23.75 25.5H1.25C0.918479 25.5 0.600537 25.3683 0.366116 25.1339C0.131696 24.8995 0 24.5815 0 24.25V6.75C0 6.41848 0.131696 6.10054 0.366116 5.86612C0.600537 5.6317 0.918479 5.5 1.25 5.5H6.25ZM2.5 19.25V23H22.5V19.25H2.5ZM2.5 16.75H22.5V8H2.5V16.75ZM8.75 3V5.5H16.25V3H8.75ZM11.25 13H13.75V15.5H11.25V13Z" fill="#4E79BC"/>
            </svg>
            <span class="navtext">Work Explorer</span>
            </div>
        </RouterLink>
        
        <RouterLink to="/savedJobs"  :class="{ 'active-nav': isSaveJobs }">
        <div class="saved-jobs">
            <i class="bi bi-heart" style="font-size: 22px; padding: 0px;"></i>
            <span class="navtext">Saved Jobs</span>
        </div>
        </RouterLink>
        
        <RouterLink to="/insights" :class="{ 'active-nav': isInsights}">
        <div class="insights" >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 25 26" fill="none">
            <path d="M2.6728 0.5V22.7222H24.0552V25.5H0V0.5H2.6728ZM23.1103 5.07361L25 7.0375L17.3732 14.9639L13.364 10.7986L7.62682 16.7597L5.73716 14.7958L13.364 6.86944L17.3732 11.0347L23.1103 5.07361Z" fill="#45494F"/>
            </svg>
            <span class="navtext">Insights</span>
        </div>
        </RouterLink>

        <RouterLink to="/payments" :class="{ 'active-nav': isPayments }">
        <div class="wallet" >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 25 26" fill="none">
            <path d="M20 6.05556H23.75C24.0815 6.05556 24.3995 6.20188 24.6339 6.46235C24.8683 6.72282 25 7.07609 25 7.44444V24.1111C25 24.4795 24.8683 24.8327 24.6339 25.0932C24.3995 25.3537 24.0815 25.5 23.75 25.5H1.25C0.918479 25.5 0.600537 25.3537 0.366116 25.0932C0.131696 24.8327 0 24.4795 0 24.1111V1.88889C0 1.52053 0.131696 1.16726 0.366116 0.906796C0.600537 0.646329 0.918479 0.5 1.25 0.5H20V6.05556ZM2.5 8.83333V22.7222H22.5V8.83333H2.5ZM2.5 3.27778V6.05556H17.5V3.27778H2.5ZM16.25 14.3889H20V17.1667H16.25V14.3889Z" fill="#45494F"/>
            </svg>
            <span class="navtext">Payments</span>
        </div>
        </RouterLink>


</template>

<script>
import { RouterLink } from 'vue-router';

    export default {
    components: { RouterLink },
    computed: {
        isPayments() { return this.$route.path.startsWith("/payments"); },
  isSaveJobs() { return this.$route.path.startsWith("/savedJobs"); },
  isJobs() { return this.$route.path.startsWith("/jobs"); },
  isInsights() { return this.$route.path.startsWith("/insights"); },
  },


}

</script>

<style>
  .Left-Nav {
        background: #fff; 
        grid-area: Left-Nav;
        display: flex;
        flex-direction: column;
        z-index: 999;
        /* border: 1px solid red !important; */
    }

    .jobs, .saved-jobs, .insights, .wallet{
        display: flex;
        justify-content: flex-start;
        padding: 10px;
        height: 80px;
        align-items: center;
        border-left: 5px solid #fff;
    }
    .jobs:hover, .saved-jobs:hover, .insights:hover, .wallet:hover{
        background: #F7F9FF;
        /* border-left: 5px solid #4E79BC; */
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
        }

        @media screen and (max-width: 720px) {
            .navtext{display: none;}
            .jobs, .saved-jobs, .insights, .wallet{
                justify-content: center !important;
            }
        }
</style>