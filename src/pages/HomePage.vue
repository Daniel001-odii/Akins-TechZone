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
import JobCard from '../components/JobCard.vue';
import axios from 'axios'

// const Api_url = "https://techzoneapp.herokuapp.com";
const api_url = "https://techzoneapp.herokuapp.com/api/jobs";

export default {
    components: {
    InfiniteScroll,
    Footer,
    NavBar,
    RouterLink,
    ProfileNavBar,
    ItemScroll,
    NavBarHome,
    JobCard
}, 
data(){
        return{
            userMenuIsShown: false,
            showMenu:false,
            signin_options: false,
            signup_options:false,
            jobs:[],
            isLoading:false,
        }
    },
methods:{
    fetchJobListings(){
            this.isLoading = true;
            axios.get(api_url).then(response => {
            this.jobs = response.data;
            this.jobs.reverse();
            console.log(response.data);
                this.isLoading = false;
            }).catch(error => {
            this.isLoading = false;
            console.error(error);
        })
    },
    repeatedSkills() {
      const skillCount = {};
      for (const job of this.jobs) {
        const skills = job.skill_set.split(', ');
        for (const skill of skills) {
          if (!skillCount[skill]) {
            skillCount[skill] = 1;
          } else {
            skillCount[skill]++;
          }
        }
      }
      const repeatedSkills = {};
      for (const skill in skillCount) {
        if (skillCount[skill] > 2) {
          repeatedSkills[skill] = skillCount[skill];
        }
      }
      return repeatedSkills;
    },
},
computed: {
    
  },
mounted(){
            this.fetchJobListings();
            this.repeatedSkills();
        },
setup() {
    const jobs = ref([
      { id: 1, name: 'Audio-visual', 'trend-count': getRandomTrendCount() },
      { id: 2, name: 'CCTV/Alarm Systems', 'trend-count': getRandomTrendCount() },
      { id: 3, name: 'Desktop/Laptop', 'trend-count': getRandomTrendCount() },
      { id: 4, name: 'Fiber Cabling', 'trend-count': getRandomTrendCount() },
      { id: 5, name: 'Networking', 'trend-count': getRandomTrendCount() },
      { id: 6, name: 'Point of Sale', 'trend-count': getRandomTrendCount() },
      { id: 7, name: 'Printer', 'trend-count': getRandomTrendCount() },
      { id: 8, name: 'Server Hardware/Software', 'trend-count': getRandomTrendCount() },
      { id: 9, name: 'Smart Home', 'trend-count': getRandomTrendCount() },
      { id: 10, name: 'General Tasks', 'trend-count': getRandomTrendCount() },
      { id: 11, name: 'Automated Teller Machine', 'trend-count': getRandomTrendCount() },
      { id: 12, name: 'Low Voltage Cabling', 'trend-count': getRandomTrendCount() },
      { id: 13, name: 'High Voltage Cabling', 'trend-count': getRandomTrendCount() },
      { id: 14, name: 'Satellite (DSTV/GOTV Services)', 'trend-count': getRandomTrendCount() },
      { id: 15, name: 'Structured Cabling', 'trend-count': getRandomTrendCount() },
      { id: 16, name: 'Telecom/VoIP', 'trend-count': getRandomTrendCount() },
      { id: 17, name: 'Project Management', 'trend-count': getRandomTrendCount() },
      { id: 18, name: 'Electrical', 'trend-count': getRandomTrendCount() },
      { id: 19, name: 'Plumbing', 'trend-count': getRandomTrendCount() },
      { id: 20, name: 'Carpentry/Fixture Install', 'trend-count': getRandomTrendCount() },
    ]);

    function getRandomTrendCount() {
      // Generate a random number between 1000 and 9999
      return Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000;
    }

    return {
      jobs,
    };
  },
};


</script>


