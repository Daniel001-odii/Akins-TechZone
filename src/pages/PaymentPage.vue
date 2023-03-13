
<template>
   
   <NavBar>
            <ProfileNavBar/>
    </NavBar>


<div class="container" style="margin-top: 50px;">
     
        <h4>Dont worry we are still working on your payments..</h4>
     
     <p class="card-text placeholder-glow" style="max-width: 400px">
                    <span class="placeholder col-7"></span>
                    <span class="placeholder col-4"></span>
                    <span class="placeholder col-4"></span>
                <span class="placeholder col-6"></span>
                <span class="placeholder col-8"></span>
    </p>
    <p class="card-text placeholder-glow">
                    <span class="placeholder col-7"></span>
                    <span class="placeholder col-4"></span>
                    <span class="placeholder col-4"></span>
                    <span class="placeholder col-6"></span>
                    <span class="placeholder col-8"></span>
        </p>
    
    <p class="card-text placeholder-glow" style="width: 200px">
                <span class="placeholder col-7"></span>
                <span class="placeholder col-4"></span>
                <span class="placeholder col-4"></span>
                <span class="placeholder col-6"></span>
                <span class="placeholder col-8"></span>
    </p>
    <p class="card-text placeholder-glow">
                <span class="placeholder col-7"></span>
                <span class="placeholder col-4"></span>
                <span class="placeholder col-4"></span>
                <span class="placeholder col-6"></span>
                <span class="placeholder col-8"></span>
    </p>
</div>




<!-----------shows with general navbar-->
<Footer/>
</template>

<script>
import Footer from '../components/Footer.vue';
import NavBar from '../components/NavBar.vue';
import ProfileNavBar from '../components/ProfileNavBar.vue';
import TableContents from '../components/TableContents.vue';

    export default {
    components: {
    TableContents,
    Footer,
    NavBar,
    ProfileNavBar
}
}

  
</script>

<style scoped>
.tableHeads{
        display: flex;
        flex-direction: row;
        /* border: 2px solid red; */
        justify-content: center;
        flex-wrap: wrap;
    }
    .tableContents{
        width: 100%;
        /* height: 500px; */
        background: #fff;
        overflow: scroll;
    }

    .tz-badge{
        height: 20px;
        width: 20px;
        border-radius: 50%;
        font-size: 0.6em;
        display: inline-flex;
        justify-content: center;
        align-items: center;
        background: var(--app-blue);
        color: #fff;
        font-weight: normal;
        margin: 5px;
    }



    .user{
        height: 40px;
        width: 40px;
        border-radius: 50%;
        background: grey;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #fff;
    }
    .user-actions{
        width: 120px;
        display: flex;
        flex-direction: row;
        /* border: 1px solid red; */
        align-items: center;
        margin-left: 120px;
    }   

.navbar-nav{
    flex-grow: 0;
}

    @media only screen and (max-width: 1150px) {
        .tz-nav-block > span{
            display: none;
        }
    }
    @media only screen and (max-width: 999px) {
        .tz-nav-block > span{
            display: flex;
        }
        .tz-nav-block{
            width: 100%;
            justify-content: flex-start;
        }
        .navbar-nav{
            align-items: flex-start;
        }
        form{
            padding: 10px !important;
            border-top: 1px dotted #efefef;
            border-bottom: 1px dotted #efefef;
            margin-bottom: 5px;
        }
        .user-actions{
            margin: 0px;
            padding: 10px 0px;
        }
    }



    @media only screen and (max-width: 500px) {
        
        .user-actions{
            padding: 10px 0px;
        }

        .user-actions{
        align-items: center;
        margin: 0px;
    }
    }

</style>