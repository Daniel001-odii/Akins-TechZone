<template>
    <div>
        <nav class="bg-white w-full shadow p-2" >
            <div style="margin: 0 auto;" class="flex flex-col justify-between items-start md:items-center text-left md:flex-row max-w-screen-2xl">
                <div class="flex flex-row justify-between items-center w-full md:w-auto">
                    <SiteLogo/>
                    <button  @click="nav_visible = !nav_visible" class=" flex font-bold inline-block text-lg md:hidden">
                        <i v-if="!nav_visible" class="bi bi-list"></i>
                        <i v-if="nav_visible" class="bi bi-x-lg"></i>
                    </button>
                </div>

            
                <!-- <div  :class="nav_visible ? 'sm:block':'sm:hidden'" class="flex gap-12 flex-col mt-12 md:flex-row md:gap-8 md:mt-0"> -->
                <div :class="nav_visible ? 'flex':'hidden'" class="md:flex px-8 flex-col mt-8 md:flex-row md:gap-8 md:mt-0">
                    <RouterLink to="/" class="nav_link">
                        Home
                    </RouterLink>

                    <RouterLink to="/" class="nav_link">
                        Find Job
                    </RouterLink>

                    <RouterLink to="/" class="nav_link">
                        Post Job
                    </RouterLink>

                    <RouterLink to="/" class="nav_link">
                        Browse Categories
                    </RouterLink>
                </div>

                <div :class="nav_visible ? 'flex':'hidden'" class="mt-5 mb-8 px-8 flex justify-self-end md:flex gap-3 md:m-0">
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

    .nav_link{
        @apply p-3 rounded-md hover:bg-light_blue text-blue font-medium hover:font-bold;
    }
</style>