<template>
<header>
        <nav class="Tz-navbar container-fluid">
            <div class="Tz-brand-area">
                    
                    <RouterLink to="/"  class="navbar-brand">
                        <img class="nav-img" src="../components/Logos_icons/techzone.png">
                    </RouterLink>
            

                    <div class="nav-contents"> 
                        <div class="Tz-nav-links">
                            <span><RouterLink to="/jobs" class="tz-page-link">Find Work</RouterLink></span>
                            <span><RouterLink to="/client/dashboard" class="tz-page-link">Hire Talent</RouterLink></span>
                            <span><RouterLink to="/support" class="tz-page-link">Support</RouterLink></span>
                        </div>
                    </div>
            </div>

            <div class="search"><Search/></div>
        
                <div class="nav-auth-buttons">
                    <button class="cust-btn login" style="background: none; color: #fff; border: 1px solid var(--app-blue);">
                        Sign in
                    <!-- <div class="login-options" v-show="isDropdownOpen">
                        <RouterLink to="/employer/login"><div class="options">As Employer</div></RouterLink>
                        <RouterLink to="/login"><div class="options">As Talent</div></RouterLink>
                    </div> -->
                    <div class="login-options">
                        <RouterLink to="/employer/login"><div class="options">As Employer</div></RouterLink>
                        <RouterLink to="/login"><div class="options">As Talent</div></RouterLink>
                    </div>
                    </button>

                    <button class="cust-btn signUp">
                    <span>Sign Up</span>
                    <div class="signup-options">
                        <RouterLink to="/employer/signup"><div class="options">As Employer</div></RouterLink>
                        <RouterLink to="/talent-signUp"><div class="options">As Talent</div></RouterLink>
                    </div>
                    </button>
                </div>

                    <div class="nav-toggler">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 33 20" fill="none" class="menu-toggle" @click="showMenu = !showMenu">
                            <path d="M1.94727 1.75464H31.6308" stroke="#fff" stroke-width="1.9789" stroke-linecap="round"/>
                            <path d="M1.94727 10.0001H31.6308" stroke="#fff" stroke-width="1.9789" stroke-linecap="round"/>
                            <path d="M1.94727 18.2455H31.6308" stroke="#fff" stroke-width="1.9789" stroke-linecap="round"/>
                        </svg>
                    </div>
        </nav>
        <transition name="slide">
            <div class="menu-from-nav" :class="{ 'navActive': showMenu }" v-if="showMenu">
            <div class="menu-header">
                <RouterLink to="/"  class="navbar-brand">
                    <img class="nav-img" src="../components/Logos_icons/techzone.png">
                </RouterLink>
                    <span class="closeBtn" @click="showMenu=false">&times;</span>
            </div>

            <RouterLink to="/jobs" class="menu-item"><div><span class="menu-item-label">Find Job</span></div></RouterLink>
            <RouterLink to="/client" class="menu-item"><div><span class="menu-item-label">Hire Talent</span></div></RouterLink>
                <div class="menu-item">
                    <div class="menu-item-label" @click="signup_options =!signup_options; signin_options=false"><span>Sign Up</span> 
                        <span>
                        <i v-if="!signup_options" class="bi bi-caret-down-fill"></i>
                        <i v-if="signup_options" class="bi bi-caret-up-fill"></i>
                        </span>
                    </div>
                </div>
                    <div class="sub-signUp menu-item" v-if="signup_options">
                        <RouterLink to="/employer/signup" class="options"><div>As Employer</div></RouterLink>
                        <RouterLink to="/talent-signUp" class="options"><div>As Talent</div></RouterLink>
                    </div>
                <!-- <div class="menu-item">
                    <div class="menu-item-label" @click="signin_options =!signin_options; signup_options=false"><span>Sign In</span> 
                        <span>
                        <i v-if="!signin_options" class="bi bi-caret-down-fill"></i>
                        <i v-if="signin_options" class="bi bi-caret-up-fill"></i>
                        </span>
                    </div>
                </div>
                    <div class="sub-signUp menu-item" v-if="signin_options">
                        <RouterLink to="/employer/login" class="options"><div>As Employer</div></RouterLink>
                        <RouterLink to="/login" class="options"><div>As Talent</div></RouterLink>
                    </div> -->

            </div>
        </transition>

