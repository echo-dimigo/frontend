import Vue from 'vue'
import Ripple from 'vue-ripple-directive'

import App from './App.vue'
import router from './router'
import store from './store'
import axios from '@/api/axios'
import './registerServiceWorker'

import Echoos from './echoos'
import 'dimigoincon'
import VueContentPlaceholders from 'vue-content-placeholders'

Vue.config.productionTip = false
axios.Config()

Vue.use(VueContentPlaceholders)
Vue.use(Echoos)

if (localStorage.accessToken) {
  store.commit('login', localStorage)
}

Ripple.zIndex = 55
Vue.directive('ripple', Ripple)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
