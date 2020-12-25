import Vue from 'vue'
import App from './App.vue'

import './style.less'

Vue.config.productionTip = false

new Vue({
  render: (h) => h(App)
}).$mount('#app')
module.hot.accept('./App', () => {
  console.log('change')
})
