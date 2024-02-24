<template>
    <div>
        <TemplateView :leftNav="false">
            <template #page-title>Profile</template>
            <template #page-contents>
                <div class="p-8">
                    <div class=" flex flex-col items-center gap-8">

                        <div class="flex w-full rounded-xl justify-evenly items-start  flex-col md:flex-row p-4 md:p-8 lg:w-3/4 border">
                            <div class="flex flex-row justify-start md:justify-center items-center p-5 gap-3 flex-wrap">
                                <div class=" h-28 w-28 rounded-full border-4 border-blue"></div>
                                <div class="flex flex-col items-start">
                                    <h1 class="font-bold text-4xl">Bob Charlie</h1>
                                    <h2 class="text-xl text-gray-500">UI/UX Designer</h2>
                                    <p>xenithheight@gmail.com</p>
                                </div>
                            </div>
                            <div class="border"></div>
                            <div class=" flex flex-col items-start justify-center p-5">
                                <p>Email is not verified</p>
                                <p>Joined: February 2024</p>
                                <p>Location: Abule egba-lagos, Nig.</p>
                                <div class="flex flex-row flex-wrap gap-3 mt-3">
                                    <button class="btn">Edit Profile</button>
                                    <button class="btn_white">Resume</button>
                                </div>
                            </div>
                        </div>

                        <div class=" w-full lg:w-3/4">
                            <div class="border rounded-xl p-3 text-left">
                                <h1 class="font-bold"><i class="bi bi-person"></i> Profile</h1>
                            </div>

                            <div>
                                <div class="profile_section">
                                    <h2 class="font-bold">About Me</h2>
                                    <div>
                                        Lorem Ipsum Goes here...
                                    </div>
                                </div>

                                <div class="profile_section">
                                    <h2 class="font-bold">Skills</h2>
                                    <div>
                                        Lorem Ipsum Goes here...
                                    </div>
                                </div>

                                <div class="profile_section">
                                    <h2 class="font-bold">Phone Number</h2>
                                    <div>
                                        Lorem Ipsum Goes here...
                                    </div>
                                </div>

                                <div class="profile_section">
                                    <h2 class="font-bold">Email Address</h2>
                                    <div>
                                        Lorem Ipsum Goes here...
                                    </div>
                                </div>

                                <div class="profile_section">
                                    <h2 class="font-bold">Connected Accounts</h2>
                                    <div>
                                        Lorem Ipsum Goes here...
                                    </div>
                                </div>


                                <div class="profile_section">
                                    <h2 class="font-bold">Date Joined</h2>
                                    <div>
                                        Lorem Ipsum Goes here...
                                    </div>
                                </div>

                            </div>
                        </div>

                        <div class=" w-full lg:w-3/4">
                            <div class="border rounded-xl p-3 text-left">
                                <h1 class="font-bold"><i class="bi bi-briefcase"></i> Work History</h1>
                            </div>

                            <div class="profile_section">
                                <h2 class="font-bold">Completed Jobs</h2>
                                <div>
                                    <div class="flex flex-col overscroll-y-scroll" v-for="saved in 2">
                                        <JobReviewCard/>
                                    </div>
                                </div>
                            </div>

                            <div class="profile_section">
                                <h2 class="font-bold">Assgined Jobs</h2>
                                <div>
                                    <div class="flex flex-col overscroll-y-scroll" v-for="saved in 1">
                                        <JobReviewCard/>
                                    </div>
                                </div>
                            </div>

                            <div class="profile_section">
                                <h2 class="font-bold">Declined Jobs</h2>
                                <div>
                                    <div class="flex flex-col overscroll-y-scroll" v-for="saved in 2">
                                        <JobReviewCard/>
                                    </div>
                                </div>
                            </div>

                        </div>
                        
                    </div>
                </div>
            </template>
        </TemplateView>
    </div>
</template>
<script>
import Navbar from '@/components/Navbar.vue';
import TemplateView from './TemplateView.vue';
import JobReviewCard from '@/components/JobReviewCard.vue'

export default {
    name: "ProfilePage",
    components: { Navbar, TemplateView, JobReviewCard }
}
</script>
<style scoped>
    .profile_section{
        @apply text-left p-3 mt-5
    }
</style>