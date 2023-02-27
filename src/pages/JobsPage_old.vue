<script>
// import sample from '../'
import PageContent from '../components/JobsList.vue';
import Search from '../components/Search.vue';
import SideNav from '../components/SideNav.vue';

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
  
     /*--meida queries-------*/
@media only screen and (max-width: 999px) {
 .side-navigation-pane{
    display: none;
 }
 .cust-page-contents{
    width: 100%;
 }
}
</style>