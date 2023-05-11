
<template>
<!-- <div class="card-content"> -->
    <!-- <div class="card job-card" style="" @click="showFullDetail=!showFullDetail"> -->
        <div class="card job-card">
            <div class="plane"><i class="bi bi-heart" style="font-size: 14px;"></i></div>
            <p class="job-title"><slot name="job-title">Senior Software  Developer</slot></p>
            <small><slot name="job-post-company">Microsoft Inc.</slot></small>
            
            <!--Techzone has to do with manual labour jobs and so all jobs are automatically onsite.. no need for remote
                 <div class="job-location"><svg xmlns="http://www.w3.org/2000/svg" width="10" height="15" viewBox="0 0 15 20" fill="none"><path d="M7.5 19.0533L2.19667 13.75C1.14779 12.7011 0.433489 11.3647 0.144107 9.90984C-0.145275 8.45499 0.0032557 6.94699 0.570915 5.57655C1.13858 4.20611 2.09987 3.03478 3.33323 2.21067C4.5666 1.38657 6.01664 0.946701 7.5 0.946701C8.98336 0.946701 10.4334 1.38657 11.6668 2.21067C12.9001 3.03478 13.8614 4.20611 14.4291 5.57655C14.9967 6.94699 15.1453 8.45499 14.8559 9.90984C14.5665 11.3647 13.8522 12.7011 12.8033 13.75L7.5 19.0533ZM11.625 12.5716C12.4407 11.7558 12.9963 10.7164 13.2213 9.58486C13.4463 8.45332 13.3308 7.28046 12.8892 6.2146C12.4477 5.14873 11.7 4.23772 10.7408 3.59678C9.78149 2.95583 8.6537 2.61372 7.5 2.61372C6.3463 2.61372 5.21851 2.95583 4.25924 3.59678C3.29996 4.23772 2.55229 5.14873 2.11076 6.2146C1.66923 7.28046 1.55368 8.45332 1.77871 9.58486C2.00374 10.7164 2.55926 11.7558 3.375 12.5716L7.5 16.6966L11.625 12.5716V12.5716ZM7.5 10.1133C7.05797 10.1133 6.63405 9.9377 6.32149 9.62514C6.00893 9.31258 5.83333 8.88866 5.83333 8.44663C5.83333 8.00461 6.00893 7.58068 6.32149 7.26812C6.63405 6.95556 7.05797 6.77997 7.5 6.77997C7.94203 6.77997 8.36595 6.95556 8.67851 7.26812C8.99107 7.58068 9.16667 8.00461 9.16667 8.44663C9.16667 8.88866 8.99107 9.31258 8.67851 9.62514C8.36595 9.9377 7.94203 10.1133 7.5 10.1133Z" fill="#2E2F30"/></svg>
                    <slot name="job-location">Remote</slot>
            </div> -->

            <div class="jobFeature">
                <div class="job-pay">
                    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 20 18" fill="none"><path d="M16 4H19C19.2652 4 19.5196 4.10536 19.7071 4.29289C19.8946 4.48043 20 4.73478 20 5V17C20 17.2652 19.8946 17.5196 19.7071 17.7071C19.5196 17.8946 19.2652 18 19 18H1C0.734784 18 0.48043 17.8946 0.292893 17.7071C0.105357 17.5196 0 17.2652 0 17V1C0 0.734784 0.105357 0.48043 0.292893 0.292893C0.48043 0.105357 0.734784 0 1 0H16V4ZM2 6V16H18V6H2ZM2 2V4H14V2H2ZM13 10H16V12H13V10Z" fill="#45494F"/></svg>
                    <slot name="job-amount">N999,999 - N999,999</slot>
                </div>
                <div class="job-duration">
                    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 20 20" fill="none"><path d="M5 4V1C5 0.734784 5.10536 0.48043 5.29289 0.292893C5.48043 0.105357 5.73478 0 6 0H14C14.2652 0 14.5196 0.105357 14.7071 0.292893C14.8946 0.48043 15 0.734784 15 1V4H19C19.2652 4 19.5196 4.10536 19.7071 4.29289C19.8946 4.48043 20 4.73478 20 5V19C20 19.2652 19.8946 19.5196 19.7071 19.7071C19.5196 19.8946 19.2652 20 19 20H1C0.734784 20 0.48043 19.8946 0.292893 19.7071C0.105357 19.5196 0 19.2652 0 19V5C0 4.73478 0.105357 4.48043 0.292893 4.29289C0.48043 4.10536 0.734784 4 1 4H5ZM2 15V18H18V15H2ZM2 13H18V6H2V13ZM7 2V4H13V2H7ZM9 10H11V12H9V10Z" fill="white"/></svg>
                    <slot name="job-duration">Full-Time</slot>
                </div>
            </div>
            <div class="mini-job-description">
                <slot name="job-description">Hi, we are looking for someone to help us create and design several landing pages for different book series. The first project is about creating a landing page for a islamic book. </slot>
            </div>
            <div class="time-posted">Posted <slot name="job-post-time">0 hours</slot> ago</div>
        </div>
