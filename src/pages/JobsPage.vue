<template>
    <PageTemplate>
        <template #page-tabs>
                        <RouterLink to=""><div class="job-category job-category-active">Available Jobs</div></RouterLink>
                        <RouterLink to="/jobs/requested-jobs"><div class="job-category">Requested (0)</div></RouterLink>
                        <RouterLink to="/jobs/assigned-jobs"><div class="job-category">Assigned (5)</div></RouterLink>
                        <RouterLink to="/jobs/completed-jobs"><div class="job-category">Completed (15)</div></RouterLink>
                        <RouterLink to="/jobs/declined-jobs"><div class="job-category">Declined (4)</div></RouterLink>
                    </template>
        <template #job-cards>
            <PostCard/>
            <PostCard/>
            <PostCard/>
            <PostCard/>
            <PostCard/>
            <PostCard/>
            <PostCard/>
            <PostCard/>
        </template>
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