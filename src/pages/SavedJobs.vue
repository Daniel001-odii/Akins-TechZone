<template>
  <NavBar/>
    <div>
      <h1>Saved Jobs</h1>
      <!-- <ul>
        <li v-for="job in savedJobs" :key="job.id">
          {{ job.title }}
        </li>
      </ul> -->
    </div>
  </template>
  
  <script>
  import { ref, onMounted } from 'vue';
import NavBar from '../components/NavBar.vue';
  
  export default {
    name: "SavedJobs",
    components:{NavBar},
    data() {
        return {
            savedJobs: [],
        };
    },
    mounted() {
        this.getSavedJobs();
    },
    methods: {
        // async getSavedJobs() {
        //     const token = localStorage.getItem("token");
        //     try {
        //         const response = await fetch(`/jobs/${token}/save`);
        //         //   console.log(token)
        //         if (response.ok) {
        //             // const data = await response.json();
        //             const data = response.data;
        //             this.savedJobs = data;
        //             console.log(this.savedJobs);
        //         }
        //         else {
        //             console.error("Error fetching saved jobs:", response.statusText);
        //         }
        //     }
        //     catch (error) {
        //         console.error("Error fetching saved jobs:", error);
        //     }
        // },
    },
    components: { NavBar }
};
  </script>
  
