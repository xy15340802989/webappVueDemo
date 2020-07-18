import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'amfe-flexible/index.js'
Vue.config.productionTip = false
import { Button } from 'vant';



new Vue({
  router,
  store,
  // render:function (cb){
  //   return cb(App);
  // },
  render: h => h(App)
}).$mount('#app')


