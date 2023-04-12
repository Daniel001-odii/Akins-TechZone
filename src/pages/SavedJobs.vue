<template>
    <PageTemplate>
        <template #page-title>Saved Jobs</template>
        <template #page-tabs><p style="margin: 0 !important;">Your saved jobs appear here</p></template>
        <template #job-cards>
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