</header>
<main>
    <div class="hero-section">
        <div class="hero-section-sub">
        <div class="tz-hero-left">
            <div class="tz-hero-title">Hire the right Employees, Find Your Dream Job.</div>
            <div class="tz-hero-subtitle">TechZone is a job search platform in Nigeria. 
                We establish trusted networking between freelancers and businesses all across the nation. 
                Qualified job seekers find the best in-demand jobs of their desired skills anywhere nationwide.
            </div>
            <form class="tz-hero-form">
                <svg style="margin-left: 5px;" xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 16 16" fill="none">
                    <path d="M15.1689 14.6693L10.6689 10.1693M12.1689 6.41931C12.1689 9.31881 9.81844 11.6693 6.91895 11.6693C4.01945 11.6693 1.66895 9.31881 1.66895 6.41931C1.66895 3.51982 4.01945 1.16931 6.91895 1.16931C9.81844 1.16931 12.1689 3.51982 12.1689 6.41931Z" stroke="#71717A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <input class="tz-hero-formInput" type="text" placeholder="Try Fiber Cabling, Smart Home etc.">
                <button class="tz-hero-formSubmit" onsubmit="">FIND A JOB</button>
            </form>
       </div>
       <!-- <img class="tz-right-image" src="../assets/imgs/people.png"> -->
       <div class="tz-right-image"></div>
       </div>
    </div>
    
    <div class="tz-second-section">
        <div class="tz-second-title">Discover The Trending Jobs <br/> In Demand</div>
        <div class="tz-trends-container">
            <!-- {{  repeatedSkills }} -->
            <!-- <div style="border: 1px solid red; height: 300px; width: 100%;"><div v-for="(skill, count) in repeatedSkills" :key="skill">
                {{ skill }} {{ count }}
            </div></div> -->
            
            <div v-for="item in jobs" :key="item.id">
                <div class="tz-trend">{{ item.name }}<span class="tz-trend-count">{{ item['trend-count'] }} JOBS</span></div>
            </div>
        </div>
    </div>
    <div class="tz-second-section" style="background: #F6F9FF;">
        <div class="tz-second-title">Featured Jobs</div>
        <div class="featured-jobs">
            <div class="ft-jobCard">
                <div class="blueSpace"></div>
                <div class="ft-jobCard-content">
                <div class="ft-jobCard-head">
                    <div class="ft-jobCard-left">
                        <div class="ft-job-title">Server Hardware Engineer</div>
                        <div class="ft-job-location">Lekki Phase 1, Lagos State</div>
                    </div>
                    <div class="ft-jobCard-right">19/07/2013</div>
                </div>
                <div class="ft-jobCard-des">We are seeking a highly experienced and skilled Server Hardware Engineer to join our dynamic team. The successful candidate will have a proven track... </div>
                </div>
            </div>
            <div class="ft-jobCard">
                <div class="blueSpace"></div>
                <div class="ft-jobCard-content">
                <div class="ft-jobCard-head">
                    <div class="ft-jobCard-left">
                        <div class="ft-job-title">Server Hardware Engineer</div>
                        <div class="ft-job-location">Lekki Phase 1, Lagos State</div>
                    </div>
                    <div class="ft-jobCard-right">19/07/2013</div>
                </div>
                <div class="ft-jobCard-des">We are seeking a highly experienced and skilled Server Hardware Engineer to join our dynamic team. The successful candidate will have a proven track... </div>
                </div>
            </div>
            <div class="ft-jobCard">
                <div class="blueSpace"></div>
                <div class="ft-jobCard-content">
                <div class="ft-jobCard-head">
                    <div class="ft-jobCard-left">
                        <div class="ft-job-title">Server Hardware Engineer</div>
                        <div class="ft-job-location">Lekki Phase 1, Lagos State</div>
                    </div>
                    <div class="ft-jobCard-right">19/07/2013</div>
                </div>
                <div class="ft-jobCard-des">We are seeking a highly experienced and skilled Server Hardware Engineer to join our dynamic team. The successful candidate will have a proven track... </div>
                </div>
            </div>
            <div class="ft-jobCard">
                <div class="blueSpace"></div>
                <div class="ft-jobCard-content">
                <div class="ft-jobCard-head">
                    <div class="ft-jobCard-left">
                        <div class="ft-job-title">Server Hardware Engineer</div>
                        <div class="ft-job-location">Lekki Phase 1, Lagos State</div>
                    </div>
                    <div class="ft-jobCard-right">19/07/2013</div>
                </div>
                <div class="ft-jobCard-des">We are seeking a highly experienced and skilled Server Hardware Engineer to join our dynamic team. The successful candidate will have a proven track... </div>
                </div>
            </div>
        </div>
    </div>
    <div class="tz-second-last" style="background: #F6F9FF;">
        <div style="display: flex; align-items: flex-start; flex-direction: column; padding: 50px;">
            <div class="tz-second-title" style="text-align: left; ">Take The Next Step In Your Journey - Sign Up And Unlock Limitless Opportunities</div>
            <!-- <div class="cust-btn" style="width: 100px; border-radius: 60px;">Sign Up</div> -->
            <button class="cust-btn signUp2">
                    <span>Sign Up</span>
                    <div class="signup-options2">
                        <RouterLink to="/employer/signup"><div class="options">As Employer</div></RouterLink>
                        <RouterLink to="/talent-signUp"><div class="options">As Talent</div></RouterLink>
                    </div>
            </button>
        </div>
        <img src="../assets/imgs/landing_girl.png" class="last-girl">
        
    </div>
    
