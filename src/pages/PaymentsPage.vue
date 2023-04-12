
<template>
  <div class="page-grid-container">
    <div class="Navigation">
      <NavBar/>
    </div>
    <div class="Left-Nav">
          <LeftNav/>
    </div>
    <div class="Page-header">
          <div class="page-title">Payments</div>
          <div class="page-filters"></div>
          <div class="insights-content"><p>Coming soon...<br/> we are working had to see that your money is super safe with us</p></div>
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
  
  
      export default {
          components:{ PostCard, NavBar, ProfileNavBar, Footer, RouterLink, LeftNav }
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