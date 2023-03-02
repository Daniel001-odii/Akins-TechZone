<template>
    <div class="form-container">
        <div class="leftSide">
            <div class="topLeftImage">
                <RouterLink to="/"><img class="brand-img" src="../components/Logos_icons/techzone.png"></RouterLink>
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

                <RouterLink to="/"><button class="form-btn">Sign in <i class="bi bi-download"></i></button></RouterLink>
                <p class="form-end">Don't have account yet? <RouterLink to="/signUp">Sign up</RouterLink></p>
                </div>
            </div>
    </div>
        <div class="rightSide">
            <div class="ima"><img style="width: 250px;" src="../components/Logos_icons/techZoneVertical.png"></div>
        </div>  
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style>
   
</style>