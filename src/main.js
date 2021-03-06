// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './store/';
import './config/rem';
import './style/public.scss';
import './icons';
import Icon from 'vue-svg-icon/Icon.vue' //引入
import axios from 'axios'
import ScrollFlipPage from 'scroll-flip-page'

// register globally
Vue.component(ScrollFlipPage)
Vue.component('icon', Icon) //注册
Vue.config.productionTip = false
Vue.prototype.axios = axios
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
