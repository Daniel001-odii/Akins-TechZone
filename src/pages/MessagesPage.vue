
<template>
  <div class="page-grid-container">
    <div class="Navigation">
      <NavBar/>
    </div>
    <div class="Left-Nav">
          <LeftNav/>
    </div>
    <div class="Page-header">
          <div class="page-title">Messages</div>
          <div class="page-filters"></div>
          <div class="insights-content"><small>Dont worry your chats with clients are end to end encrypted</small></div>
    </div>
    <div class="Page-contents">
          <!----this is an insight page and needs no job lisitng content-->
          
    </div>
    <div class="footer">
      <Footer/>
    </div>
  </div>
  
  </template>
  
  <script>
  import { RouterLink } from 'vue-router';
  import Footer from '../components/Footer.vue';
  import PostCard from '../components/JobCard.vue';
  import NavBar from '../components/NavBar.vue';
  import ProfileNavBar from '../components/ProfileNavBar.vue';
  import { reactive } from 'vue';
  import LeftNav from '../components/LeftNav.vue';
  
  const Api_url = "https://techzoneapp.herokuapp.com/api";
  
      export default {
          components:{ PostCard, NavBar, ProfileNavBar, Footer, RouterLink, LeftNav },

          data() {
    return {
      user: {},
    };
  },
         
methods: {
    async getUser() {
      const response = await axios.get(`/Api_url/user/${this.username}`);
      this.user = response.data;
    },
  },
      }
  </script>       
  
  
  <style scoped>
  .insights-content{
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 20px;
      width: 100%;
      font-size: 1.8em !important;
      text-align: center;
  }
  </style>