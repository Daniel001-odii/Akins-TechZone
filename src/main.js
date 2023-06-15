import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';

const app = createApp(App);

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
