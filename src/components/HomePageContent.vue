<script>
import InfiniteScroll from './ItemScroll.vue';

    export default {
        components: {
            InfiniteScroll,
        }
    }
</script>


<template>
    <div class="container">
    <div class="hero-section">
        <!-- <img class="brick" src="./imgs/leftBrick.svg"> -->
        <center>
            <p style="color:var(--app-grey); font-size: 0.8em;">Best job platform in the world</p>

            <div class="hero-title">
                Hire The <span class="blue">Right</span> Employees<br/>Find Your <span class="squareBox"><span class="blue">Dream</span> Job.</span>
            </div>
            <div class="hero-subtitle">
                Job search platform worldwide. We connect freelancers and
                companies in an easy way. Job finders can find their desired 
                skills anywhere in the world.
            </div>
        </center>
        <!-- <img class="brick" src="./imgs/rightBrick.svg"> -->
    </div>
    
    <div class="second-section">
        <div class="Area">
            <div class="user-area">
                <b>I'm a Freelancer</b><br/>
                Gain access to a pool of Job opportunities in your desired niche.<br/>
                <button class="cust-btn cust-btn-black">Get Started</button>
                <img src="./imgs/dottedArrow.svg" class="left-arrow">
            </div>
            <img class="area-img img-fluid" style="z-index: 1;" src="./imgs/MaleHero.svg">
        </div>

        <div class="Area left">
            <div class="user-area area-left" style="text-align: right;">
                <b>I want to Hire</b><br/>
                Gain access to an endless list of talents for your next project..<br/>
                <button class="cust-btn cust-btn-black">Get Started</button>
                <img src="./imgs/dottedArrow.svg" class="right-arrow">
            </div>
            <img class="area-img img-fluid" style="z-index: 1;" src="./imgs/femaleHero.svg">
        </div>
    </div>
</div>
<InfiniteScroll/>
</template>



<style scoped>

.btn{
    border-radius: none !important;
}
   .hero-section{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: fle;
    text-align: center;
   }
    .hero-title{
        font-size: 50px;
        font-weight: 700;
    }
    .brick{
        width: 250px;
    }
    .hero-subtitle{
        width: 60%;
        padding: 20px 30px;
        color: var(--app-grey);
    }

    .squareBox{
        background: url("./imgs/squareBorder.svg");
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        padding: 14px;
    }

    .second-section{
        display: flex;
        flex-direction: row;
        margin-top: 50px ;
    }
    .Area{
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: flex-start;
    }
    .left{
        flex-direction: row-reverse;
    }
    .area-img{
        margin-top: 50px;
    }
    .user-area{
        width: 200px;
        padding: 20px;
        }

    .left-arrow{
        transform: scaleX(-1);
        /* z-index: -1; */
    }

    .right-arrow{
        position: relative;
        right: 120px;
    }

     /*--meida queries-------*/
 @media only screen and (max-width: 999px) {
    .hero-subtitle{
        width: 100%;
    }
    .second-section{
        flex-direction: column;
    }
    .Area{
        flex-direction: column;
    }
    .left{
        margin-top: 35px;
        align-items: flex-end;
        /* justify-content: right; */
    }
    .area-left{
        float: right;
    }
    .user-area{
        width: 100%;
    }

    .right-arrow, .left-arrow{
        display: none;
    }
}
</style>