</main>

<footer>
    <Footer/>
</footer>


</template>



<style scoped>
.login:hover .login-options{
    display: block;
}
.last-girl{
    width: 50%;
    height: auto;
}
.tz-second-last{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
}
.ft-jobCard-des{
    padding: 10px;
    overflow-y: hidden;
}
.ft-jobCard-head{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 10px;
}
.ft-jobCard{
    border-left: 20px solid var(--app-blue);
    border: 1px solid var(--app-blue);
    display: flex;
    flex-direction: row;
    border-radius: 0px 5px 5px 0px;
    max-width: 500px;
    background: #fff;
    /* min-width: 300px; */
}
.blueSpace{
    width: 50px;
    background: var(--app-blue);
}
.tz-hero-formInput{
    width: 100%;
    border: none;
    background: none;
    height: 100%;
    outline: none;
    color: #fff;
    caret-color: #fff;
}
.tz-hero-formSubmit{
    height: 100%;
    /* padding: 0px 50px; */
    border-radius: 60px;
    border: none;
    display: flex;
    flex-direction: row;
    width: 250px;
    justify-content: center;
    align-items: center;
    font-weight: bold;   
}
.tz-hero-formSubmit:hover{
    color: #fff;
    background: var(--app-blue);
}
.tz-hero-form{
    border-radius: 60px;
    border: 2px solid var(--app-blue);
    padding: 5px;
    height: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 10px;
    font-size: 0.9em;
    width: 100%;
}
.tz-right-image{
    /* width: 50%;
    height: 100%;
    border: 1px solid red; */
    height: 500px;
    width: 50%;
    background: url("../assets/imgs/people.png");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    /* border: 1px solid green; */
    display: block;
}

.featured-jobs{
    display: flex;
    flex-direction: row;
    gap: 20px;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    /* padding: 50px; */
}
.tz-trends-container{
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 50px;
    flex-wrap: wrap;
    width: 85%;
    gap: 10px;
}
.tz-trend{
    border-radius: 60px;
    border: 0.869px solid var(--stroke, rgba(78, 121, 188, 0.50));
    background: #F6F9FF;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 15px;
    gap: 10px;
    font-size: 0.8em;
    text-transform: uppercase;
    font-weight: bold;
}
.tz-trend-count{
    color: #45494F;
    font-size: 0.75em;
}
.tz-second-section{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px;
    background: #ffffff;
    /* height: 80vh; */
}
.tz-second-title{
    font-size: 2.5em;
    font-weight: bolder;
    line-height: 100%;
    text-align: center;
    margin-top: 50px;
    margin-bottom: 35px;
}
.tz-home-search{
    height: 65px;
    width: 100%;
    border-radius: 60px;
}
.tz-hero-left{
    width: 50%;
    line-height: 65px;
    margin-top: 100px;
    margin-bottom: 50px;
}
.tz-hero-title{
    font-size: 3em;
    font-weight: bolder;
    color: #fff;
    width: 100%;
    margin-bottom: 15px;
    line-height: 100%;
}
.tz-hero-subtitle{
    color: #71717A;
    line-height: normal;
    margin-bottom: 15px;
}
.hero-section{
    background: #000;
    
}

