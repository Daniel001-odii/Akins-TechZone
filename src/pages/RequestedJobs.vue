
<template>
<div class="page-grid-container">
    <div class="Navigation">
        <NavBar/>
    </div>
  <div class="Left-Nav">
        <LeftNav/>
  </div>
  <div class="Page-header">
        <div class="page-title">Work Explorer</div>
        <div class="page-filters">
           <button class="filter-menu" style="margin-left: 10px;">Last 1 hour</button>
           <input type="search" class="filter-search" placeholder="Search all types of jobs">
           <button class="filter-menu">Full-time</button>
           <button class="filter-menu">Remote</button>
           <button class="filter-menu">Last 1 hour</button>
           <button class="filter-menu">Company</button>
        </div>
        <div class="page-tabs">
            <RouterLink to="/jobs"><div class="job-category">Available Jobs</div></RouterLink>
            <RouterLink to=""><div class="job-category-active job-category">Requested (0)</div></RouterLink>
            <RouterLink to="assigned-jobs"><div class="job-category">Assigned (5)</div></RouterLink>
            <RouterLink to="completed-jobs"><div class="job-category">Completed (15)</div></RouterLink>
            <RouterLink to="declined-jobs"><div class="job-category">Declined (4)</div></RouterLink>
        </div>
  </div>
  <div class="Page-contents">
    <div class="job-listings">
        <div class="job-cards-area">
            <p>You have no requested jobs yet</p>
        </div>
        <div class="job-detail-area">
            <div class="card job-detail" style="">
                <p>Nothing to see here . . . </p>
            </div>
        </div>
</div>

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


<style>
   
</style>