<script>
import Footer from '../components/Footer.vue';
import InfiniteScroll from '../components/ItemScroll.vue';
// import NavBar from '../components/NavBar.vue';

// import JobPage from './JobsPage.vue'
// import HomePage from './HomePage.vue'
// import loginPage from './login.vue'


// const routes = {
//     // '/': HomePage,
//     '/Jobs': JobPage,
//     '/Login': loginPage,
// }

export default {
        components: {
    InfiniteScroll,
    Footer,
    // NavBar
// },
// data(){
//         return {
//             currentPath: window.location.hash
//         }
//     },
//     computed:{
//         currentView(){
//             return routes[this.currentPath.slice(1) || '/']
//         }
//     },
//     mounted(){
//         window.addEventListener('hashchange', () =>{
//             this.currentPath = window.location.hash
//         })
//     },
//     setup() {
//         return {};
//     }
    }
}





</script>


<template>
    <!-- <header> -->
        <nav class="navbar navbar-expand-lg">
            <div class="container">
                <a class="navbar-brand" href="#">
                    <img class="nav-img" src="../components/Logos_icons/techzone.png">
                </a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <i class="bi bi-list"></i>
                    </button>

                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav">
                        <RouterLink to="/home"> <i class="bi bi-home"></i> Home</RouterLink>
                        <RouterLink to="/new-page"> <i class="bi bi-case"></i> Work</RouterLink>
                    </div>

                    <div class="cust-actions">
                        <a href="#/Login"><button class="cust-btn login-btn">Login</button></a>
                        <a href="#/SignUp"><button class="cust-btn signUp-btn">Sign Up</button></a>
                    </div>
                </div>
            </div>
        </nav>
        
    <!-- </header>
    <main> -->

   
    
<h1>HOME PAGE</h1>
    <!-- <div class="container"> -->
    <div class="hero-section">
        <!-- <img class="brick" src="./imgs/leftBrick.svg"> -->
        <div style="margin: 0 auto; text-align: center">
            <!-- <p style="color:var(--app-grey); font-size: 0.8em;">Best job platform in the world</p> -->

            <div class="hero-title">
                Hire The <span class="blue">Right</span> Employees<br/>Find Your <span class="squareBox"><span class="blue">Dream</span> Job.</span>
            </div>
            <div class="hero-subtitle">
                Job search platform worldwide. We connect freelancers and
                companies in an easy way. Job finders can find their desired 
                skills anywhere in the world.
            </div>
        </div>
        <!-- <img class="brick" src="./imgs/rightBrick.svg"> -->
    </div>
    
    <div class="second-section">
        <div class="Area">
            <div class="user-area">
                <b>I'm a Freelancer</b><br/>
                Gain access to a pool of Job opportunities in your desired niche.<br/>
                <button class="cust-btn" style="padding: 8px 15px">Get Started <i class="bi bi-arrow-up-right"></i></button>
                <img src="../assets/imgs/dottedArrow.svg" class="arrow left-arrow">
            </div>
            <img class="area-img img-fluid" style="z-index: 1;" src="../assets/imgs/MaleHero.svg">
        </div>

        <div class="Area left">
            <div class="user-area area-left" style="text-align: right;">
                <b>I want to Hire</b><br/>
                Gain access to an endless list of talents for your next project..<br/>
                <button class="cust-btn" style="padding: 8px 15px">Get Started <i class="bi bi-arrow-up-right"></i></button>
                <img src="../assets/imgs/dottedArrow.svg" class="arrow right-arrow">
            </div>
            <img class="area-img img-fluid" style="z-index: 1;" src="../assets/imgs/femaleHero.svg">
        </div>
    </div>
<!-- </div> -->
<InfiniteScroll/>
<!-- </main>

<footer> -->
    <Footer/>

    <component :is="currentView"/>
<!-- </footer> -->


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

    .cust-btn{
        background: #3C4045;
    }

    /* div{
        border: 1px dotted red;
    } */

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
 @media only screen and (max-width: 800px) {
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