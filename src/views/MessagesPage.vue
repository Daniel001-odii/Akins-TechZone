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
          <!-- <div class="page-filters"></div> -->
          <!-- <div class="insights-content"><small>your chats with clients are safe</small></div> -->
    </div>
    <Loader v-if="isLoading"/>
    <div class="Page-contents" v-else>
          <!----message page contents starts here ----->
          <div class="tz_message">
            <div class="tz_message_left">
              <!-- <div class="filter-search">
                    <i class="bi bi-search"></i>
                    <input type="search" class="ft-search" v-model="searchTerm" placeholder="Search conversations">
              </div> -->
              <!-- Display list of rooms -->
              <!-- the getUserById function must be called on its own before using in the component to fecthc user details else it wouldnt work -->
                <div v-if="isUser">
                  <div class="room_block" v-for="room in rooms" :key="room._id" @click="roomDisplay = !roomDisplay" :style="{ background: selectedRoom === room ? '#efefef' : '' }">
                    <div class="room"  @click="selectRoom(room)" v-if="getUserById(room.employerId)">
                      <img class="tz-user-thumbnail" :src="getUserById(room.employerId).profile.profileImage" >
                      <div>
                        <b>{{ getUserById(room.employerId).profile.company_name }}</b>
                        <br/>
                        {{room.name.substring(0, 20)}}...
                      </div>
                    </div>
                  </div>
                </div>
                <div v-if="isEmployer">
                  <div class="room_block" v-for="room in rooms" :key="room._id" @click="roomDisplay = !roomDisplay" :style="{ background: selectedRoom === room ? '#efefef' : '' }">
                    <div class="room" @click="selectRoom(room)" v-if="getUserById(room.userId)">
                      <img class="tz-user-thumbnail" :src="getUserById(room.userId).profile.profileImage" >
                      <div>
                        <b>{{ getUserById(room.userId).firstname }} {{ getUserById(room.userId).lastname }}</b>
                        <br/>
                        {{room.name.substring(0, 20)}}...
                      </div>
                    </div>
                  </div>
                </div>
                <div v-if="rooms.length <= 0" style="text-align: center; padding: 30px;">You have no inbox yet</div>
            </div>

          <transition name="slide">
            <div class="tz_message_main" :class="[roomDisplay ? 'opened' : 'closed'], ['theme-transition', { 'dark': themeStore.darkMode }]">

                <!-- Display current room messages -->
                <div v-if="selectedRoom">
                <div class="room_title">
                  <div @click="roomDisplay = !roomDisplay" class="room_close_btn"><i class="bi bi-arrow-left-circle-fill"></i></div>
                  <div>
                    <b>{{ selectedRoom.name }}</b>
                    <br/><span style="color: grey;"> initiated {{ formatTimestamp(selectedRoom.created) }}</span>
                    <br/><span><RouterLink to=""><small>view contract</small></RouterLink></span>
                  </div>
                </div>
                <div class="room_container">
                  <div class="msg_room" ref="chatContainer" id="chatContainer">
                    <div :class="{'sent-message': message.user == userDetails.id,'received-message': message.user != userDetails.id}"
                      class="msg_box" v-for="message in messages" :key="message._id">
                      <!-- <img v-if="message.user == userDetails.id" class="msg_user_thumb" :src="applicantDetails.profile.profileImage"> -->
                      <div class="msg_tex">
                        {{ message.text }}
                        <br/>
                        <span class="msg_time">{{ formatTimestamp(message.created) }}</span>
                      </div>
                    </div>
                    <div v-if="messageIsLoading" class="msg_loading">Loading...</div>
                    <div class="toBottom" @click="scrollChatsToBottom">v</div>
                  </div>
                   <!-- Input for sending a new message -->
                   <div class="room_footer">
                      <textarea class="msg_input" v-model="newMessage" placeholder="Type your message"></textarea>
                      <button class="msg_send_btn" @click="sendMessage" :disabled="newMessage == ''"><i class="bi bi-send-fill"></i></button>
                   </div>

                </div>
              </div>
                <div v-else class="room_container" style="padding: 20px; text-align: center;">
                  Your chats are super secured
                </div>

            </div>
          </transition>
          </div>
    </div>
    <!-- <div class="footer">
      <Footer/>
    </div> -->
  </div>

</template>


<script>
  import NavBar from '../components/NavBar.vue';
  import LeftNav from '../components/LeftNav.vue';
  import themeStore from '@/theme/theme';
  import axios from 'axios';
  import io from 'socket.io-client';
  import { RouterLink } from 'vue-router';
  import Loader from '../components/DotLoader.vue';