<!--......card contents end here......-->


       
</template>

<script>
import { RouterLink } from 'vue-router';
import JobTag from './micro_components/JobTag.vue';
import LocationBadge from './micro_components/locationBadge.vue';
import VerificationBadge from './micro_components/verificationBadge.vue';

    export default {
        props:{
            "content": String,
        },
        components:{ JobTag, VerificationBadge, LocationBadge, RouterLink },
        data(){
            return{
                showFullDetail:false
            };
        },
    }
</script>

<style scoped>
*{
    
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.card-content{
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;
}
.plane{
    position: absolute;
    right: 10px;
    top: 15px;
    border-radius: 50px;
    padding: 5px;
    z-index: 99999999;
    height: 30px;
    width: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
}
.plane:hover{
    background: var(--app-hover);
    /* border: 1px solid grey; */
}
.job-card{
    margin-bottom: 10px !important;
    display: flex;
    padding: 10px;
    padding-bottom: 15px;
    font-size: 0.8em;
    position: relative;
    cursor: pointer;
    width: 98%;
    margin: 0 auto;
    max-height: 180px;
}
.job-card:hover{
    border: 1px solid var(--app-blue);
}
.job-title{
    font-weight: bolder;
    padding: 0;
    margin: 0;
}
.job-location{
    padding: 5px;
}
.job-pay{
    background: var(--app-hover);
    padding: 5px;
    border-radius: 5px;
    margin: 5px;
    display: flex;
    gap: 5px;   
}
.job-duration{
    background: var(--app-blue);
    padding: 5px;
    border-radius: 5px;
    color: #fff;
    margin: 5px;
    display: flex;
    gap: 5px;
    text-transform:capitalize !important;
}
.jobFeature{
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    width: 80%;
    flex-wrap: wrap;
}
.job-detail-head{
    padding: 20px;
    border-bottom: 0.5px solid #C8C6C6;
    margin-top: 50px;
    /* border: 1px solid red; */
}

.applyNow{
    position: absolute;
    top: 65px;
    right: 50px;
    width: 100px;
    text-align: center;
}

.job-detail-content{
    padding: 20px;
}
/* .jobFeature-detail{
    border-bottom: 0.5px solid #C8C6C6;
    padding: 10px;
    margin-bottom: 20px;
    border: 1px solid red;
} */
.mini-job-description{
    padding: 5px;
}
.time-posted{
    padding: 5px;
    color: var(--app-blue);
}

.job-detail-container{
    height: 100%;
    display: none;
    position: fixed;
    z-index: 99999999999999;
    background: #0000005b;
    top: 0;
    left: 0;
    width: 100%;
}
.job-detail-area{
    width: 50% !important;
    z-index: 9999999999 !important;
}
.job-detail-container.showFullDetail{
    display: flex;
    justify-content: flex-end;
}

.job-detail-container.showFullDetail body{
    position: static;
}

.job-detail{
        display: flex;
        /* padding: 30px; */
        font-size: 0.8em;
        height: 100%;
        margin: 0 !important;
        overflow-y: scroll;
        background: #fff;
        border-top-left-radius: 10px !important;
        flex-direction: column;
        position: relative;
    }

.dismissable-area{
    height: 100%;
    width: 50%;
}


@media only screen and (max-width: 1150px) {
    .job-detail-area{
    width: 80% !important;
    }
    .dismissable-area{
    width: 20% !important;
}
}

             /*--meida queries-------*/
@media only screen and (max-width: 600px) {
    .job-detail-area{
        width: 100% !important;
    }
    .dismissable-area{display: none;}
    .job-detail{
        border-radius: 0px !important;
    }
}


@media only screen and (max-width: 365px) {
    .applyNow{
        display: none;
    }
}


</style>