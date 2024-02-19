<template>
    <Navbar/>
    <div class="py-4 md:px-4 flex justify-center items-center flex-col">
        <section>
            <div class="section_container">
                <div class="flex flex-col text-center md:text-left justify-center items-center md:items-start gap-6">
                    <div class="text-sm bg-light_blue p-2 text-center text-blue rounded-md w-fit">
                        <i class="bi bi-hand-thumbs-up-fill"></i> <span>Best Job Solution Platform</span>
                    </div>
                    <div class=" text-7xl font-bold">
                        Find Your <span class="relative"> dream <StrikeLineSvg class="absolute top-12 right-3 li"/></span> Job.<br/> Hire the right talents.
                    </div>
                    <div class=" text-xl">
                        Tech-Zone establishes trusted networking between freelancers and businesses all across the nation. Qualified job seekers find the best in-demand jobs of their desired skills anywhere nationwide.
                    </div>
                    <GetStartedNow/>
                </div>
                <img src="../assets/images/Group 284.png" class="section_img w-96">
            </div>
            
        </section>

        <section style="background-image: linear-gradient(#1B2E40, #4e79bc );">
            <div class="flex flex-col">
                <div>
                <!-- <div data-aos="zoom-out"> -->
                    <span class="text-2xl text-white">How it works</span>
                    <h3 class="section_subtitle text-white">We a re here to help you,<br/> just follow these steps!</h3>
                </div>
                <div class="flex flex-col flex-wrap justify-center items-center md:flex-row mt-8">
                    <StepBox :number="1"></StepBox>
                    <StepBox :number="2">
                        <template #title>Complete User Profile</template>
                        <template #content></template>
                    </StepBox>
                    <StepBox :number="3">
                        <template #title>
                            Search Your Job Type
                        </template>
                    </StepBox>
                    <StepBox :number="4">
                        <template #title>
                            Search Your Job Type
                        </template>
                    </StepBox>
                </div>
            </div>
            
        </section>

        <section>
            <div class="section_container" data-aos="zoom-in">
                <img src="../assets/images/Group 285.png" alt="lady-image" class="section_img w-96">
                <div class="md:w-fit text-left gap-8 flex flex-col">
                    <h1 class="section_subtitle">Unlock your next career move! <br/> Upload your CV to stand out to recruiters and impact your job search.</h1>
                    <button class="btn">Upload CV Now</button>
                </div>
            </div>
        </section>

        <section>
            <div class="flex flex-col">
                <!-- <div data-aos="zoom-out"> -->
                <div>
                    <span class="font-bold uppercase text-xl ">Jobs By Category</span>
                    <h1 class="font-bol text-5xl font-bold">Explore Our Divers Job Categories</h1>
                </div>
               
                <div class="flex flex-row gap-8 justify-center flex-wrap mt-10">
                    <JobCat :jobs_avaialble="900" data-aos="fade-up" data-aos-delay="200"></JobCat>
                    <JobCat :jobs_avaialble="400" data-aos="fade-up" data-aos-delay="300">
                        <template #icon></template>
                        <template #title></template>
                    </JobCat>
                    <JobCat :jobs_avaialble="400" data-aos="fade-up" data-aos-delay="400">
                        <template #icon></template>
                        <template #title></template>
                    </JobCat>
                    <JobCat :jobs_avaialble="90" data-aos="fade-up" data-aos-delay="500">
                        <template #icon></template>
                        <template #title></template>
                    </JobCat>
                    <!-- <br/> -->
                    <JobCat :jobs_avaialble="900" data-aos="fade-up" data-aos-delay="600"></JobCat>
                    <JobCat :jobs_avaialble="400" data-aos="fade-up" data-aos-delay="700">
                        <template #icon></template>
                        <template #title></template>
                    </JobCat>
                    <JobCat :jobs_avaialble="400" data-aos="fade-up" data-aos-delay="800">
                        <template #icon></template>
                        <template #title></template>
                    </JobCat>
                    <JobCat :jobs_avaialble="90" data-aos="fade-up" data-aos-delay="900">
                        <template #icon></template>
                        <template #title></template>
                    </JobCat>
                </div>
            </div>
        </section>

        <section style="background-image: linear-gradient(#1B2E40, #4e79bc );">
                <div class="text-left flex flex-col gap-5">
                    <div class="flex flex-col justify-around">
                        <span class="text-2xl text-white">FEATURED JOBS</span>
                        <div class="flex flex-col gap-4 md:flex-row items-start justify-between">
                            <h2 class="section_subtitle text-white">Get access to high in-demand jobs in realtime</h2>
                            <button class="btn bg-white text-blue hover:text-white flex flex-row gap-1">
                                Browse All jobs <i class="bi bi-arrow-right"></i> 
                            </button>
                        </div>
                    </div>

                    <div class="flex flex-col flex-wrap justify-center items-center md:flex-row">
                        <StepBox></StepBox>
                        <StepBox></StepBox>
                        <StepBox></StepBox>
                        <StepBox></StepBox>
                    </div>

                    <div class="flex flex-row justify-center gap-3 p-5">
                        <button class="slide_btn">
                            <i class="bi bi-arrow-left"></i>
                        </button>
                        <button class="slide_btn sb_active">
                            <i class="bi bi-arrow-right"></i>
                        </button>
                    </div>
                </div>
        </section>

        <section>
            <div class="section_container">
                <div class="md:w-fit text-left gap-8 flex flex-col" data-aos="fade-in">
                    <h2 class="section_subtitle">Take the next step in your professional career.<br/>Sign-in to unlock limitless opportunities.</h2>
                    <GetStartedNow/>
                </div>
                <img src="../assets/images/Group 281.png" alt="lady image" class="section_img w-96">
            </div>
        </section>
    </div>
     <!-- <div class="flex border border-red-700 justify-center"> -->
    <Footer/>
    <!-- </div> -->
</template>
<script>
import GetStartedNow from '@/components/GetStartedNow.vue';
import JobCat from '@/components/JobCat.vue';
import Navbar from '@/components/Navbar.vue';
import StatsBox from '@/components/StatsBox.vue';
import StepBox from '@/components/StepBox.vue';
import StrikeLineSvg from '@/components/StrikeLineSvg.vue'
import Footer from '@/components/Footer.vue'

// animate onscroll library
import AOS from 'aos'
import 'aos/dist/aos.css'


export default {
    name: "LandingPage",
    components: { Navbar, StatsBox, StepBox, JobCat, StrikeLineSvg, GetStartedNow, Footer },
    mounted() {
    AOS.init()
  },
}
</script>
<style scoped>
    @font-face {
    font-family: homeFont;
    src: url('../assets/fonts/Inconsolata-VariableFont_wdth\,wght.ttf');
    }

    *{
        font-family: homeFont;
    }
    .text-sm{
        font-size: 12px !important;
    }
    .btn{
        @apply bg-blue hover:bg-dark_blue text-white py-3 px-5 rounded-md font-bold w-52 border border-transparent
    }
    .slide_btn{
        @apply border border-yellow-400 p-3 rounded-md text-yellow-400 font-bold text-xl hover:bg-yellow-400 hover:text-black;
    }

    .sb_active{
        @apply bg-yellow-400 text-black
    }

    .section_container{
        @apply flex flex-col-reverse md:flex-row justify-center items-center gap-10 w-full
    }

    .section_img{
        /* @apply h-96 */
    }

    .section_subtitle{
        @apply text-5xl font-bold
    }

    section{
        @apply max-w-screen-2xl flex justify-center items-center mx-0 my-auto p-8
    }
</style>