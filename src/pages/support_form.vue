<template>
<header>
        <NavBar/>
</header>
<main>
    <div class="tz-main">
        <p>Can’t find answers in the FAQ’s?, Reach out to us.</p>
        <small>You can reach us anytime via techzone@gmail.com</small>
        <form class="tz-support-form" @submit.prevent="support">
            <div class="form-section">
                <label for="email">Name</label>
                    <!-- <li class="error-msg" v-if="msg" v-for="error in msg" :key="error">{{ error.email[0] }}</li> -->
                <input class="form-input" placeholder="Your name" type="name" required>
            </div>
            <div class="form-sectio">
                <label for="email">Email</label>
                    <!-- <li class="error-msg" v-if="msg" v-for="error in msg" :key="error">{{ error.email[0] }}</li> -->
                <input class="form-input" placeholder="you@company.com" type="email" required>
            </div>
            <div class="form-section">
                <label for="email">Phone number</label>
                    <!-- <li class="error-msg" v-if="msg" v-for="error in msg" :key="error">{{ error.email[0] }}</li> -->
                    <div class="phone-number"><span>+234</span>
                        <input class="form-phoneNo" placeholder=" 812 3456 789" type="mobile" required>
                    </div>
            </div>
            <div class="form-section">
                <label for="email">How can we help?</label>
                    <!-- <li class="error-msg" v-if="msg" v-for="error in msg" :key="error">{{ error.email[0] }}</li> -->
                <textarea style="padding: 10px;" class="about-urself" placeholder="Tell us about questions and concerns..." type="text-area" required></textarea>
            </div>
            <button class="form-btn">Submit</button>
        </form>
    </div>
</main>
</template>

<script>
import { RouterLink } from 'vue-router';
import NavBar from '../components/NavBar.vue'
import Footer from '../components/Footer.vue'

    export default {
        components:{
            NavBar
        }
    }
</script>

<style scoped>
/* .tz-support-form{
    display: flex;
    flex-direction: column;
    width: 500px;
    margin: 0 auto;
} */

main{
    background: #fff;
    height: 100vh;
    padding: 20px;
}
.tz-main{
    max-width: 500px;
    margin: 0 auto;
    padding-top: 50px;
}

p{
    text-align: left;
    font-size: 2em;
    font-weight: bolder;
}
small{
    text-align: center;
}
.about-urself{
    height: 100px;
}
.form-section{
    margin-top: 10px;
}

.phone-number{
    display: flex;
    border: 1px solid;
    flex-direction: row;
    padding: 5px;
    border-radius: 5px;
    align-items: center;
    
}
.form-phoneNo{
    border:  none;
    outline: none;
}
</style>