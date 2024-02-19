<template>
    <div class="flex items-center justify-center absolute p-7 shadow-lg">
        <div class="flex flex-row items-center gap-5">
            <div>
                {{ icon }}
            </div>

            <div class="flex flex-col text-start">
                <span class=" font-extrabold text-2xl">{{ number }}</span>
                <span class=" text-sm">{{ text }}</span>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "StatsBox",
    props:{
        number: "10K+",
        text: "Jobs Available",
        icon: "U"
    }
}
</script>
<style>
    
</style>