import Vue from 'vue'
import Router from 'vue-router'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router/index'
import store from './store'
import fb from 'firebase'

Vue.use(Router)
Vue.config.productionTip = false

new Vue({
  vuetify,
  render: h => h(App),
  router:router,
  store,
  created(){
  const firebaseConfig = {
    apiKey: "AIzaSyBm9W9nWDx7PHqB1zDtiV0iU_7smsFD0EQ",
    authDomain: "ad-pro-e21bf.firebaseapp.com",
    projectId: "ad-pro-e21bf",
    storageBucket: "ad-pro-e21bf.appspot.com",
    messagingSenderId: "390521015108",
    appId: "1:390521015108:web:51c3e7e6ffe69530912511",
    measurementId: "G-ZCXR82D395"
  };
  // Initialize Firebase
  fb.initializeApp(firebaseConfig);
  fb.auth().onAuthStateChanged(user => {
    if (user) {
      this.$store.dispatch('autoLoginUser', user)
    }

  })
}
}).$mount('#app')