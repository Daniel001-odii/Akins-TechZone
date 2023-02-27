<template>
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
            <a class="nav-link active" aria-current="page" href="#/" >Home</a>
            <a class="nav-link middle" href="#/Jobs">Work</a>
            <a class="nav-link" href="#">About Company</a>
        </div>

        <div class="cust-actions">
            <button class="cust-btn login-btn">Login</button>
            <button class="cust-btn signUp-btn">Sign Up</button>
        </div>
        </div>
        </div>
    </nav>

    <component :is="currentView"/>
</template>

<script>
// //import other page urls
import JobPage from '../pages/JobsPage.vue'
import HomePage from '../pages/HomePage.vue'

const routes = {
    '/': HomePage,
    '/Jobs': JobPage
}


export default {
    data(){
        return {
            currentPath: window.location.hash
        }
    },
    computed:{
        currentView(){
            return routes[this.currentPath.slice(1) || '/']
        }
    },
    mounted(){
        window.addEventListener('hashchange', () =>{
            this.currentPath = window.location.hash
        })
    },
    setup() {
        return {};
    }
}

</script>

<style>
.navbar-brand{
    margin-left: 50px;
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
.middle{
    border-left: 1px solid var(--app-grey); 
    border-right: 1px solid var(--app-grey);
}

.cust-actions{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    /* border: 2px dotted red; */
    /* width: 10px; */
    /* float: right; */
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
