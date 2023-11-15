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
            <div>
                Records perpage
                <select v-model="itemsPerPage" @change="getAllRecords">
                    <option>5</option>
                    <option>8</option>
                    <option>10</option>
                </select>
            </div>

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
                    <!-- {{ records.details.users }} -->
                    <!-- <tr v-for="(user, index) in records.details.users" :key="index"> -->
                    <tr v-for="(user, index) in paginatedDisplay(users)" :key="index">

                    <th scope="row">{{ user.serialNo }}</th>
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
                                <li @click="seeUser(user._id)">view profile</li>
                                <li>Hold account</li>
                                <li style="color: red;">Delete user</li>
                            </ul>
                        </div>
                    </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div class="btn_control">
            <button class="btn btn-primary" @click="prevPage" :disabled="currentPage === 1"><i class="bi bi-caret-left-fill"></i></button>
            <button class="btn btn-primary" @click="nextPage" :disabled="currentPage === totalPages"><i class="bi bi-caret-right-fill"></i></button>
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
            <div>
                Records perpage
                <select v-model="itemsPerPage" @change="getAllRecords">
                    <option>5</option>
                    <option>8</option>
                    <option>10</option>
                </select>
            </div>
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
                <tr v-for="(user, index) in paginatedDisplay(employers)" :key="index">
                <th scope="row">{{ user.serialNo }}</th>
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
    <div class="btn_control">
        <button class="btn btn-primary" @click="prevPage" :disabled="currentPage === 1"><i class="bi bi-caret-left-fill"></i></button>
            <button class="btn btn-primary" @click="nextPage" :disabled="currentPage === totalPages"><i class="bi bi-caret-right-fill"></i></button>
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
    <div class="admin_modal"  v-if="adminSignUpModal">
        <div class="create_admin_modal" style="width: 500px; background: #fff; padding: 20px;">
            <span class="close_btn" @click="adminSignUpModal = !adminSignUpModal">&times;</span>
            <form class="new_user_form" @submit.prevent="registerNewAdmin">
                <h2>Register <br/>a new administrative user</h2>
                <div v-if="errors" class="alert alert-danger">{{ errors.message }}</div>
            <div class="form-group">
                <label for="firstname">firstname</label>
                <input type="name" class="form-control" id="firstname" v-model="newAdmin.firstname" placeholder="firstname">
                <br/>
                <label for="lastname">lastname</label>
                <input type="name" class="form-control" id="lastname"  v-model="newAdmin.lastname" placeholder="lastname">
            </div>
            <div class="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"  v-model="newAdmin.email" placeholder="Enter email">
                <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div class="form-group">
                <label for="exampleInputPassword1">Password</label>
                <input type="password" class="form-control" id="exampleInputPassword1"  v-model="newAdmin.password" placeholder="Password">
            </div>
            <div class="form-group">
                <label for="exampleFormControlSelect1">Administrative Role</label>
                <select class="form-control" id="exampleFormControlSelect1"  v-model="newAdmin.role">
                    <option>Manager</option>
                    <option>Moderator</option>
                    <option>TeamLead</option>
                    <option>TeamMember</option>
                </select>
            </div>
            <button @click="registerNewAdmin" class="btn btn-primary" :disabled="formIsLoading">Register Admin</button>
            </form>
        </div>
    </div>


