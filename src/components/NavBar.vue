<template>
    <nav class="nav Tz-navbar">
        <div class="Tz-brand-area">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 33 20" fill="none" class="menu-toggle">
                    <path d="M1.94727 1.75464H31.6308" stroke="#292D32" stroke-width="1.9789" stroke-linecap="round"/>
                    <path d="M1.94727 10.0001H31.6308" stroke="#292D32" stroke-width="1.9789" stroke-linecap="round"/>
                    <path d="M1.94727 18.2455H31.6308" stroke="#292D32" stroke-width="1.9789" stroke-linecap="round"/>
                </svg>
                <!-- <button @click="toggleSidenav" class="cust-btn">
                    <span class="navbar-toggler-icon">toggleNav</span>
                </button> -->
                <RouterLink to="/"  class="navbar-brand">
                    <img class="nav-img" src="../components/Logos_icons/techzone.png">
                </RouterLink>
        </div>
        
        <div class="tz-search">
            <Search/>
        </div>

                <div class="Tz-nav-actions">
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 40 40" fill="none">
                        <circle cx="20.0459" cy="20" r="17.5375" stroke="#4E79BC" stroke-width="3.05"/>
                        <path d="M27.7264 24.3451H29.5765V26.1953H11.0747V24.3451H12.9249V17.8695C12.9249 15.9067 13.7046 14.0243 15.0925 12.6364C16.4804 11.2485 18.3628 10.4688 20.3256 10.4688C22.2884 10.4688 24.1708 11.2485 25.5587 12.6364C26.9466 14.0243 27.7264 15.9067 27.7264 17.8695V24.3451ZM25.8762 24.3451V17.8695C25.8762 16.3974 25.2914 14.9856 24.2505 13.9447C23.2095 12.9037 21.7977 12.3189 20.3256 12.3189C18.8535 12.3189 17.4417 12.9037 16.4008 13.9447C15.3599 14.9856 14.7751 16.3974 14.7751 17.8695V24.3451H25.8762ZM17.5504 28.0455H23.1009V29.8957H17.5504V28.0455Z" fill="#4E79BC"/>
                    </svg>

                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 39 40" fill="none" class="help">
                        <path d="M19.1709 39.0625C8.64268 39.0625 0.108398 30.5282 0.108398 20C0.108398 9.47178 8.64268 0.9375 19.1709 0.9375C29.6991 0.9375 38.2334 9.47178 38.2334 20C38.2334 30.5282 29.6991 39.0625 19.1709 39.0625ZM19.1709 35.25C23.2155 35.25 27.0943 33.6433 29.9543 30.7834C32.8142 27.9234 34.4209 24.0446 34.4209 20C34.4209 15.9554 32.8142 12.0766 29.9543 9.21662C27.0943 6.35669 23.2155 4.75 19.1709 4.75C15.1263 4.75 11.2474 6.35669 8.38752 9.21662C5.52759 12.0766 3.9209 15.9554 3.9209 20C3.9209 24.0446 5.52759 27.9234 8.38752 30.7834C11.2474 33.6433 15.1263 35.25 19.1709 35.25V35.25ZM17.2646 25.7188H21.0771V29.5312H17.2646V25.7188ZM21.0771 22.583V23.8125H17.2646V20.9531C17.2646 20.4476 17.4655 19.9627 17.823 19.6052C18.1805 19.2477 18.6653 19.0469 19.1709 19.0469C19.7124 19.0468 20.2428 18.893 20.7003 18.6033C21.1579 18.3137 21.5237 17.9 21.7553 17.4105C21.987 16.921 22.0748 16.3758 22.0087 15.8384C21.9426 15.3009 21.7252 14.7932 21.3818 14.3745C21.0385 13.9557 20.5833 13.6431 20.0692 13.4729C19.5551 13.3028 19.0032 13.2821 18.4778 13.4133C17.9524 13.5446 17.4751 13.8223 17.1014 14.2142C16.7277 14.6061 16.4729 15.096 16.3668 15.6271L12.6267 14.8779C12.8586 13.7191 13.394 12.6426 14.1783 11.7585C14.9625 10.8744 15.9675 10.2144 17.0904 9.84602C18.2133 9.47761 19.4139 9.414 20.5695 9.66167C21.725 9.90935 22.7941 10.4594 23.6674 11.2557C24.5407 12.052 25.1869 13.0658 25.5399 14.1937C25.8929 15.3215 25.9401 16.5229 25.6767 17.675C25.4132 18.827 24.8486 19.8885 24.0405 20.7508C23.2323 21.6131 22.2097 22.2454 21.0771 22.583V22.583Z" fill="#45494F"/>
                    </svg>

                    <svg xmlns="http://www.w3.org/2000/svg" width="5" height="20" viewBox="0 0 5 28" fill="none">
                        <path d="M4.80859 25.4375C4.80859 26.6956 3.77922 27.725 2.52109 27.725C1.26297 27.725 0.233594 26.6956 0.233594 25.4375C0.233594 24.1794 1.26297 23.15 2.52109 23.15C3.77922 23.15 4.80859 24.1794 4.80859 25.4375ZM4.80859 2.56247C4.80859 3.8206 3.77922 4.84997 2.52109 4.84997C1.26297 4.84997 0.233594 3.8206 0.233594 2.56247C0.233594 1.30435 1.26297 0.274974 2.52109 0.274974C3.77922 0.274974 4.80859 1.30435 4.80859 2.56247ZM4.80859 14C4.80859 15.2581 3.77922 16.2875 2.52109 16.2875C1.26297 16.2875 0.233594 15.2581 0.233594 14C0.233594 12.7418 1.26297 11.7125 2.52109 11.7125C3.77922 11.7125 4.80859 12.7418 4.80859 14Z" fill="#45494F"/>
                    </svg>

                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 51 50" fill="none">
                        <circle cx="25.8086" cy="25" r="25" fill="#4E79BC"/>
                        <path d="M18.0367 34L24.4173 16.3588H26.9671L33.3477 34H31.0419L29.3095 29.1688H22.0993L20.3303 34H18.0367ZM22.6727 27.0948H28.7117L25.7105 18.5914L22.6727 27.0948Z" fill="white"/>
                    </svg>
                </div>
    </nav>

    
    
</template>

<script>
import 'bootstrap/dist/js/bootstrap.js';
import Search from './Search.vue';
import { inject } from 'vue';
import { reactive } from 'vue';

export default {
    components:{
        Search,
    },


    setup() {
      const state = reactive({
        isSidenavOpen: false,
      });
  
      const toggleSidenav = () => {
        state.isSidenavOpen = !state.isSidenavOpen;
      };
  
      return {
        state,
        toggleSidenav,
      };
    },


  };

</script>


<style>
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
    /* position: fixed; */
    z-index: 99999;
}

.Tz-nav-actions{
    width: 120px;
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



 /*--meida queries-------*/
 @media only screen and (max-width: 600px) {
    .tz-search{
        display: none !important;
    }
    .help{
        display: none;
    }
    .Tz-nav-actions{
        width: auto;
    }
    .Tz-nav-actions > svg{
        margin: 0px 5px 0px 5px;
    }
    }
    
</style>
