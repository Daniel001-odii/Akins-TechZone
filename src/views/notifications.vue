
<template>
    <div class="page-grid-container" :class="['theme-transition', { 'dark': themeStore.darkMode }]">
      <div class="Navigation">
        <NavBar/>
      </div>
      <div class="Left-Nav">
            <LeftNav/>
      </div>
      <div class="Page-header" :class="['theme-transition', { 'dark': themeStore.darkMode }]">
            <div class="page-title">Notifications</div>
            <div class="page-filters"></div>
            <div class="insights-content" :class="['theme-transition', { 'dark': themeStore.darkMode }]">

            </div>
      </div>
      <div class="Page-contents" :class="['theme-transition', { 'dark': themeStore.darkMode }]">
            <!----this is an insight page and needs no job lisitng content-->
             <!---notifications modal-->
                <div class="notification">
                                <div class="notify" v-for="(notification, index) in userNotifications" :key="index" :class="notification.isRead ? 'readNote' : 'unreadNote'"  @click="markNotificationAsRead(notification._id)">
                                        <!-- <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 21 20" fill="none">
                                                <path d="M10.5 20C4.977 20 0.5 15.523 0.5 10C0.5 4.477 4.977 0 10.5 0C16.023 0 20.5 4.477 20.5 10C20.5 15.523 16.023 20 10.5 20ZM9.503 14L16.573 6.929L15.159 5.515L9.503 11.172L6.674 8.343L5.26 9.757L9.503 14Z"
                                                :fill="notification.isRead ? 'green' : 'grey'"/>
                                            </svg> -->

                                        <div class="notify_line">
                                            <span>{{ notification.message }}</span>
                                            <RouterLink  v-if="notification.linkUrl" :to="notification.linkUrl"><span style="color: blue; padding: 10px 0px">view contract</span></RouterLink>
                                            <!-- <span v-if="notification.linkUrl" @click="viewContractPage(notification.linkUrl)" style="color: blue; padding: 10px 0px;">view contract</span> -->
                                            <span class="notify_time">{{ formatTimestamp(notification.createdAt) }}</span>
                                        </div>
                                        <small v-if="notification.isRead" style="color: green;">read</small>
                                        <small v-else style="color: red;">unread</small>
                                </div>
                </div>
                <small style="padding: 20px; font-size: 20px">No new notifications</small>
      </div>
      <!-- <div class="footer">
        <Footer/>
      </div> -->
    </div>

    </template>

    <script>
    import { RouterLink } from 'vue-router';
    import Footer from '../components/Footer.vue';
    import PostCard from '../components/JobCard.vue';
    import NavBar from '../components/NavBar.vue';
    import ProfileNavBar from '../components/ProfileNavBar.vue';
    import { reactive } from 'vue';
    import LeftNav from '../components/LeftNav.vue';
    import themeStore from '@/theme/theme';
    import axios from 'axios';

        export default {
            components:{ PostCard, NavBar, ProfileNavBar, Footer, RouterLink, LeftNav },
            data(){
                return{
                    userNotifications: ''
                }
            },
            setup(){
          const toggleTheme = themeStore.toggleTheme;
                return{
                    themeStore,
                    toggleTheme,
                }
              },
            methods:{
                viewContractPage(linkUrl){
                this.$router.push(`/${linkUrl}`);
                },
                getAllUserNotifications() {
                const token = localStorage.getItem('token'); // Get the token from localStorage
                // Set up headers with the token
                const headers = {
                    Authorization: `JWT ${token}`, // Assuming it's a JWT token
                };

                axios.get(`${this.api_url}/get-all-notifications`, { headers })
                    .then((response) => {
                    // Handle the response here
                    this.userNotifications = response.data;
                    console.log(this.userNotifications) // Assuming userDetails is a data property
                    // this.isLoading = false;
                    })
                    .catch((error) => {
                    console.error(error);
                    });
                },

                formatTimestamp(timestamp) {
                const date = new Date(timestamp);
                const options = {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                    hour: "numeric",
                    minute: "numeric",
                    hour12: true, // Use 12-hour format
                };
                    return date.toLocaleDateString(undefined, options);
                },

                async markNotificationAsRead(notificationId) {
                try {
                    const token = localStorage.getItem('token'); // Get the JWT token from local storage

                    const response = await axios.put(
                    `${this.api_url}/mark-notification/${notificationId}`,
                    null,
                    {
                        headers: {
                        Authorization: `JWT ${token}`,
                        },
                    }
                    );

                    console.log("the notify response: ", response);
                    if (response.status == 200) {
                    // Handle successful marking of the notification as read
                    console.log('Notification marked as read successfully');
                    this.getAllUserNotifications();
                    } else {
                    // Handle errors (e.g., display an error message)
                    console.error('Error marking notification as read');
                    }
                } catch (error) {
                    console.error('Error marking notification as read:', error);
                }
                },


            },

            created(){
                this.getAllUserNotifications();
            }
        }
    </script>


    <style scoped>
    .readNote{
        background: #f4f4f4;
    }
    .unreadNote{
        background: #fff;
    }
.notification{
      width: 90%;
      font-size: 0.5em !important;
      display: flex;
      flex-direction: column;
    }

.Page-contents{
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        font-size: 1.8em !important;
    }

.notify{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 15px;
    cursor: pointer;
    gap: 20px;
    border-bottom: 0.5px solid #efefef;
}

.notify:hover{
    background: var(--app-hover);
}

.notify_line{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    text-align: left;
}

.notify_time{
    font-size: 0.7em;
}
    @media only screen and (max-width: 600px) {
      .notification{
      width: 100%;
    }
    }
    </style>