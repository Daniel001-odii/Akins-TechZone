<template>
    <form action="#" class="d-flex">
        <div class="cust-search-container">
            <!-- <input type="search" class="cust-search-in" placeholder="Search for Job Title, Company or any Job Keyword" v-model="searchTerm"> -->
            <input type="search" class="cust-search-in" placeholder="Search for Job Title, Company or any Job Keyword">
            <button class="cust-search-btn" type="submit">
                <i class="bi bi-search"></i>
                <span class="search-find">Search</span>
            </button>
        </div>
    </form>
</template>



<script>
    export default {}
</script>



<style scoped>
    .cust-search-container{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        font-size: 0.8em;
        background: #fff;
        border-radius: 5px;
        border: 1px solid #c8c6c6;
        overflow: hidden;
        width: 500px;
    }

    .search-find{
    padding: 0px 5px;
 }
    .cust-search-in{
        border: none;
        flex-basis: 500px;
        /* width: 100%; */
        height: 100%;
        padding: 5px;
        outline: none;
        background: var(--app-hover);
    }
   
    .cust-search-btn{
        padding: 10px;
        width: 100px;
        color: #000;
        border: none;
        border-left: 1px solid #c8c6c6;
        display: flex;
        justify-content: center;
        align-items: center;
        background: #fff;
    }
    .cust-search-btn:hover{
        background: var(--app-hover);
    }




    /*--meida queries-------*/


    @media only screen and (max-width: 960px) {
        .cust-search-container{
        width: 400px;
    }
    }

    @media only screen and (max-width: 850px) {
    .cust-search-container{
        width: 100%;
    }
}

@media only screen and (max-width: 700px) {
    .cust-search-in{
        /* width: 100px !important; */
    }
}

    @media only screen and (max-width: 450px) {
        .search-find{
            display: none;
        }
}




</style>