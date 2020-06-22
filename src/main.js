import App from './App.vue'
import Vue from 'vue'
import VueKinesis from 'vue-kinesis'
import '@/assets/css/tailwind.css'
import router from './Router.js'

Vue.use(VueKinesis)

new Vue({
  router,
  render: h=> h(App)
}).$mount('#app')

