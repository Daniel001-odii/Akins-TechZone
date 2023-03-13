
<template>
<NavBar>
    <ProfileNavBar/>
</NavBar>


<div class="container-fluid" style="margin-top: 30px;">
    <ul class="nav nav-tabs tableHeads" id="myTab" role="tablist">
        <li class="nav-item" role="presentation">
            <button class="tz-nav-block nav-link active" style="color: #000 !important" id="avail-tab" data-bs-toggle="tab" data-bs-target="#available-tab-pane" type="button" role="tab" aria-controls="available-tab-pane" aria-selected="true"><span class="tz-badge">20</span>Available</button>
        </li>
        <li class="nav-item" role="presentation">
            <button class="nav-link" id="request-tab" style="color: #000 !important" data-bs-toggle="tab" data-bs-target="#requested-tab-pane" type="button" role="tab" aria-controls="requested-tab-pane" aria-selected="false"><span class="tz-badge bg-secondary">5</span>Requested</button>
        </li>
        <li class="nav-item" role="presentation">
            <button class="nav-link" id="assigned-tab" style="color: #000 !important" data-bs-toggle="tab" data-bs-target="#assigned-tab-pane" type="button" role="tab" aria-controls="assigned-tab-pane" aria-selected="false"><span class="tz-badge bg-warning">3</span>Assigned</button>
        </li>
        <li class="nav-item" role="presentation">
            <button class="nav-link" id="completed-tab" style="color: #000 !important" data-bs-toggle="tab" data-bs-target="#completed-tab-pane" type="button" role="tab" aria-controls="completed-tab-pane" aria-selected="false"><span class="tz-badge bg-success">45</span>Completed</button>
        </li>
        <li class="nav-item" role="presentation">
            <button class="nav-link" id="declined-tab" style="color: #000 !important" data-bs-toggle="tab" data-bs-target="#declined-tab-pane" type="button" role="tab" aria-controls="declined-tab-pane" aria-selected="false"><span class="tz-badge bg-danger">2</span>Declined</button>
        </li>
    
</ul>

<div class="tab-content tableContents" id="myTabContent">
    <div class="tab-pane fade show active" id="available-tab-pane" role="tabpanel" aria-labelledby="avail-tab" tabindex="0">
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
import ProfileNavBar from '../components/ProfileNavBar.vue';

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



</style>