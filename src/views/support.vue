<template>
    <header>
        <NavBar/>
    </header>
    <main :class="['theme-transition', { 'dark': themeStore.darkMode }]">

        <div class="tz-faq-hero">
            <div class="faq-hero-left">
                <div class="faq-hero-left-sub">
                <!-- <p class="support title">Support</p> -->
                <p class="FAQ" >Frequently asked questions</p>
                <p class="FAQ-description sub-title" >Need help with something? Here are our most frequently asked questions.</p>
                </div>
            </div>
            <!-- <div class="faq-hero-right"></div> -->
            <img class="faq-hero-right" src="../assets/imgs/FAQ.png">
        </div>
        <div class="tz-FAQ-main" :class="['theme-transition', { 'dark': themeStore.darkMode }]">

            <div class="tz-FAQ-category">
                <div class="category-description">
                    <p class="title">General FAQs</p>
                    <div class="sub-title">Everything you need to know about Billing and Payment. Cant find answer?, Reachout</div>
                </div>
                <div class="wrapper">
                <ul>
                <li>
                    <input type="checkbox" id="list-item-1">
                    <label for="list-item-1" class="FAQ-topic-title">Is there a free trial available?</label>
                    <ul>
                    <li class="FAQ-topic-content sub-title">Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.</li>
                    </ul>
                </li>
                <li>
                    <input type="checkbox" id="list-item-2">
                    <label for="list-item-2" class="FAQ-topic-title">How can i search for jobs on the platform?</label>
                    <ul>
                    <li class="FAQ-topic-content sub-title">Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.</li>
                    </ul>
                </li>
                <li>
                    <input type="checkbox" id="list-item-3">
                    <label for="list-item-3" class="FAQ-topic-title">How can i upload my resume to the platform?</label>
                    <ul>
                    <li class="FAQ-topic-content sub-title">Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.</li>
                    </ul>
                </li>
                <li>
                    <input type="checkbox" id="list-item-4">
                    <label for="list-item-4" class="FAQ-topic-title">How can i apply for a job listing?</label>
                    <ul>
                    <li class="FAQ-topic-content sub-title">Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.</li>
                    </ul>
                </li>
                <li>
                    <input type="checkbox" id="list-item-5">
                    <label for="list-item-5" class="FAQ-topic-title">How can i save job listings for later?</label>
                    <ul>
                    <li class="FAQ-topic-content sub-title">Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.</li>
                    </ul>
                </li>
                <li>
                    <input type="checkbox" id="list-item-5">
                    <label for="list-item-5" class="FAQ-topic-title">How do i post a job listing as an employer?</label>
                    <ul>
                    <li class="FAQ-topic-content sub-title">Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.</li>
                    </ul>
                </li>
                </ul>
                </div>
            </div>
            <div class="tz-FAQ-category">
                <div class="category-description">
                    <p class="title">Billing & Payment FAQs</p>
                    <div class="sub-title">Everything you need to know about Billing and Payment. Cant find answer?, Reachout</div>
                </div>
                <div class="wrapper">
                <ul>
                <li>
                    <input type="checkbox" id="list-item-6">
                    <label for="list-item-6" class="FAQ-topic-title">Are there any fees for employers posting job listings?</label>
                    <ul>
                    <li class="FAQ-topic-content sub-title">Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.</li>
                    </ul>
                </li>
                <li>
                    <input type="checkbox" id="list-item-7">
                    <label for="list-item-7" class="FAQ-topic-title">How can i update or change my billing information?</label>
                    <ul>
                    <li class="FAQ-topic-content sub-title">Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.</li>
                    </ul>
                </li>
                <li>
                    <input type="checkbox" id="list-item-8">
                    <label for="list-item-8" class="FAQ-topic-title">Are there any hidden fees or charges?</label>
                    <ul>
                    <li class="FAQ-topic-content sub-title">Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.</li>
                    </ul>
                </li>
                <li>
                    <input type="checkbox" id="list-item-9">
                    <label for="list-item-9" class="FAQ-topic-title">How does billing work?</label>
                    <ul>
                    <li class="FAQ-topic-content sub-title">Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.</li>
                    </ul>
                </li>
                <li>
                    <input type="checkbox" id="list-item-10">
                    <label for="list-item-10" class="FAQ-topic-title">What happens if my payment fails or there is an issue with billing? </label>
                    <ul>
                    <li class="FAQ-topic-content sub-title">Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.</li>
                    </ul>
                </li>
                </ul>
                </div>
            </div>

            <div class="tz-FAQ-last" :class="['theme-transition', { 'dark': themeStore.darkMode }]">
                <img src="../assets/imgs/Avatar_group.png"> 
                <p><b>Still have questions? </b><br/>
                    Can’t find the answer you’re looking for? Please reach out to us directly.</p>
                    <RouterLink to="/support/form"> <button style="border-radius: 5px;" class="cust-btn">Reach out</button></RouterLink>
                   
            </div>
        </div>
       


    </main>
    <footer>
        <Footer/>
    </footer>
</template>

<script>
import { RouterLink } from 'vue-router';
import NavBar from '../components/NavBar.vue'
import Footer from '../components/Footer.vue'
import themeStore from '@/theme/theme';


    export default {
        setup(){
                  // Accessing themeStore properties and methods
                    const toggleTheme = themeStore.toggleTheme;
                    return{
                        themeStore,
                        toggleTheme,
                    };
                },
        components:{ NavBar, Footer, RouterLink }
    }
</script>

<style scoped>
    .tz-faq-hero{
        display: flex;
        flex-direction: row;
        align-items: center;
        background: #080D27;
        color: #fff;
        font-size: 0.8em;
        padding: 25px 0px 25px 25px;
    }

    .sub-title{
        font-size: 0.7em;
        padding-bottom: 20px;
    }
    p{
        margin: 0;
        padding: 0;
    }
    .faq-hero-left{
        padding: 25px;
        width: 100%;
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
        width: 400px;
    }
    .tz-FAQ-main{
        padding: 25px;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        background: #fff;
    }

    .category-description{
        max-width: 450px;
    }
    .tz-FAQ-category{
        display: flex;
        flex-direction: row;
        align-items: flex-start;
        margin-bottom: 50px;
    }
    .FAQ-topic-title{
        font-weight: bold;
        font-size: 0.8em;
    }
    
    .tz-FAQ-last{
        background: #F9FAFB;
        padding: 20px 100px;
        margin-top: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        text-align: center;
        gap: 20px;
        border-radius: 5px;
    }


.wrapper{
  width: 400px;
}

ul{
  list-style: none;
  margin: 0;
  padding: 0;
}

label{
  display: block;
  cursor: pointer;
  border-bottom: none;
}

label.last{
  border-bottom: 1px solid #fff;
}


.FAQ-topic-title{
    border-bottom: 1px solid #efefef;
    border-top: 1px solid #efefef;
    padding: 15px 0px 15px 0px;
}

input[type="checkbox"]{
  position: absolute;
  left: -9999px;
}

input[type="checkbox"] ~ ul{
  height: 0;
  transform: scaleY(0);
}

input[type="checkbox"]:checked ~ ul{
  height: 100%;
  transform-origin: top;
  transition: transform .2s ease-out;
  transform: scaleY(1); 
}

input[type="checkbox"]:checked + label{
}



@media only screen and (max-width: 720px) {
    .tz-faq-hero{
        flex-direction: column;
    }
    .tz-FAQ-category{
        flex-direction: column;
    }
    .wrapper{
        width: auto;
    }
    .faq-hero-right{
        display: none;
    }
    .tz-FAQ-last{
        padding: 10px 12px;
    }
}
</style>