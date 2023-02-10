<template>
    <div class="cust-body-arrangement">
        <!-- <h1>Live and active</h1> -->
        <div class="cust-left-nav"></div>
        <div class="cust-page-contents">
            <div class="cust-search-box">
                <Search/>
            </div>
            <div class="cust-page-main"></div>
        </div>
    </div>
</template>

<script>
import Search from './Search.vue';

    export default{
        components: { 
            Search,
     }
    }

</script>

<style scoped>
    .cust-body-arrangement{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        padding: 10px;
        align-items: flex-start;
        width: 88%;
        /* border: 2px solid red; */
        /* height: 100vh; */
        margin: 20px auto;
    }
    .cust-left-nav{
        height: 800px;
        width: 350px;
        border-radius: 20px;
        background: #fff;
    }

    .cust-page-contents{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        border: green;
    }

    .cust-page-main{
        width: 800px;
        background: #fff;
        height: 800px;
        border-radius: 10px;
    }
</style>