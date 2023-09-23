
<template>
        <div class="card job-card">
            <!-- <slot name="save-button">
                <button class="plane">
                    <span style="padding: 5px 10px;" data-toggle="tooltip" data-placement="bottom" title="save job">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 25 25" fill="none">
                        <path class="saved-job" d="M0.485051 8.71692C-0.160649 8.50169 -0.166834 8.1541 0.497421 7.93268L24.1075 0.0630534C24.7619 -0.154654 25.1367 0.21149 24.9536 0.852243L18.2072 24.4611C18.0216 25.1155 17.6444 25.1378 17.3673 24.5168L12.9216 14.5121L20.3434 4.61635L10.4476 12.0382L0.485051 8.71692Z" fill="#fff" stroke="1px solid red"/>
                        </svg>
                        save job
                    </span>
                </button>
            </slot> -->
            
            <p class="job-title"><slot name="job-title">Senior Software  Developer</slot></p>
            <small><slot name="job-post-company">Microsoft Inc.</slot></small>
            
            <!--Techzone has to do with manual labour jobs and so all jobs are automatically onsite.. no need for remote-->

            <div class="jobFeature">
                <div class="job-prop">
                    <!-- <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 20 18" fill="none"><path d="M16 4H19C19.2652 4 19.5196 4.10536 19.7071 4.29289C19.8946 4.48043 20 4.73478 20 5V17C20 17.2652 19.8946 17.5196 19.7071 17.7071C19.5196 17.8946 19.2652 18 19 18H1C0.734784 18 0.48043 17.8946 0.292893 17.7071C0.105357 17.5196 0 17.2652 0 17V1C0 0.734784 0.105357 0.48043 0.292893 0.292893C0.48043 0.105357 0.734784 0 1 0H16V4ZM2 6V16H18V6H2ZM2 2V4H14V2H2ZM13 10H16V12H13V10Z" fill="#45494F"/></svg> -->
                    <i class="bi bi-wallet"></i>
                    <slot name="job-amount">N999,999 - N999,999</slot>
                </div>
                <div class="job-prop job-duration">
                    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 20 20" fill="none"><path d="M5 4V1C5 0.734784 5.10536 0.48043 5.29289 0.292893C5.48043 0.105357 5.73478 0 6 0H14C14.2652 0 14.5196 0.105357 14.7071 0.292893C14.8946 0.48043 15 0.734784 15 1V4H19C19.2652 4 19.5196 4.10536 19.7071 4.29289C19.8946 4.48043 20 4.73478 20 5V19C20 19.2652 19.8946 19.5196 19.7071 19.7071C19.5196 19.8946 19.2652 20 19 20H1C0.734784 20 0.48043 19.8946 0.292893 19.7071C0.105357 19.5196 0 19.2652 0 19V5C0 4.73478 0.105357 4.48043 0.292893 4.29289C0.48043 4.10536 0.734784 4 1 4H5ZM2 15V18H18V15H2ZM2 13H18V6H2V13ZM7 2V4H13V2H7ZM9 10H11V12H9V10Z" fill="white"/></svg>
                    <slot name="job-duration">Full-Time</slot>
                </div>
            </div>
            <div class="mini-job-description">
                <slot name="job-description">Hi, we are looking for someone to help us create and design several landing views for different book series. The first project is about creating a landing page for a islamic book. </slot>
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
.plane{
    position: absolute;
    right: 10px;
    top: 15px;
    border-radius: 50px;
    padding: 5px;
    z-index: 999;
    /* height: 30px; */
    /* width: 30px; */
    display: flex;
    text-align: center;
    justify-content: center;
    align-items: center;
    /* background: #f2f2f2; */
}
.saved-job{
    fill: var(--app-grey);
}
.saved-job:hover{
    fill: var(--app-blue);
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
.job-prop{
    background: var(--app-hover);
    padding: 5px;
    border-radius: 5px;
    margin: 5px;
    /* display: flex; */
    /* gap: 5px;    */
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 5px;
  }
.job-duration{
    background: var(--app-blue);
    /* padding: 5px; */
    /* border-radius: 5px; */
    color: #fff;
    /* margin: 5px; */
    /* display: flex; */
    /* gap: 5px; */
    text-transform:capitalize !important;
}
.jobFeature{
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    width: 80%;
    flex-wrap: wrap;
}
.mini-job-description{
    padding: 5px;
}
.time-posted{
    padding: 5px;
    color: var(--app-blue);
}

 /*--meida queries-------*/
@media only screen and (max-width: 1150px) {

}

             
@media only screen and (max-width: 600px) {

}


@media only screen and (max-width: 365px) {
 
}


</style>