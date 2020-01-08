import Vue from 'vue'

import App from './App.vue'
import router from './router'
import store from './store'
import { configAxios } from '@/api/axios'
import './registerServiceWorker'

import Echoos from './echoos'
import VuePlaceholders from 'vue-content-placeholders'
import VueToast from 'vue-toast-notification'
import VueRipple from 'vue-ripple-directive'
import VueSweetalert from 'vue-sweetalert2'

import 'dimigoincon'
import 'vue-toast-notification/dist/index.css'
import 'sweetalert2/dist/sweetalert2.min.css'

Vue.config.productionTip = false

configAxios()

Vue.use(Echoos)
Vue.use(VueSweetalert)
Vue.use(VuePlaceholders)
Vue.use(VueToast, {
  position: 'top-right'
})

VueRipple.zIndex = 55
Vue.directive('ripple', VueRipple)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
