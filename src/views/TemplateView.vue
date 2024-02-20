<template>
    <div class=" h-screen">
        <nav class="p-2 border">
            <div class="flex flex-row w-full justify-between items-center">
                <SiteLogo/>
                <div class="border rounded-md">
                    <input type="search" placeholder="saerch for jobs" class="p-3">
                </div>
                <div class="flex flex-row items-center gap-1">
                    <div class="border border-2 rounded-full h-10 w-10 flex justify-center items-center">
                        <i class="bi bi-bell"></i>
                    </div>
                    
                    <i class="bi bi-three-dots-vertical"></i>
                    <div class="flex flex-row items-center gap-3">
                        <div class=" h-10 w-10 bg-blue rounded-full"></div>
                        <div class="flex flex-col text-left">
                            <span>Odii Daniel</span>
                            <span class="text-blue">odiidaniel@gmail.com</span>
                        </div>
                    </div>
                </div>
            </div>
            
        </nav>
        <div class=" h-full flex flex-row">
            <div class=" w-28 lg:w-56 border-r h-full">
                <div class=" h-20">

                </div>
                <RouterLink to="/jobs" >
                    <div class="nav_item" :class="{ 'active': isWorkExplorer }">
                        <i class="bi bi-briefcase" v-if="!isWorkExplorer"></i> 
                        <i class="bi bi-briefcase-fill" v-if="isWorkExplorer"></i>
                        <span class="hidden lg:inline-block">Work Explorer</span>
                    </div>
                </RouterLink>
                <RouterLink to="/saved-jobs" >
                    <div class="nav_item" :class="{ 'active': isSavedJobs }">
                        <i class="bi bi-bookmark-check" v-if="!isSavedJobs"></i> 
                        <i class="bi bi-bookmark-check-fill" v-if="isSavedJobs"></i> 
                        <span class="hidden lg:inline-block">Saved Jobs</span>
                    </div>
                </RouterLink>
                <RouterLink to="/messages" >
                    <div class="nav_item" :class="{ 'active': isMessages }">
                        <i class="bi bi-chat-square-text" v-if="!isMessages"></i> 
                        <i class="bi bi-chat-square-text-fill" v-if="isMessages"></i> 
                        <span class="hidden lg:inline-block">Messages</span>
                    </div>
                </RouterLink>

            </div>
            <div class=" w-full flex flex-col">
                <div class="text-left p-5 text-3xl border-b flex items-center pl-3">
                    <span class="flex gap-5">
                        <button>
                            <i class="bi bi-arrow-left"></i>
                        </button>
                       
                        <slot name="page-title">Work Explorer</slot>
                    </span>
                </div>

                <div class="flex flex-col">
                    <slot name="page-contents">
                         Page contents here...
                    </slot>
                   
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import SiteLogo from '@/components/SiteLogo.vue';

export default {
    name: "TemplateView",
    components: { SiteLogo },
    computed: {
        isWorkExplorer() { return this.$route.path.startsWith("/jobs"); },
        isSavedJobs() { return this.$route.path.startsWith("/saved-jobs"); },
        isMessages() { return this.$route.path.startsWith("/messages"); },
    },
}
</script>
<style scoped>
    .active{
        @apply border-l-blue text-blue bg-light_blue font-bold
    }

    .nav_item{
        @apply  h-20 hover:bg-light_blue flex justify-center lg:justify-start items-center gap-3 border-l-8 lg:pl-8;
    }
</style>