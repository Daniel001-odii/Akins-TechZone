
<template>
     <!-- <header> -->
        <NavBar>
            <div class="navbar-nav">
                        <RouterLink class="nav-link nav-block" to="/"> <i class="bi bi-house"></i> Home</RouterLink>
                        <form role="search" style="display: flex; align-items: center; padding: 0px 20px;">
                            <div class="form-input" style="">
                                <input style="border: none; outline: none; height: 30px;" type="search" placeholder="Find work" aria-label="Search">
                                <button type="submit" style="border: none; outline: none; background: none; border-left: 1px solid #000;"><i class="bi bi-search"></i></button>
                            </div>
                        </form>
                        <RouterLink class="nav-link nav-block" to="/jobs"> <i class="bi bi-graph-up"></i> Insight</RouterLink>
                        <RouterLink class="nav-link nav-block" to="/jobs"> <i class="bi bi-wallet2"></i> Payment</RouterLink>
                        <RouterLink class="nav-link nav-block" to="/jobs"> <i class="bi bi-wallet-fill"></i> Saved Jobs</RouterLink>

                        <div class="user-actions">
                            <RouterLink class="" to="/jobs"> <i class="bi bi-bell"></i></RouterLink>
                            <RouterLink class="" to="/jobs"> <i class="bi bi-info-circle"></i></RouterLink>
                            <RouterLink class="" to="/jobs"> <i class="bi bi-flag"></i> </RouterLink>
                            <div class="user">AZ</div>
                        </div>
            </div>
        </NavBar>
       


<div class="container" style="margin-top: 80px;">
    <ul class="nav nav-tabs tableHeads" id="myTab" role="tablist">
        <li class="nav-item" role="presentation">
            <button class="nav-link active" id="avail-tab" data-bs-toggle="tab" data-bs-target="#available-tab-pane" type="button" role="tab" aria-controls="available-tab-pane" aria-selected="true"><span class="cust-badge">20</span>Available</button>
        </li>
        <li class="nav-item" role="presentation">
            <button class="nav-link" id="request-tab" data-bs-toggle="tab" data-bs-target="#requested-tab-pane" type="button" role="tab" aria-controls="requested-tab-pane" aria-selected="false"><span class="cust-badge bg-secondary">20</span>Requested</button>
        </li>
        <li class="nav-item" role="presentation">
            <button class="nav-link" id="assigned-tab" data-bs-toggle="tab" data-bs-target="#assigned-tab-pane" type="button" role="tab" aria-controls="assigned-tab-pane" aria-selected="false"><span class="cust-badge bg-warning">20</span>Assigned</button>
        </li>
        <li class="nav-item" role="presentation">
            <button class="nav-link" id="completed-tab" data-bs-toggle="tab" data-bs-target="#completed-tab-pane" type="button" role="tab" aria-controls="completed-tab-pane" aria-selected="false"><span class="cust-badge bg-success">20</span>Completed</button>
        </li>
        <li class="nav-item" role="presentation">
            <button class="nav-link" id="declined-tab" data-bs-toggle="tab" data-bs-target="#declined-tab-pane" type="button" role="tab" aria-controls="declined-tab-pane" aria-selected="false"><span class="cust-badge bg-danger">20</span>Declined</button>
        </li>
    
</ul>

<div class="tab-content tableContents" id="myTabContent">
  <div class="tab-pane fade show active" id="available-tab-pane" role="tabpanel" aria-labelledby="avail-tab" tabindex="0">
   <!--table goes here...-->
    <TableContents/>
  </div>
  <div class="tab-pane fade" id="requested-tab-pane" role="tabpanel" aria-labelledby="request-tab" tabindex="0">
    <TableContents/>
  </div>
  <div class="tab-pane fade" id="assigned-tab-pane" role="tabpanel" aria-labelledby="assigned-tab" tabindex="0">
    <TableContents/>
  </div>
  <div class="tab-pane fade" id="completed-tab-pane" role="tabpanel" aria-labelledby="completed-tab" tabindex="0">
    <TableContents/>
  </div>
  <div class="tab-pane fade" id="declined-tab-pane" role="tabpanel" aria-labelledby="declined-tab" tabindex="0">
    <TableContents/>
  </div>
</div>
<div class="tab-content tableContents" id="myTabContent">
  <div class="tab-pane fade show active" id="available-tab-pane" role="tabpanel" aria-labelledby="avail-tab" tabindex="0">
   <!--table goes here...-->
    <TableContents/>
  </div>
  <div class="tab-pane fade" id="requested-tab-pane" role="tabpanel" aria-labelledby="request-tab" tabindex="0">
    <TableContents/>
  </div>
  <div class="tab-pane fade" id="assigned-tab-pane" role="tabpanel" aria-labelledby="assigned-tab" tabindex="0">
    <TableContents/>
  </div>
  <div class="tab-pane fade" id="completed-tab-pane" role="tabpanel" aria-labelledby="completed-tab" tabindex="0">
    <TableContents/>
  </div>
  <div class="tab-pane fade" id="declined-tab-pane" role="tabpanel" aria-labelledby="declined-tab" tabindex="0">
    <TableContents/>
  </div>
</div>
</div>


<!-----------shows with general navbar-->
<Footer/>
</template>

<script>
import Footer from '../components/Footer.vue';
import NavBar from '../components/NavBar.vue';
import TableContents from '../components/TableContents.vue';

    export default {
    components: {
    TableContents,
    Footer,
    NavBar
}
}

  
</script>

<style scoped>
.nav-block{
  margin-top: 10px !important;
}
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

    .cust-badge{
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
        margin-right: 5px;
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
    @media only screen and (max-width: 500px) {
        .nav-block{
            padding: 10px !important;
        }
        .user-actions{
            padding: 10px 0px;
        }
        .nav-block:hover{
            border-radius: 10px;
            background: #cecece;
            border: none !important;
        }

        form{
            padding: 0px !important;
        }
        .user-actions{
        /* width: 120px;
        display: flex;
        flex-direction: row; */
        /* border: 1px solid red; */
        align-items: center;
        margin: 0px;
        /* margin-left: 120px; */
    }
    }

</style>