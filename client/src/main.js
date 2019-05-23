import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import router from './routes'
import VueResource from "vue-resource";

Vue.use(VueResource);
Vue.use(VueRouter)

new Vue({
  el: '#app',
  render: h => h(App),
  router: router
})
