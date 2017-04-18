import Vue from 'vue'
import Vuetify from 'vuetify'
Vue.use(Vuetify)

import App from './App.vue'
import store from './store';


new Vue({
  el: '#app',
  store,
  render: h => h(App)
})
