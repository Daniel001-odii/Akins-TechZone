<template>
  <Modal v-if="showModal"/>
  <Navbar>
    <template #action-1><RouterLink to="/client/post-job">Post Job</RouterLink></template>
    <template #action-2><RouterLink to="/client/post-job"></RouterLink></template>
  </Navbar>
 <div class="page-container">
<div class="page-sub">
  <form @submit.prevent="submitForm">
    <div class="form-container">
    <Transition name="formSlide">
    <div v-if="currentIndex === 0" class="form-content">
          <div class="section">
              <div class="section-title">Job Title</div>
              <div class="section-content">
                  Give Your Job a very descriptive Name
              </div>
              <div class="section-last">
                  Giving a descriptive name helps attract the right talent and save you time.
              </div>
          </div>
          <div class="section-divider"></div>
          <div class="section">
              <div class="section-title">Write a name for your job posting</div>
              <div class="section-content">
                  <textarea class="job-description" placeholder="Enter a descriptive name for your job post here..." v-model="formData.job_tag" required></textarea>
              </div>
              <div class="section-last">
                  Examples: Product Designer, Web Designer, Flutter Developer
              </div>
          </div>
    </div>
  </Transition>

  <Transition name="formSlide">
    <div v-if="currentIndex === 1" class="form-content">
          <div class="section">
              <div class="section-title">Skills</div>
              <div class="section-content">
                  Give a list of skills required for your job.
              </div>
              <div class="section-last">
                Skills, qualifications, necessary tools required should be listed here,  For more reach and better result, input 3 or more skills..
              </div>
          </div>
          <div class="section-divider"></div>
          <div class="section">
              <div class="section-sub">
            <div>
                <div class="section-title">Search Skill here or Manually add your own</div>
                <div class="sch">
                  <div class="filter-search">
                      <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 25 26" fill="none">
                          <path d="M11.1311 0.727295C17.1339 0.727295 22.0058 5.59917 22.0058 11.602C22.0058 17.6049 17.1339 22.4767 11.1311 22.4767C5.12822 22.4767 0.256348 17.6049 0.256348 11.602C0.256348 5.59917 5.12822 0.727295 11.1311 0.727295ZM11.1311 20.0601C15.8036 20.0601 19.5892 16.2745 19.5892 11.602C19.5892 6.9283 15.8036 3.1439 11.1311 3.1439C6.45736 3.1439 2.67295 6.9283 2.67295 11.602C2.67295 16.2745 6.45736 20.0601 11.1311 20.0601ZM21.3835 20.1459L24.8018 23.563L23.0921 25.2727L19.675 21.8545L21.3835 20.1459V20.1459Z" fill="#45494F"/>
                      </svg>
                        <input type="search" class="ft-search" placeholder="Search a types of jobs"  v-model="inputValue" @keyup.enter="addTag" @input="generateSuggestions">
                  </div>
                  <div class="suggestions">
                      <span class="suggest" v-for="(suggestion, index) in suggestions" :key="index" @click="selectSuggestion(suggestion)">
                            {{ suggestion }}
                      </span>
                  </div>
                </div>
                <div class="section-title">Selected skills:</div>
                <div class="tags-container">
                    <div v-for="(tag, index) in tags" :key="index" class="tag">
                      {{ tag }}<span class="close" @click="removeTag(index)">&times;</span>
                    </div>
                </div>
                <!-----------sample skills tags-------------->
                <div class="section-title">Example skills:</div>
                <div class="tags-container">
                    <div class="tag">HTML<span>&plus;</span></div>
                    <div class="tag">CSS<span>&plus;</span></div>
                    <div class="tag">Python<span>&plus;</span></div>
                    <div class="tag">Javascript<span>&plus;</span></div>
                    <div class="tag">C++<span>&plus;</span></div>
                </div>
            </div>
              <div>
                <input style="display:none" type="text" id="skillSet" v-model="skill_set" disabled="true" required>
              </div>
            
          </div>



          </div>
    </div>
  </Transition>

  <Transition name="formSlide">
    <div v-if="currentIndex === 2" class="form-content">
          <div class="section">
              <div class="section-title">Duration/Skill Level</div>
              <div class="section-content">
                Estimate the period the work will last for.
              </div>
          </div>
          <div class="section-divider"></div>
          <div class="section">
            <div class="sub-section">
            <label class="radio-selection">
              <input type="radio" name="project-type" v-model="formData.work_period" value="Small: Usually quick and straightforward, Project has a life span of 1 to 3 Months">
              <div class="radio-items">
                <p style="font-weight: bold;">Small</p>
                <p>Usually quick and straightforward, Project has a life span of 1 to 3 Months</p>
              </div>
            </label>
            <label class="radio-selection">
              <input type="radio" name="project-type" v-model="formData.work_period" value="Medium: Project has a life span of about 6 months">
              <div class="radio-items">
                <p style="font-weight: bold;">Medium</p>
                <p>Project has a life span of about 6 months</p>
              </div>
            </label>
            <label class="radio-selection">
              <input type="radio" name="project-type" v-model="formData.work_period" value="Large: Project has a life span of greater than 6 months">
              <div class="radio-items">
                <p style="font-weight: bold;">Large</p>
                <p>Project has a life span of greater than 6 months</p>
              </div>
            </label>
          </div>
          </div>
    </div>
  </Transition>

  <Transition name="formSlide">
    <div v-if="currentIndex === 3" class="form-content">
          <div class="section">
              <div class="section-title">Budget</div>
              <div class="section-content">
                  What is your budget for the Job?
              </div>
              <div class="section-last">
                  Giving a descriptive name helps attract the right talent and save you time.
              </div>
          </div>

          <div class="section-divider"></div>

          <div class="section">
              <div class="sub-section">

                <div class="row-budgets">
                  <label class="budget-select">
                      <input type="radio" name="project-budget" v-model="formData.budget_des" value="Fixed price">
                      <div class="radio-items">
                        <p style="font-weight: bold;">
                          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 30 30" fill="none">
                          <path d="M8.4125 24.625C9.4375 23.525 11 23.6125 11.9 24.8125L13.1625 26.5C14.175 27.8375 15.8125 27.8375 16.825 26.5L18.0875 24.8125C18.9875 23.6125 20.55 23.525 21.575 24.625C23.8 27 25.6125 26.2125 25.6125 22.8875V8.8C25.625 3.7625 24.45 2.5 19.725 2.5H10.275C5.55 2.5 4.375 3.7625 4.375 8.8V22.875C4.375 26.2125 6.2 26.9875 8.4125 24.625Z" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                          <path d="M10 8.75H20" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                          <path d="M11.25 13.75H18.75" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                          </svg>
                          Fixed Price</p>
                        <!-- <p>Project Based</p> -->
                      </div>
                  </label>

                  <label class="budget-select">
                      <input type="radio" name="project-budget"  v-model="formData.budget_des" value="Hourly">
                      <div class="radio-items">
                        <p style="font-weight: bold;">
                          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 30 30" fill="none">
                          <path d="M27.5 15C27.5 21.9 21.9 27.5 15 27.5C8.1 27.5 2.5 21.9 2.5 15C2.5 8.1 8.1 2.5 15 2.5C21.9 2.5 27.5 8.1 27.5 15Z" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                          <path d="M19.6371 18.975L15.7621 16.6625C15.0871 16.2625 14.5371 15.3 14.5371 14.5125V9.3875" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                          </svg>
                          Hourly rate</p>
                        <!-- <p>Hourly rate</p> -->
                      </div>
                  </label>
                  <label class="budget-select">
                    <p style="font-weight: bold;">Project Budget (₦)</p>
                      <input type="number" name="project-budget" style="width:50%" v-model="formData.budget" required>
                  </label>
                </div>

                  <!-- <label class="radio-selection">
                      <input type="number" name="project-budget" style="width:50%" v-model="formData.budget" required>
                      <div class="radio-items">
                        <p style="font-weight: bold;">(₦) Total Budget</p>
                      </div>
                  </label> -->
              </div>
              <div class="section-last">
                After Project is completed  and satisfied, payment will be released to Freelancer.
              </div>
          </div>
    </div>
  </Transition>

  <Transition name="formSlide">
    <div v-if="currentIndex === 4" class="form-content">
          <div class="section">
              <div class="section-title">Job Description</div>
              <div class="section-content">
                Final Step, Write a clear description of the job, including deliverables, skills, experience and other necessary details.
              </div>
          </div>

          <div class="section-divider"></div>

          <div class="section">
              <div class="section-title">Describe your job.</div>
              <div class="section-content">
                  <textarea class="job-description" placeholder="Enter your job description here..." v-model="formData.job_des" required></textarea>
              </div>
              <!-- <input type="submit" value="Review Job" class="cust-btn" style="width: 100%; background: green"/> -->

              <!-------forms submit button-------------->
                    <button class="form-btn" type="submit" :disabled="isLoading"  :class="{ 'disabled-button': isLoading }">
                        <span v-if="isLoading" class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                        <span v-if="isLoading === true">processing...</span>
                        <span v-else>Post Job</span>
                    </button>
          </div>
    </div>
  </Transition>
