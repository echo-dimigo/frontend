import Vue from 'vue'
import Ripple from 'vue-ripple-directive'

import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import './registerServiceWorker'

import Echoos from './echoos'
import 'dimigoincon'
import VueContentPlaceholders from 'vue-content-placeholders'

Vue.config.productionTip = false

axios.defaults.baseURL = 'https://dev-api.dimigo.in'
axios.interceptors.response.use(async response => {
  if (response.status === 401) {
    await store.dispatch('refreshAccessToken', localStorage.refreshToken)
  }
  return response
})

Vue.use(VueContentPlaceholders)
Vue.use(Echoos)

if (localStorage.accessToken) {
  store.commit('login', localStorage.accessToken)
}

Ripple.zIndex = 55
Vue.directive('ripple', Ripple)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
