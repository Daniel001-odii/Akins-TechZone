<template>
    <div class="footer container-fluid">
        <div class="techZone-logo">
            <RouterLink to="/"><img class="nav-img" src="./Logos_icons/techzone.png" style="width: 150px;"></RouterLink>
        </div>
        <div class="footer-links fw-light">
            <a class="nav-link" href="#/">Overview</a>
            <a class="nav-link" href="#/">Features</a>
            <a class="nav-link" href="#/">Pricing</a>
            <a class="nav-link" href="#/">Careers</a>
            <a class="nav-link" href="#/">Help</a>
            <RouterLink to="/jobs">Privacy</RouterLink>
        </div>
        <div class="footer-last">
            <!-- <Search/> -->
                <div class="email-input">
                    <input type="email" placeholder="Enter your email">
                    <button class="email-btn">Subscribe</button>
                </div>
                <p class="fw-light copyright">&copy; 2023 TechZone, All rights reserved.</p>
        </div>
    </div>
</template>

<script>
import { RouterLink } from 'vue-router';
import Search from './Search.vue';

    export default {
    components: { Search, RouterLink }
}
</script>

<style scoped>
    .footer{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
        /* height: 250px; */
        padding: 10px;
    }
    .footer-links{
        display: flex;
        flex-direction: row;

        justify-content: space-between;
        align-items: center;
        font-size: 0.9em;
    }

    .footer-links > a{
        padding: 0px 20px 0px 20px;
    }

    .footer-last{
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
        width: 100%;
        padding: 20px;
        /* border: 2px solid red; */
    }

    .footer-links, .footer-last{
        margin-top: 30px;
    }

    .email-input{
        width: 300px;
        height: 40px;
        border-radius: 20px;
        background: #E0EAF5;
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
    }
    input{
        background: none;
        outline: none;
        border: none;
        padding: 10px;
        font-size: 0.8em;
    }
    .email-btn{
        height: 40px;
        border-radius: 20px;
        background: var(--app-blue);
        width: 80px;
        color: #fff;
        font-size: 0.8em;
        text-align: center;
        border: none;
    }

    .techZone-logo{
        padding-top: 30px;
    }

         /*--meida queries-------*/
 @media only screen and (max-width: 999px) {
    .footer{
        justify-content: center;
        align-items: center;
    }
    .footer-links{
        flex-direction: column;
        width: 20px;
        align-items: center;
        font-size: 1em;
    }
    .footer-last{
        flex-direction: column;
    }
    .copyright{
        margin-top: 20px;
    }
 }
</style>