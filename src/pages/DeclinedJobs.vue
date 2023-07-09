<template>
    <PageTemplate>
        <template #page-tabs>
            <RouterLink to="/jobs"><div class="job-category">Available Jobs</div></RouterLink>
            <RouterLink to="requested-jobs"><div class="job-category">Requested</div></RouterLink>
            <RouterLink to="assigned-jobs"><div class="job-category">Assigned</div></RouterLink>
            <RouterLink to="completed-jobs"><div class="job-category">Completed</div></RouterLink>
            <RouterLink to="declined-jobs"><div class="job-category job-category-active">Declined</div></RouterLink></template>
    </PageTemplate>
  </template>
  
  <script>
  import PageTemplate from './PageTemplate.vue'
  import PostCard from '../components/JobCard.vue';
      export default {
          components:{
              PageTemplate, PostCard,
          }
      }
  </script>
  
  <style scoped>
  
  </style>