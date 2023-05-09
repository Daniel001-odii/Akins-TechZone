<template>
    <nav class="Tz-navbar">
        <div class="Tz-brand-area">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 33 20" fill="none"  class="menu-toggle"  @click="showMenu = !showMenu">
                    <path d="M1.94727 1.75464H31.6308" stroke="#292D32" stroke-width="1.9789" stroke-linecap="round"/>
                    <path d="M1.94727 10.0001H31.6308" stroke="#292D32" stroke-width="1.9789" stroke-linecap="round"/>
                    <path d="M1.94727 18.2455H31.6308" stroke="#292D32" stroke-width="1.9789" stroke-linecap="round"/>
                </svg>
                <!-- <button class="menu-toggle">
                    toggleNav
                </button> -->
                <RouterLink to="/"  class="navbar-brand">
                    <img class="nav-img" src="../components/Logos_icons/techzone.png">
                </RouterLink>
        </div>

            <div class="tz-search">
                <Search/>
            </div>

                    <div class="Tz-nav-actions">
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 40 40" fill="none" class="notifications" @click="showNotifications=!showNotifications">
                            <circle cx="20.0459" cy="20" r="17.5375" stroke="#4E79BC" stroke-width="3.05"/>
                            <path d="M27.7264 24.3451H29.5765V26.1953H11.0747V24.3451H12.9249V17.8695C12.9249 15.9067 13.7046 14.0243 15.0925 12.6364C16.4804 11.2485 18.3628 10.4688 20.3256 10.4688C22.2884 10.4688 24.1708 11.2485 25.5587 12.6364C26.9466 14.0243 27.7264 15.9067 27.7264 17.8695V24.3451ZM25.8762 24.3451V17.8695C25.8762 16.3974 25.2914 14.9856 24.2505 13.9447C23.2095 12.9037 21.7977 12.3189 20.3256 12.3189C18.8535 12.3189 17.4417 12.9037 16.4008 13.9447C15.3599 14.9856 14.7751 16.3974 14.7751 17.8695V24.3451H25.8762ZM17.5504 28.0455H23.1009V29.8957H17.5504V28.0455Z" fill="#4E79BC"/>
                        </svg>
                            <!---notifications modal-->
                            <div class="notification-modal" v-if="showNotifications">
                                <div class="notifications-header">Notifications</div>
                                <div class="notify">
                                    <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 21 20" fill="none">
                                        <path d="M10.5 20C4.977 20 0.5 15.523 0.5 10C0.5 4.477 4.977 0 10.5 0C16.023 0 20.5 4.477 20.5 10C20.5 15.523 16.023 20 10.5 20ZM9.503 14L16.573 6.929L15.159 5.515L9.503 11.172L6.674 8.343L5.26 9.757L9.503 14Z" fill="#00632B"/>
                                    </svg>
                                    <slot> New login detected</slot>
                                    </div>
                                    <span class="notify-time">Just now</span>
                                </div>
                                
                                <div class="notifications-footer"><RouterLink to="/notifications"> See all Notifications</RouterLink></div>
                            </div>
                           

                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 39 40" fill="none" class="help">
                            <path d="M19.1709 39.0625C8.64268 39.0625 0.108398 30.5282 0.108398 20C0.108398 9.47178 8.64268 0.9375 19.1709 0.9375C29.6991 0.9375 38.2334 9.47178 38.2334 20C38.2334 30.5282 29.6991 39.0625 19.1709 39.0625ZM19.1709 35.25C23.2155 35.25 27.0943 33.6433 29.9543 30.7834C32.8142 27.9234 34.4209 24.0446 34.4209 20C34.4209 15.9554 32.8142 12.0766 29.9543 9.21662C27.0943 6.35669 23.2155 4.75 19.1709 4.75C15.1263 4.75 11.2474 6.35669 8.38752 9.21662C5.52759 12.0766 3.9209 15.9554 3.9209 20C3.9209 24.0446 5.52759 27.9234 8.38752 30.7834C11.2474 33.6433 15.1263 35.25 19.1709 35.25V35.25ZM17.2646 25.7188H21.0771V29.5312H17.2646V25.7188ZM21.0771 22.583V23.8125H17.2646V20.9531C17.2646 20.4476 17.4655 19.9627 17.823 19.6052C18.1805 19.2477 18.6653 19.0469 19.1709 19.0469C19.7124 19.0468 20.2428 18.893 20.7003 18.6033C21.1579 18.3137 21.5237 17.9 21.7553 17.4105C21.987 16.921 22.0748 16.3758 22.0087 15.8384C21.9426 15.3009 21.7252 14.7932 21.3818 14.3745C21.0385 13.9557 20.5833 13.6431 20.0692 13.4729C19.5551 13.3028 19.0032 13.2821 18.4778 13.4133C17.9524 13.5446 17.4751 13.8223 17.1014 14.2142C16.7277 14.6061 16.4729 15.096 16.3668 15.6271L12.6267 14.8779C12.8586 13.7191 13.394 12.6426 14.1783 11.7585C14.9625 10.8744 15.9675 10.2144 17.0904 9.84602C18.2133 9.47761 19.4139 9.414 20.5695 9.66167C21.725 9.90935 22.7941 10.4594 23.6674 11.2557C24.5407 12.052 25.1869 13.0658 25.5399 14.1937C25.8929 15.3215 25.9401 16.5229 25.6767 17.675C25.4132 18.827 24.8486 19.8885 24.0405 20.7508C23.2323 21.6131 22.2097 22.2454 21.0771 22.583V22.583Z" fill="#45494F"/>
                        </svg>

                        <svg xmlns="http://www.w3.org/2000/svg" width="5" height="20" viewBox="0 0 5 28" fill="none">
                            <path d="M4.80859 25.4375C4.80859 26.6956 3.77922 27.725 2.52109 27.725C1.26297 27.725 0.233594 26.6956 0.233594 25.4375C0.233594 24.1794 1.26297 23.15 2.52109 23.15C3.77922 23.15 4.80859 24.1794 4.80859 25.4375ZM4.80859 2.56247C4.80859 3.8206 3.77922 4.84997 2.52109 4.84997C1.26297 4.84997 0.233594 3.8206 0.233594 2.56247C0.233594 1.30435 1.26297 0.274974 2.52109 0.274974C3.77922 0.274974 4.80859 1.30435 4.80859 2.56247ZM4.80859 14C4.80859 15.2581 3.77922 16.2875 2.52109 16.2875C1.26297 16.2875 0.233594 15.2581 0.233594 14C0.233594 12.7418 1.26297 11.7125 2.52109 11.7125C3.77922 11.7125 4.80859 12.7418 4.80859 14Z" fill="#45494F"/>
                        </svg>

                        <!--Logged in user credential display-->
                        <div style="display:flex; flex-direction: row; justify-content: center; align-items: center; gap: 8px; margin-right: 10px;">
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 51 50" fill="none">
                                <circle cx="25.8086" cy="25" r="25" fill="#4E79BC"/>
                                <path d="M18.0367 34L24.4173 16.3588H26.9671L33.3477 34H31.0419L29.3095 29.1688H22.0993L20.3303 34H18.0367ZM22.6727 27.0948H28.7117L25.7105 18.5914L22.6727 27.0948Z" fill="white"/>
                            </svg>
                            <span  style="font-size: 12px;">User name here <br/>useremail@gmail.com</span>
                        </div>
                    </div>
        <!-- </div> -->
    </nav>

