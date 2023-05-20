<template>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <RouterLink class="tz-nav-block" to="/jobs"> <i class="bi bi-briefcase"></i> <span>work</span></RouterLink>
                        <form role="search" style="display: flex; align-items: center; padding: 0px 20px;">
                            <div class="" style="display: flex; flex-direction: row; border: 1px solid grey; border-radius: 5px;">
                                <input style="border: none; border-radius: 5px; outline: none; height: 30px; font-size: 0.8em; padding: 0px 0px 0px 10px;" type="search" placeholder="Find work" aria-label="Search">
                                <button type="submit" style="border: none; outline: none; background: none; border-left: 1px solid #000;"><i class="bi bi-search"></i></button>
                            </div>
                        </form>
                        <RouterLink class=" tz-nav-block" to="/insight"> <i class="bi bi-graph-up"></i> <span>Insight</span></RouterLink>
                        <RouterLink class=" tz-nav-block" to="/messages"> <i class="bi bi-wallet2"></i> <span>Payment</span></RouterLink>
                        <RouterLink class=" tz-nav-block" to="/savedJobs"> <i class="bi bi-heart"></i> <span>Saved Jobs</span></RouterLink>

                        <div class="user-actions">
                            <!-- <RouterLink class="" to="/jobs"> <i class="bi bi-bell"></i></RouterLink> -->
                            <div class="dropdown">
                                <i class="bi bi-bell" role="button" data-bs-toggle="dropdown" aria-expanded="false"></i>
                                <ul class="dropdown-menu" style="width: 200px; left: -160px !important;">
                                    <li style="padding: 5px 10px; display: flex; flex-direction: row;">
                                        <i class="bi bi-rocket-takeoff-fill" style="margin-right: 5px;"></i> 
                                        <p><b>Welcome to TechZone,</b> you can start applying for jobs!</p>
                                    </li>
                                </ul>
                            </div>

                            <RouterLink class="" to="/jobs"> <i class="bi bi-info-circle"></i></RouterLink>
                            <RouterLink class="" to="/jobs"> <i class="bi bi-flag"></i> </RouterLink>
                             <div class="dropdown">
                                <p class="user" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" style="color: #fff;padding: 0px; margin: 0px;">
                                    AZ
                                </p>
                                <ul class="dropdown-menu">
                                    <li> <RouterLink class="dropdown-item" to="/Profile"><i class="bi bi-person-circle"></i> Profile</RouterLink></li>
                                    <li><RouterLink class="dropdown-item" to="/l"><i class="bi bi-gear-fill"></i> Settings</RouterLink></li>
                                    <li><RouterLink class="dropdown-item" to="/"><i class="bi bi-box-arrow-right"></i> Log out</RouterLink></li>
                                </ul>
                            </div>
                        </div>

                        
      
            </div>

            <!----remove me if anything goes wrong-->


</template>
<script>
//importing bootstrap 5 Modules
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { Popover } from 'bootstrap/dist/js/bootstrap.esm.min.js'
import { RouterLink } from "vue-router";
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const Api_url = "http://127.0.0.1:8000/api";

export default {
    mounted() {
        //inti Popover
        Array.from(document.querySelectorAll("button[data-bs-toggle=\"popover\"]"))
            .forEach(popoverNode => new Popover(popoverNode));
    },
    components: { RouterLink },
 }

</script>


<style scoped>
a{
    font-weight: 500;
}
p{
    margin: 0;
    padding: 0;
}
.dropdown-menu{
    border: none !important;
    box-shadow: 0px 0px 5px #c7c7c7 !important;
    /* right: 100px !important; */
    left: -120px !important;
    top: 30px !important;
    font-size: 0.8em !important;
}
/* 
.dropdown-menu:before {
    content: "";
    display: block;
    position: absolute;
    top: -5px;
    left: 140px;
    border-color: #fff;
    border-left: 8px solid #fff;
    border-bottom: 8px solid #fff;
    border-right: 8px solid transparent;
    border-top: 8px solid transparent;
    transform: translateX(-50%) rotate(135deg);
    box-shadow: -2px 2px 3px rgb(57 73 76 / 10%);
} */

.user{
        height: 30px;
        width: 30px;
        border-radius: 50%;
        background: grey;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #fff;
    }
    .user-actions{
        width: 150px;
        display: flex;
        flex-direction: row;
        align-items: flex-end;
        justify-content: space-around;
        margin-left: 150px;
        border: 1px solid red;
        /* margin-right: 100px; */
    }  

    .navbar-collapse {
        /* display: flex; */
    /* flex-basis: 100%; */
    /* margin: 0 auto; */
    flex-grow: 0 !important;
    border: 1px solid red;
    align-items: center;
    width: 80%;
    /* max-width: 1000px !important; */
    justify-content: space-between;
}
.navbar-nav{
    flex-grow: 0;
}

    @media only screen and (max-width: 1150px) {
        /* .navbar-collapse {
            flex-direction: column;
            justify-content: flex-start;
        } */
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