export default {
  components:{ NavBar, RouterLink, LeftNav, Loader },
  setup(){
    const toggleTheme = themeStore.toggleTheme;
        return{themeStore,toggleTheme}
      },
  data() {
    return {
      rooms: [],
      selectedRoom: 0,
      messages: [],

      newMessage: '',

      userDetails: '',
      roomDetails: {},
      isLoading: false,
      isUser: null,
      isEmployer: null,
      searchTerm: '',

      messageIsLoading: false,

      roomDisplay: false,
      showScrollToBottom: false,
    };
  },



  methods: {

    async fetchMessages(roomId) {
      // Fetch messages for the selected room using Axios
      this.messageIsLoading = true;
      try{
        const newresponse = await axios.get(`${this.message_api_url}/api/messages/${roomId}`);
        this.messages = newresponse.data.reverse();
        this.messageIsLoading = false;
      }catch(error){

      }

    },

    async sendMessage() {
      const message = {
        text: this.newMessage,
        user: this.userDetails.id, // Replace with the actual user ID
        room: this.selectedRoom._id,
      };

      await axios.post(`${this.message_api_url}/api/messages`, message);
      const tempMessageTime = new Date();
      message.created = tempMessageTime;
      // this.messages.unshift(message);
      this.newMessage = '';
    },

    handleScroll() {
      const container = this.$refs.chatContainer;
      // Check if the user has scrolled up by comparing the scroll position
      // to the scroll height and client height of the container
      if (container.scrollTop < container.scrollHeight - container.clientHeight) {
        this.showScrollToBottom = true;
      } else {
        this.showScrollToBottom = false;
      }
    },

    selectRoom(room) {
      this.selectedRoom = room;
      this.fetchMessages(room._id);
      // Initialize WebSocket connection for real-time updates
      const socket = io(this.message_api_url);
      socket.emit('join', room._id);
      socket.on('message', (message) => {
        // Add received message to the messages array
      this.messages.unshift(message);
      this.scrollChatsToBottom(); //scrolls the recipients message box...
      });

      if(this.messages){
        this.scrollChatsToBottom();
      }

    },

    scrollChatsToBottom(){
      const container = this.$refs.chatContainer;
      // Use smooth scrolling to scroll to the bottom
      if(container){
        container.scroll({
        top: container.scrollHeight,
        behavior: 'smooth',
      });
      }

    },

    async getUserDetails() {
                        this.isLoading = true;
                        const token = localStorage.getItem('token'); // Get the token from localStorage
                        const userRole = token ? JSON.parse(atob(token.split('.')[1])).role : null;
                        console.log("signed in as: ", userRole)
                        if (userRole == 'user') {
                        this.isUser = true;
                        this.isEmployer = false;
                        const user_url = `${this.api_url}/user-info`; // Assuming user-info is the endpoint for user details
                        const headers = {
                            Authorization: `JWT ${token}`, // Assuming it's a JWT token
                        };
                       await axios.get(user_url, { headers })
                            .then((response) => {
                            this.userDetails = response.data.user;
                            console.log(this.userDetails) // Assuming userDetails is a data property
                            this.isLoading = false;
                            })
                            .catch((error) => {
                            // Handle errors
                            console.error(error);
                            });
                          }
                          if (userRole == 'employer') {
                            this.isEmployer = true;
                            this.isUser = false;
                            const user_url = `${this.api_url}/employer-info`; // Assuming user-info is the endpoint for user details
                        const headers = {
                            Authorization: `JWT ${token}`, // Assuming it's a JWT token
                        };
                       await axios.get(user_url, { headers })
                            .then((response) => {
                            this.userDetails = response.data.employer;
                            console.log(this.userDetails) // Assuming userDetails is a data property
                            this.isLoading = false;
                            })
                            .catch((error) => {
                            // Handle errors
                            console.error(error);
                            });
                          }
    },

    async fetchRooms(userId) {
      this.isLoading = true;
      const response = await axios.get(`${this.message_api_url}/api/rooms/${userId}`);
      this.rooms = response.data.reverse();
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

    getUserById(id) {
      if (!this.roomDetails[id]) {
        axios.get(`${this.api_url}/get-info/${id}`)
        .then(response => {
        if(this.isUser){
          this.roomDetails[id] = response.data.employer;
        }
        if(this.isEmployer){
          this.roomDetails[id] = response.data.user;
        }
        })
        .catch(error => {
          console.error('Error fetching user or employer details:', error);
        });
      }
      return this.roomDetails[id];
    },


  },

  created() {
  this.getUserDetails().then(() => {
  this.fetchRooms(this.userDetails.id);
  this.isLoading = false;
  });
},

mounted() {

  },

}
</script>

<style scoped>


/* ------------------------------- */
.msg_loading{
  position: absolute;
  top: 50%;
  right: 10px;
  width: 95%;
  text-align: center;
}
.toBottom{
  background: #efefef;
  padding: 15px;
  display: flex;
  /* display: none; */
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  border-radius: 30%;
  align-self: flex-end;
  position: absolute;
  bottom: 100px;
  cursor: pointer;
  transition: opacity 0.2s;
}

.toBottom:hover {
  background-color: #e5e5e5;
}

/* Show the button when it should be visible */
.v-enter-active.toBottom,
.v-leave-active.toBottom {
  transition: opacity 0.2s;
}

.v-enter.toBottom,
.v-leave-to.toBottom {
  opacity: 0;
  display: flex;
}



    .tz_message{
      display: flex;
      flex-direction: row;
    }
  .tz_message_left{
    /* background: #f7f7f7; */
    border-right: 1px solid #efefef;
    border-left: 1px solid #efefef;
    min-width: 300px;
    width: 300px;
  }

  .tz_message_main{
    /* border: 1px solid green; */
    display: flex;
    flex-direction: column;
    width: 100%;
    background: #fff;
  }

  .tz_client_name{
    padding: 10px;
  }

  .msg_tex{
    max-width: 500px;
  }
  .msg_time{
    font-size: 12px;
  }
  .room{
    display: flex;
    flex-direction: row;
    width: 300px;
    gap: 10px;
    justify-content: flex-start;
    align-items: center;
    /* border: 1px solid red; */
    padding: 5px;
  }

  .room_block{
    cursor: pointer;
    padding: 10px 0px;
    border-bottom: 1px solid #efefef;
    height: 80px;
  }
  .room_block:hover{
    background: #efefef;
  }

  .msg_room{
    display: flex;
    flex-direction: column-reverse;
    padding: 15px;
    overflow-y: auto;
    position: relative;
    /* max-height: 80%; */
    /* min-height: 550px; */
    /* border: 1px solid red; */
  }

  .room_title{
    text-align: left;
    /* background: #efefef; */
    padding: 10px;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 6px;
    /* border: 1px solid red; */
    border-bottom: 1px solid #D0D5DD;
    width: 100%;
    /* height: 80px; */
  }
  .room_container{
    display: flex;
    flex-direction: column;
    height: 75dvh;
    justify-content: space-between;
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
.room_footer{
  width: 100%;
  display: flex;
  flex-direction: row;
  padding: 10px;
  border-top: 1px solid #D0D5DD;
  /* background: #efefef; */
  justify-content: center;
  align-items: center;
  gap: 10px;
}
.msg_input{
  width: 100%;
  padding: 10px;
  border: none;
  border-radius: 10px;
  height: 45px;
  max-height: 100px;
  border: 1px solid #D0D5DD;
  outline: none;
}
.msg_send_btn{
  padding: 10px;
  background: #7F56D9;
  border: none;
  color: #fff;
  border-radius: 10px;
}
.msg_send_btn:disabled{
  background: var(--app-grey);
}
  /* CSS for sent messages */
.sent-message {
  background-color: var(--app-blue); /* Blue background for sent messages */
  color: white; /* White text for sent messages */
  border-radius: 10px 10px 0px 10px; /* Rounded corners for the chat bubble */
  padding: 10px; /* Add padding for spacing */
  margin-bottom: 10px;
  align-self: flex-end; /* Add margin for spacing between messages */
  background: var(--primary-600, #7F56D9);
  box-shadow: 0px 1px 2px 0px rgba(16, 24, 40, 0.06), 0px 1px 3px 0px rgba(16, 24, 40, 0.10);
}

/* CSS for received messages */
.received-message {
  background-color: #efefef; /* Light gray background for received messages */
  color: #333; /* Dark text for received messages */
  border-radius: 0px 10px 10px 10px; /* Rounded corners for the chat bubble */
  padding: 10px; /* Add padding for spacing */
  margin-bottom: 10px; /* Add margin for spacing between messages */
  text-align: left;
  align-self: flex-start; /* Align received messages to the right */
  background: var(--gray-100, #F2F4F7);
  box-shadow: 0px 1px 2px 0px rgba(16, 24, 40, 0.06), 0px 1px 3px 0px rgba(16, 24, 40, 0.10);
}

.room_close_btn{
  display: none;
}

@media only screen and (max-width: 720px) {
  .room_close_btn{
    display: block;
  }
  .tz_message_left{
    width: 100%;
    height: 90dvh;
  }
  .room{
    justify-content: flex-start;
  }

  .closed{
    display: none;
  }
  .opened{
    display: flex;
  }
  .room_container{
    height: 75vh !important;
  }
  .tz_message_main{
    /* top: 60px; */
    /* height: 100vh; */
    position: absolute;
    width: 100vw;
    /* border: 1px solid red; */
  }
}


/*-----------animation for menu---------------*/
.slide-enter-active,
.slide-leave-active {
  transition: margin 0.3s;
  margin-left: 0;
}

.slide-enter-from,
.slide-leave-to {
  /* opacity: 0; */
  margin-left: -100vw;
}
</style>