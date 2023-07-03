<template>
    <header>
        <NavBar/>
    </header>
    <main>

        <div class="tz-faq-hero">
            <div class="faq-hero-left">
                <div class="faq-hero-left-sub">
                <p class="support title">Support</p>
                <p class="FAQ" >Frequently asked questions</p>
                <p class="FAQ-description sub-title" >Need help with something? Here are our most frequently asked questions.</p>
                </div>
            </div>
            <!-- <div class="faq-hero-right"></div> -->
            <img class="faq-hero-right" src="../assets/imgs/FAQ.png">
        </div>
        <div class="tz-FAQ-main">
            <div class="tz-FAQ-category">
                <p class="title">General FAQs</p>
                <div class="sub-title">Everything you need to know about the product and how it works. Cant find answer?, Reachout</div>
            </div>

            <div class="tz-FAQ-category">
                <p class="title">Billing & Payment FAQs</p>
                <div class="sub-title">Everything you need to know about Billing and Payment. Cant find answer?, Reachout</div>
            </div>
        </div>


    </main>
    <footer>
        <Footer/>
    </footer>
</template>

<script>
import NavBar from '../components/NavBar.vue'
import Footer from '../components/Footer.vue'

    export default {
        components:{NavBar, Footer}
    }
</script>

<style scoped>
    .tz-faq-hero{
        height: 400px;
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
        align-items: center;
        background: #080D27;
        color: #fff;
        font-size: 0.8em;
    }

    .sub-title{
        font-size: 0.8em;
    }
    p{
        margin: 0;
        padding: 0;
    }
    .faq-hero-left{
        padding: 25px;
        width: 100%;
        /* border: 1px solid red; */
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
    }
    .FAQ, .title{
        font-weight: bold;
        font-size: 1.6em;
    }
    .faq-hero-right{
        height: 90%;
        width: auto;
        /* border: 1px solid red; */
    }
    .faq-hero-left-sub{
        width: 450px;
    }
    .tz-FAQ-main{
        padding: 25px;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
    }
    
</style>