<div class="composite_modal">
    <h3 style="padding: 10px; margin-right: 20px;">Techzone Administration [{{ records.administrators }}]</h3>
    <div class="modal_options">
            <form class="d-flex" role="search">
                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                <button class="btn btn-outline-success" type="submit">Search</button>
            </form>
            <button class="btn btn-primary"><i class="bi bi-pencil-fill"></i> Edit</button>
            <button class="btn btn-primary" @click="adminSignUpModal = !adminSignUpModal">+ add new administrator</button>
        </div>
    <span @click="adminModal = !adminModal" class="close_btn">&times;</span>
    <div class="composite_modal_inner">
        <!-- {{records.details.administrators}} -->
        <table class="tz_table">
            <thead class="">
                <tr>
                    <th>S/N</th>
                    <th class="sticky_due">Username</th>
                    <th>Role</th>
                    <th>ID Number</th>
                    <th>Joined</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>

                <tr v-for="(admin, index) in records.details.administrators" :key="index" c>
                <th scope="row">{{ index }}</th>
                    <td>{{admin.firstname}} {{admin.lastname}}</td>
                    <td>{{admin.role}}</td>
                    <td>{{admin._id}}</td>
                    <td>{{formatTimestamp(admin.created)}}</td>
                    <td>
                        <div class="dropdown">
                            <a class="btn btn-primary dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Action</a>
                            <ul class="dropdown-menu">
                                <li>edit</li>
                                <li style="color: red;">Delete</li>
                            </ul>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</div>
</div>

<div class="composite_modal_bg" v-if="settingsModal">
<div class="composite_modal">
    <h2 style="padding: 10px; margin-right: 20px;">Administrative account settings</h2>
    <span @click="settingsModal = !settingsModal" class="close_btn">&times;</span>
    <!-- <input class="form-control" type="email" placeholder="email" v-model="adminProfile.email">
    <input class="form-control" type="name" v-model="adminProfile.firstname"> -->
    <div class="create_admin_modal" style="border: none; padding: 0px !important;">
            <!-- <span class="close_btn" @click="adminSignUpModal = !adminSignUpModal">&times;</span> -->
            <form class="new_user_form" @submit.prevent="updateAdminProfile">
                <!-- <h2>Register <br/>a new administrative user</h2> -->
                <div v-if="errors" class="alert alert-danger">{{ errors.message }}</div>
            <div class="form-group">
                <label for="firstname">firstname</label>
                <input type="name" class="form-control" id="firstname" v-model="adminProfile.firstname" placeholder="firstname">
                <br/>
                <label for="lastname">lastname</label>
                <input type="name" class="form-control" id="lastname"  v-model="adminProfile.lastname" placeholder="lastname">
            </div>
            <div class="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"  v-model="adminProfile.email" placeholder="Enter email">
                <!-- <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small> -->
            </div>
            <!-- <div class="form-group">
                <label for="exampleInputPassword1">Password</label>
                <input type="password" class="form-control" id="exampleInputPassword1"  v-model="newAdmin.password" placeholder="Password">
            </div> -->
            <button @click="updateAdminProfile" class="btn btn-primary" :disabled="formIsLoading">save</button>
            </form>
        </div>
</div>

</div>

<div class="admin_nav_right">
    <div>{{ userDetails.role }} | <span style="color:red; cursor: pointer;" @click="logout">Logout <i class="bi bi-box-arrow-right"></i></span></div>
    <div style="color: blue"> {{ userDetails.email }}</div>
</div>

