<template>
    <NavBarHome/>


    


   <div class="page-container">
    
  <div class="page-su">
    <form @submit.prevent="submitForm" @keydown.enter.prevent="dontsubmitForm">
    <div>
      <label for="jobTag">Job Tag:</label>
      <input type="text" id="jobTag" v-model="jobTag" required>
    </div>



    <div>
    <div>
      <input type="text" v-model="inputValue" @keyup.enter="addTag" />
    </div>
    <div>
      <div v-for="(tag, index) in tags" :key="index" class="tag">
        {{ tag }}
        <span @click="removeTag(index)">x</span>
      </div>
    </div>
  </div>
    <div>
      <label for="skillSet">Skill Set:</label>
      <input type="text" id="skillSet" v-model="skill_set" disabled="true" required>
      <!-- <input type="text" id="skillSet" v-model="skillSet" required> -->
    </div>



    
    <div>
      <label for="workPeriod">Work Period: Small, Medium, Large | Entry Level, Intermediate, Expert</label>
      <input type="text" id="workPeriod" v-model="workPeriod" required>
    </div>

    <div>
      <label for="budgetDes">Budget Description: hourly or fixed price</label>
      <input type="text" id="budgetDes" v-model="budgetDes" required>
    </div>

    <div>
      <label for="budget">Budget:</label>
      <input type="number" id="budget" v-model="budget" required>
    </div>

    <div>
      <label for="jobDes">Job Description:</label>
      <textarea id="jobDes" v-model="jobDes" required></textarea>
    </div>

    <div>
      <button type="submit">Submit</button>
    </div>
  </form>

<div>
    <div class="slider-form-buttons">
      <!-- <button  class="cust-btn"> -->
                  <div class="form-progress-btn" @click="prev" :disabled="currentIndex === 0" v-if="currentIndex != 0">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 48 47" fill="none">
                            <path d="M11.484 20.334L27.576 4.24197L23.334 -3.05176e-05L0 23.334L23.334 46.668L27.576 42.426L11.484 26.334H48V20.334H11.484Z" fill="#4E79BC"/>
                        </svg>
                  </div>

                  <div class="form-progress-btn"  @click="next" :disabled="currentIndex === 4" v-if="currentIndex != 4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 48 47" fill="none">
                    <path d="M36.516 20.334L20.424 4.242L24.666 0L48 23.334L24.666 46.668L20.424 42.426L36.516 26.334H0V20.334H36.516Z" fill="#4E79BC"/>
                    </svg>
                  </div>
      <!-- </button> -->
      <!-- <button class="cust-btn">Next <i class="bi bi-arrow-right"></i></button> -->
    </div>

    <div class="progress">
      <div class="progress-bar" role="progressbar" :style="{ width: (currentIndex + 1) * 20 + '%' }" :aria-valuenow="(currentIndex + 1) * 25" aria-valuemin="0" aria-valuemax="100"></div>
    </div>
</div>
</div>


            <!--
            
           -->

   </div>
</template>

 
  
  <script>
 
import NavBarHome from '../components/NavBarHome.vue';
import CheckBox from '../components/CheckBox.vue'
import Search from '../components/Search.vue';
import { ref } from 'vue';
// https://techzone.herokuapp.com/jobs

const inputValue = ref('');
    const tags = ref([]);

  export default {
    components: { NavBarHome, CheckBox, Search },
    data() {
    return {
      currentIndex: 0,
      jobTag: '',
      skillSet: '',
      workPeriod: '',
      budgetDes: '',
      budget: 0,
      jobDes: '',
      ////////////////////////////
      inputValue,
      tags:[],
      skill_set:[],
      // addTag,
      // removeTag,
    };
  },
  methods: {
    async submitForm() {
      try {
        const response = await fetch('https://techzoneapp.herokuapp.com/api/jobs', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            job_tag: this.jobTag,
            skill_set: this.skillSet,
            work_period: this.workPeriod,
            budget_des: this.budgetDes,
            budget: this.budget,
            job_des: this.jobDes
          })
        });

        if (response.ok) {
          // Form submission success
          console.log('Job post submitted successfully');
          this.$router.push('/client/successful');
          // Reset form fields
          // this.jobTag = '';
          // this.skillSet = '';
          // this.workPeriod = '';
          // this.budgetDes = '';
          // this.budget = 0;
          // this.jobDes = '';
        } else {
          // Form submission error
          console.error('Failed to submit job post');
        }
      } catch (error) {
        console.error('An error occurred during form submission:', error);
      }
    },
    addTag(){
      if (this.inputValue.trim() !== '') {
        this.tags.push(this.inputValue.trim());
        this.skill_set.push(this.inputValue.trim());
        // this.skillSet.push(this.inputValue.trim());
        console.log(this.skill_set)
        this.inputValue = '';
      }
    },
    removeTag(index){
      this.tags.splice(index, 1)
      this.skill_set.splice(index, 1);
      console.log(this.skill_set)
    }
  },
  dontsubmitForm(){
    console.log("a tag has been added!")
  }


};




  </script>
  
  
