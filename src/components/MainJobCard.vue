<template>
    <div>
        <div class="flex flex-col border p-3 rounded-md text-left gap-3 hover:border-blue">
            <div class="flex flex-col">
                <div class="flex flex-row justify-between items-center">
                    <span class="font-bold">
                        <slot name="job-title">
                            senior software developer (java)
                        </slot>
                    </span>
                    <div class="text-lg gap-4 flex flex-row-reverse">
                        <button class="icon_btn">
                            <i class="bi bi-bookmark-check-fill"></i>
                        </button>
                        <button class="icon_btn">
                            <i class="bi bi-hand-thumbs-down"></i>
                        </button>
                    </div>
                </div>
                <div>
                    Microsoft Inc.
                    <span>Rating here...</span>
                </div>
                <div>
                    <i class="bi bi-geo-alt"></i> <span>Lekki Phase 1, Lagos state</span>
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
                <slot name="job-description">
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
    name: "MainJobCard"
}
</script>
<style scoped>
    .icon_btn{
        @apply p-2 bg-transparent hover:bg-light_blue h-10 w-10 rounded-full
    }
</style>