<template>

    <!-------form submitted modal-------->
  <div class="tz-modal" v-if="showModal">
    <!-- <div class="tz-modal"> -->
      <div class="tz-modal-content">
        <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 77 76" fill="none">
          <rect x="6.31836" y="6.04541" width="64.3636" height="64.3636" rx="32.1818" fill="#D1FADF"/>
          <path d="M51.91 36.9937V38.2273C51.9083 41.1189 50.972 43.9324 49.2407 46.2484C47.5093 48.5643 45.0757 50.2586 42.3028 51.0785C39.5299 51.8983 36.5663 51.7999 33.8539 50.7978C31.1416 49.7957 28.8258 47.9437 27.2519 45.5179C25.6781 43.0922 24.9306 40.2227 25.1209 37.3374C25.3111 34.4521 26.429 31.7056 28.3077 29.5075C30.1864 27.3094 32.7253 25.7775 35.5458 25.1402C38.3663 24.503 41.3172 24.7945 43.9584 25.9714M51.91 27.5L38.5009 40.9225L34.4782 36.8998" stroke="#039855" stroke-width="2.68182" stroke-linecap="round" stroke-linejoin="round"/>
          <rect x="6.31836" y="6.04541" width="64.3636" height="64.3636" rx="32.1818" stroke="#ECFDF3" stroke-width="10.7273"/>
        </svg>
          <p class="tz-modal-title">Message sent!</p>
          <small style="padding: 0px 0px 20px 0px;">check your mailbox for our response.</small>
          <RouterLink to="/">
                <button class="cust-btn">Return to Home page</button>
          </RouterLink>
      </div>
  </div>

<header>
    <NavBar/>
</header>
<main>
    <div class="tz-main">
        <p>Can’t find answers in the FAQ’s?, Reach out to us.</p>
        <small>We promise to attend to your needs as fast possible.</small>
        <form class="tz-support-form" @submit.prevent="submitForm">
            <div class="form-section">
                <label for="email">Name</label>
                    <!-- <li class="error-msg" v-if="msg" v-for="error in msg" :key="error">{{ error.email[0] }}</li> -->
                <input class="form-input" placeholder="Your name" type="text"  v-model="formData.name"  required>
            </div>
            <div class="form-sectio">
                <label for="email">Email</label>
                    <!-- <li class="error-msg" v-if="msg" v-for="error in msg" :key="error">{{ error.email[0] }}</li> -->
                <input class="form-input" placeholder="you@company.com" type="email"  v-model="formData.email"  required>
            </div>
            <div class="form-section">
                <label for="email">Phone number</label>
                    <!-- <li class="error-msg" v-if="msg" v-for="error in msg" :key="error">{{ error.email[0] }}</li> -->
                    <div class="phone-number"><span>+234</span>
                        <input class="form-phoneNo" placeholder=" 812 3456 789" type="tel"  v-model="formData.phone"  required>
                    </div>
            </div>
            <div class="form-section">
                <label for="email">How can we help?</label>
                    <!-- <li class="error-msg" v-if="msg" v-for="error in msg" :key="error">{{ error.email[0] }}</li> -->
                <textarea style="padding: 10px;" class="about-urself" placeholder="Tell us about questions and concerns..." type="text-area" v-model="formData.message" required></textarea>
            </div>
            <!-- <button class="form-btn" type="submit">Submit</button> -->
                    <button class="form-btn" type="submit" :disabled="isLoading"  :class="{ 'disabled-button': isLoading }">
                        <span v-if="isLoading" class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                        <span v-if="isLoading">sending...</span>
                        <span v-else>Submit</span>
                    </button>
        </form>
    </div>

    
</main>
<Footer></Footer>
</template>

<script>
import NavBar from '../components/NavBar.vue';
import Footer from '../components/Footer.vue'
import axios from 'axios';
import { RouterLink } from 'vue-router';


export default {
  components: {
    NavBar, RouterLink, Footer
  },
  data() {
    return {
      api_url: 'https://techzone-form-ccb2240b74a4.herokuapp.com/api/submit',
      formData: {
        name: '',
        email: '',
        phone: '',
        message: '',
      },
      showModal: false,
      isLoading: false,
    };
  },
  methods: {
    async submitForm() {
        this.isLoading = true;
      try {
        const response = await axios.post(this.api_url, this.formData);
        console.log(response.data.message);
        if(response.status === 200){
        this.isLoading = false;
        this.showModal = true;
        // this.$router.push('/client/successful');
      }
      } catch (error) {
        console.error('Error submitting form:', error);
      }
    },
  },
};


</script>

<style scoped>
body{
    overflow: hidden !important;
}
main{
    background: #fff;
    padding: 20px;
    overflow: hidden !important;
}
.tz-main{
    max-width: 500px;
    margin: 0 auto;
    padding: 20px 0px;
    overflow-y: scroll;
    margin-bottom: 50px;
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



/* modal styling goes below */
.tz-modal{
        height: 100%;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        background: #000000c5;
        z-index: 99999999;
        position: fixed;
    }
.tz-modal-content{
        width: 400px;
        height: 200px;
        background: #fff;
        /* background: red; */
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
.tz-modal-title{
        margin-bottom: 0;
    }
</style>