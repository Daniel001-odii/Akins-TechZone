<template>
    <form action="#" class="d-flex">
        <div class="cust-search-container">
            <input type="search" class="cust-search-in" placeholder="Find by Job Title, Company or any Job Keyword">
            <button class="cust-search-btn btn btn-secondary"><i class="bi bi-search"></i> <span class="search-find">Find</span></button>
        </div>
    </form>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
    .cust-search-container{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        min-width: 100px;
        padding: 0px 5px;
        /* border: 2px solid red; */
        background: #fff;
        border-radius: 10px;
        margin-bottom: 15px;

    }

    .cust-search-in{
        border: none;
        width: 85%;
        height: 50px;
        padding: 5px;
        font-size: 0.8em;
        outline: none;
    }
    .cust-search-btn{
        padding: 10px;
        width: 15%;
        background: #419E6A;
        border-radius: 10px;
        color: #fff;
        border: none;
        font-size: 0.8em;
    }

    /*--meida queries-------*/
    @media only screen and (max-width: 450px) {
 .search-find{
    display: none;
 }
}
</style>