<template>
    <NavBarHome/>
   <div class="page-container">
    
  <div class="page-sub">
    <form>
      <div class="form-container">
      <Transition name="fade">
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
                    <textarea class="job-description" placeholder="Enter your job description here..."></textarea>
                </div>
            
                <div class="section-last">
                    Examples: Product Designer, Web Designer, Flutter Developer
                </div>
            </div>
      </div>
    </Transition>

    <Transition name="fade">
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
                <div class="section-title">Search Skill here or Manually add your own</div>
                <div class="section-content">
                    
                </div>
                <div class="filter-search">
                      <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 25 26" fill="none">
                          <path d="M11.1311 0.727295C17.1339 0.727295 22.0058 5.59917 22.0058 11.602C22.0058 17.6049 17.1339 22.4767 11.1311 22.4767C5.12822 22.4767 0.256348 17.6049 0.256348 11.602C0.256348 5.59917 5.12822 0.727295 11.1311 0.727295ZM11.1311 20.0601C15.8036 20.0601 19.5892 16.2745 19.5892 11.602C19.5892 6.9283 15.8036 3.1439 11.1311 3.1439C6.45736 3.1439 2.67295 6.9283 2.67295 11.602C2.67295 16.2745 6.45736 20.0601 11.1311 20.0601ZM21.3835 20.1459L24.8018 23.563L23.0921 25.2727L19.675 21.8545L21.3835 20.1459V20.1459Z" fill="#45494F"/>
                      </svg>
                      <input type="search" class="ft-search" placeholder="Search a types of jobs">
                </div>
                <div class="section-last">
                    Examples: Product Designer, Web Designer, Flutter Developer
                </div>
            </div>
      </div>
    </Transition>

    <Transition name="fade">
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
                        <input type="radio" name="project-type">
                        <div class="radio-items">
                          <p style="font-weight: bold;">Small</p>
                          <p>Usually quick and straighforward, Project has a life span of 1 to 3 Months</p>
                        </div>
                    </label>

                    <label class="radio-selection">
                        <input type="radio" name="project-type">
                        <div class="radio-items">
                          <p style="font-weight: bold;">Medium</p>
                          <p>Project has a life span of about 6 months</p>
                        </div>
                    </label>
                    
                    

                    <label class="radio-selection">
                        <input type="radio" name="project-type">
                        <div class="radio-items">
                          <p style="font-weight: bold;">Large</p>
                          <p>Project has a life span of greater than 6 months</p>
                        </div>
                    </label>
              </div>
            </div>
      </div>
    </Transition>

    <Transition name="fade">
      <div v-if="currentIndex === 3" class="form-content">
            <div class="section">
                <div class="section-title">Budget</div>
                <div class="section-content">
                    What is your budget for the Job?
                </div>
            
                <!-- <div class="section-last">
                    Giving a descriptive name helps attract the right talent and save you time.
                </div> -->
            </div>

            <div class="section-divider"></div>

            <div class="section">
                <div class="sub-section">
                  <label class="radio-selection">
                        <input type="radio" name="project-budget">
                        <div class="radio-items">
                          <p style="font-weight: bold;">Project Based</p>
                          <!-- <p>Project Based</p> -->
                        </div>
                    </label>

                    <label class="radio-selection">
                        <input type="radio" name="project-budget">
                        <div class="radio-items">
                          <p style="font-weight: bold;">Hourly rate</p>
                          <!-- <p>Hourly rate</p> -->
                        </div>
                    </label>

                    <label class="radio-selection">
                        <input type="number" name="project-budget" style="width:50%">
                        <div class="radio-items">
                          <p style="font-weight: bold;">(₦) Total Budget</p>
                          <!-- <p>Hourly rate</p> -->
                        </div>
                    </label>
                </div>
                <div class="section-last">
                  After Project is completed  and satisfied, payment will be released to Freelancer.
                </div>
            </div>
      </div>
    </Transition>

    <Transition name="fade">
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
                    <textarea class="job-description" placeholder="Enter your job description here..."></textarea>
                </div>
                <input type="submit" value="submit" class="cust-btn" style="width: 100%; background: green"/>
            </div>
      </div>
    </Transition>
  </div>
    </form>

<div>
    <div class="slider-form-buttons">
      <button @click="prev" :disabled="currentIndex === 0" v-if="currentIndex != 0" class="cust-btn"><i class="bi bi-arrow-left"></i> Previous </button>
      <button @click="next" :disabled="currentIndex === 4" v-if="currentIndex != 4" class="cust-btn">Next <i class="bi bi-arrow-right"></i></button>
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
  
  export default {
    components: { NavBarHome, CheckBox, Search },
    data() {
    return {
      currentIndex: 0,
    }
  },
  methods: {
    prev() {
      this.currentIndex--;
    },
    next() {
      this.currentIndex++;
    }
  }

  }
  </script>
  
  
<style scoped>
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

.slider-form-buttons{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
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

.fade-enter-active,
.fade-leave-active {
  transition: all 0.6s;
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
