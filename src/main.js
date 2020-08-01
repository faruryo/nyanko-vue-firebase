import Vue from 'vue'
import App from './App.vue'
import VueFirestore from 'vue-firestore'

import router from '@/plugins/router'
import store from '@/store'
import vuetify from '@/plugins/vuetify'

import Firebase from '@/plugins/firebase'

Firebase.init()

Vue.config.productionTip = false

Vue.use(VueFirestore)

Vue.mixin({
  created: function () {
    const { title } = this.$options
    if (title) {
      document.title = title
    }
  }
})

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App)
}).$mount('#app')
