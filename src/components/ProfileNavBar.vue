<template>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <RouterLink class="tz-nav-block" to="/jobs"> <i class="bi bi-briefcase"></i> <span>work</span></RouterLink>
                        <form role="search" style="display: flex; align-items: center; padding: 0px 20px;">
                            <div class="" style="display: flex; flex-direction: row; border: 1px solid grey; border-radius: 5px;">
                                <input style="border: none; outline: none; height: 30px;" type="search" placeholder="Find work" aria-label="Search">
                                <button type="submit" style="border: none; outline: none; background: none; border-left: 1px solid #000;"><i class="bi bi-search"></i></button>
                            </div>
                        </form>
                        <RouterLink class=" tz-nav-block" to="/insight"> <i class="bi bi-graph-up"></i> <span>Insight</span></RouterLink>
                        <RouterLink class=" tz-nav-block" to="/payments"> <i class="bi bi-wallet2"></i> <span>Payment</span></RouterLink>
                        <RouterLink class=" tz-nav-block" to="/savedJobs"> <i class="bi bi-heart"></i> <span>Saved Jobs</span></RouterLink>

                        <div class="user-actions">
                            <RouterLink class="" to="/jobs"> <i class="bi bi-bell"></i></RouterLink>
                            <RouterLink class="" to="/jobs"> <i class="bi bi-info-circle"></i></RouterLink>
                            <RouterLink class="" to="/jobs"> <i class="bi bi-flag"></i> </RouterLink>
                             <div class="dropdown">
                                <p class="user" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" style="color: #fff;padding: 0px; margin: 0px;">
                                    AZ
                                </p>
                                <ul class="dropdown-menu">
                                    <li> <RouterLink class="dropdown-item" to="/Profile"><i class="bi bi-person-circle"></i> Profile</RouterLink></li>
                                    <li><RouterLink class="dropdown-item" to="/l"><i class="bi bi-gear-fill"></i> Settings</RouterLink></li>
                                    <li><RouterLink class="dropdown-item" to="/login"><i class="bi bi-box-arrow-right"></i> Log out</RouterLink></li>
                                </ul>
                            </div>
                        </div>

                        
      
            </div>

</template>
<script>
//importing bootstrap 5 Modules
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { Popover } from 'bootstrap/dist/js/bootstrap.esm.min.js'
import { RouterLink } from "vue-router";
export default {
    mounted() {
        //inti Popover
        Array.from(document.querySelectorAll("button[data-bs-toggle=\"popover\"]"))
            .forEach(popoverNode => new Popover(popoverNode));
    },
    components: { RouterLink }
}
</script>


<style scoped>

.dropdown-menu{
    border: none !important;
    box-shadow: 0px 0px 5px #c7c7c7 !important;
}

.dropdown-menu:before {
    content: "";
    display: block;
    position: absolute;
    top: -7px;
    left: 18px;
    border-color: #fff;
    border-left: 8px solid #fff;
    border-bottom: 8px solid #fff;
    border-right: 8px solid transparent;
    border-top: 8px solid transparent;
    transform: translateX(-50%) rotate(135deg);
    /* box-shadow: -2px 2px 3px rgb(57 73 76 / 10%); */
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
        align-items: center;
        margin-left: 120px;
    }  

    .navbar-collapse {
    flex-basis: 100%;
    flex-grow: 0 !important;
    align-items: center;
    /* border: 1px solid red; */
    width: 80%;
    justify-content: space-between;
}
.navbar-nav{
    flex-grow: 0;
}

    @media only screen and (max-width: 1150px) {
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