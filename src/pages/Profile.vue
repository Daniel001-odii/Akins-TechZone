<template>
    <NavBar/>
    <div class="tz-profile-card">
            <div class="profile-left">
                <div class="tz-user-thumbnail"></div>
                <div class="tz-user-details">
                    <p>Bob Charlie</p>
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