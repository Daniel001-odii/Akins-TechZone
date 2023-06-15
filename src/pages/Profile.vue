<template>
    <NavBar/>
    <small>
        <div class="back-btn cust-btn" style="width: 100px; margin: 10px;">Back</div>
    </small>
    
    <div class="tz-profile-card">
            <div class="tz-profile-left">
                <div class="tz-user-thumbnail"></div>
                <div class="tz-user-details">
                    <p  class="tz-user-name">Bob Charlie</p>
                    <div class="tz-user-skill">UI/UX Designer</div>
                    <div class="tz-user-bio">Here, user gives a brief description about his/herself, more like a brief introduction.</div>
                    <div class="tz-btn-array">
                        <button class="cust-btn">Edit Profile</button>
                        <button class="cust-btn" style="border: 1px solid var(--app-blue); color: var(--app-blue); background: #fff;">View Resume</button>
                    </div>
                    

                </div>
            </div>
            <div class="section-divider"></div>
            <div class="tz-profile-right">
                <div class="tz-availablity">Availability</div>
                <div class="tz-location">Location</div>
                <div class="tz-yrs-exp">Years of Experience</div>
                <div class="tz-socials"></div>
            </div>
    </div>
</template>

<script>
import NavBar from '../components/NavBar.vue'
    export default {
        components:{NavBar}
    }
</script>

<style scoped>
.section-divider{
        height: 150px !important;
        width: 1px !important;
        background: var(--app-grey) !important;
    }
    .tz-profile-card{
        width: 80%;
        padding: 40px;
        background: #fff;
        margin: 0 auto;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-around;
        gap: 20px;
    }
    .tz-user-thumbnail{
        height: 85px;
        width: 85px;
        border-radius: 50%;
        background: url("../components/Logos_icons/techZoneVertical.png");
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
        /* background: red; */
        outline: 4px solid var(--app-blue);
        outline-offset: 5px;
    }
    .tz-profile-left{
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 30px;
        /* justify-content: center; */
        /* border: 1px solid red; */
        width: 100%;
    }
    .tz-profile-right{
        width: 100%;
        /* border: 1px solid red; */
    }
    .tz-user-name{
        font-size: 30px;
        font-weight: 400;
        margin: 0; padding: 0;
    }
    .tz-user-skill{
        font-size: 15px;
        font-weight: 300;
        margin: 0; padding: 0;
    }
    .tz-user-bio{
        font-size: 14px;
        width: 300px;
    }
    .tz-btn-array{
        gap: 5px;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap !important;
    }
    .cust-btn{
        border-radius: 5px;
    }



    @media only screen and (max-width: 720px) {
        .tz-profile-card{
            flex-direction: column;
            width: 100%;
        }
        .tz-profile-left{
            flex-direction: column;
        }
        .section-divider{
            display: none;
        }
    }
</style>