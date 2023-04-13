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
                    <span><RouterLink to="/customize-profile-client">Hire Talent</RouterLink></span>
                    </slot>
                </div>

                <div class="nav-auth-buttons">
                    <RouterLink to="/login"><button class="cust-btn signIn">Sign in</button></RouterLink>
                    <RouterLink to="/signUp"><button class="cust-btn signUp">Sign Up</button></RouterLink>
                </div>
            </div>
    </nav>

    <div class="menu-from-nav" :class="{ 'navActive': showMenu }">
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

        <RouterLink to="/customize-profile-client" class="menu-item">
        <div>
            <span class="menu-item-label">Hire Talent</span>
        </div>
        </RouterLink>

        <RouterLink to="/signUp" class="menu-item">
        <div>
            <span class="menu-item-label">Sign Up</span>
        </div>
        </RouterLink>

        <RouterLink to="/login" class="menu-item">
        <div>
            <span class="menu-item-label">Sign In</span>
        </div>
        </RouterLink>

    </div>
    
</template>

<script>
import 'bootstrap/dist/js/bootstrap.js';
import Search from './Search.vue';
import { inject } from 'vue';
import { reactive } from 'vue';
import { RouterLink } from 'vue-router';

export default {
    components:{
    Search,
    RouterLink
},
data(){
        return{
            showMenu:false
        };
    },
  };

</script>


<style>
.nav-toggler{
    display: none;
}
/* .Tz-navbar{
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
} */

.Tz-brand-area{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
}

.nav-contents{
    /* border: 1px solid red; */
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-left: 20px;
}

.Tz-nav-links{
    display: flex;
    justify-content: space-between;
    width: 180px;
    font-weight: 50px;
    /* border: 1px solid green; */
}
.nav-auth-buttons{
    width: 200px;
    /* border: 1px solid red; */
    justify-content: space-between;
    display: flex;
}

.signUp{
    background: var(--app-blue) !important;
    border-radius: 5px;
}
.signIn{
    color: #000;
    border-radius: 5px;
    background: none !important;
}
.signIn:hover{
    background: var(--app-hover) !important;
}



 /*--meida queries-------*/
 @media only screen and (max-width: 600px) {
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
    }
    
</style>
