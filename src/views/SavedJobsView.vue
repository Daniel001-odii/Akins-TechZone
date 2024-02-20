<template>
    <div>
        <TemplateView>
            <template #page-title>Saved Jobs</template>
            <template #page-contents>
                <div class="flex flex-col overscroll-y-scroll" v-for="saved in 3">
                    <div class="flex flex-col text-left gap-3 border-b p-6 hover:bg-light_blue">
                        <div>posted 2 days ago</div>
                        <div class="flex flex-row justify-between items-center">
                            <div class="text-2xl font-bold">Developer needed to build a custom website/app</div>
                            <div class="text-lg gap-4 flex flex-row-reverse">
                                <button class="icon_btn">
                                    <i class="bi bi-bookmark-check-fill"></i>
                                </button>
                                <button class="icon_btn">
                                    <i class="bi bi-hand-thumbs-down"></i>
                                </button>
                            </div>
                        </div>
                        <div class="flex flex-row gap-2">
                            <span class=" bg-light_blue p-2 rounded-md">
                                <i class="bi bi-wallet"></i> <span>#100,000</span>
                            </span>
                            <span class=" bg-blue p-2 rounded-md text-white">
                                <i class="bi bi-briefcase"></i> <span>3-5 days</span>
                            </span>
                        </div>
                        <div>
                            We are seeking a highly experienced and skilled Senior Software Developer to join our dynamic team. The successful candidate will have a proven track... We are seeking a highly experienced and skilled Senior Software Developer to join our dynamic team. The successful candidate will have a proven track... 
                        </div>
                    </div>
                </div>
            </template>
        </TemplateView>
    </div>
</template>
<script>
import TemplateView from './TemplateView.vue';

export default {
    name: "SavedJobsView",
    components: { TemplateView }
}
</script>
<style scoped>
    
</style>