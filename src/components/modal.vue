<template>
    <!-------job posted modal-------->
  <div class="tz-modal">
      <div class="tz-modal-content">
        <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 77 76" fill="none">
          <rect x="6.31836" y="6.04541" width="64.3636" height="64.3636" rx="32.1818" fill="#D1FADF"/>
          <path d="M51.91 36.9937V38.2273C51.9083 41.1189 50.972 43.9324 49.2407 46.2484C47.5093 48.5643 45.0757 50.2586 42.3028 51.0785C39.5299 51.8983 36.5663 51.7999 33.8539 50.7978C31.1416 49.7957 28.8258 47.9437 27.2519 45.5179C25.6781 43.0922 24.9306 40.2227 25.1209 37.3374C25.3111 34.4521 26.429 31.7056 28.3077 29.5075C30.1864 27.3094 32.7253 25.7775 35.5458 25.1402C38.3663 24.503 41.3172 24.7945 43.9584 25.9714M51.91 27.5L38.5009 40.9225L34.4782 36.8998" stroke="#039855" stroke-width="2.68182" stroke-linecap="round" stroke-linejoin="round"/>
          <rect x="6.31836" y="6.04541" width="64.3636" height="64.3636" rx="32.1818" stroke="#ECFDF3" stroke-width="10.7273"/>
        </svg>
          <p class="tz-modal-title">Job posted Successfully!</p>
          <RouterLink to="/dashboard">
                <button class="cust-btn">Return to Dashboard</button>
          </RouterLink>
      </div>
  </div>
</template>

<script>
import { RouterLink } from 'vue-router';

    export default {
    components: { RouterLink }
}
</script>

<style scoped>
    .tz-modal{
        height: 100vh;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        background: #000000c5;
        z-index: 99999;
        position: absolute;
    }
    .tz-modal-content{
        width: 400px;
        height: 200px;
        background: #fff;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        /* border-radius: 15px; */
    }
</style>