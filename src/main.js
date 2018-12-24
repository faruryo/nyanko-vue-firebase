import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import store from './store'
import VueFirestore from 'vue-firestore'
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'

Vue.config.productionTip = false

Vue.use(VueFirestore)

Vue.mixin({
  created: function () {
    let { title } = this.$options
    if (title) {
      document.title = title
    }
  }
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