<transition name="slide">
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
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 25 26" fill="none">
            <path d="M6.25 5.5V1.75C6.25 1.41848 6.3817 1.10054 6.61612 0.866116C6.85054 0.631696 7.16848 0.5 7.5 0.5H17.5C17.8315 0.5 18.1495 0.631696 18.3839 0.866116C18.6183 1.10054 18.75 1.41848 18.75 1.75V5.5H23.75C24.0815 5.5 24.3995 5.6317 24.6339 5.86612C24.8683 6.10054 25 6.41848 25 6.75V24.25C25 24.5815 24.8683 24.8995 24.6339 25.1339C24.3995 25.3683 24.0815 25.5 23.75 25.5H1.25C0.918479 25.5 0.600537 25.3683 0.366116 25.1339C0.131696 24.8995 0 24.5815 0 24.25V6.75C0 6.41848 0.131696 6.10054 0.366116 5.86612C0.600537 5.6317 0.918479 5.5 1.25 5.5H6.25ZM2.5 19.25V23H22.5V19.25H2.5ZM2.5 16.75H22.5V8H2.5V16.75ZM8.75 3V5.5H16.25V3H8.75ZM11.25 13H13.75V15.5H11.25V13Z" fill="#4E79BC"/>
            </svg>
            <span class="menu-item-label">Work Explorer</span>
            </div>
        </RouterLink>

        <RouterLink to="/savedJobs" class="menu-item">
        <div>
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 21 22" fill="none">
            <path d="M0.767317 8.00682C0.257317 7.80182 0.263317 7.49682 0.801317 7.31782L19.8873 0.95582C20.4163 0.77982 20.7193 1.07582 20.5713 1.59382L15.1173 20.6798C14.9673 21.2088 14.6423 21.2328 14.4003 20.7498L9.84432 11.6368L0.767317 8.00682ZM5.65732 7.80682L11.2933 10.0618L14.3333 16.1438L17.8793 3.73382L5.65632 7.80682H5.65732Z" fill="#45494F"/>
            </svg>
            <span class="menu-item-label">Saved Jobs</span>
        </div>
        </RouterLink>
       
       <RouterLink to="/insights" class="menu-item">
        <div>
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 25 26" fill="none">
            <path d="M2.6728 0.5V22.7222H24.0552V25.5H0V0.5H2.6728ZM23.1103 5.07361L25 7.0375L17.3732 14.9639L13.364 10.7986L7.62682 16.7597L5.73716 14.7958L13.364 6.86944L17.3732 11.0347L23.1103 5.07361Z" fill="#45494F"/>
            </svg>
            <span class="menu-item-label">Insights</span>
        </div>
        </RouterLink>
        
        <RouterLink to="/payments" class="menu-item">
        <div>
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 25 26" fill="none">
            <path d="M20 6.05556H23.75C24.0815 6.05556 24.3995 6.20188 24.6339 6.46235C24.8683 6.72282 25 7.07609 25 7.44444V24.1111C25 24.4795 24.8683 24.8327 24.6339 25.0932C24.3995 25.3537 24.0815 25.5 23.75 25.5H1.25C0.918479 25.5 0.600537 25.3537 0.366116 25.0932C0.131696 24.8327 0 24.4795 0 24.1111V1.88889C0 1.52053 0.131696 1.16726 0.366116 0.906796C0.600537 0.646329 0.918479 0.5 1.25 0.5H20V6.05556ZM2.5 8.83333V22.7222H22.5V8.83333H2.5ZM2.5 3.27778V6.05556H17.5V3.27778H2.5ZM16.25 14.3889H20V17.1667H16.25V14.3889Z" fill="#45494F"/>
            </svg>
            <span class="menu-item-label">Payments</span>
        </div>
        </RouterLink>
       
        <RouterLink to="/notifications" class="menu-item">
        <div>
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 40 40" fill="none">
                            <circle cx="20.0459" cy="20" r="17.5375" stroke="#4E79BC" stroke-width="3.05"/>
                            <path d="M27.7264 24.3451H29.5765V26.1953H11.0747V24.3451H12.9249V17.8695C12.9249 15.9067 13.7046 14.0243 15.0925 12.6364C16.4804 11.2485 18.3628 10.4688 20.3256 10.4688C22.2884 10.4688 24.1708 11.2485 25.5587 12.6364C26.9466 14.0243 27.7264 15.9067 27.7264 17.8695V24.3451ZM25.8762 24.3451V17.8695C25.8762 16.3974 25.2914 14.9856 24.2505 13.9447C23.2095 12.9037 21.7977 12.3189 20.3256 12.3189C18.8535 12.3189 17.4417 12.9037 16.4008 13.9447C15.3599 14.9856 14.7751 16.3974 14.7751 17.8695V24.3451H25.8762ZM17.5504 28.0455H23.1009V29.8957H17.5504V28.0455Z" fill="#4E79BC"/>
                        </svg>
            <span class="menu-item-label">Notifications</span>
        </div>
        </RouterLink>

        <RouterLink to="/help" class="menu-item">
        <div>
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 39 40" fill="none">
                            <path d="M19.1709 39.0625C8.64268 39.0625 0.108398 30.5282 0.108398 20C0.108398 9.47178 8.64268 0.9375 19.1709 0.9375C29.6991 0.9375 38.2334 9.47178 38.2334 20C38.2334 30.5282 29.6991 39.0625 19.1709 39.0625ZM19.1709 35.25C23.2155 35.25 27.0943 33.6433 29.9543 30.7834C32.8142 27.9234 34.4209 24.0446 34.4209 20C34.4209 15.9554 32.8142 12.0766 29.9543 9.21662C27.0943 6.35669 23.2155 4.75 19.1709 4.75C15.1263 4.75 11.2474 6.35669 8.38752 9.21662C5.52759 12.0766 3.9209 15.9554 3.9209 20C3.9209 24.0446 5.52759 27.9234 8.38752 30.7834C11.2474 33.6433 15.1263 35.25 19.1709 35.25V35.25ZM17.2646 25.7188H21.0771V29.5312H17.2646V25.7188ZM21.0771 22.583V23.8125H17.2646V20.9531C17.2646 20.4476 17.4655 19.9627 17.823 19.6052C18.1805 19.2477 18.6653 19.0469 19.1709 19.0469C19.7124 19.0468 20.2428 18.893 20.7003 18.6033C21.1579 18.3137 21.5237 17.9 21.7553 17.4105C21.987 16.921 22.0748 16.3758 22.0087 15.8384C21.9426 15.3009 21.7252 14.7932 21.3818 14.3745C21.0385 13.9557 20.5833 13.6431 20.0692 13.4729C19.5551 13.3028 19.0032 13.2821 18.4778 13.4133C17.9524 13.5446 17.4751 13.8223 17.1014 14.2142C16.7277 14.6061 16.4729 15.096 16.3668 15.6271L12.6267 14.8779C12.8586 13.7191 13.394 12.6426 14.1783 11.7585C14.9625 10.8744 15.9675 10.2144 17.0904 9.84602C18.2133 9.47761 19.4139 9.414 20.5695 9.66167C21.725 9.90935 22.7941 10.4594 23.6674 11.2557C24.5407 12.052 25.1869 13.0658 25.5399 14.1937C25.8929 15.3215 25.9401 16.5229 25.6767 17.675C25.4132 18.827 24.8486 19.8885 24.0405 20.7508C23.2323 21.6131 22.2097 22.2454 21.0771 22.583V22.583Z" fill="#45494F"/>
                        </svg>
            <span class="menu-item-label">Help</span>
        </div>
        </RouterLink>

        <RouterLink to="/settings" class="menu-item">
        <div>
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 51 50" fill="none">
                            <circle cx="25.8086" cy="25" r="25" fill="#4E79BC"/>
                            <path d="M18.0367 34L24.4173 16.3588H26.9671L33.3477 34H31.0419L29.3095 29.1688H22.0993L20.3303 34H18.0367ZM22.6727 27.0948H28.7117L25.7105 18.5914L22.6727 27.0948Z" fill="white"/>
                        </svg>
            <span class="menu-item-label">Profile Settings</span>
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
import LeftNav from './LeftNav.vue';
import { RouterLink } from 'vue-router';

export default {
    components:{ Search, LeftNav, RouterLink },
    data(){
        return{
            showMenu:false,
            showNotifications: false,
        };
    },

  };

</script>


<style>
.notification-modal{
    display: block;
    position: absolute;
    width: 300px;
    background: #fff;
    box-shadow: 0px 12px 12px #F1F4F4;
    top: 60px;
    right: 40px;
    font-size: 0.8em;
    z-index: 999999;
    border: 1px solid #C8C6C6;
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
    color: var(--app-blue) !important;
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
    color: var(--app-blue);
    font-size: 40px;
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
    gap: 10px;
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
    justify-content: space-around;
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
    /* width: 150px; */
    /* border: 2px solid red; */
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
        display: none;
        /* flex-direction: column; */
    }
    .Tz-nav-actions > svg{
        margin: 0px 5px 0px 5px;
    }
    .menu-toggle{
        display: inline-block;
    }
    }
    
</style>