<style scoped>
.tag {
  display: inline-block;
  padding: 4px 8px;
  margin-right: 8px;
  background-color: #f0f0f0;
  border-radius: 4px;
  font-size: 14px;
  color: #333;
  cursor: pointer;
}

.tag:hover {
  background-color: #e0e0e0;
}

.tag span {
  margin-left: 8px;
}


.page-sub{
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 70%;
  height: 60vh;
}
.form-container{
  display: flex;
  flex-direction: column;
  width: 100%;
  overflow-x: scroll;
  justify-content: space-between;
  align-items: flex-start;
  min-height: 300px;
  /* border: 1px solid red; */

}


.form-content{
  width: 100%;
  min-width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
}


.form-progress-btn{
  padding: 8px;
  border-radius: 50px;
  height: 40px;
  width: 40px;
}
.form-progress-btn:hover{
  background: var(--app-hover);
}

.slider-form-buttons{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100px;
  margin: 0 auto;
  margin-bottom: 20px;
}
.progress{
  width: 50%;
  margin: 0 auto;
}
.progress-bar{
  background: var(--app-blue);
  border-radius: 30px;
}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.8s;
  margin-left: 0px;
  opacity: 0.8;
}
 .fade-enter-from,
.fade-leave-to {
  opacity: 0;
  margin-left: -100%;
} 

.radio-selection{
  border: 1px solid #d5d5d5;
  padding: 10px;
  /* height: 50px;
  width: 200px; */
  margin: 10px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: row;
  border-radius: 5px;
}

.radio-items{
  display: flex;
  flex-direction: column;
  font-size: 0.8em;
}
.radio-items > p{
  margin: 0;
  padding: 0;
  padding-left: 10px;
}
.radio-selection:hover{
  background: #4e78bc26;
  border: 1px solid var(--app-blue);
}
.radio-selection > p{
  padding-left: 10px;
}


    .page-container{
        background: #ffffff;
        height: 90vh;
        width: 100%;
        display: flex;
        justify-content: center;
        padding-top: 100px;
        align-items: flex-start;
        flex-direction: row;
    }


    .section{
        /* height: 250px; */
        width: 50%;
        max-width: 400px;
        padding: 10px;
    }
    

    .section-divider{
        height: 250px !important;
        width: 1px !important;
        background: var(--app-grey) !important;
    }

    .section-content{
        font-size: 1.5em;
        font-weight: bold;
    }
    .section-last{
        font-size: 12px;
    }

    .job-description{
        resize: none;
        height: 100px;
        font-size: 0.6em;
        width: 100%;
        
    }


    .filter-search{
        border-radius: 5px;
        color: #000;
        border: 1px solid var(--app-grey);
        height: 30px;
        margin: 6px 0px;
        outline: none;
        padding-left: 10px;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        width: 100%;
    }
    .ft-search{
        height: 100%;
        border: none;
        background: none;
        outline: none;
        padding: 5px;
        width: 100%;
        font-size: 0.9em;
    }




    @media only screen and (max-width: 600px) {
        .page-sub{
          width: 100%;
          padding: 15px;
          
        }
        .form-content{
            flex-direction: column;
            min-width: 300px !important;
            justify-content: center;
            align-items: center;
        }
        .section-divider{
            display: none;
        }
        .section{
            width: 90%;
            height: auto;
            padding: 5px;
        }
    }
</style>
