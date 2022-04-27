import * as firebase from "firebase/app";
import Vue from 'vue';
import App from './App.vue';
import vuetify from './plugins/vuetify';
import router from './router';
import store from './store';

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App),
  created(){
    firebase.initializeApp({
      apiKey: "AIzaSyCNO9hs3rDE1phBcggGzZo-Xlfl8yCsTtw",
      authDomain: "devmeetup-6a192.firebaseapp.com",
      projectId: "devmeetup-6a192",
      storageBucket: "devmeetup-6a192.appspot.com",
      messagingSenderId: "839667993486",
      appId: "1:839667993486:web:88e8b3ba5e381d9e7e72df"
    })
  }
}).$mount('#app')
