<template>
  <div>
    <div class="tags" v-for="(count, skill) in getRepeatedSkills()" :key="skill">
      {{ skill }} {{ count }}
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      jobs: [],
    };
  },
  methods: {
    getRepeatedSkills() {
      const skillCount = {};
      for (const job of this.jobs) {
        const skills = job.skill_set.split(', ');
        for (const skill of skills) {
          if (!skillCount[skill]) {
            skillCount[skill] = 1;
          } else {
            skillCount[skill]++;
          }
        }
      }
      const repeatedSkills = {};
      for (const skill in skillCount) {
        if (skillCount[skill] > 2) {
          repeatedSkills[skill] = skillCount[skill];
        }
      }
      return repeatedSkills;
    },
  },
  mounted() {
    axios
      .get('https://techzoneapp.herokuapp.com/api/jobs')
      .then((response) => {
        this.jobs = response.data;
      })
      .catch((error) => {
        console.error(error);
      });
  },
};
</script>
