<template>
    <div>
        <div class="w-fit p-6 shadow-lg" data-aos="fade-up">
            <slot name="icon">
                <i class="bi bi-gear font-bold"></i>
            </slot>
            <div class="flex flex-col">
                <span class="font-bold text-2xl">
                    <slot name="title">Fiber Cabling</slot>
                </span>
                <span class="text-sm">
                        {{ jobs_avaialble }}+ Jobs Available
                </span>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "JobaCat",
    props:{
        jobs_avaialble: Number,
    }
    
}
</script>
<style>
    
</style>