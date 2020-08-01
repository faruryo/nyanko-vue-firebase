import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('@/components/Home.vue'),
      meta: { name: 'Home', icon: 'mdi-view-dashboard' }
    },
    {
      path: '/NyankoView',
      name: 'NyankoView',
      component: () => import('@/components/NyankoView.vue'),
      meta: { name: 'Nyankoview', icon: 'mdi-view-list' }
    }
  ]
})
