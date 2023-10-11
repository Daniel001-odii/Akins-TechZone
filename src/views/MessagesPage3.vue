
<template>
  <div class="page-grid-container" :class="['theme-transition', { 'dark': themeStore.darkMode }]">
    <div class="Navigation">
      <NavBar/>
    </div>
    <div class="Left-Nav">
          <LeftNav/>
    </div>
    <div class="Page-header">
          <div class="page-title">Messages</div>
          <div class="page-filters"></div>
          <div class="insights-content"><small>your chats with clients are safe</small></div>
    </div>
    <div class="Page-contents">
          <!----message page contents starts here ----->
          <div class="tz_message">
            <div class="tz_message_left">
            <div class="filter-search">
                <i class="bi bi-search"></i>
                <input type="search" class="ft-search" v-model="searchTerm" placeholder="Search conversations">
           </div>

           <!-- Display list of rooms -->
          <div v-if="isUser">
            <div v-for="room in rooms" :key="room._id">
              <div class="room" @click="setCurrentRoom(room)">{{ room.employer }}</div>
            </div>
          </div>
          <div v-if="isEmployer">
            <div v-for="room in rooms" :key="room._id">
              <div class="room" @click="setCurrentRoom(room)">
                {{ room.user }}</div>
            </div>
          </div>



          </div>
          <div class="tz_message_main">
              <!-- Display current room messages -->
              <div class="msg_room" v-if="currentRoom">
                <p style="text-align: center;">{{ currentRoom.name }} | created {{ formatTimestamp(currentRoom.createdAt) }}</p>
                <div :class="{'sent-message': message.user == userDetails.id,
                'received-message': message.user != userDetails.id
                }"
                  class="msg_box" v-for="message in messages" :key="message._id">
                  <!-- <img v-if="message.user == userDetails.id" class="msg_user_thumb" :src="applicantDetails.profile.profileImage"> -->
                  <div class="msg_tex">
                    {{ message.text }}
                    <br/>
                    <span class="msg_time">{{ formatTimestamp(message.createdAt) }}</span>
                  </div>
                </div>
                <!-- Input for sending a new message -->
                <input class="msg_input" v-model="messageText" @keyup.enter="sendMessage(currentRoom._id)" placeholder="Type your message" />
              </div>
          </div>
          </div>
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
  // import ProfileNavBar from '../components/ProfileNavBar.vue';
  // import { reactive } from 'vue';
  import LeftNav from '../components/LeftNav.vue';
  import themeStore from '@/theme/theme';
  import { ref } from 'vue';
  import io from 'socket.io-client';
  import axios from 'axios';
  import { reactive } from 'vue';

  // socket.on('message', addMessages)
  const socket = io('http://127.0.0.1:3000');

 export default {
    components:{ PostCard, NavBar, Footer, RouterLink, LeftNav },
    setup(){
    const toggleTheme = themeStore.toggleTheme;
    // const messages = reactive([]);


        return{themeStore,toggleTheme}
      },
          data() {
            return {
              rooms: [],
              currentRoom: null,
              messages: [],
              searchTerm: '',

              messageText: '',

              userDetails: '',
              isLoading: true,
              isUser: false,
              isEmployer: false,

              applicantDetails: '',
            };
          },

          methods: {
            checkLoginStatus(){
            const token = localStorage.getItem('token');
            const userRole = token ? JSON.parse(atob(token.split('.')[1])).role : null;
            if (userRole == 'user') {
              console.log("loggedin as user");
              const user_url = `${this.api_url}/user-info`; // Assuming user-info is the endpoint for user details
              // Set up headers with the token
              const headers = {
                  Authorization: `JWT ${token}`, // Assuming it's a JWT token
              };

              axios.get(user_url, { headers })
                  .then((response) => {
                  // Handle the response here
                  // For example, you can set user details in your component's data
                  this.userDetails = response.data.user;
                  console.log(this.userDetails)
                  this.isUser = true;
                    // Fetch the list of rooms
                    const newresponse = axios.get(`http://localhost:3000/api/rooms/6518c768d9b96aa9a1a391c6`);
                    this.rooms = newresponse.data;
                    console.log("availabe rooms: ", this.rooms)

                  console.log(this.userDetails.id) // Assuming userDetails is a data property
                  this.isLoading = false;
                  })
                  .catch((error) => {
                  // Handle errors
                  console.error(error);
                  });
            } else if (userRole == 'employer') {
              console.log("loggedin as employer");
              const user_url = `${this.api_url}/employer-info`; // Assuming user-info is the endpoint for user details
              // Set up headers with the token
              const headers = {
                  Authorization: `JWT ${token}`, // Assuming it's a JWT token
              };

              axios.get(user_url, { headers })
                  .then((response) => {
                  // Handle the response here
                  // For example, you can set user details in your component's data
                  this.userDetails = response.data.employer;
                  this.isEmployer = true;
                  // Fetch the list of rooms
                  axios.get(`${this.message_api_url}/rooms/${this.userDetails.id}`)
                    .then((response) => {
                      this.rooms = response.data.rooms;
                      console.log("available chat rooms for", this.userDetails.id, this.rooms)
                    })
                    .catch((error) => {
                      console.error('Error fetching rooms:', error);
                    });
                  console.log(this.userDetails.id) // Assuming userDetails is a data property
                  this.isLoading = false;
                  })
                  .catch((error) => {
                  // Handle errors
                  console.error(error);
                  });
            };
          },
          async fetchRoomsById(id) {
            try {
              const response = await axios.get(`http://localhost:3000/api/rooms/${id}`);
              this.rooms = response.data;
            } catch (error) {
              console.error('Error fetching rooms:', error);
            }
          },
          // the function below is responsible for getting the currently signed in employer...
          getUserDetails() {
                        const token = localStorage.getItem('token'); // Get the token from localStorage
                        const user_url = `${this.api_url}/user-info`; // Assuming user-info is the endpoint for user details

                        // Set up headers with the token
                        const headers = {
                            Authorization: `JWT ${token}`, // Assuming it's a JWT token
                        };

                        axios.get(user_url, { headers })
                            .then((response) => {
                            // Handle the response here
                            // For example, you can set user details in your component's data
                            this.userDetails = response.data.user;
                            console.log(this.userDetails) // Assuming userDetails is a data property
                            this.isLoading = false;
                            })
                            .catch((error) => {
                            // Handle errors
                            console.error(error);
                            });
          },
          // Set the current room when a button is clicked
          setCurrentRoom(room) {
            socket.emit('joinRoom', room._id);
            this.currentRoom = room;
            this.fetchMessages(room._id);
          },

          // Fetch messages for the current room
          fetchMessages(roomId) {
            axios.get(`${this.message_api_url}/room/${roomId}/messages`)
              .then((response) => {
                this.messages = response.data.messages;
              })
              .catch((error) => {
                console.error('Error fetching messages:', error);
              });
          },

          // Send a new message
          async sendMessage(roomId) {
            try {
              // const roomId = '6523578774cc866b0e9ff102'; // Replace with the actual room ID
              const userId = this.userDetails.id; // Replace with the actual user ID

              // Send the message text to your server using an HTTP POST request
              const response = await fetch(`${this.message_api_url}/room/${roomId}/send-message`, {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                  text: this.messageText,
                  userId: userId,
                }),
              });

              if (response.status === 201) {
                // this.fetchMessages(roomId);
                // Message sent successfully
                this.messageText = ''; // Clear the message input field
              } else {
                // Handle error cases
                console.error('Error sending message:', response.statusText);
              }
            } catch (error) {
              console.error('Error sending message:', error);
            }
          },

          formatTimestamp(timestamp) {
            const date = new Date(timestamp);
            const options = {
                // year: "numeric",
                // month: "long",
                // day: "numeric",
                hour: "numeric",
                minute: "numeric",
                hour12: true, // Use 12-hour format
            };
            return date.toLocaleDateString(undefined, options);
        },

        getUserById(id) {
                        // if (!this.applicantDetails[id]) {
                            axios.get(`${this.api_url}/get-info/${id}`)
                            .then(response => {
                                this.applicantDetails = response.data.user;
                                console.log("user detail: ", response.data.user);
                            })
                            .catch(error => {
                                console.error('Error fetching user or employer details:', error);
                                // Handle errors
                            });
                        // }
                            return this.applicantDetails[id];
                        },


        },




         async created() {
            this.checkLoginStatus();


            if(this.currentRoom != null){
              this.fetchMessages(this.currentRoom.id);
            }

            // this.getUserById('6518c768d9b96aa9a1a391c6');
            const socket = io('http://127.0.0.1:3000'); // Replace with your server URL
            //join room first...............


            socket.on('message', (message) => {
              this.messages.push(message);
              console.log("new message...")
              // Vue.set(this.messages, this.messages.length, message);
            });



          },

      }
  </script>


  <style scoped>
 .insights-content{
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 20px;
        width: 100%;
        font-size: 1.8em !important;
        text-align: center;
    }

    .tz_message{
      display: flex;
      flex-direction: row;
    }
  .tz_message_left{
    /* height: 100vh; */
    border-right: 1px solid #efefef;
    width: 300px;
    padding-right: 10px;
  }

  .tz_message_main{

  }

  .tz_client_name{
    padding: 10px;
  }

  .msg_text{
    background: #efefef;
    padding: 10px;
    margin: 8px;
    max-width: 350px;
  }
  .msg_time{
    font-size: 12px;
  }

  .room{
    padding: 30px 10px;
    /* background: var(--app-blue); */
    border-bottom: 1px solid #fff;
  }

  .msg_room{
    display: flex;
    flex-direction: column;
    padding: 10px;
    height: 70vh;
    overflow-y: scroll;
    /* border: 1px solid red; */
  }

  .msg_box{
    display: flex;
    flex-direction: row-reverse;
  }
.msg_user_thumb{
  border-radius: 50%;
  height: 40px;
  width: 40px;
}
.msg_input{
  position: fixed;
  width: 90%;
  max-width: 500px;
  bottom: 10px;
}
  /* CSS for sent messages */
.sent-message {
  background-color: var(--app-blue); /* Blue background for sent messages */
  color: white; /* White text for sent messages */
  border-radius: 10px 10px 0px 10px; /* Rounded corners for the chat bubble */
  padding: 10px; /* Add padding for spacing */
  margin-bottom: 10px;
  align-self: flex-end; /* Add margin for spacing between messages */
}

/* CSS for received messages */
.received-message {
  background-color: #efefef; /* Light gray background for received messages */
  color: #333; /* Dark text for received messages */
  border-radius: 10px 10px 10px 0px; /* Rounded corners for the chat bubble */
  padding: 10px; /* Add padding for spacing */
  margin-bottom: 10px; /* Add margin for spacing between messages */
  text-align: left;
  align-self: flex-start; /* Align received messages to the right */
}
  </style>