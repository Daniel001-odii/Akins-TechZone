<template>
    <div class="container">
        <div class="logo">
            <TzLogo/>
        </div>
        

        <h1>Customize your Experience</h1>
        <p>Please select 1 skill to help us Customize you workspace.</p>
        <div class="selections">
            <!-- <div class="check-container">
                <input type="checkbox" id="checkbox-1">
                <label for="checkbox-1">Web Development</label>
            </div> -->
            <label for="checkbox-1" class="check-container">
                <input type="checkbox" id="checkbox-1">
                    Web Development
            </label>

            <label for="checkbox-2" class="check-container">
                <input type="checkbox" id="checkbox-2">
                    Cloud Engineering
            </label>

            <label for="checkbox-3" class="check-container">
                <input type="checkbox" id="checkbox-3">
                    Product Designer
            </label>

            <label for="checkbox-4" class="check-container">
                <input type="checkbox" id="checkbox-4">
                    FullStack Developer
            </label>

            <label for="checkbox-5" class="check-container">
                <input type="checkbox" id="checkbox-5">
                    Web Development
            </label>

            <label for="checkbox-6" class="check-container">
                <input type="checkbox" id="checkbox-6">
                    Devops Engineering
            </label>

            <label for="checkbox-7" class="check-container">
                <input type="checkbox" id="checkbox-7">
                    Systems Engineering
            </label>

            <label for="checkbox-8" class="check-container">
                <input type="checkbox" id="checkbox-8">
                 Others
            </label>

            <div class="form-section">
                <RouterLink to="/jobs"><button class="form-btn">Continue <i class="bi bi-upload"></i></button></RouterLink>
            </div>
        </div>
        
    </div>
</template>
<script>
import TzLogo from '../components/tz-logo.vue';
export default {
    components: { TzLogo },
}

</script>
<style scoped>
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
        border-radius: 5px;
        padding: 20px;
        /* border: 1px solid var(--app-grey); */
        margin-top: 20px;
        font-size: 1em;
        border: 0.5px solid #8b878780;
        width: 220px;
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
        max-width: 1000px;
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