</div>
  </form>

<div>
  <div class="slider-form-buttons">
    <button  class="cust-btn control" @click="prev" :disabled="currentIndex === 0" v-if="currentIndex != 0">Previous</button>
                <!-- <div class="form-progress-btn" @click="prev" :disabled="currentIndex === 0" v-if="currentIndex != 0">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 48 47" fill="none">
                          <path d="M11.484 20.334L27.576 4.24197L23.334 -3.05176e-05L0 23.334L23.334 46.668L27.576 42.426L11.484 26.334H48V20.334H11.484Z" fill="#4E79BC"/>
                      </svg>
                </div>

                <div class="form-progress-btn"  @click="next" :disabled="currentIndex === 4" v-if="currentIndex != 4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 48 47" fill="none">
                  <path d="M36.516 20.334L20.424 4.242L24.666 0L48 23.334L24.666 46.668L20.424 42.426L36.516 26.334H0V20.334H36.516Z" fill="#4E79BC"/>
                  </svg>
                </div> -->
    <!--  -->
    <button class="cust-btn control" @click="next" :disabled="currentIndex === 4" v-if="currentIndex != 4">Next</button>
  </div>

  <div class="progress">
    <div class="progress-bar" role="progressbar" :style="{ width: (currentIndex + 1) * 20 + '%' }" :aria-valuenow="(currentIndex + 1) * 25" aria-valuemin="0" aria-valuemax="100"></div>
  </div>