<div v-if="!isLoading" class="fitting">
    <!-- {{ records }} -->

    <div class="admin_nav">
        <div>
            <h3><b>Hi {{userDetails.firstname}} {{ userDetails.lastname }}, Welcome.</b></h3>
            <p>Welcome to the techzone administration panel.
                <br/>
                you can view different records from the database by clicking on the tabs below.
            </p>
        </div>

        <img style="height: 200px;" src="../assets/imgs/dashboard.png">
    </div>



    <div class="fitting_second">

        <div class="tz_card" @click="userModal = !userModal" v-if="userDetails.role == 'Admin' || userDetails.role == 'Manager' ">
            <i class="bi bi-people-fill"></i>
            <div class="tz_card_body">
                <span class="tz_card_title_main"><b>{{ records.users }}</b></span>
                <span class="tz_card_title">Registered Users</span>
            </div>
        </div>

        <div class="tz_card" @click="employerModal = !employerModal" v-if="userDetails.role == 'Admin' || userDetails.role == 'Manager'">
            <i class="bi bi-person-vcard-fill"></i>
            <div class="tz_card_body">
                <span class="tz_card_title_main"><b>{{ records.employers }}</b></span>
                <span class="tz_card_title">Registered Employers</span>
            </div>
        </div>

        <div class="tz_card" @click="jobModal = !jobModal" v-if="userDetails.role == 'Admin' || userDetails.role == 'Manager' || userDetails.role == 'Moderator' || userDetails.role == 'TeamMember'">
            <i class="bi bi-briefcase-fill"></i>
            <div class="tz_card_body">
                <span class="tz_card_title_main"><b>{{ records.jobs }}</b></span>
                <span class="tz_card_title">Jobs posted</span>
            </div>
        </div>

        <div class="tz_card">
            <i class="bi bi-bell-fill"></i>
            <div class="tz_card_body">
                <span class="tz_card_title_main"><b>{{ records.Notifications }}</b></span>
                <span class="tz_card_title">All Users  notifications</span>
            </div>
        </div>

        <div class="tz_card" @click="adminModal = !adminModal" v-if="userDetails.role == 'Admin'">
            <i class="bi bi-key-fill"></i>
            <div class="tz_card_body">
                <span class="tz_card_title_main"><b>{{ records.administrators }}</b></span>
                <span class="tz_card_title">Admin Users</span>
            </div>
        </div>

        <div class="tz_card" @click="settingsModal = !settingsModal" v-if="userDetails.role == 'Admin'">
            <i class="bi bi-gear-fill"></i>
            <div class="tz_card_body">
                <span class="tz_card_title_main"><b>Settings</b></span>
                <span class="tz_card_title">current admin settings</span>
            </div>
        </div>
    </div>


