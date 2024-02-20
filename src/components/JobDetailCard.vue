<template>
    <div>
        <div class="flex flex-col border h-full p-3 rounded-md text-left gap-3 hover:border-blue relative">
            <div class="flex flex-col gap-3">
                <div class="flex flex-row justify-between items-center">
                    <span class="font-bold text-2xl">
                        <slot name="job-title">
                            senior software developer (java)
                        </slot>
                    </span>
                    <div class="text-lg gap-4 flex flex-row-reverse">
                        <button class="bg-blue text-white px-5 py-2 rounded-md hover:bg-dark_blue">Apply here</button>
                    </div>
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
                <div class="flex flex-row flex-wrap gap-3">
                    <span v-for="tag in 4" class="bg-light_blue text-blue px-3 py-2 rounded-md">CSS</span>
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

            <div class="text-sm text-blue">
                <slot name="job-posting-time">Posted 1 hour ago</slot>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "JobDetailCard"
}
</script>
<style scoped>
    .icon_btn{
        @apply p-2 bg-transparent hover:bg-light_blue h-10 w-10 rounded-full
    }
</style>