</div>
</div>
 </div>
</template>



<script scoped>

import NavBarHome from '../components/NavBarHome.vue';
import CheckBox from '../components/CheckBox.vue'
import Search from '../components/Search.vue';
import Modal from '../components/modal.vue'
import axios from 'axios';
import Navbar from '../components/NavBar.vue' 

export default {
  components: { Navbar, CheckBox, Search, Modal },
  data() {
  return {
    inputValue: '',
    suggestions: [],
    selectedSuggestions: [],

    currentIndex: 0,
    formData: {
        job_tag: '',
        skill_set: '',
        work_period: '',
        budget_des: '',
        budget: '',
        job_des: '',
      },
      tags:[],
      skill_set:[],
      isLoading: false,
      showModal: false,
  }
},
methods: {
  generateSuggestions() {
      // Clear previous suggestions
      this.suggestions = [];

      // Get input value and convert to lowercase for case-insensitive comparison
      const input = this.inputValue.toLowerCase();

      const wordSuggestions = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Vue",
  "Angular",
  "Node.js",
  "Express",
  "MongoDB",
  "SQL",
  "REST",
  "API",
  "Frontend",
  "Backend",
  "Responsive",
  "UI",
  "UX",
  "Bootstrap",
  "SASS",
  "Webpack",
  "Git",
  "GitHub"];

      // Generate suggestions based on the input
      if (input.length > 0) {
        const filteredSuggestions = wordSuggestions.filter(word => word.includes(input) && !this.selectedSuggestions.includes(word));
        this.suggestions = filteredSuggestions;
      }
    },
    selectSuggestion(suggestion) {
      // Update the search box value with the selected suggestion
      this.inputValue = suggestion;
      // Add the selected suggestion to the list of selected suggestions
      this.selectedSuggestions.push(suggestion);
      // Remove the selected suggestion from the suggestions list
      const suggestionIndex = this.suggestions.indexOf(suggestion);
      if (suggestionIndex !== -1) {
        this.suggestions.splice(suggestionIndex, 1);
      }
    },
  prev() {
    this.currentIndex--;
  },
  next() {
    this.currentIndex++;
  },
  async submitForm(){
    this.isLoading = true;
    //clean the form description data content
    this.formData.job_des.replace(/[\n-]/g, '');
    console.log(this.formData);
    try{
      const response = await axios.post("https://techzoneapp.herokuapp.com/api/jobs", this.formData);
      if(response.status === 200){
        console.log("job posted successfully!");
        this.isLoading = false;
        this.showModal = true;
        // this.$router.push('/client/successful');
      }
      else{console.error("error submitting form!!!")} 
    }catch (error){
      this.isLoading = false;
      console.error("network error: ", error);}
  },



  /////////controls adding of tags////////////////
  addTag(){
      if (this.inputValue.trim() !== '') {
        this.tags.push(this.inputValue.trim());
        this.skill_set.push(" " + this.inputValue.trim());
        this.formData.skill_set = this.skill_set.toString();
        // this.formData.skill_set.push(this.inputValue.trim()).toString();
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
  },
}

// }
</script>


<style scoped>
.row-budgets{
  display: flex;
  flex-wrap: wrap;
}
.suggestions{
  z-index: 999;
  top: 50;
  background: #fff;
  position: relative;
  box-shadow: 0px 5px 5px #e6e6e6;
  display: flex;
  flex-direction: column;
  max-height: 100px;
  overflow-y: scroll;
}
.suggest{
  padding: 5px;
  font-size: 0.8rem;
  cursor: pointer;
}
.suggest:hover{
  background: var(--app-hover);
}
.budget-select{
  display: flex;
  flex-direction: column;
  max-width: 150px;
  border: 1px solid #d5d5d5;
  padding: 10px;
  margin: 10px;
  display: flex;
  justify-content: center !important;
  align-items: flex-end;
  border-radius: 5px;
}

.sch{
display: flex;
flex-direction: column;
margin-bottom: 10px;
/* background: red; */
}
.tag {
  display: inline-block;
  padding: 4px 8px;
  margin-right: 8px;
  margin-bottom: 6px;
  background-color: var(--app-blue);
  border-radius: 4px;
  font-size: 14px;
  color: #fff;
  cursor: pointer;
}

.tag:hover {
  background-color: #0c51a0;
}

.tag span {
  margin-left: 8px;
}
.tags-container{
  min-height: 50px;
  overflow-y: scroll;
  margin-bottom: 10px;
  max-height: 100px;
  /* border: 2px solid red; */
}


.section-sub{
  /* border: 2px solid red; */
  gap: 50px;
  display: flex;
  flex-direction: column;
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
flex-direction: row;
width: 100%;
overflow-x: scroll;
justify-content: space-between;
align-items: flex-start;
min-height: 300px;
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
width: 100%;
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

.formSlide-enter-active, .formSlide-leave-active {
transition: all 0.8s;
margin-left: 0px;
opacity: 0.8;
}
.formSlide-enter-from,
.formSlide-leave-to {
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
textarea{
  padding: 10px;
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
