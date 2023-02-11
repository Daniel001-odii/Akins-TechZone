<template>
    <div class="card" style="width: 100%;">
        <div class="card-body">
            <div class="jobCard-top">
                <div class="jobCard-img"></div>
                <div class="sub-card-top">
                    <h6 class="card-title">Create Figma Designs for Web Application</h6>
                    <small class="job-parameters">Hourly $100 - $400 | Remote Friendly | Est. Time 1 to 3 months</small>
                </div>
            </div>
            <h6 class="card-subtitle mb-2 text-muted">{{ content }}</h6>
            <p class="card-text placeholder-glow">
                <span class="placeholder col-7"></span>
                <span class="placeholder col-4"></span>
                <span class="placeholder col-4"></span>
                <span class="placeholder col-6"></span>
                <span class="placeholder col-8"></span>
            </p>
            <div class="card-subtitle">      
                <JobTag content="User Interface Design"/>
                <JobTag content="Figma"/>
                <JobTag content="Wire Framing"/>
            </div>
            <div class="card-subtitle padded">
                <span class="payment-verfication">
                    <VerificationBadge/>
                    Payment Verified</span>
                <span class="location">
                    <LocationBadge/>
                    Lagos, Nigeria</span>
            </div>
        </div>
    </div>

</template>

<script>
import JobTag from './JobTag.vue';
import LocationBadge from './locationBadge.vue';
import VerificationBadge from './verificationBadge.vue';

    export default {
        props:{
            "content": String,
        },
        components:{
    JobTag,
    VerificationBadge,
    LocationBadge
}
    }
</script>

<style scoped>
.padded{
    padding-top: 10px;
}
.padded > span {
    margin-right: 20px;
}
    .card{
        margin-bottom: 10px;
        font-size: 0.8em;
        border-radius: none !important;
        background: #F1F4F4;
        /* border: none !important; */
    }
    .card-body{
    }

    .jobCard-top{
        display: flex;
        flex-direction: row;
        margin-bottom: 10px;
        align-items: flex-start;
    }
    .card-title{
        margin: 0px;
        padding: 0px 10px;
    }
    .job-parameters{
        margin: 0px;
        padding: 0px 10px;
    }
    .jobCard-img{
        border-radius: 5px;
        min-height: 50px !important;
        min-width: 50px !important;
        background: url('./Logos_icons/dummy_image.png');
        background-position: center;
        background-size: cover;
    }
</style>