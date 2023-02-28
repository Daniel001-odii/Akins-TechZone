
<template>
     <!-- <header> -->
        <nav class="navbar navbar-expand-lg">
            <div class="container">
                <a class="navbar-brand" href="#">
                    <img class="nav-img" src="../components/Logos_icons/techzone.png">
                </a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <i class="bi bi-list"></i>
                    </button>

                    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav">
                        <RouterLink to="/"> <i class="bi bi-home"></i> Home</RouterLink>
                        <RouterLink to="/jobs"> <i class="bi bi-case"></i> Work</RouterLink>
                    </div>

                    <div class="cust-actions">
                        <RouterLink to="/login"><button class="cust-btn login-btn">Login</button></RouterLink>
                            <RouterLink to="/signUp"><button class="cust-btn signUp-btn">Sign Up</button></RouterLink>
                    </div>
                </div>
            </div>
        </nav>


<div class="container">
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
</div>


<!-----------shows with general navbar-->
<Footer/>
</template>

<script>
import Footer from '../components/Footer.vue';
import TableContents from '../components/TableContents.vue';

    export default {
    components: {
    TableContents,
    Footer,
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

    .nav-link{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        padding: 8px !important;
    }

    @media only screen and (max-width: 500px) {
        
    }

</style>