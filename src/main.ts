import Vue from 'vue'
import App from './App.vue'
import router from '@/router/index.ts'
import store from './store'
import '@/styles/index.scss'
/**/
import Component from 'vue-class-component'
Component.registerHooks([
  'beforeRouteEnter',
  'beforeRouteLeave',
  'beforeRouteUpdate'
])
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