.hero-section-sub{
    display: flex;
    justify-content: center;
    flex-direction: row;
    gap: 50px;
    max-width: 1250px;
    /* border: 1px solid red; */
    margin: 0 auto;
}

.Tz-navbar{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    height: 60px;
    width: 100%;
    margin: 0 auto;
    padding: 10px;
    background: #000000;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: fixed;
    z-index: 99999;
    position: sticky;
    /* top: 20px; */
    
}


.menu-toggle{
    margin: 0px 10px 0px 10px;
    cursor: pointer;
    display: none;
    
}


.menu-toggle.active span:nth-child(1) {
    transform: rotate(45deg) translate(5px, 5px);
  }
  
  .menu-toggle.active span:nth-child(2) {
    opacity: 0;
  }
  
  .menu-toggle.active span:nth-child(3) {
    transform: rotate(-45deg) translate(5px, -5px);
  }
  

  
.nav-toggler{
    display: none;
}
.Tz-brand-area{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
}

.nav-contents{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-left: 20px;
    font-size: 0.9rem;
}

.Tz-nav-links{
    gap: 20px;
    display: flex;
    justify-content: space-between;
    color: #fff !important;
    font-weight: 50px;
}

.tz-page-link{
    color: #fff !important;
}
.nav-auth-buttons{
    justify-content: space-between;
    display: flex;
    gap: 10px;
}

.signUp{
    background: var(--app-blue) !important;
    border-radius: 5px;
}
.signUp2{
    background: var(--app-blue) !important;
    border-radius: 5px;
    position: relative;
}
.signUp:hover .signup-options{
    display: block;
}

.signUp2:hover .signup-options2{
    display: block;
}
.login{
    color: #000;
    border-radius: 5px;
    background: none;
}
.signup-options2{
    display: none;
    position: absolute;
    left: 0px;
    top: 35px;
    background: #ffffff;
    width: 100px;
    box-shadow: 0px 12px 12px #e2e2e2;
    text-align: right;
}

.signup-options{
    display: none;
    position: absolute;
    right: 10px;
    top: 50px;
    background: #ffffff;
    width: 100px;
    /* box-shadow: 0px 12px 12px #e2e2e2; */
    text-align: right;
}

.login-options{
    display: none;
    position: absolute;
    right: 118px;
    top: 50px;
    background: #fff;
    text-align: right;
}
.options{
    padding: 5px 10px;
    width: 100%;
}
.options:hover{
     background: var(--app-blue);
     color: #fff;
}
.options > div:hover{
    color: #fff;
}

/*-----------animation for menu---------------*/
.slide-enter-active, .slide-leave-active {
  transition: margin 0.3s;
  margin-top: 0;
}

.slide-enter-from, .slide-leave-to {
  /* opacity: 0; */
  margin-top: -100vh;
}

 /*--meida queries-------*/
 @media only screen and (max-width: 720px) {
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
    .search{
        display: none !important;
    }
    .menu-toggle{
        display: inline-block;
    }
    .nav-auth-buttons{
        display: none;
    }

    .hero-section{
        flex-direction: column !important;
        gap: 2px;
    }

    .tz-hero-left{
        width: 100%;
        margin: 0 !important;
        padding: 30px;
    }

    .hero-section-sub{
        flex-direction: column;
        /* padding: 30px !important; */
    }
    .tz-right-image{
        width: 100%;
    }
    .tz-second-last{
        flex-direction: column;
        justify-content: center;
    }
    .last-girl{
        width: 100%;
    }

}
    

@media only screen and (max-width: 350px) {
    .tz-hero-title{
        font-size: 2em;
    }
    .tz-hero-form{
        font-size: 10px;
    }
    .tz-second-title{
        font-size: 1.4em;
    }
    }



