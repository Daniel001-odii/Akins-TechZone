<template>
    <nav class="navbar navbar-expand-lg">
            <div class="container-fluid">
                <RouterLink to="/"  class="navbar-brand">
                    <img class="nav-img" src="../components/Logos_icons/techzone.png">
                </RouterLink>
                    <!-- <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <i class="bi bi-list"></i>
                    </button> -->

                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <slot>
                        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                            <div class="navbar-nav">
                                <RouterLink class=" tz-nav-block" style="" to="/"> <i class="bi bi-house"></i> Home</RouterLink>
                                <RouterLink class=" tz-nav-block" style="" to="/jobs"><i class="bi bi-briefcase"></i>Work</RouterLink>
                            </div>

                            <div class="cust-actions">
                                <RouterLink to="/login"><button class="cust-btn login-btn">Login</button></RouterLink>
                                <div class="dropdown">
                                    <button href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" class="cust-btn signUp-btn">Sign Up</button>
                                        <ul class="dropdown-menu">
                                            <li> <RouterLink class="dropdown-item" to="/signUp-employer">As Employer</RouterLink></li>
                                            <li><RouterLink class="dropdown-item" to="/signUp">As Talent</RouterLink></li>
                                        </ul>
                                </div>
                                    
                            </div>
                        </div>
                    </slot>
            </div>
    </nav>
    
</template>

<script>
import 'bootstrap/dist/js/bootstrap.js';

</script>


<style>
.navbar-brand{
    /* margin-left: 50px; */
}

.active{
    color: var(--app-blue) !important;
    font-weight: bolder !important;
}

.signUp-btn{
    background: var(--app-blue);
    color: #fff;
    border-radius: 8px;
}
.signUp-btn:hover{
    background: #0953ca;
}
.login-btn{
    border-radius: 8px;
    background: none;
    color: var(--app-grey);
    border: 1px solid #fff;
    margin-right: 10px;
}
.login-btn:hover{
    background: var(--app-hover);
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

.cust-actions{
    display: flex;
    flex-direction: row;
}
 /*--meida queries-------*/
 @media only screen and (max-width: 999px) {
    .seperator{
        display: none;
    }
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
        .cust-actions{
            padding-top: 20px;
        }
    }
    
</style>
