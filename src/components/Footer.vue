<template>
    <div>
        <!-- <div class="flex flex-col-reverse gap-10 md:flex-row justify-between bg-white max-w-screen-2xl" data-aos="fade-up" data-aos-delay="200"> -->
        <div class="flex flex-col md:flex-row justify-between p-8 max-w-screen-2xl" style="margin: 0 auto;">
            <div class="">
                <ul class="list">
                    <li class="list_header">About Tech-zone</li>
                    <li>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam dictum aliquet accumsan porta lectus ridiculus in mattis. Netus sodales in volutpat ullamcorper amet adipiscing fermentum.
                    </li>
                </ul>
                <div class="w-full flex items-start gap-8 mb-5">
                    <i class="bi bi-twitter"></i>
                    <i class="bi bi-facebook"></i>
                    <i class="bi bi-instagram"></i>
                    <i class="bi bi-github"></i>
                </div>
            </div>

            <div class="flex flex-row  flex-wrap gap-10">

                <ul class="list">
                    <li class="list_header">Job by type</li>
                    <li v-for="(job, index) in onsiteJobs" :key="index">{{ job }}</li>
                </ul>

                <ul class="list">
                    <li class="list_header">Job by location</li>
                    <li v-for="(state, index) in availableStates" :key="index">{{ `Jobs in ${state}` }}</li>
                </ul>

                <ul class="list">
                    <li class="list_header">Company</li>
                    <li>About Us</li>
                    <li>Our Vision</li>
                    <li>Team</li>
                </ul>
            </div>
        </div>

            
    </div>
</template>
<script>
export default {
    name: "Footer",
    data(){
        return{
            onsiteJobs: [
            "Web Developer",
            "UI/UX Designer",
            "Mobile App Developer",
            "Graphic Designer",
            "Digital Marketing Specialist",
            "Data Analyst",
            "Software Engineer (Full Stack)",
            "Content Writer",
            "Network Administrator",
            "Video Editor",
            "SEO Specialist",
            "Game Developer",
            ],

            availableStates: [
            "Lagos",
            "Abuja",
            "Rivers",
            "Kano",
            "Oyo",
            "Enugu",

            ],
        }
    }
}
</script>
<style scoped>
.section_title{
    @apply font-bold
}

.list{
    @apply text-left text-lg md:max-w-80
}
.list_header{
    @apply font-bold text-xl uppercase mb-3
}

li{
    @apply py-2
}
   
</style>