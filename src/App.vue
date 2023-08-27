<script>
import NavBar from './components/NavBar.vue';
// import Mainbody from './views/JobsPage.vue';
import LandingContent from './views/HomePage.vue';
import FooterNext from './components/Footer.vue';
import HomePage from './views/HomePage.vue';
import Login from './views/login.vue';
import SignUp from './views/SignUp.vue';



export default {
    setup() {
        return {
    };
        
    },
    components: {
    NavBar,
    LandingContent,
    FooterNext,
    HomePage,
    Login,
    SignUp,
}
}
</script>

<template>
     <router-view/>
</template>



<style>

.ellipse{
    position: absolute;
    width: 154px;
    height: 154px;
    left: 1170px;
    top: 119px;
    background: #CB1F86;
    filter: blur(250px);
    }
    .ellipse2{
    position: absolute;
    width: 151px;
    height: 151px;
    left: 645px;
    top: 600px;
    background: #CB1F86;
    filter: blur(200px);
    }
</style>