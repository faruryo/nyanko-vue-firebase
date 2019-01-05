import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: null,
    status: false
  },
  mutations: {
    onAuthStateChanged (state, user) {
      state.user = user
      state.status = user !== null
    }
  },
  getters: {
    user (state) {
      return state.user
    },
    isSignedIn (state) {
      return state.status
    }
  }
})
