<template>

<DotLoader v-if="isLoading"/>

<div class="composite_modal_bg" v-if="userModal">
    <div class="composite_modal">
        <h3 style="padding: 10px; margin-right: 20px;">Techzone Users </h3>
        <div class="modal_options">
            <form class="d-flex" role="search">
                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                <button class="btn btn-outline-success" type="submit">Search</button>
            </form>
            <button class="btn btn-primary"><i class="bi bi-pencil-fill"></i> Edit</button>
        </div>
        <span  @click="userModal = !userModal" class="close_btn">&times;</span>
        <div class="composite_modal_inner">
            <table class="tz_table">
                <thead class="">
                    <tr>
                        <th>S/N</th>
                        <th class="sticky_due">Name</th>
                        <th>Email</th>
                        <th>Title</th>
                        <th>Location</th>
                        <th>Phone</th>
                        <th>Joined</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(user, index) in records.details.users" :key="index" c>
                    <th scope="row">{{ index }}</th>
                    <td class="sticky_due"><span @click="seeUser(user._id)"><img class="user_image" :src="user.profile.profileImage"> {{ user.firstname }} {{ user.lastname }}</span> <i v-if="user.isVerified" style="color: blue" class="bi bi-patch-check-fill"></i></td>
                    <td>{{user.email}}</td>
                    <td>{{user.profile.skillTitle}}</td>
                    <td>{{user.profile.location}}</td>
                    <td>{{user.profile.phone}}</td>
                    <td> {{formatTimestamp(user.created)}}</td>
                    <td>
                        <div class="dropdown">
                            <a class="btn btn-primary dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Action
                            </a>

                            <ul class="dropdown-menu">
                                <li>view profile</li>
                                <li>Hold account</li>
                                <li style="background: red;">Delete user</li>
                            </ul>
                        </div>
                    </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</div>


<div class="composite_modal_bg" v-if="employerModal">
<div class="composite_modal">
    <h3 style="padding: 10px; margin-right: 20px;">Techzone Employers </h3>
        <div class="modal_options">
            <form class="d-flex" role="search">
                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                <button class="btn btn-outline-success" type="submit">Search</button>
            </form>
            <button class="btn btn-primary"><i class="bi bi-pencil-fill"></i> Edit</button>
        </div>
    <span @click="employerModal = !employerModal" class="close_btn">&times;</span>
    <div class="composite_modal_inner">
        <table class="tz_table">
            <thead class="">
                <tr>
                    <th>S/N</th>
                    <th class="sticky_due">Name</th>
                    <th>Email</th>
                    <th>Title</th>
                    <th>Location</th>
                    <th>Phone</th>
                    <th>Joined</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(user, index) in records.details.employers" :key="index" c>
                <th scope="row">{{ index }}</th>
                <td class="sticky_due"><span @click="seeClient(user._id)"><img class="user_image" :src="user.profile.profileImage"> {{ user.firstname }} {{ user.lastname }}</span> <i v-if="user.isVerified" style="color: blue" class="bi bi-patch-check-fill"></i></td>
                <td>{{user.email}}</td>
                <td>{{user.profile.skillTitle}}</td>
                <td>{{user.profile.location}}</td>
                <td>{{user.profile.phone}}</td>
                <td> {{formatTimestamp(user.created)}}</td>
                </tr>
            </tbody>
        </table>
    </div>
</div>
</div>

