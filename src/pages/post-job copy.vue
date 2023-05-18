<template>
    <NavBarHome/>
   <div class="page-container">
    
  <div class="page-sub">
    <form @submit.prevent="submitForm">
      <div class="form-container">
      
                <div class="section-title">Write a name for your job posting</div>
                <div class="section-content">
                    <textarea class="job-description" placeholder="Enter your job description here..."></textarea>
                </div>


        
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
                
   
                <div class="section-content">
                    <textarea class="job-description" placeholder="Enter your job description here..."></textarea>
                </div>
                <!-- <input type="submit" value="Review Job" class="cust-btn" style="width: 100%; background: green"/> -->
                <button type="submit" class="cust-btn">Review Job</button>
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
// https://techzone.herokuapp.com/jobs
  export default {
    components: { NavBarHome, CheckBox, Search },
    data() {
    return {
      currentIndex: 0,
    }
  },
  methods: {
    async submitForm() {
      const url = "https://techzone.herokuapp.com/jobs";
      const formData = new FormData(event.target);
      const response = await fetch(url, {
        method: "POST",
        body: formData
      });

      // handle response from server here
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
