<template>
    <div class="form-container">
        <div class="leftSide">
            <div class="topLeftImage">
                <a href='/#'><img class="brand-img" src="../components/Logos_icons/techzone.png"></a>
            </div>

            <div class="subDiv">
                <div class="left-content">
                <h2 style="font-weight: bolder;">Welcome Back!</h2>
                <p>Please enter your login details</p>

                <div class="form-section" style="flex-direction: row;">
                    <div class="name-section">
                        <label for="name">First Name</label>
                        <input class="form-input" name="name" placeholder="First Name" type="name">
                    </div>
                    <div class="name-section">
                        <label for="Last Name">Last Name</label>
                        <input class="form-input" placeholder="Last Name" type="name">
                    </div>
                </div>
            
                <div class="form-section">
                    
                </div>

                <div class="form-section">
                    <label for="email">Email Address</label>
                    <input class="form-input" placeholder="Email here" type="email">
                </div>

                <div class="form-section">
                    <label for="Last Name">Password</label>
                    <input class="form-input" placeholder="Enter your password" type="password">
                </div>

                <div class="form-section">
                    <label for="passconfirm">Confirm Password</label>
                    <input class="form-input" placeholder="Enter your password" type="name" name="passconfirm">
                </div>

                <div class="form-section">
                    <button class="form-btn">Sign Up <i class="bi bi-upload"></i></button>
                </div>

                <p class="form-end"> Already have an account? <a href="#Signup">Sign in</a></p>
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

<style scoped>

</style>