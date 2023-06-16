<template>
    <NavBar/>
    <small>
        <div class="back-btn cust-btn" style="width: 100px; margin: 10px;">Back</div>
    </small>
    
    <div class="tz-profile-card">
            <div class="tz-profile-left">
                <div class="tz-user-thumbnail"></div>
                <div class="tz-user-details">
                    <p  class="tz-user-name">Bob Charlie</p>
                    <div class="tz-user-skill">UI/UX Designer</div>
                    <div class="tz-user-bio">Here, user gives a brief description about his/herself, more like a brief introduction.</div>
                    <div class="tz-btn-array">
                        <button class="cust-btn">Edit Profile</button>
                        <button class="cust-btn" style="border: 1px solid var(--app-blue); color: var(--app-blue); background: #fff;">View Resume</button>
                    </div>
                    

                </div>
            </div>
            <div class="section-divider"></div>
            <div class="tz-profile-right">
                <table style="width: 250px;">
                    <tbody>
                    <tr>
                        <td>Availability</td>
                        <td style="color: green">Active</td>
                    </tr>
                    <tr>
                        <td>Location</td>
                        <td>Lagos, Nigeria</td>
                    </tr>
                    <tr>
                        <td>Years of Experience</td>
                        <td>3</td>
                    </tr>
                    </tbody>
                </table>
                <div class="tz-user-socials">
                    <div class="tz-social">
                        <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 34 34" fill="none">
                        <circle cx="17.2215" cy="16.6102" r="16.6102" fill="#E0EAFF"/>
                        <g clip-path="url(#clip0_907_6705)">
                        <path d="M10.5766 9.13562H23.8647C24.085 9.13562 24.2962 9.22312 24.452 9.37887C24.6077 9.53462 24.6952 9.74586 24.6952 9.96613V23.2543C24.6952 23.4745 24.6077 23.6858 24.452 23.8415C24.2962 23.9973 24.085 24.0848 23.8647 24.0848H10.5766C10.3563 24.0848 10.1451 23.9973 9.98934 23.8415C9.83359 23.6858 9.74609 23.4745 9.74609 23.2543V9.96613C9.74609 9.74586 9.83359 9.53462 9.98934 9.37887C10.1451 9.22312 10.3563 9.13562 10.5766 9.13562ZM11.4071 10.7966V22.4238H23.0342V10.7966H11.4071ZM13.4834 14.1187C13.153 14.1187 12.8361 13.9874 12.6025 13.7538C12.3689 13.5202 12.2376 13.2033 12.2376 12.8729C12.2376 12.5425 12.3689 12.2256 12.6025 11.992C12.8361 11.7584 13.153 11.6271 13.4834 11.6271C13.8138 11.6271 14.1306 11.7584 14.3643 11.992C14.5979 12.2256 14.7291 12.5425 14.7291 12.8729C14.7291 13.2033 14.5979 13.5202 14.3643 13.7538C14.1306 13.9874 13.8138 14.1187 13.4834 14.1187ZM12.6529 14.9492H14.3139V21.178H12.6529V14.9492ZM17.2207 15.3063C17.7057 14.8371 18.2721 14.5339 18.8817 14.5339C20.6017 14.5339 21.7885 15.9283 21.7885 17.6483V21.178H20.1274V17.6483C20.1274 17.2629 19.9743 16.8932 19.7018 16.6206C19.4292 16.3481 19.0595 16.1949 18.6741 16.1949C18.2886 16.1949 17.9189 16.3481 17.6464 16.6206C17.3738 16.8932 17.2207 17.2629 17.2207 17.6483V21.178H15.5597V14.9492H17.2207V15.3063Z" fill="#2A3D59"/>
                        </g>
                        <defs>
                        <clipPath id="clip0_907_6705">
                        <rect width="19.9322" height="19.9322" fill="white" transform="translate(7.25586 6.64417)"/>
                        </clipPath>
                        </defs>
                        </svg>
                        <span>LinkedIn</span>
                    </div>
                    <div class="tz-social">
                        <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 34 34" fill="none">
                        <circle cx="17.2215" cy="16.6102" r="16.6102" fill="#E0EAFF"/>
                        <g clip-path="url(#clip0_907_6705)">
                        <path d="M10.5766 9.13562H23.8647C24.085 9.13562 24.2962 9.22312 24.452 9.37887C24.6077 9.53462 24.6952 9.74586 24.6952 9.96613V23.2543C24.6952 23.4745 24.6077 23.6858 24.452 23.8415C24.2962 23.9973 24.085 24.0848 23.8647 24.0848H10.5766C10.3563 24.0848 10.1451 23.9973 9.98934 23.8415C9.83359 23.6858 9.74609 23.4745 9.74609 23.2543V9.96613C9.74609 9.74586 9.83359 9.53462 9.98934 9.37887C10.1451 9.22312 10.3563 9.13562 10.5766 9.13562ZM11.4071 10.7966V22.4238H23.0342V10.7966H11.4071ZM13.4834 14.1187C13.153 14.1187 12.8361 13.9874 12.6025 13.7538C12.3689 13.5202 12.2376 13.2033 12.2376 12.8729C12.2376 12.5425 12.3689 12.2256 12.6025 11.992C12.8361 11.7584 13.153 11.6271 13.4834 11.6271C13.8138 11.6271 14.1306 11.7584 14.3643 11.992C14.5979 12.2256 14.7291 12.5425 14.7291 12.8729C14.7291 13.2033 14.5979 13.5202 14.3643 13.7538C14.1306 13.9874 13.8138 14.1187 13.4834 14.1187ZM12.6529 14.9492H14.3139V21.178H12.6529V14.9492ZM17.2207 15.3063C17.7057 14.8371 18.2721 14.5339 18.8817 14.5339C20.6017 14.5339 21.7885 15.9283 21.7885 17.6483V21.178H20.1274V17.6483C20.1274 17.2629 19.9743 16.8932 19.7018 16.6206C19.4292 16.3481 19.0595 16.1949 18.6741 16.1949C18.2886 16.1949 17.9189 16.3481 17.6464 16.6206C17.3738 16.8932 17.2207 17.2629 17.2207 17.6483V21.178H15.5597V14.9492H17.2207V15.3063Z" fill="#2A3D59"/>
                        </g>
                        <defs>
                        <clipPath id="clip0_907_6705">
                        <rect width="19.9322" height="19.9322" fill="white" transform="translate(7.25586 6.64417)"/>
                        </clipPath>
                        </defs>
                        </svg>
                        <span>LinkedIn</span>
                    </div>
                    <div class="tz-social">
                        <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 34 34" fill="none">
                        <circle cx="17.2215" cy="16.6102" r="16.6102" fill="#E0EAFF"/>
                        <g clip-path="url(#clip0_907_6705)">
                        <path d="M10.5766 9.13562H23.8647C24.085 9.13562 24.2962 9.22312 24.452 9.37887C24.6077 9.53462 24.6952 9.74586 24.6952 9.96613V23.2543C24.6952 23.4745 24.6077 23.6858 24.452 23.8415C24.2962 23.9973 24.085 24.0848 23.8647 24.0848H10.5766C10.3563 24.0848 10.1451 23.9973 9.98934 23.8415C9.83359 23.6858 9.74609 23.4745 9.74609 23.2543V9.96613C9.74609 9.74586 9.83359 9.53462 9.98934 9.37887C10.1451 9.22312 10.3563 9.13562 10.5766 9.13562ZM11.4071 10.7966V22.4238H23.0342V10.7966H11.4071ZM13.4834 14.1187C13.153 14.1187 12.8361 13.9874 12.6025 13.7538C12.3689 13.5202 12.2376 13.2033 12.2376 12.8729C12.2376 12.5425 12.3689 12.2256 12.6025 11.992C12.8361 11.7584 13.153 11.6271 13.4834 11.6271C13.8138 11.6271 14.1306 11.7584 14.3643 11.992C14.5979 12.2256 14.7291 12.5425 14.7291 12.8729C14.7291 13.2033 14.5979 13.5202 14.3643 13.7538C14.1306 13.9874 13.8138 14.1187 13.4834 14.1187ZM12.6529 14.9492H14.3139V21.178H12.6529V14.9492ZM17.2207 15.3063C17.7057 14.8371 18.2721 14.5339 18.8817 14.5339C20.6017 14.5339 21.7885 15.9283 21.7885 17.6483V21.178H20.1274V17.6483C20.1274 17.2629 19.9743 16.8932 19.7018 16.6206C19.4292 16.3481 19.0595 16.1949 18.6741 16.1949C18.2886 16.1949 17.9189 16.3481 17.6464 16.6206C17.3738 16.8932 17.2207 17.2629 17.2207 17.6483V21.178H15.5597V14.9492H17.2207V15.3063Z" fill="#2A3D59"/>
                        </g>
                        <defs>
                        <clipPath id="clip0_907_6705">
                        <rect width="19.9322" height="19.9322" fill="white" transform="translate(7.25586 6.64417)"/>
                        </clipPath>
                        </defs>
                        </svg>
                        <span>LinkedIn</span>
                    </div>
                    
                </div>
                <!-- <div class="tz-availablity">Availability</div>
                <div class="tz-location">Location</div>
                <div class="tz-yrs-exp">Years of Experience</div>
                <div class="tz-socials"></div> -->
            </div>
    </div>
    <div class="tz-profile-header">
        Profile
    </div>
    <div class="tz-profile-last">
        <div class="bio-area">
            <div class="tz-emphasis">
                <b>Phone Number</b>
                <span>+234 813 0934 093</span>
            </div>
            <div class="tz-emphasis">
                <b>Email Adrress</b>
                <span>bobCharlie@gmail.com</span>
            </div>
            <div class="tz-emphasis">
                <b>Portfolio</b>
                <span>Link to Portfolio profile goes here</span>
            </div>

            <div class="tz-emphasis">
                <b>Phone Number</b>
                <span>Link to LinkedIn profile goes here</span>
            </div>
        </div>
        <div class="about-area"></div>
    </div>
