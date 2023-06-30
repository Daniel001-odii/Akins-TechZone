<template>
    <div class="footer container-fluid">
        <!-- <div class="techZone-logo">
            <RouterLink to="/"><img class="nav-img" src="./Logos_icons/techzone.png" style="width: 150px;"></RouterLink>
        </div> -->
        <div class="tz-mainFooter-sub">
            <div class="tz-footer-first">
                <div class="tf-title">About TechZone</div>
                <div class="tf-content">TechZone is a job search platform in Nigeria. We establish trusted networking between freelancers and businesses all across the nation. Qualified job seekers find the best in-demand jobs of their desired skills anywhere nationwide.</div>
                <div class="tf-socials">
                        <i class="bi bi-twitter"></i>
                        <i class="bi bi-facebook"></i>
                        <i class="bi bi-instagram"></i>
                        <i class="bi bi-github"></i>
                </div>
            </div>
            <div class="tz-footer-second">
                    <div class="tz-footer-sub">
                        <div class="tf-title">Company</div>
                        <div class="tf-content">
                            <ul>
                                <li>About Us</li>
                                <li>Our Vision</li>
                                <li>Team</li>
                            </ul>
                        </div>
                    </div>
                    <div class="tz-footer-sub">
                        <div class="tf-title">Job By Type</div>
                        <div class="tf-content">
                            <ul>
                                <li>cabling</li>
                                <li>networking</li>
                                <li>printer</li>
                                <li>server hardware/software</li>
                                <li>smart home</li>
                                <li>general tasks</li>
                                <li>automated teller machine</li>
                                <li>low voltage cabling</li>
                                <li>high voltage cabling</li>
                                <li>satellite (DSTV/GOTV Services)</li>
                            </ul>
                        </div>
                    </div>
                    <div class="tz-footer-sub">
                        <div class="tf-title">Job By Location</div>
                        <div class="tf-content">
                            <ul>
                                <li>cabling</li>
                                <li>networking</li>
                                <li>printer</li>
                                <li>server hardware/software</li>
                                <li>smart home</li>
                                <li>general tasks</li>
                                <li>automated teller machine</li>
                                <li>low voltage cabling</li>
                            </ul>
                        </div>
                    </div>
            </div>
        </div>
        <div class="footer-last">2023 TechZone, All rights reserved</div>
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
ul{
    list-style: none;
    padding: 0;
    line-height: 2.5;
    font-weight: lighter;
}
    .footer{
        display: flex;
        flex-direction: column;
        width: 100%;
        background: #000;
        padding: 50px 70px;
        color: #fff;
        font-size: 0.8em;
        font-weight: 400;
    }
    .tz-mainFooter-sub{
        display: flex;
        flex-direction: row;
        /* border: 1px solid red; */
        width: 100% !important;
        justify-content: space-between;
        align-items: flex-start;
    }
    .tz-footer-second{
        display: flex;
        flex-direction: row;
        gap: 50px;
    }
    .tf-title{
        font-weight: bold;
        text-transform: uppercase;
        margin-bottom: 20px;
    }
    .tf-content{
        max-width: 300px;
        display: flex;
        justify-content: flex-start;
        font-weight: lighter;
        text-align: left;
    }
    .tf-socials{
        padding-top: 10px;
        display: flex;
        gap: 8px;
    }
    .footer-last{
        display: flex;
        justify-content: flex-end;
        padding: 10px;
        margin-top: 50px;
    }

         /*--meida queries-------*/
 @media only screen and (max-width: 999px) {
    .footer{
        flex-direction: column;
    }
    .tz-footer-second{
        width: 100% !important;
        justify-content: space-between;
        margin-top: 30px;
        flex-direction: row;
    }
    .tz-mainFooter-sub{
        flex-direction: column;
    }
 }

 @media only screen and (max-width: 450px) {
    .tz-footer-second{
        flex-direction: column;
    }
 }
</style>