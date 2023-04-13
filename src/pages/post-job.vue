<template>
    <NavBarHome/>
   <div class="page-container">
    <div class="page-content">
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
   </div>
</template>

<script>
import NavBarHome from '../components/NavBarHome.vue';

    export default {
    components: { NavBarHome }
}
</script>

<style scoped>
    .page-container{
        background: #ffffff;
        height: 100vh;
        width: 100%;
        display: flex;
        justify-content: center;
        padding-top: 100px;
        align-items: flex-start;
        flex-direction: row;
    }

    .page-content{
        width: 805px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: flex-start;
    }
    .section{
        height: 300px;
        width: 50%;
        max-width: 400px;
        /* background: #00bca0; */
        padding: 30px;
    }
    

    .section-divider{
        height: 200px !important;
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

    @media only screen and (max-width: 600px) {
        .page-content{
            flex-direction: column;
            width: 100%;
            /* border: 2px solid red; */
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