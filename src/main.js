import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
Vue.config.productionTip = false
// Vue.config.silent = true
import './commons/index'
import 'vant/lib/index.css';

new Vue({
  router,
  store,
  render: h => h(App)
 
}).$mount('#app')
