import Vue from 'vue'

import App from './App.vue'
import router from './router'
import store from './store'
import { configAxios } from '@/api/axios'
import './registerServiceWorker'

import Echoos from './echoos'
import VueContentPlaceholders from 'vue-content-placeholders'
import VueToast from 'vue-toast-notification'
import VueRipple from 'vue-ripple-directive'

import 'dimigoincon'
import 'vue-toast-notification/dist/index.css'

Vue.config.productionTip = false

configAxios()

Vue.use(VueContentPlaceholders)
Vue.use(Echoos)
Vue.use(VueToast, {
  position: 'top-right'
})

if (localStorage.accessToken) {
  store.commit('login', localStorage)
}

VueRipple.zIndex = 55
Vue.directive('ripple', VueRipple)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
