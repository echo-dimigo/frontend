import Vue from 'vue'
import Ripple from 'vue-ripple-directive'

import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import './registerServiceWorker'

import Echoos from './echoos'
import 'dimigoincon'

Vue.config.productionTip = false
axios.defaults.baseURL = 'https://dev-api.dimigo.in'

Vue.use(Echoos)

Ripple.zIndex = 55
Vue.directive('ripple', Ripple)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
