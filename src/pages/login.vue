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
                    <div class="check-container">
                        <div class="checkbox-wrapper-46">
                            <input class="inp-cbx" id="rememberDetails" type="checkbox"/>
                            <label class="cbx" for="rememberDetails">
                            <span>
                                <svg width="12px" height="10px" viewbox="0 0 12 10"><polyline points="1.5 6 4.5 9 10.5 1"></polyline></svg>
                            </span>
                            <span>Remember Details</span>
                            </label>
                        </div>
                    </div>
                    <p>Forgot password?</p>
                </div>

                <RouterLink to="/"><button class="form-btn">Sign in <i class="bi bi-download"></i></button></RouterLink>
                <div style="font-size: 0.8em; display: flex; flex-direction: row; padding: 20px; justify-content: center;">
                <p class="form-en">Don't have account yet?</p>
                <div class="dropdown" style="padding-left: 10px;">
                            <p href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" style="color: blue">Sign Up</p>
                                <ul class="dropdown-menu">
                                    <li> <RouterLink class="dropdown-item" to="/signUp-employer">As Employer</RouterLink></li>
                                    <li><RouterLink class="dropdown-item" to="/signUp">As Talent</RouterLink></li>
                                </ul>
                </div>
                </div>

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