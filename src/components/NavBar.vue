<template>
    <nav class="navbar navbar-expand-lg">
        <div class="container-fluid">
        <a class="navbar-brand" href="#">TechZone</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <i class="bi bi-list"></i>
            </button>

        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
            <a class="nav-link active" aria-current="page" href="#">Explore</a>
            <a class="nav-link" href="#">Hire Worker</a>
            <a class="nav-link" href="#">About Company</a>
        </div>
        <div class="cust-actions">
                <div class="cust-nav-actions">
                    <i class="bi bi-briefcase"></i>
                    <i class="bi bi-bell"></i>
                    <i class="bi bi-envelope-exclamation"></i>
                </div>
                <div class="cust-user-actions"></div>
                
        </div>
        </div>
        </div>
    </nav>

</template>

<script>
</script>

<style>
.navbar-nav{
    margin: 0 auto;
}
.navbar{
    background: #fff !important;
    box-shadow: 0px 1px 6px #00000040;
    margin-bottom: 20px;
}
.navbar-toggler{
    background: none !important;
    border: none !important;
    font-size: xx-large;
}
.cust-nav{
    height: 70px;
    /* background: red; this can be used to debug issues with the nav links */
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    width: 100%;
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
    float: right;
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
    background: url('./Logos_icons/dummy_user.png');
    background-position:center;
    background-size: cover;
}
</style>