<div class="composite_modal_bg" v-if="jobModal">
<div class="composite_modal">
    <h3 style="padding: 10px; margin-right: 20px;">Techzone Jobs </h3>
        <div class="modal_options">
            <form class="d-flex" role="search">
                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                <button class="btn btn-outline-success" type="submit">Search</button>
            </form>
            <button class="btn btn-primary"><i class="bi bi-pencil-fill"></i> Edit</button>
        </div>
    <span @click="jobModal = !jobModal" class="close_btn">&times;</span>
    <div class="composite_modal_inner">
        <!-- {{records.details.jobs}} -->
        <table class="tz_table">
            <thead class="">
                <tr>
                    <th>S/N</th>
                    <th class="sticky_due">title</th>
                    <th>date posted</th>
                    <th>is completed</th>
                    <th>Employer</th>
                    <th>Budget</th>
                    <th>type</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(job, index) in records.details.jobs" :key="index" c>
                <th scope="row">{{ index }}</th>
                <td>{{job.job_title}}</td>
                <td>{{formatTimestamp(job.created_at)}}</td>
                <td>{{job.isCompleted}}</td>
                <td>{{job.employer}}</td>
                <td>{{job.budget}}</td>
                <td>{{job.period}}</td>
                <td>
                    <div class="dropdown">
                            <a class="btn btn-primary dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Action
                            </a>

                            <ul class="dropdown-menu">
                                <li>View Job</li>
                                <li style="color: red;">Delete job</li>
                            </ul>
                        </div>
                </td>
                <!-- <td>{{job.profile.location}}</td>
                <td>{{job.profile.phone}}</td>
                <td> {{formatTimestamp(job.created)}}</td> -->
                </tr>
            </tbody>
        </table>
    </div>
</div>
</div>

<div class="composite_modal_bg" v-if="adminModal">
<div class="composite_modal">
    <h3 style="padding: 10px; margin-right: 20px;">Techzone Administration </h3>
    <div class="modal_options">
            <form class="d-flex" role="search">
                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                <button class="btn btn-outline-success" type="submit">Search</button>
            </form>
            <button class="btn btn-primary"><i class="bi bi-pencil-fill"></i> Edit</button>
        </div>
    <span @click="adminModal = !adminModal" class="close_btn">&times;</span>
    <div class="composite_modal_inner">
        <!-- {{records.details.jobs}} -->
        <table class="tz_table">
            <thead class="">
                <tr>
                    <th>S/N</th>
                    <th class="sticky_due">Username</th>
                    <th>Role</th>
                    <th>Joined</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(job, index) in records.details.jobs" :key="index" c>
                <th scope="row">{{ index }}</th>
                <!-- <td>{{job.job_title}}</td> -->
                <!-- <td>{{formatTimestamp(job.created_at)}}</td> -->
                <!-- <td>{{job.isCompleted}}</td> -->
                <td>{{job.employer}}</td>
                <td>{{job.budget}}</td>
                <td>{{job.period}}</td>
                </tr>
            </tbody>
        </table>
    </div>
</div>
</div>



<div v-if="!isLoading" class="fitting">
        <h3 style="padding: 20px; background: #fff; border-radius: 10px;">Welcome, Admin</h3>

    <div class="fitting_second">

        <div class="tz_card" @click="userModal = !userModal">
            <i class="bi bi-people-fill"></i>
            <div class="tz_card_body">
                <span class="tz_card_title_main"><b>{{ records.users }}</b></span>
                <span class="tz_card_title">Registered Users</span>
            </div>
        </div>

        <div class="tz_card" @click="employerModal = !employerModal">
            <i class="bi bi-person-vcard-fill"></i>
            <div class="tz_card_body">
                <span class="tz_card_title_main"><b>{{ records.employers }}</b></span>
                <span class="tz_card_title">Registered Employers</span>
            </div>
        </div>

        <div class="tz_card" @click="jobModal = !jobModal">
            <i class="bi bi-briefcase-fill"></i>
            <div class="tz_card_body">
                <span class="tz_card_title_main"><b>{{ records.jobs }}</b></span>
                <span class="tz_card_title">Jobs posted</span>
            </div>
        </div>

        <!-- <div class="tz_card">
            <i class="bi bi-bell-fill"></i>
            <div class="tz_card_body">
                <span class="tz_card_title_main"><b>{{ records.Notifications }}</b></span>
                <span class="tz_card_title">User  notifications</span>
            </div>
        </div> -->

        <div class="tz_card" @click="adminModal = !adminModal">
            <i class="bi bi-key-fill"></i>
            <div class="tz_card_body">
                <span class="tz_card_title_main"><b>0</b></span>
                <span class="tz_card_title">Admin Users</span>
            </div>
        </div>
    </div>




