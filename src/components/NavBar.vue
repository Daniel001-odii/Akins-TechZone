<template>
    <nav class="navbar fixed-top navbar-expand-lg">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">
                    <img class="nav-img" src="../components/Logos_icons/techzone.png">
                </a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <i class="bi bi-list"></i>
                    </button>

                    <slot>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav">
                        <RouterLink class="nav-link nav-block" style="" to="/"> <i class="bi bi-house"></i> Home</RouterLink> |
                        <RouterLink class="nav-link nav-block" style="" to="/jobs"> <i class="bi bi-briefcase"></i> Work</RouterLink>
                    </div>

                    <div class="cust-actions">
                        <RouterLink to="/login"><button class="cust-btn login-btn">Login</button></RouterLink>
                            <RouterLink to="/signUp"><button class="cust-btn signUp-btn">Sign Up</button></RouterLink>
                    </div>
                </div>
                    </slot>
            </div>
    </nav>
</template>



<script>
// //import other page urls
// import JobPage from '../pages/JobsPage.vue'
// import HomePage from '../pages/HomePage.vue'
// import loginPage from '../pages/login.vue'


// const routes = {
//     // '/': HomePage,
//     '/Jobs': JobPage,
//     '/Login': loginPage,
// }


export default {

}

</script>

<style>
.navbar-brand{
    margin-left: 50px;
}

.nav-block:hover{
    border-bottom: 3px solid var(--app-blue) !important;
    padding-bottom: 5px !important; 
}


.active{
    color: var(--app-blue) !important;
    font-weight: bolder !important;
}

.signUp-btn{
    background: var(--app-blue);
    color: #fff;
    border-radius: 20px;
}
.signUp-btn:hover{
    background: #0953ca;
}
.login-btn{
    border-radius: 20px;
    background: none;
    color: var(--app-grey);
    border: 1px solid #fff;
    margin-right: 10px;
}
.login-btn:hover{
    background: #efefef83;
    /* border: 1px solid var(--app-grey); */
}

nav{
    /* height: 100px; */
    width: 100%;
    margin: 0 auto;
    padding: 10px !important;
    /* border-radius: 0px 0px 20px 20px; */
}
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


.nav-link{
    padding: 0px 10px !important;
    /* border: 2px solid red; */
}
 /*--meida queries-------*/
 @media only screen and (max-width: 999px) {
    nav{
    width: 100%;
    margin: 0 auto;
    padding: 15px !important;
    }
    .navbar-brand{
        margin: 0px !important;
    }
    .middle{
        border: none !important;
    }
    }
    
</style>
