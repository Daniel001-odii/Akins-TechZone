<template> 
    <div class="container sidenav">
        <div class="nav-header">
          <p><b>Filter</b></p>
          <p><i class="bi bi-x-circle"></i> Clear all</p>
        </div>
        <Accordion/>
        <RadioSelection radioTitle="Experience Level" 
        option_1="Entry Level"
        option_2="Internship"
        option_3="Intermediate"
        option_4="Experienced"/>

        <RadioSelection radioTitle="Job Type" 
        option_1="Full time"
        option_2="Part time"
        option_3="Contract"
        option_4="Internship"/>

        <RadioSelection radioTitle="Location" 
        option_1="On-site"
        option_2="Remote"
        option_3="Hybrid"/>

        <button class="cust-btn">Apply filters</button>

    </div>
</template>

<script>
import Accordion from './accordion.vue';
import RadioSelection from './radioSelection.vue';


    export default{
      components:{
    Accordion,
    RadioSelection
}
    }
</script>

<style scoped>
 

  .sidenav{
    padding: 20px;
    border-radius: 10px;
    /* border: 2px solid red; */
    background: #fff;
  }
  .nav-header{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 10px;
    font-size: 0.8em;
  }

</style>