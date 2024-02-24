<template>
    <div>
        <TemplateView :leftNav="true">
            <template #page-title>All Contracts</template>
            <template #page-contents>
                <div>
                    <div class="flex flex-row gap-2 p-5 border-b">
                        <input type="search" class="px-4 py-2 bg-light_blue rounded-md" placeholder="Search all types of jobs">
                        <button class="bg-light_blue text-blue px-4 py-2 rounded-md hover:bg-blue hover:text-white">
                            <i class="bi bi-search"></i> <span>Search</span>
                        </button>
                    </div>
                </div>
                <div class="flex flex-col overscroll-y-scroll" v-for="saved in 3">
                    <div class="flex flex-col text-left gap-3 border-b p-6 hover:bg-light_blue">
                        <div class="flex flex-row justify-between items-center">
                            <RouterLink to="#">
                                <div class="text-2xl font-bold text-blue underline">Developer needed to build a custom website/app</div>
                            </RouterLink>
                            <button class="border rounded-full h-14 w-14 hover:bg-gray-200 ">
                                <i class="bi bi-three-dots"></i>
                            </button>
                        </div>
                        <div>
                            <div class="text-xl font-bold">Hired by Techzone Nigeria</div>
                            <div>Tech-zone Nigeria</div>
                            <div>$500 Budget</div>
                        </div>
                        <div class="flex flex-row gap-3">
                            <ContractStatus :type="'active'"/>
                            <ContractStatus :type="'ended'"/>
                            <ContractStatus :type="'paused'"/>
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
import ContractStatus from '@/components/ContractStatus.vue';

export default {
    name: "ContractPageView",
    components: { TemplateView, ContractStatus },
}
</script>
<style scoped>
    
</style>