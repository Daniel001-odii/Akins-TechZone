<template>
    <nav class="cust-nav">
            <div class="cust-logo-area"><b>TechZone</b></div>
            <div class="nav-links">
                <p>Explore</p>
                <p>Hire Worker</p>
                <p style="border: none">About Company</p>
            </div>
            <div class="cust-actions">
                <div class="cust-nav-actions">
                    <i class="bi bi-briefcase"></i>
                    <i class="bi bi-bell"></i>
                    <i class="bi bi-envelope-exclamation"></i>
                </div>
                <div class="cust-user-actions"></div>
            </div>
    </nav>
</template>

<script>
</script>

<style>
.cust-nav{
    height: 70px;
    /* background: red; this can be used to debug issues with the nav links */
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    box-shadow: 0px 1px 6px #00000040;
    background: #fff;
}

.nav-links{
    display: flex;
    flex-direction: row;
    /* width: 25%; */
    /* border: 2px solid green; */ /*this can be used to debug issues with the nav links */
    justify-content: space-around;
    align-items: flex-end;
}

.nav-links > p{
    border-right: 1px solid #000;
    padding: 0px 15px;
    text-align: center;
}
.nav-links > p:hover{
    cursor: pointer;
    color: green;
}

.cust-actions{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: ;
}

.cust-nav-actions{
    width: 70px;
    /* border: 2px solid red; */
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-end;
    margin-right: 20px;
}

.cust-user-actions{
    width: 45px;
    height: 45px;
    border-radius: 50%;
    background-color: #F1F4F4;
}
</style>
