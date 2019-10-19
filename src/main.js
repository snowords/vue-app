import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
// main.js 从 router.js中引入 router

Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
