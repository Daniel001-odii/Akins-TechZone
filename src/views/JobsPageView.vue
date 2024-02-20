<template>
    <div>
        <TemplateView>
            <template #page-title>Work Explorer</template>
            <template #page-contents>
                <div>
                    <div class="flex flex-row gap-2 p-5 border-b">
                        <input type="search" class="px-4 py-2 bg-light_blue rounded-md" placeholder="Search all types of jobs">
                        <button class="bg-light_blue text-blue px-4 py-2 rounded-md hover:bg-blue hover:text-white">
                            <i class="bi bi-search"></i> <span>Search</span>
                        </button>

                        <button class="border text-black px-4 py-2 rounded-md ">
                            <i class="bi bi-funnel"></i> <span>Filters</span>
                        </button>
                    </div>
                    <div class="flex flex-row h-14 gap-4 pl-5 border-b items-end">
                        <button @click="showTab = 'tab-1'" :class="{ 'active_tab': showTab == 'tab-1' }" class="p-2 border-b-4 border-b-transparent">Available Jobs</button>
                        <button @click="showTab = 'tab-2'" :class="{ 'active_tab': showTab == 'tab-2' }" class="p-2 border-b-4 border-b-transparent">Assigned Jobs</button>
                        <button @click="showTab = 'tab-3'" :class="{ 'active_tab': showTab == 'tab-3' }" class="p-2 border-b-4 border-b-transparent">Completed Jobs</button>
                        <button @click="showTab = 'tab-4'" :class="{ 'active_tab': showTab == 'tab-4' }" class="p-2 border-b-4 border-b-transparent">Declined Jobs</button>
                    </div>

                    <div class="flex flex-col justify-start p-3">
                        <div v-if="showTab == 'tab-1'">
                            <div class="flex flex-row gap-3">
                                <div class=" w-3/4 h-full overflow-y-scroll items-start flex flex-col gap-3" style="height: 600px;">
                                    <MainJobCard></MainJobCard>
                                    <MainJobCard></MainJobCard>
                                    <MainJobCard></MainJobCard>
                                </div>
                                <div class=" w-10/12">
                                   <JobDetailCard/>
                                </div>
                            </div>
                        </div>
                        <!-- ---------------------- -->
                        <div v-if="showTab == 'tab-2'">
                            <div class="flex flex-row gap-3">
                                <div class=" w-3/4 h-full overflow-y-scroll items-start flex flex-col gap-3" style="height: 600px;">
                                    <MainJobCard></MainJobCard>
                                </div>
                                <div class=" w-10/12">
                                   <JobDetailCard/>
                                </div>
                            </div>
                        </div>
                        <!-- --------------------- -->
                        <div v-if="showTab == 'tab-3'"><div class="flex flex-row gap-3">
                                <div class=" w-3/4 h-full overflow-y-scroll items-start flex flex-col gap-3" style="height: 600px;">
                                    <MainJobCard></MainJobCard>
                                    <MainJobCard></MainJobCard>
                                </div>
                                <div class=" w-10/12">
                                   <JobDetailCard/>
                                </div>
                            </div>
                        </div>

                        <!-- ------------------- -->
                        <div v-if="showTab == 'tab-4'">
                            <div class="flex flex-row gap-3">
                                <div class=" w-3/4 h-full overflow-y-scroll items-start flex flex-col gap-3" style="height: 600px;">
                                    <MainJobCard></MainJobCard>
                                    <MainJobCard></MainJobCard>
                                    <MainJobCard></MainJobCard>
                                    <MainJobCard></MainJobCard>
                                </div>
                                <div class=" w-10/12">
                                   <JobDetailCard/>
                                </div>
                            </div>
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
import MainJobCard from '@/components/MainJobCard.vue';

export default {
    name: "JobsPageView",
    components: { TemplateView, MainJobCard, JobDetailCard },
    data(){
        return{
            showTab: "tab-1",
        }
        
    },
    methods:{
    }
}
</script>
<style scoped>
    .active_tab{
        @apply border-b-4 rounded-sm border-b-blue
    }
</style>