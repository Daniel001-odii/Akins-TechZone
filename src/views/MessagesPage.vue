
<template>
  <div class="page-grid-container" :class="['theme-transition', { 'dark': themeStore.darkMode }]">
    <div class="Navigation">
      <NavBar/>
    </div>
    <div class="Left-Nav">
          <LeftNav/>
    </div>
    <div class="Page-header">
          <div class="page-title">Messages</div>
          <div class="page-filters"></div>
          <div class="insights-content"><small>your chats are end to end encrypted</small></div>
    </div>
    <div class="Page-contents">
          <!----message page contents starts here ----->
          <div class="tz_message">
            <div class="tz_message_left">
            <div class="filter-search">
                <i class="bi bi-search"></i>
                <input type="search" class="ft-search" v-model="searchTerm" placeholder="Search conversations">
           </div>
          </div>
          <div class="tz_message_main">
            <div class="tz_client_name">Client Name</div>
          </div>
          </div>
          
    </div>
    <!-- <div class="footer">
      <Footer/>
    </div> -->
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
  import themeStore from '@/theme/theme';
  
  const Api_url = "https://techzoneapp.herokuapp.com/api";
  
      export default {
          components:{ PostCard, NavBar, ProfileNavBar, Footer, RouterLink, LeftNav },
          setup(){
          const toggleTheme = themeStore.toggleTheme;
                return{
                    themeStore,
                    toggleTheme,
                }
              },
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

    .tz_message{
      display: flex;
      flex-direction: row;
    }
  .tz_message_left{
    height: 100vh;
    border-right: 1px solid #efefef;
    width: 300px;
    padding-right: 10px;
  }

  .tz_message_main{

  }

  .tz_client_name{
    padding: 10px;
  }
  </style>