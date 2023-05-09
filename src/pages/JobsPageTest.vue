<template>
  <div>
    <input type="search" v-model="searchTerm" placeholder="Search...">
    <div v-for="item in filteredItems" :key="item.id">
      <div style="border:1px solid red; margin:10px">
        {{ item.job_tag }}<br/>
      {{ item.job_des }}
      </div>
      
    </div>
  </div>
</template>

<script>
import jobsData from '@/pages/JobLists.json'; // import the JSON file

export default {
  data() {
    return {
      searchTerm: '',
      items:jobsData,
    }
  },
  computed: {
    filteredItems() {
      return this.items.filter(item => {
        return item.job_tag.toLowerCase().includes(this.searchTerm.toLowerCase()) || item.job_des.toLowerCase().includes(this.searchTerm.toLowerCase());
      });
    },

    filteredtems() {
      return this.items.filter(item => {
        return Object.values(item).some(value =>
          value.toLowerCase().includes(this.searchTerm.toLowerCase())
        );
      });
    }
  }
}
</script>