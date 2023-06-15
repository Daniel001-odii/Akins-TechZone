<template>
    <NavBar/>
    <div class="tz-profile-card">
            <div class="profile-left">
                <div class="tz-user-thumbnail"></div>
                <div class="tz-user-details">
                    <p  class="tz-user-name">Bob Charlie</p>
                    <div class="tz-user-skill">UI/UX Designer</div>
                    <div class="tz-user-bio">Here, user gives a brief description about his/herself, more like a brief introduction.</div>
                    <div class="tz-cust-btn">Edit Profile</div>
                    <div class="tz-cust-btn">View Resume</div>

                </div>
            </div>
            <div class="profile-right"></div>
    </div>
</template>

<script>
import NavBar from '../components/NavBar.vue'
    export default {
        components:{NavBar}
    }
</script>

<style scoped>
    .tz-profile-card{
        width: 80%;
        padding: 20px;
        background: #fff;
        margin: 0 auto;
        margin-top: 30px;
    }
    .tz-user-thumbnail{
        height: 35px;
        width: 35px;
        border-radius: 50%;
        background: url("./Logos_icons/dummy_user.png");
    }
</style>