</div>


</template>

<script>
  import { RouterLink, useRouter } from 'vue-router';
  import { reactive } from 'vue';
  import axios from 'axios';
  import DotLoader from '../components/DotLoader.vue'


    export default {
        components:{DotLoader},
        data(){
            return{
                isLoading: false,
                records: '',

                userModal:false,
                employerModal: false,
                jobModal: false,
                adminModal: false,
            }
        },
        methods:{
            getAllRecords(){
                    this.isLoading = true;
                    axios.get(`${this.api_url}/admin/open-sesame`).then(response => {
                        this.records = response.data;
                        this.isLoading = false;
                    }).catch(error => {
                        this.isLoading = false;
                        console.error(error);
                    })
                },

            formatTimestamp(timestamp) {
                const date = new Date(timestamp);
                const options = { year: "numeric", month: "long", day: "numeric" };
                return date.toLocaleDateString(undefined, options);
            },
            seeUser(user_id){
                this.$router.push(`/user/${user_id}`);
            },
            seeClient(user_id){
                this.$router.push(`/client/${user_id}`);
            },
        },
        created(){
            this.getAllRecords();
        },
    }
</script>

<style scoped>
*{
    /* font-size: 14px; */
}
.tz_card{
    padding: 12px;
    border-radius: 10px;
    background: #fff;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    gap: 20px;
    /* height: 120px; */
    min-width: 300px;
}

.tz_card:hover{
    background: #fbfbfb;
    /* box-shadow: 0px 1px 10px #e6e6e6; */
}

.tz_card_title{
    color: #838383;
}
.tz_card_title_main{
    font-size: 30px;
}
.tz_card_body{
    display: flex;
    flex-direction: column;
}








.bi{

    border-radius: 50%;
    height: 50px;
    width: 50px;

}
.bi-people-fill{
    color: blue;
    background: rgb(220, 220, 255);
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
}
.bi-person-vcard-fill{
    color: orange;
    background: rgb(255, 247, 232);
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
}
.bi-briefcase-fill{
    color: #008000;
    background: rgb(222, 255, 222);
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
}

.bi-bell-fill{
    color: purple;
    background: #ffe3ff;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
}
.bi-key-fill{
    color: red;
    background: #ffe5e5;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
}

.dropdown-menu > li{
    padding: 5px;
}
.dropdown-toggle{
    color: #fff !important;
}
.modal_options{
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    gap: 10px;
    padding: 10px;
}
    .fitting{
        padding: 20px;
        background-color: #efefef;
    }

    .fitting_second{
        display: flex;
        gap: 20px;
        flex-wrap: wrap;
    }
    .close_btn{
        font-size: 30px !important;
        cursor: pointer;
        position: absolute;
        right: 20px;

    }


    .composite_modal{
        position: absolute;
        display: flex;
        flex-direction: column;
        z-index: 99999;
        background: #fff;
        top: 200px;
        width: 100%;
        height: 100%;
        padding: 30px;
    }

    .composite_modal_bg{
        background: #0000007a;
        height: 100vh;
        position: absolute;
        width: 100%;
    }

    .composite_modal_inner{
        overflow-x: scroll;
        border-radius: 10px;
        background: #fff;
        padding: 10px;
    }
    .user_image{
        height: 50px;
        width: 50px;
        border-radius: 10%;
    }



    .sticky_dude{
        position: sticky;
        left: 5px;
    }

    table, td, th {
    border: none;
    padding: 5px;
    }
    tr:hover{
        background: #f7f7f7;
    }
    tr{
        border-top: 1px solid #efefef;
    }
    table{
        width: 1800px !important;
        border-collapse: collapse;
    }

</style>