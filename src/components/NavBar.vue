<template>
    <nav class="navbar navbar-expand-lg">
        <div class="container-fluid">
        <a class="navbar-brand" href="#">TechZone</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <i class="bi bi-list"></i>
            </button>

        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
            <a class="nav-link active" aria-current="page" href="#/">Home</a>
            <a class="nav-link" href="#/Jobs">Explore</a>
            <a class="nav-link" href="#">Hire Worker</a>
            <a class="nav-link" href="#">About Company</a>
        </div>

        <div class="cust-actions">
            <p class="auth-link">Login</p>
            <p class="auth-link signUp-btn">Sign Up</p>
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
.active{
    color: var(--app-blue) !important;
    font-weight: bolder !important;
}
.auth-link{
    margin: 0;
    padding: 10px 25px;
    font-size: 0.8em;
    /* border: 1px solid red; */
}
.signUp-btn{
    background: var(--app-blue);
    color: #fff;
    border-radius: 20px;
}
nav{
    /* height: 100px; */
    width: 90%;
    margin: 0 auto;
    padding: 15px !important;
    border-radius: 0px 0px 20px 20px;
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

 /*--meida queries-------*/
 @media only screen and (max-width: 999px) {
    nav{
    width: 100%;
    margin: 0 auto;
    padding: 15px !important;
    }
    }
    
</style>
