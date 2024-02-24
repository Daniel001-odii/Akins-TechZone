<template>
    <div>
        <div class=" w-52 border absolute bg-white top-10 right-0 rounded-lg p-3 hidden group-hover:block z-10">
            <div class="flex flex-col text-left gap-1">
                <div @click="sub_items = !sub_items" class="menu_item flex flex-row justify-between">
                    <span>{{ username }} <br/> 
                        <span class="text-blue text-sm">{{ email }}</span>
                </span>
                    <i :class="sub_items ? 'bi bi-caret-up-fill':'bi bi-caret-down-fill'"></i>
                </div>
                <div v-if="sub_items">
                    <RouterLink to="/profile">
                        <div class="menu_item"><i class="bi bi-person"></i>My Profile</div>
                    </RouterLink>

                    <RouterLink to="/jobs/applications">
                        <div class="menu_item"><i class="bi bi-sticky"></i> My Applications</div>
                    </RouterLink>
                    
                    <div class="menu_item"><i class="bi bi-compass"></i> Overview</div>
                    <div class="menu_item"><i class="bi bi-cash-stack"></i> Earnings</div>
                    <div class="menu_item"><i class="bi bi-gear"></i> Settings</div>
                </div>
              
                <div class="menu_item"><i class="bi bi-question-circle"></i> Help & Support</div>
                <div class="menu_item"><i class="bi bi-box-arrow-right"></i> Logout</div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "UserDropDownMenu",
    props: {
        username: String,
        email: String,
    },
    data(){
        return{
            sub_items: false,
        }
    }
}
</script>
<style scoped>
    .menu_item{
        @apply hover:bg-light_blue p-3 rounded-md
    }
</style>