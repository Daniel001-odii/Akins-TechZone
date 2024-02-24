<template>
    <div class=" h-screen">
        <Navbar :type="'app'" @toggle-nav="nav_active = !nav_active"/>
        <div class=" h-full flex flex-col md:flex-row">
            <LeftNavBar  :class="nav_active ? 'block':'hidden'" class="md:block" v-if="leftNav == true"/>
            <div class=" w-full flex flex-col">
                <div class="text-left p-5 text-3xl border-b flex items-center pl-3">
                    <span class="flex gap-5">
                        <button @click="$router.go(-1)">
                            <i class="bi bi-arrow-left"></i>
                        </button>
                       
                        <slot name="page-title">Work Explorer</slot>
                    </span>
                </div>

                <div class="flex flex-col">
                    <slot name="page-contents">
                         Page contents here...
                    </slot>
                   
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import LeftNavBar from '@/components/LeftNavBar.vue';
import Navbar from '@/components/Navbar.vue';
import SiteLogo from '@/components/SiteLogo.vue';
import UserDropDownMenu from '@/components/UserDropDownMenu.vue'

export default {
    name: "TemplateView",
    components: { SiteLogo, UserDropDownMenu, Navbar, LeftNavBar },
    data(){
        return{
            nav_active: false,
        }
    },
    props: {
        leftNav: Boolean,
    }
}
</script>
<style scoped>
 

</style>