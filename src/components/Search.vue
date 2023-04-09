<template>
    <form action="#" class="d-flex">
        <div class="cust-search-container">
            <input type="search" class="cust-search-in" placeholder="Search for Job Title, Company or any Job Keyword">
            <button class="cust-search-btn" type="submit">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 25 26" fill="none">
                    <path d="M11.1311 0.727295C17.1339 0.727295 22.0058 5.59917 22.0058 11.602C22.0058 17.6049 17.1339 22.4767 11.1311 22.4767C5.12822 22.4767 0.256348 17.6049 0.256348 11.602C0.256348 5.59917 5.12822 0.727295 11.1311 0.727295ZM11.1311 20.0601C15.8036 20.0601 19.5892 16.2745 19.5892 11.602C19.5892 6.9283 15.8036 3.1439 11.1311 3.1439C6.45736 3.1439 2.67295 6.9283 2.67295 11.602C2.67295 16.2745 6.45736 20.0601 11.1311 20.0601ZM21.3835 20.1459L24.8018 23.563L23.0921 25.2727L19.675 21.8545L21.3835 20.1459V20.1459Z" fill="#45494F"/>
                </svg>
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
        /* height: 40px;
        flex-basis: 600px;
        min-width: 300px; */

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

    /*--meida queries-------*/
    @media only screen and (max-width: 450px) {
 .search-find{
    display: none;
 }
}

@media only screen and (max-width: 850px) {
    .cust-search-container{
        width: 100%;
    }
}
</style>