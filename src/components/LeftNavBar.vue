<template>
    <div>
        <div class=" md:block md:w-28 lg:w-56 border-r border-b md:border-b-0 h-full">
            <div class=" md:h-20">

            </div>
            <RouterLink to="/jobs" >
                <div class="nav_item" :class="{ 'active': isWorkExplorer }">
                    <i class="bi bi-briefcase" v-if="!isWorkExplorer"></i> 
                    <i class="bi bi-briefcase-fill" v-if="isWorkExplorer"></i>
                    <span class="md:hidden lg:inline-block">Work Explorer</span>
                </div>
            </RouterLink>
            <RouterLink to="/saved-jobs" >
                <div class="nav_item" :class="{ 'active': isSavedJobs }">
                    <i class="bi bi-bookmark-check" v-if="!isSavedJobs"></i> 
                    <i class="bi bi-bookmark-check-fill" v-if="isSavedJobs"></i> 
                    <span class="md:hidden lg:inline-block">Saved Jobs</span>
                </div>
            </RouterLink>
            <RouterLink to="/contracts" >
                <div class="nav_item" :class="{ 'active': isContracts }">
                    <i class="bi bi-gift" v-if="!isContracts"></i> 
                    <i class="bi bi-gift-fill" v-if="isContracts"></i> 
                    <span class="md:hidden lg:inline-block">Contracts</span>
                </div>
            </RouterLink>
            <RouterLink to="/messages" >
                <div class="nav_item" :class="{ 'active': isMessages }">
                    <i class="bi bi-chat-square-text" v-if="!isMessages"></i> 
                    <i class="bi bi-chat-square-text-fill" v-if="isMessages"></i> 
                    <span class="md:hidden lg:inline-block">Messages</span>
                </div>
            </RouterLink>

        </div>
    </div>
</template>
<script>
export default {
    name: "LeftnavBar",
    
    computed: {
        isWorkExplorer() { return this.$route.path.startsWith("/jobs"); },
        isSavedJobs() { return this.$route.path.startsWith("/saved-jobs"); },
        isContracts() { return this.$route.path.startsWith("/contracts"); },
        isMessages() { return this.$route.path.startsWith("/messages"); },
    },
    
}
</script>
<style scoped>
    .active{
        @apply border-l-blue text-blue bg-light_blue font-bold
    }

    .nav_item{
        @apply  h-20 hover:bg-light_blue flex md:justify-center pl-8 md:p-0 lg:pl-8 lg:justify-start justify-start items-center gap-3 border-l-8;
    }
</style>