</template>

<script>
import NavBar from '../components/NavBar.vue'
    export default {
        components:{NavBar}
    }
</script>

<style scoped>
th, td{
    padding: 5px !important;
    /* border: 1px solid red; */
}
.section-divider{
        height: 150px !important;
        width: 1px !important;
        background: var(--app-grey) !important;
    }
    .tz-profile-card{
        width: 80%;
        padding: 40px;
        background: #fff;
        margin: 0 auto;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        gap: 20px;
    }
    .tz-user-thumbnail{
        height: 95px;
        width: 95px;
        border-radius: 50%;
        background: url("../components/Logos_icons/techZoneVertical.png");
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
        /* background: red; */
        outline: 4px solid var(--app-blue);
        outline-offset: 5px;
    }
    .tz-profile-left{
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 30px;
        width: 100%;
    }
    .tz-profile-right{
        width: 100%;
        padding-left: 50px;
        /* border: 1px solid red; */
        display: flex;
        flex-direction: column;
    }
    .tz-profile-left, .tz-profile-right{
        justify-content: center;
    }
    .tz-user-name{
        font-size: 30px;
        font-weight: 400;
        margin: 0; padding: 0;
    }
    .tz-user-skill{
        font-size: 15px;
        font-weight: 300;
        margin: 0; padding: 0;
    }
    .tz-user-bio{
        font-size: 14px;
        width: 300px;
    }
    .tz-btn-array{
        gap: 5px;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap !important;
        margin-top: 10px;
    }
    .cust-btn{
        border-radius: 5px;
    }
