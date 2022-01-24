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
    apiKey: "AIzaSyD-36U12uImdv5Kkp2_EY6HFBR9b9R8Xxw",
    authDomain: "ad-pro-19577.firebaseapp.com",
    projectId: "ad-pro-19577",
    storageBucket: "ad-pro-19577.appspot.com",
    messagingSenderId: "127600040099",
    appId: "1:127600040099:web:7eba278180a4b18dc64716",
    measurementId: "G-GXVLCVZ3TB"
  };
// Initialize Firebase
fb.initializeApp(firebaseConfig);
fb.analytics()
fb.auth().onAuthStateChanged(user => {
  if (user) {
    this.$store.dispatch('autoLoginUser', user)
  }
})
this.$store.dispatch('fetchAds')
}
}).$mount('#app')