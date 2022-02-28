import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

Vue.config.productionTip = false
Vue.filter('price', function (value:any) {
  if (!value) return ''
  return `EGP${value.toFixed(2)}`
})
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
