<script>
import NavBar from './components/NavBar.vue';
// import Mainbody from './pages/JobsPage.vue';
import LandingContent from './pages/HomePage.vue';
import FooterNext from './components/Footer.vue';
import HomePage from './pages/HomePage.vue';
import Login from './pages/login.vue';
import SignUp from './pages/SignUp.vue';


export default {
    setup() {
        return {};
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

    <!-- <header>
        <NavBar/>

    </header>
    <main>
            
    </main>
    <footer>
        <FooterNext/>
    </footer>
     -->
     <!-- <HomePage/> -->   
     
     <!-- <SignUp/> -->
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