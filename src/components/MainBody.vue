<script>
import PageContent from './pageContent.vue';
import Search from './Search.vue';
import SideNav from './SideNav.vue';

    export default{
        components: {
    Search,
    SideNav,
    PageContent
}
    }

</script>

<template>
    <div class="container cust-home">
        <div class="side-navigation-pane">
            <SideNav/>
        </div>
        <div class="cust-page-contents">
            <Search/>
            <div class="sub-page-content">
                <PageContent/>
            </div>
        </div>
    </div>
</template>



<style scoped>
.cust-home{
        display: flex;
        flex-direction: row;
        justify-content: space-around;
}

.side-navigation-pane{
    /* border: 2px dotted green; */
    /* padding: 0px 5px; */
    margin-right: 5px                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               ;
    width: 300px;
    border-radius: 10px 10px 0px 0px !important;
    overflow: hidden;
}
.cust-page-contents{
    /* border: 2px dotted red; */
    width: 90%;
    padding: 0px 5px;
}

.sub-page-content{
    background: #fff;
    padding: 10px;
    border-radius: 10px;
}
    /* .cust-body-arrangement{
       
       
    }
    .cust-left-nav{
        height: 800px;
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
    } */

     /*--meida queries-------*/
     @media only screen and (max-width: 769px) {
 .side-navigation-pane{
    display: none;
 }
 .cust-page-contents{
    width: 100%;
 }
}
</style>