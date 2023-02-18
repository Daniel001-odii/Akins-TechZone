<script>
import NavBar from './components/NavBar.vue';
// import Content from './components/Content.vue';
import Mainbody from './components/MainBody.vue';
import LandingContent from './components/LandingContent.vue';
import FooterNext from './components/Footer.vue';

export default {
    setup() {
        return {};
    },
    components: {
    NavBar,
    LandingContent,
    FooterNext,
}
}
</script>

<template>
    <header>
        <NavBar/>
    </header>
    <main>
        <!-- <div class="ellipse"></div> -->
        <LandingContent/>
        <!-- <div class="ellipse2"></div> -->
    </main>
    <footer>
        <FooterNext/>
    </footer>
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