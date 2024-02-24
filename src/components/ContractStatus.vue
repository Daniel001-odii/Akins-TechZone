<template>
    <div>
        <span v-if="type === 'ended'" class="px-4 py-1 bg-gray-500 text-white rounded-md text-xl">
            Ended
        </span>
        <span v-if="type === 'active'" class="px-4 py-1 bg-blue text-white rounded-md text-xl">
            Active
        </span>
        <span v-if="type === 'paused'" class="px-4 py-1 bg-orange-500 text-white rounded-md text-xl">
            Paused
        </span>
    </div>
</template>
<script>
export default {
    name: "ContractStatus",
    props: {
        type: String,
    }
}
</script>
<style>
    
</style>