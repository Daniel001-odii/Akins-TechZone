<template>
    <div>
        <TemplateView :leftNav="true">
            <template #page-title>Application</template>
            <template #page-contents>
                <div class="flex flex-col md:flex-row p-5" >
                    <div class=" md:w-2/4">
                        <!-- <div class=" h-52" 
                        style="background-image: url('../assets/images/Group\ 281.png');
                        background-position: center;
                        background-size: cover;">
                        ...
                        </div> -->
                        <div>
                            <div class="flex flex-col border h-full p-3 text-left gap-3 rounded-md">
                                <div class="flex flex-col gap-3">
                                    <div class="flex flex-row justify-between items-center">
                                        <span class="font-bold text-2xl">
                                            <slot name="job-title">
                                                senior software developer (java)
                                            </slot>
                                        </span>
                                    
                                    </div>
                                    <div>
                                        Microsoft Inc.
                                        <span>Rating here...</span>
                                    </div>
                                    <div class="flex flex-row gap-3 flex-wrap">

                                        <div>
                                            <i class="bi bi-geo-alt"></i> <span>Lekki Phase 1, Lagos state</span>
                                        </div>
                                        <div>
                                            <i class="bi bi-arrow-clockwise"></i> <span>Posted 1 hour ago</span>
                                        </div>
                                        <div>
                                            <i class="bi bi-wallet"></i> <span>N100,000</span>
                                        </div>
                                        <div>
                                            <i class="bi bi-briefcase"></i> <span>3-5 days</span>
                                        </div>
                                        
                                    </div>
                                    
                                </div>
                                <div class="font-bold">
                                    Job Description
                                </div>
                                <div>
                                    <slot name="job-description">
                                        We are seeking a highly experienced and skilled Senior Software Developer to join our dynamic team. The successful candidate will have a proven track... 
                                        We are seeking a highly experienced and skilled Senior Software Developer to join our dynamic team. The successful candidate will have a proven track... 
                                        We are seeking a highly experienced and skilled Senior Software Developer to join our dynamic team. The successful candidate will have a proven track... 
                                        We are seeking a highly experienced and skilled Senior Software Developer to join our dynamic team. The successful candidate will have a proven track... 
                                        We are seeking a highly experienced and skilled Senior Software Developer to join our dynamic team. The successful candidate will have a proven track... 
                                        We are seeking a highly experienced and skilled Senior Software Developer to join our dynamic team. The successful candidate will have a proven track... 
                                    </slot>
                                </div>

                                <div>
                                    <span class="font-bold">Skills Required</span>
                                    <div class="flex flex-row flex-wrap gap-3">
                                        <span v-for="tag in 4" class="bg-light_blue text-blue px-3 py-2 rounded-md">CSS</span>
                                    </div>
                                </div>

                                <div>
                                    <span class="font-bold">Project Type</span>
                                    <div>Medium [a period of 30 months]</div>
                                </div>

                                <div>
                                    <span class="font-bold">Payment Type</span>
                                    <div>Fixed price</div>
                                </div>

                                <div>
                                    <span class="font-bold">About Recruiters</span>
                                    <div>Medium [a period of 30 months]</div>
                                </div>

                                <div>
                                    <span class="font-bold">Job Location in Map</span>
                                    <div class=" h-80 w-80 bg-light_blue"></div>
                                </div>

                                <div>
                                    <span class="font-bold">Activity On This Job</span>
                                    <div>Number of application:</div>
                                    <div>Users Assigned:</div>
                                    <div>Hires:</div>
                                </div>

                                <div>
                                    <span class="font-bold">Share this job</span>
                                    <div class="bg-light_blue p-3 border rounded-md w-fit cursor-not-allowed">{{ this.$route.path }}</div>
                                    <button>copy link</button>
                                </div>

                                

                            </div>
                        </div>
                    </div>
                    <div class=" md:w-2/4 md:p-5 mt-6 md:m-0 flex flex-col gap-5">
                         <div class="flex flex-col text-left gap-3">
                            <span class="font-bold text-2xl">Cover Letter</span>
                            <textarea class=" h-52 max-h-96 p-4 border rounded-md">...</textarea>
                         </div>

                         <div class="flex flex-col text-left gap-3">
                            <span class="font-bold text-2xl">Attachments</span>
                            <div class=" h-52 border border-dotted rounded-md flex flex-col justify-center items-center">
                                <div class="flex flex-col justify-center items-center">
                                    <i class="bi bi-cloud-arrow-up-fill text-4xl text-black"></i>
                                    <span>Drag & Drop files here</span>
                                    <button class="bg-black w-72 rounded-md px-12 py-2 text-white">
                                      <i class="bi bi-file-earmark-arrow-up-fill"></i> Upload
                                    </button>
                                </div>
                            </div>
                         </div>

                         <div class="flex flex-col text-left gap-3">
                            <span class="font-bold text-2xl">Counter Offer</span>
                            <div class="flex flex-col justify-center gap-5">
                               <div class="flex flex-col">
                                    <span class="text-xl">Requesting Fee</span>
                                    <input type="text" placeholder="100,000.00" class="border rounded-md p-5">
                                    <span class="font-sm text-gray-500">Input the amount you want to get paid for the job</span>
                               </div>

                               <div class="flex flex-col">
                                    <span class="text-xl">Reason</span>
                                    <input type="text" placeholder="100,000.00" class="border rounded-md p-5">
                                    <span class="font-sm text-gray-500">Input the amount you want to get paid for the job</span>
                               </div>
                            </div>
                         </div>
                         <div class="flex ">
                            <button class="bg-blue py-3 px-6 text-white rounded-md hover:bg-dark_blue">Submit Application</button>
                         </div>
                         
                    </div>

                   
                </div>
            </template>
        </TemplateView>
    </div>
</template>
<script>
import JobDetailCard from '@/components/JobDetailCard.vue';
import TemplateView from './TemplateView.vue';

export default {
    name: "ApplicationPageView",
    components: { TemplateView, JobDetailCard },
}
</script>
<style scoped>
    
</style>