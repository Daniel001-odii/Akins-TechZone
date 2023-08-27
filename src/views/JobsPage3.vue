<template>
    <div>
      <h1>Job Listings</h1>
      <ul>
        <li v-for="job in jobs" :key="job.id">
          {{ job.title }}
          <button @click="saveJob(job.id)">Save</button>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  import { ref } from 'vue';
  
  export default {
    name: 'JobListings',
    data() {
      return {
        jobs: [],
      };
    },
    mounted() {
      this.getJobs();
    },
    methods: {
      async getJobs() {
        axios.get(api_url).then(response => {
                        this.jobs = response.data;
                        this.jobs.reverse();
                        console.log(response.data);
                        this.isLoading = false;
                    }).catch(error => {
                        this.isLoading = false;
                        console.error(error);
                    })
      },
      async saveJob(jobId) {
        try {
          const response = await fetch(`/jobs/${jobId}/save`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              token: this.getToken(),
            }),
          });
          if (response.ok) {
            console.log('Job saved successfully!');
          } else {
            console.error('Error saving job:', response.statusText);
          }
        } catch (error) {
          console.error('Error saving job:', error);
        }
      },
      getToken() {
        // Replace this with your logic to retrieve the user token
        // It could be stored in a Vuex store, local storage, or obtained from an authentication library
        return 'user-token';
      },
    },
  };
  </script>
  