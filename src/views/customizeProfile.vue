<template>
    <div class="container">
        <div class="logo">
            <TzLogo/>
        </div>
        
        <h1 class="tz-title">Customize your Experience</h1>
        <p class="tz-subtitle">Please select 1 skill to help us Customize you workspace.</p>
        
        <div class="selections">

            <CheckBox label="Web Developer" dynamicId="1"/>
            <CheckBox label="Fullstack Developer" dynamicId="2"/>
            <CheckBox label="Devops Engineering" dynamicId="3"/>
            <CheckBox label="Cloud Engineering" dynamicId="4"/>

            <CheckBox label="Systems Engineering" dynamicId="5"/>
            <CheckBox label="Frontend Developer" dynamicId="6"/>
            <CheckBox label="Backend Developer" dynamicId="7"/>
            <CheckBox label="Cloud Engineering" dynamicId="8"/>

        </div>


            <div class="form-section">
                <RouterLink to="/jobs"><button class="form-btn">Sign Up <i class="bi bi-upload"></i></button></RouterLink>
            </div>
        </div>
        
   
</template>
<script>
import { vModelCheckbox } from 'vue';
import TzLogo from '../components/tz-logo.vue';
import CheckBox from '../components/CheckBox.vue'

export default {
    components: { TzLogo, CheckBox },
}

</script>
<style scoped>

    .title{
        font-weight: bolder;
    }
    .container{
        display: flex;
        justify-content: center;
        margin-top: 20px;
        flex-direction: column;
        align-items: center;
    }

    .logo{
        padding: 20px;
        margin-bottom: 50px;
    }
    
    .check-container{
        border-radius: 20px;
        padding: 20px;
        /* border: 1px solid var(--app-grey); */
        margin-top: 20px;
        font-size: 1em;
        border: 0.5px solid #8b878780;
        width: 250px;
        /* height: 70px; */
        display: flex;
        align-items: center;
        justify-content: flex-start;
    }
    .check-container:hover{
        background: #EAF1F4;
        /* box-shadow: 0px 5px 10px #dddddd; */
        /* color: #000; */
    }
    .selections{
        /* border: 1px solid red; */
        /* width: 400px; */
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        align-items: center;
        padding: 10px;
        max-width: 600px;
    }
    input[type="checkbox"]{
        padding-right: 10px !important;
    }

    .form-section{
        /* border: 2px solid red; */
        width: 100% !important;
        padding: 30px 0px;
        max-width: 400px;
        margin: 0 auto;
    }
    .form-btn{
        width: 100% !important;
        font-size: 1.3em
    }


  </style>
  