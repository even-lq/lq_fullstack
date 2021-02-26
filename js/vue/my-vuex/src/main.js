import Vue from 'vue'
import App from './App.vue'
import store from './store'

Vue.config.productionTip = false

// runTime模式
new Vue({
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
