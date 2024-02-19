<template>
    <!-- <div> -->
        <div class=" bg-white border scale-90 group opacity-50 hover:opacity-100 hover:scale-100 p-4 text-black rounded-lg w-fit min-w-72 text-left flex flex-col gap-2">
            <div class="flex flex-row justify-between items-center text-5xl">
                <i class="bi bi-person-check bg-slate-900 group-hover:bg-blue p-2 text-white rounded-md flex justify-center items-center"></i>
                <span class="font-bold">{{number}}</span>
            </div>
            <h4 class="font-bold text-2xl">
                <slot name="title">Register Your Account</slot>
            </h4>
            <div class="text-sm text-left" style="font-size: 12px;">
                <slot name="content"></slot>
                It has survived not only five centuries, but also the leap into electronic typesetting.
            </div>
        </div>
        
    <!-- </div> -->
</template>
<script>
export default {
    name: "StepBox",
    props:{
        number: Number,
    }
    
}
</script>
<style>
    
</style>