<template>
    <div>
        <nav class="bg-white w-full shadow-md p-2" >
            <div style="margin: 0 auto;" class="flex flex-col justify-between items-center md:flex-row max-w-screen-2xl">
                <div class="flex flex-row justify-between items-center w-full md:w-auto">
                    <SiteLogo/>
                    <div class=" flex font-bold inline-block text-lg cursor-pointer md:hidden">
                        <span @click="nav_visible = !nav_visible">
                        <i class="bi bi-list"></i>
                    </span>
                    </div>
                </div>

            
                <div  :class="nav_visible ? 'hidden':'block'" class="flex gap-12 flex-col mt-12 md:flex-row md:gap-8 md:mt-0">
                    <div>
                        Home
                    </div>

                    <div>
                        Find Job
                    </div>

                    <div>
                        Post Job
                    </div>

                    <div>
                        Browse Categories
                    </div>
                </div>

                <div  :class="nav_visible ? 'hidden':'block'" class=" mt-5 flex justify-self-end borde gap-1 md:m-0">
                    <button class="btn rounded-md text-blue bg-white hover:bg-light_blue">Login</button>
                    <button class="btn rounded-md bg-blue hover:bg-dark_blue text-white">Sign Up</button>
                </div>
            </div>
            
        </nav>
    </div>
</template>
<script>
import SiteLogo from './SiteLogo.vue';

export default {
    name: "Navbar",
    data() {
        return {
            nav_visible: false,
        };
    },
    components: { SiteLogo }
}
</script>
<style scoped>

    *{
        @apply text-2xl
    }
    .btn{
        @apply px-5 py-2 font-bold;
    }
</style>