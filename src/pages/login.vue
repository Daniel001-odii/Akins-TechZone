<template>
    <div class="form-container">
        <div class="leftSide">
            <div class="topLeftImage">
                <img class="brand-img" src="../components/Logos_icons/techzone.png">
            </div>

            <div class="subDiv">
                <div class="left-content">
                <h2 style="font-weight: bolder;">Welcome Back!</h2>
                <p>Please enter your login details</p>

                <div class="form-section">
                    <label for="email">Email Address</label>
                    <input class="form-input" name="email" placeholder="email address" type="email">
                </div>
            
                <div class="form-section">
                    <label for="password">Password</label>
                    <input class="form-input" placeholder="password" type="password">
                </div>


                <div class="form-issues">
                    <p><input type="checkbox">Remember details</p>
                    <p>Forgot password?</p>
                </div>

                <button class="form-btn">Sign in <i class="bi bi-download"></i></button>
                <p class="form-end">Don't have account yet? <a href="#Signup">Sign up</a></p>
                </div>
            </div>
    </div>
        <div class="rightSide">
            <div class="ima"><img style="width: 400px;" src="../components/Logos_icons/techZoneVertical.png"></div>
        </div>  
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style>
    .topLeftImage{
        width: 100%;
    }
    .subDiv{
        height: 100%;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .brand-img{
        width: 150px;
    }
</style>