.closeBtn{
    /* color: var(--app-blue); */
    font-size: 30px;
    position: absolute; 
    right: 20px;
    top:2px;
    cursor: pointer;
}
.navActive{
    display: block;
}

.menu-from-nav{
    position: fixed;
    top: 0;
    background-color: #fff;
    height: 0px;
    width: 100%;
    z-index: 99999;
    display: none;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    /* gap: 10px; */
}
.menu-header{
    margin-top: 20px;
}
.menu-item{
    height: 50px;
    border-bottom: 2px solid var(--app-hover);
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding-left: 30px;
}
.menu-item > div{
    display: flex;
    gap: 30px;
}
.menu-item:hover{
    background: var(--app-hover);
    /* color: #fff !important; */
}
.menu-from-nav.navActive{
    display: flex;
    height: 100vh;
}

.menu-toggle{
    margin: 0px 10px 0px 10px;
    cursor: pointer;
    display: none;
    
}

.cust-actions{
    display: flex;
    flex-direction: row;
}

.menu-toggle.active span:nth-child(1) {
    transform: rotate(45deg) translate(5px, 5px);
  }
  
  .menu-toggle.active span:nth-child(2) {
    opacity: 0;
  }
  
  .menu-toggle.active span:nth-child(3) {
    transform: rotate(-45deg) translate(5px, -5px);
  }
  

  
.nav-toggler{
    display: none;
}
.Tz-brand-area{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
}

.nav-contents{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-left: 20px;
    font-size: 0.9rem;
}

.Tz-nav-links{
    gap: 20px;
    display: flex;
    justify-content: space-between;
    /* width: 180px; */
    font-weight: 50px;
}
.nav-auth-buttons{
    /* width: 300px; */
    /* border: 1px solid goldenrod; */
    justify-content: space-between;
    display: flex;
    gap: 10px;
}

.tz-user-menu{
    display: flex;
    flex-direction: column;
    background: #fff;
    /* border-radius: 5px; */
    box-shadow: 0px 5px 10px #efefef;
    position: absolute;
    top: 60px;
    right: 70px;
    z-index: 999;
    font-size: 0.9rem;
    overflow-x: hidden;
}

.tz-user-thumbnail{
    height: 35px;
    width: 35px;
    border-radius: 50%;
    background: url("./Logos_icons/dummy_user.png");
}
.tz-user-thumbnail:hover .tz-user-menu{
    background: red;
    display: flex;
    /* display: block; */
}
.tz-menu-conent{
    cursor: pointer;
    padding: 8px;
    padding-right: 30px;
}
.tz-menu-conent > svg{
    margin-right: 8px;
}
.tz-menu-conent:hover{
    background: var(--app-hover);
}

.options{
    padding: 5px 10px;
    width: 100%;
}
.options:hover{
     background: var(--app-blue);
     color: #fff;
}
.options > div:hover{
    color: #fff;
}
.menu-item-label{
    width: 100%;
    display: flex;
    justify-content: space-between;
}

.sub-signUp{
    flex-direction: column;
    align-items: flex-start;
    padding-left: 50px;
    height: 80px;
    justify-content: center;
    width: 100%;
}
.sub-signUp > div{
    width: 100%;
}
.sub-signUp:hover{
    background: none;
}

/*-----------animation for menu---------------*/
.slide-enter-active,
.slide-leave-active {
  transition: margin 0.3s;
  margin-top: 0;
}

.slide-enter-from,
.slide-leave-to {
  /* opacity: 0; */
  margin-top: -100vh;
}

 /*--meida queries-------*/
 @media only screen and (max-width: 720px) {
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
    .search{
        display: none !important;
    }
    .help{
        display: none;
    }
    .Tz-nav-actions{
        width: auto;
        display: none;
        /* flex-direction: column; */
    }
    .Tz-nav-actions > svg{
        margin: 0px 5px 0px 5px;
    }
    .menu-toggle{
        display: inline-block;
    }
    .nav-auth-buttons{
        display: none;
    }
    }
</style>