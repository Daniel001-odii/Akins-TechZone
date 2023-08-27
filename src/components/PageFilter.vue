<template>
    <slot>
        <div class="filter-search">
                <i class="bi bi-search"></i>
                <input type="search" class="ft-search" v-model="searchTerm" placeholder="Search all types of jobs">
           </div>
           
           <button class="filter-menu">Full-time</button>
           <button class="filter-menu">Remote</button>
           <button class="filter-menu">Last 1 hour</button>
    </slot>
</template>

<script>
    export default {
    
    }
</script>

<style scoped>
 .filter-search{
        border-radius: 5px;
        background: var(--app-hover);
        color: #000;
        border: none;
        height: 30px;
        margin: 6px 0px;
        outline: none;
        padding-left: 10px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .ft-search{
        height: 100%;
        border: none;
        background: none;
        outline: none;
        padding: 5px;
    }
</style>