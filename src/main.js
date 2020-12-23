// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// 引入css
import "./assets/css/reset.css";

import searchStore from './store/SearchStore' 

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store:searchStore, 
  components: { App },
  template: '<App/>'
})
// export default [
//   require('./assets/lottie/humanbody.json')
// ]