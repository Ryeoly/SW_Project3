import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router'
import store from './store'
import axios from 'axios'
import VueYoutube from 'vue-youtube'
import VueMoment from 'vue-moment'
import VueChartkick from 'vue-chartkick'
import 'chartkick/chart.js'

Vue.use(VueChartkick)
Vue.prototype.$http = axios
Vue.config.productionTip = false
Vue.use(VueYoutube)
Vue.use(VueMoment)

new Vue({
  vuetify,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