.tz-user-socials{
    display: flex;
    flex-direction: row;
    /* width: 100%;border: 1px solid gr; */
    gap: 30px;
}
    .tz-social{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 50px;
        padding: 10px;
        margin-left: 10px;
        /* border: 1px solid red; */
    }

    .tz-profile-header{
        border: 1px solid rgba(184, 184, 184, 0.4);
        color: var(--app-blue);
        width: 80%;
        background: #fff;
        padding: 10px;
        margin:0 auto;
        margin-top: 20px;
    }
    .tz-profile-last{
        width: 80%;
        /* background: #cb2c2c; */
        /* padding: 20px; */
        margin:0 auto;
        margin-top: 20px;
        gap: 25px;
        display: flex;
        flex-direction: row;
        /* border: 1px solid green; */
    }

    .tz-emphasis{
        display: flex;
        flex-direction: column;
        margin-bottom: 15px;
    }

    .bio-area{
        width: 35%;
        background: #fff;
        padding: 10px;
    }
    .about-area{
        width: 100%;
        background: #ffffff;
    }
    /* @media only screen and (max-width: 1020px) {
        .tz-profile-card, .tz-profile-last, .tz-profile-header{
            width: 100%;
            justify-content: center;
            align-items: center;
        }
    } */
    @media only screen and (max-width: 720px) {
        .tz-profile-card{
            flex-direction: column;
            width: 100%;
        }
        .tz-profile-left{
            flex-direction: column;
            align-items: flex-start;
        }
        .section-divider{
            display: none;
        }
        .tz-profile-last{
            flex-direction: column;
            gap: 5px;
        }
        .tz-profile-right{
            justify-content: center;
            padding: 0px;
        }
        .about-area{
            height: 400px;
        }
        .tz-profile-header, .tz-profile-last, .about-area{
            width: 100%;
            margin-top: 5px !important;
        }
        .bio-area{
        width: 100%;
        }
    }
</style>