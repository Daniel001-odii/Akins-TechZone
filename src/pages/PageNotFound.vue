<script>
import { RouterLink } from 'vue-router';
import Footer from '../components/Footer.vue';
import NavBar from '../components/NavBar.vue';

export default {
        components: {
    Footer,
    NavBar,
    RouterLink
}
}





</script>


<template>
    <header>
        <NavBar/>
    </header>
    
    
<main>
    <!-- <div class="container"> -->
    <div class="hero-section">
        <!-- <img class="brick" src="./imgs/leftBrick.svg"> -->
        <div style="margin-top: 50px; color: grey" class="hero-title">i swear <br/>something was here before ...
            <br/>
            <img height="200" src="../components/Logos_icons/job_not_found.png">
    </div>
    </div>
    <div class="hero-title" style="font-size: 1.2em; text-align: center; padding: 15px; color: var(--app-grey); margin-top: 30px;  font-weight: normal;">See if you are using the correct URL or 
        <RouterLink to="/">Go back home</RouterLink></div>
   
    
<InfiniteScroll/>
</main> 

<footer>
    <!-- <Footer/> -->
</footer>


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
        /* font-weight: 700; */
    }
    .brick{
        width: 250px;
    }
    .hero-subtitle{
        margin: 0 auto;
        width: 60%;
        padding: 20px 30px;
        color: var(--app-grey);
    }

    .squareBox{
        background: url("../assets/imgs/squareBorder.svg");
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        padding: 14px;
    }

    .second-section{
        display: flex;
        flex-direction: row;
        margin-top: 20px ;
        justify-content: space-between;
        /* border: 1px dotted red; */
        width: 75%;
        max-width: 1020px;
        /* min-width: 1000px; */
        margin: 0 auto;
    }
    .Area{
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: flex-start;
        /* width: 200px; */
        /* border: 1px solid green; */
    }
    .left{
        flex-direction: row-reverse;
    }
    .area-img{
        margin-top: 50px;
        height: 400px;
        width: 300px;
    }
    .arrow{
        height: 300px;
        width: 200px;
    }
    .user-area{
        width: 200px;
        /* padding: 20px; */
        }

    .left-arrow{
        transform: scaleX(-1);
        /* z-index: -1; */
    }

    .right-arrow{
        position: relative;
        right: 0px;
        /* top- */
    }

    .getStarted{
        background: #3C4045;
    }

    .break{
        display: none;
        height: 1px !important;
    }

   /*--meida queries-------*/
   @media only screen and (max-width: 1000px) {
    /* .area-img{
        height: 300px;
        width: 200px
    } */
    .user-area{
        font-size: 0.8em !important;
    }
    .arrow{
        width: 186px;
        height: 216px;
    }
   }

     /*--meida queries-------*/
 @media only screen and (max-width: 1300px) {
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


@media only screen and (max-width: 580px){
    .break{
        display: flex;
    }
}
</style>