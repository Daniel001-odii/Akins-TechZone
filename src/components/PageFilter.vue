<template>
    <slot>
        <div class="filter-search">
                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 25 26" fill="none">
                    <path d="M11.1311 0.727295C17.1339 0.727295 22.0058 5.59917 22.0058 11.602C22.0058 17.6049 17.1339 22.4767 11.1311 22.4767C5.12822 22.4767 0.256348 17.6049 0.256348 11.602C0.256348 5.59917 5.12822 0.727295 11.1311 0.727295ZM11.1311 20.0601C15.8036 20.0601 19.5892 16.2745 19.5892 11.602C19.5892 6.9283 15.8036 3.1439 11.1311 3.1439C6.45736 3.1439 2.67295 6.9283 2.67295 11.602C2.67295 16.2745 6.45736 20.0601 11.1311 20.0601ZM21.3835 20.1459L24.8018 23.563L23.0921 25.2727L19.675 21.8545L21.3835 20.1459V20.1459Z" fill="#45494F"/>
                </svg>
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