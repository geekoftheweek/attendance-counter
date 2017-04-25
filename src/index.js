import Vue from 'vue'
import Vuetify from 'vuetify'
Vue.use(Vuetify)

import App from './App.vue'
import store from './store';

import 'vuetify/dist/vuetify.min.css'
// import 'http://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons'

new Vue({
  el: '#app',
  store,
  render: h => h(App)
})
