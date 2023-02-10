<template>
    <form action="">
        <div class="cust-search-container">
            <input type="search" class="cust-search-in" placeholder="Find by Job Title, Company or any Job Keyword">
            <button class="cust-search-btn"><i class="bi bi-search"></i> Find</button>
        </div>
    </form>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
    .cust-search-container{
        border: 10px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        width: 800px;
        padding: 5px;
        /* border: 2px solid red; */
        background: #fff;
        border-radius: 10px;
        margin-bottom: 15px;

    }

    .cust-search-in{
        border: none;
        /* border: 2px solid red; */
        width: 85%;
        height: 50px;
        padding: 10px;
        font-size: 16px;
    }
    .cust-search-btn{
        height: 50px;
        width: 100px;
        background: #419E6A;
        border-radius: 10px;
        color: #fff;
        border: none;
        font-size: 16px;
    }
</style>