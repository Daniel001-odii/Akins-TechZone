<template>
        <div class="rounded-lg p-5 border border-white bg-white opacity-50 flex flex-col w-fit max-w-80 hover:opacity-100 hover:text-black">
            <div class="flex flex-row justify-between font-bold text-md">
                <div class="flex items-center justify-center">
                    <i class="bi bi-building-check"></i> | <span>{{company}}</span>
                </div>

                <div>{{job_time}}</div>
            </div>

            <div class="flex flex-col gap-3">
                <span class=" font-extrabold text-2xl">{{ job_title }}</span>
                <div class="flex flex-row justify-between"> 
                    <span>
                        <i class="bi bi-geo-alt-fill"></i> <span>{{job_location}}</span>
                    </span>
                    <span>
                        <i class="bi bi-clock"></i> <span>{{job_duration}}</span>
                    </span>
                </div>

                <div>
                    <!-- We are seeking a highly experienced and skilled Senior Software Developer to join our dynamic team.  -->
                    {{ job_description }}
                </div>
               
                <div class="mt-3 font-bold flex justify-between items-center">
                    <RouterLink :to="job_url">
                        <button class=" text-white bg-black hover:bg-blue px-5 py-3 rounded-md">Apply here</button>
                    </RouterLink>
                    <span class="text-2xl">#{{budget}}</span>
                </div>

            </div>
        </div>
</template>
<script>
import { RouterLink } from 'vue-router';

export default {
    name: "LpJobCard",
    props: {
        company: String,
        job_time: String,
        job_title: String,
        job_location: String,
        job_duration: String,
        job_description: String,
        job_url: String,
        budget: Number,
    },
    components: { RouterLink }
}
</script>
<style scoped>
    
</style>