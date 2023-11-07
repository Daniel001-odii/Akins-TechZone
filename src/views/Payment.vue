<template>
    <NavBar/>

<div class="body" :class="['theme-transition', { 'dark': themeStore.darkMode }]">
<div class="classic">
    <p class="tz_content_title">Payment</p>
    <div class="tz_content_row">
        <div class="tz_row_left">
        <div class="subtitle">Job Title & Description</div>
        <div class="tz_content_title">{{job.job_title}}</div>
        <div class="tz_content">
            {{job.job_description}}
        </div>
        </div>

        <div class="tz_row_right">
            <div class="subtitle">Payment Amount</div>
            <div class="tz_content_title" style="color: #42d642">NGN {{formatBudgetAmount(job.budget)}}</div>
            <div class="subtitle" style="margin-top: 10px;">Project type</div>
            <div class="tz_content_title">{{job.period}}</div>

            <div class="tz_user_frame">
                <div class="subtitle" style="margin-top: 10px;">Talent to Hire</div>
                <div class="talent_card">
                    <div ></div>
                    <img class="talent_dp" :src="imageUrl">
                    <div class="talent_username subtitle">{{userDetails.firstname}} {{userDetails.lastname}}</div>
                </div>
            </div>
        </div>
    </div>

    <form class="tz_content_col">
        <div class="tz_content_title">Payment Method</div>
        <div class="tz_pmt_col">
            <label class="tz_pmt" for="pmt">
            <div class="pmt_container">
                <div class="pmt_logo">
                    <svg width="46" height="33" viewBox="0 0 46 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M22.9053 22.4816C21.3266 23.8124 19.2787 24.6157 17.0409 24.6157C12.0478 24.6157 8 20.6161 8 15.6824C8 10.7486 12.0478 6.74902 17.0409 6.74902C19.2787 6.74902 21.3266 7.55235 22.9053 8.88308C24.484 7.55235 26.5319 6.74902 28.7697 6.74902C33.7628 6.74902 37.8106 10.7486 37.8106 15.6824C37.8106 20.6161 33.7628 24.6157 28.7697 24.6157C26.5319 24.6157 24.484 23.8124 22.9053 22.4816Z" fill="#ED0006"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M22.9053 22.4816C24.8492 20.8431 26.0818 18.405 26.0818 15.6824C26.0818 12.9598 24.8492 10.5216 22.9053 8.88308C24.484 7.55235 26.5319 6.74902 28.7697 6.74902C33.7628 6.74902 37.8106 10.7486 37.8106 15.6824C37.8106 20.6161 33.7628 24.6157 28.7697 24.6157C26.5319 24.6157 24.484 23.8124 22.9053 22.4816Z" fill="#F9A000"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M22.905 22.4813C24.8489 20.8428 26.0815 18.4047 26.0815 15.6821C26.0815 12.9595 24.8489 10.5214 22.905 8.88281C20.9611 10.5214 19.7285 12.9595 19.7285 15.6821C19.7285 18.4047 20.9611 20.8428 22.905 22.4813Z" fill="#FF5E00"/>
                    </svg>
                </div>
                <div class="pmt_details">
                    <div class="pmt_title">Mastercard ending in 1234</div>
                    <div class="pmt_expiry">Expiry 06/2024</div>
                    <div class="pmt_setting">Set as default <span class="pmt_edit">Edit</span></div>
                </div>
            </div>
                <input type="radio" id="pmt" name="pmt_select">

            </label>
            <label class="tz_pmt" for="pmt2">
            <div class="pmt_container">
                <div class="pmt_logo">
                    <svg width="46" height="33" viewBox="0 0 46 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M14.3341 21.1861H11.5877L9.52833 13.0983C9.43058 12.7263 9.22304 12.3974 8.91774 12.2423C8.15584 11.8528 7.31628 11.5427 6.40039 11.3864V11.075H10.8245C11.4351 11.075 11.893 11.5427 11.9694 12.086L13.0379 17.92L15.7829 11.075H18.4529L14.3341 21.1861ZM19.9794 21.1861H17.3857L19.5214 11.075H22.1151L19.9794 21.1861ZM25.4707 13.8761C25.547 13.3315 26.0049 13.0201 26.5392 13.0201C27.3788 12.9419 28.2933 13.0983 29.0565 13.4865L29.5145 11.3095C28.7512 10.9982 27.9117 10.8418 27.1498 10.8418C24.6324 10.8418 22.8007 12.2423 22.8007 14.1861C22.8007 15.6648 24.0982 16.4413 25.0141 16.909C26.0049 17.3754 26.3865 17.6868 26.3102 18.1532C26.3102 18.8528 25.547 19.1642 24.7851 19.1642C23.8692 19.1642 22.9533 18.931 22.1151 18.5414L21.6571 20.7197C22.573 21.108 23.5639 21.2643 24.4798 21.2643C27.3024 21.3412 29.0565 19.942 29.0565 17.8418C29.0565 15.1971 25.4707 15.0421 25.4707 13.8761ZM38.1337 21.1861L36.0743 11.075H33.8623C33.4043 11.075 32.9464 11.3864 32.7937 11.8528L28.9802 21.1861H31.6502L32.1831 19.7088H35.4637L35.769 21.1861H38.1337ZM34.2439 13.7979L35.0058 17.6086H32.8701L34.2439 13.7979Z" fill="#172B85"/>
                    </svg>
                </div>
                <div class="pmt_details">
                    <div class="pmt_title">Visa ending in 1234</div>
                    <div class="pmt_expiry">Expiry 06/2024</div>
                    <div class="pmt_setting">Set as default <span class="pmt_edit">Edit</span></div>
                </div>
            </div>
                <input type="radio" id="pmt2" name="pmt_select">

            </label>
        </div>
        <div class="tz_new_pmt">
            <p><i class="bi bi-plus-circle"></i> Add a payment method</p>
        </div>

        <button class="escrow_btn cust-btn" style="background: #42d642 !important; border-radius: 5px;">Pay to Escrow</button> <br/>
        <div>
            <div class="rel" style="position: relative;">
                <a href="https://escrow.com" target="_blank">
                <div class="escrow_popup">
                    <div class="esc_title"><i class="bi bi-info-circle-fill"></i> Learn more about Escrow</div>
                </div>
                </a>
                <i class="bi bi-question-circle about_esc"></i>
            </div>
            </div>
    </form>