<br/><br/>
<div class="fitting_second">

            <div class="tz_card" style="align-items: flex-start; width: 800px; padding: 30px; align-items: center; ;">
                <img src="../assets/imgs/single.png">
                <div class="tz_card_body">
                    <span class="tz_badge">New Updates</span>
                    <b>You can view profiles of registered users by clicking on the users profile name or profile image from the users page</b>
                    <p style="padding: 10px 0px; color: blue;">Updates incoming!</p>
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
                formIsLoading: false,
                records: '',

                users: '',
                employers: '',
                jobs: '',
                admins: '',
                adminProfile: {
                    email: '',
                    password: '',
                    firstname: '',
                    lastname: ''
                },

                userModal:false,
                employerModal: false,
                jobModal: false,
                adminModal: false,
                settingsModal: false,

                userDetails: '',
                adminSignUpModal: false,

                currentPage: 1,
                itemsPerPage: 5,

                errors: '',

                newAdmin: {
                    firstname: '',
                    lastname: '',
                    email: '',
                    role: '<option>Manager</option>',
                    password: '',
                }
            }
        },
        computed: {
            // paginatedDisplay(records){
            //     const startIndex = (this.currentPage - 1) * this.itemsPerPage;
            //     const endIndex = startIndex + this.itemsPerPage;
            //     return records.slice(startIndex, endIndex);
            // },
            totalPages(){
                return Math.ceil(this.records.details.users.length/this.itemsPerPage);
            }
        },
        methods:{
            nextPage(){
                if(this.currentPage < this.totalPages){
                    this.currentPage++;
                }
            },
            prevPage(){
                if(this.currentPage > 1){
                    this.currentPage--;
                }
            },
            paginatedDisplay(records){
                const startIndex = (this.currentPage - 1) * this.itemsPerPage;
                const endIndex = startIndex + this.itemsPerPage;
                return records.slice(startIndex, endIndex);
            },
            getAllRecords(){
                    this.isLoading = true;
                    axios.get(`${this.api_url}/admin/open-sesame`).then(response => {
                        this.records = response.data;

                        this.users = this.records.details.users;
                        this.employers = this.records.details.employers;
                        this.jobs = this.records.details.jobs;
                        this.admins = this.records.details.admins;
                        // the code below assigns a serial number to each user....

                        const assignSerial =(record)=>{
                            let SN = 0;
                            record.forEach(newRecord =>{
                            SN ++;
                            newRecord.serialNo = SN;
                        });
                        };
                        assignSerial(this.users);
                        assignSerial(this.employers);
                        assignSerial(this.jobs);
                        assignSerial(this.admins);
                        // this.users.forEach(user =>{
                        //     SN ++;
                        //     user.serialNo = SN;
                        // })
                        // console.log(this.users)

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
            getUserDetails() {
                const token = localStorage.getItem('token'); // Get the token from localStorage
                const user_url = `${this.api_url}/admin/get-details`; // Assuming user-info is the endpoint for user details

                // Set up headers with the token
                const headers = {
                    Authorization: `JWT ${token}`, // Assuming it's a JWT token
                };
                axios.get(user_url, { headers })
                    .then((response) => {
                    this.userDetails = response.data.user;
                    console.log(this.userDetails) // Assuming userDetails is a data property
                    this.isLoading = false;
                    })
                    .catch((error) => {
                    // Handle errors
                    console.error(error);
                    });
            },
            async registerNewAdmin() {
                this.formIsLoading = true;
                try {
                const response = await axios.post(`${this.api_url}/admin/register/user`, this.newAdmin);
                console.log(response.data);
                this.formIsLoading = false;
                this.adminSignUpModal = false;
                this.getAllRecords();
                alert("user registered!");
                } catch (error) {
                this.errors = JSON.parse(error.request.response);
                this.show_errors = true;
                this.formIsLoading = false;
                console.log(error.request.response);

                }
            },
            async updateAdminProfile(){
                    const token = localStorage.getItem('token'); // Get the token from localStorage
                    this.formIsLoading = true;
                    // Set up headers with the token
                    const headers = {
                        Authorization: `JWT ${token}`, // Assuming it's a JWT token
                    };
                        try {
                    const response = await axios.put(`${this.api_url}/admin/update/`, this.adminProfile, {headers});
                    console.log(response.data);
                    this.formIsLoading = false;
                    this.showError = true;

                } catch (error) {
                    console.log(error);

                }
            },

        logout(){
            localStorage.removeItem('token');
            this.$router.push('/site/login')
        }
        },
        created(){
            this.getAllRecords();
            this.getUserDetails();
        },
    }
</script>

<style scoped>
*{
    /* font-size: 14px; */
}

.admin_nav{
    padding: 20px 40px;
    background: #10076e;
    border-radius: 10px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
    color: #fff;
}

.admin_nav_right{
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    padding: 20px;
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

.admin_modal{
    display: flex;
    position: relative;
    background: #0000007a;
    height: 100vh !important;
    width: 100vw;
    z-index: 999999;
    justify-content: center;
    align-items: center;
}
.create_admin_modal > .close_btn {
    top: 0;
}
.create_admin_modal{
    border: 1px solid #efefef;
    border-radius: 10px;
    position: relative;
    padding: 20px !important;
}
.new_user_form{
    padding: 20px;
    gap: 15px;
    display: flex;
    flex-direction: column;
}


.tz_badge{
    padding: 10px;
    background: #d9d9ff;
    border-radius: 30px;
    color: blue;
    width: 150px;
    text-align: center;
    margin: 20px 0px;
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
.bi-gear-fill{
    color: rgb(0, 0, 0);
    background: #e1e1e1;
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
        height: 100%;
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
        height: 80%;
        padding: 30px;
    }

    .composite_modal_bg{
        background: #0000007a;
        height: 90% !important;
        position: fixed;
        width: 100%;
    }

    .composite_modal_inner{
        overflow-x: scroll;
        border-radius: 10px;
        background: #fff;
        padding: 10px;
        border: 1px solid #c7c7c7;
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


    .btn_control{
        display: flex;
        flex-direction: row;
        gap: 10px;
        padding: 10px 0px;
    }

</style>