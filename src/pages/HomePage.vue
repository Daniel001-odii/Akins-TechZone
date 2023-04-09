<script>
import { RouterLink } from 'vue-router';
import Footer from '../components/Footer.vue';
import InfiniteScroll from '../components/ItemScroll.vue';
import NavBar from '../components/NavBar.vue';

import { ref } from 'vue';
import { useRouter } from 'vue-router';
import ProfileNavBar from '../components/ProfileNavBar.vue';
import ItemScroll from '../components/ItemScroll.vue';
import NavBarHome from '../components/NavBarHome.vue';


const Api_url = "http://127.0.0.1:8000/api";


export default {
    components: {
    InfiniteScroll,
    Footer,
    NavBar,
    RouterLink,
    ProfileNavBar,
    ItemScroll,
    NavBarHome
},  
  setup() {
    const authenticated = ref(false);
    const router = useRouter();

    const checkAuth = async () => {
      try {
        const response = await fetch(`${Api_url}/get-user`, {
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`,
          },
        });
        if (response.ok) {
          authenticated.value = true;
          console.log(response.data);
        };
        console.log(response)
      } catch (error) {
        console.error(error);
      }
    };

    const handleLogout = async () => {
      try {
        const response = await fetch('/api/logout', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`,
          },
        });
        if (response.ok) {
          localStorage.removeItem('token');
          authenticated.value = false;
          router.push('/');
        }
      } catch (error) {
        console.error(error);
      }
    };

    checkAuth();

    return {
      authenticated,
      handleLogout,
    };
  },
};


</script>


<template>
    <header>
    <NavBarHome/>

    </header>
<main>
    <!-- <div class="container"> -->
    <div class="hero-section">
        <!-- <img class="brick" src="./imgs/leftBrick.svg"> -->
        <div style="margin: 0 auto; text-align: center">
            <p style="color:var(--app-grey); font-size: 0.8em; margin-top: 30px;">Best job platform in the world</p>

            <div class="hero-title">
                Hire The <span class="blue">Right</span> Employees.<br/>Find Your <span class="break"><br/></span>
                <span class="squareBox">
                    <span class="blue">Dream</span> Job.
                </span>
            </div>
            <div class="hero-subtitle">
                TechZone is a job search platform in Nigeria. 
                We establish trusted networking between freelancers and businesses all across the nation. 
                Qualified job seekers find the best in-demand jobs of their desired skills anywhere nationwide.
            </div>
        </div>
        <!-- <img class="brick" src="./imgs/rightBrick.svg"> -->
    </div>
    
    <div class="second-section">
        <div class="Area">
            <div class="user-area">
                <b>I'm a Freelancer</b><br/>
                Gain access to a pool of Job opportunities in your desired niche.<br/>
                <RouterLink to="/signUp"> <button class="cust-btn getStarted" style="padding: 8px 15px">Get Started <i class="bi bi-arrow-up-right"></i></button></RouterLink>
                <img src="../assets/imgs/dottedArrow.svg" class="arrow left-arrow">
            </div>
            <img class="area-img img-fluid" style="z-index: 1;" src="../assets/imgs/MaleHero.svg">
        </div>

        <div class="Area left">
            <div class="user-area area-left" style="text-align: right;">
                <b>I want to Hire</b><br/>
                Gain access to an endless list of talents for your next project..<br/>
                <RouterLink to="/signUp-employer"> <button class="cust-btn getStarted" style="padding: 8px 15px">Get Started <i class="bi bi-arrow-up-right"></i></button></RouterLink>
                <img src="../assets/imgs/dottedArrow.svg" class="arrow right-arrow">
            </div>
            <img class="area-img img-fluid" style="z-index: 1;" src="../assets/imgs/femaleHero.svg">
        </div>
    </div>
<!-- </div> -->
    <div class="hero-title" style="font-size: 1.2em; text-align: center; padding: 15px; color: var(--app-grey); margin-top: 30px;  font-weight: normal;">TechZone is trusted by many leading brands and startups</div>
<InfiniteScroll/>
</main>

<footer>
    <Footer/>
</footer>


</template>



<style scoped>

.btn{
    border-radius: none !important;
}

/* .nav-link{
    border: 1px solid red;
} */
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