</div>




</div>

    <footer>
        <Footer/>
    </footer>
</template>

<script>
import NavBar from '../components/NavBar.vue'
import Footer from '../components/Footer.vue'
import themeStore from '@/theme/theme';
import axios from 'axios';

const api_url = "https://techzoneapp.herokuapp.com/api/jobs";

    export default {
        components:{NavBar, Footer},
        setup(){
                // Accessing themeStore properties and methods
                  const toggleTheme = themeStore.toggleTheme;
                  return{
                      themeStore,
                      toggleTheme,
                  };
          },

        data(){
            return{
                job: '',
                user: '',
                userDetails: '',
                imageUrl: '',
            }
        },
        methods: {
            fetchJobListings() {
                const jobId = this.$route.params.job_id;
                // console.log(this.$route.params.job_id);


                axios.get(`${this.api_url}/jobs/${jobId}`)
                    .then(response => {
                        // this.data.push(response.data.job);
                        this.job = response.data.job;
                        // console.log("currrent job in view: ", this.job);
                    })
                    .catch(error => {
                    console.error(error);
                    })
                    .finally(() => {
                    this.isLoading = false;
                    });
                },
            getUserById(id) {
                this.isLoading = true;
                    axios.get(`${this.api_url}/get-info/${id}`)
                        .then(response => {
                            if(response.data.user){
                                this.userDetails = response.data.user;
                                this.imageUrl = this.userDetails.profile.profileImage;
                            }
                            })
                            .catch(error => {
                            console.error('Error fetching user or employer details:', error);
                            this.isLoading = false;
                                        // Handle errors
                        });
            },
            formatBudgetAmount(value){
                    const formattedValue = new Intl.NumberFormat('en-US').format(value);
                    return formattedValue;
                },
        },

    beforeMount(){
        this.fetchJobListings();
        this.getUserById(this.$route.params.user_id);
    }

    }
</script>

<style scoped>
*{
    font-size: 0.9rem;

}
.body{
    padding-top: 50px;
    padding-bottom: 50px;
    background: transparent;
}

.classic{
    width: 80%;
    margin: 0 auto;
    /* border: 1px solid red; */
}
.tz_content_row{
    padding: 20px;
    background: #fff;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: left;
    flex-wrap: wrap;
    gap: 20px;
}

.tz_row_left{
    width: 70%;
}

.subtitle{
    font-weight: lighter;
    font-size: 0.8em;
}
.tz_content_title{
    font-size: 1.2em;
    font-weight: bold;
    padding: 10px 0px;
}
.tz_content{
    font-size: 0.8em;
    width: 100%;
}

.tz_content_col{
    margin-top: 20px;
    margin-bottom: 20px;
    display: flex;
    flex-direction: column;
}

.talent_card{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 10px;
    /* border: 1px solid var(--app-grey); */
    padding: 10px 0px;
    cursor: pointer;
    /* border-radius: 30px; */
}
.talent_card:hover{
    /* background: var(--accent-dark); */
    /* border: 1px solid var(--app-grey); */
}
.talent_dp{
    height: 35px;
    width: 35px;
    border-radius: 50%;
    /* background: url('../components/Logos_icons/dummy_user.png');
    background-size: cover;
    background-repeat: no-repeat; */
}


.tz_pmt{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    padding: 10px;
    border: 1px solid var(--app-grey);
    border-radius: 10px;
    background: #fff;
    max-width: 1000px;
}
.tz_pmt:hover{
    border: 2px solid var(--app-blue);
    transition-duration: 0.2s;
}
.pmt_container{
    display: flex;
    flex-direction: row;
}
.pmt_edit{
    color: var(--app-blue);
    cursor: pointer;
}
.tz_pmt_col{
    display: flex;
    flex-direction: column;
    gap: 10px;
}
.tz_new_pmt{
    padding: 10px 0px;
    cursor: pointer;
}

.selected{
    background: #F9F5FF;
}
.escrow_btn{
    justify-self: flex-end;
    align-self: flex-end;
}

.escrow_popup{
    border: 1px solid var(--app-grey);
    display: flex;
    width: 200px;
    border-radius: 8px;
    padding: 10px;
    position: absolute;
    top: -50px;
    /* display: none; */
}
.esc_title{
    font-size: 0.7rem !important;
}
.about_esc{
    cursor: pointer;
}
.bi-question-circle :hover .escrow_popup {
    display: none;
}




.dark .tz_content_row{
    background: var(--accent-dark);
}
.dark .tz_pmt{
    background: var(--accent-dark);
}

    @media only screen and (max-width: 720px) {
.tz_content_row{
    justify-content: left;
}
    }

    @media only screen and (max-width: 1000px) {

    }
</style>