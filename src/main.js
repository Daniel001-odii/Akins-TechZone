import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import 'leaflet/dist/leaflet.css';

const app = createApp(App);

// Declare a global variable
// app.config.globalProperties.api_url = 'http://127.0.0.1:5000/api';
// app.config.globalProperties.message_api_url = 'http://127.0.0.1:3000';



app.config.globalProperties.api_url = 'https://tecnhzone-backend-c28bd32b1555.herokuapp.com/api';
app.config.globalProperties.message_api_url = 'https://techzone-messaging-3b87ba218f74.herokuapp.com';


app.mixin({
  data() {
    return {
      title: 'New tech zone',
    };
  },
  mounted(){
    var title = this.$route.name
    document.title = title
  },
});
app.use(router).mount('#app');


// app.use(router, VueGoogleMaps, {
//   load: {
//     key: 'aizasybhzgflvwsgp4phcj0xwzs6tznzf_ufun0',
//     libraries: "places"
//   },
// }).mount('#app');