import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';

const app = createApp(App);

// Declare a global variable
app.config.globalProperties.api_url = 'http://127.0.0.1:5000/api';
// app.config.globalProperties.api_url = 'https://techzone-backend-c28bd32b1555.herokuapp.com/api';



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
