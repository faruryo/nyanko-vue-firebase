
const state = {
  status: false,
  displayName: '',
  photoURL: ''
}

const actions = {
  setAuthStatus ({ commit }, user) {
    commit('onAuthStateChanged', user)
  }
}

const mutations = {
  onAuthStateChanged (state, user) {
    state.status = user !== null
    if (state.status) {
      state.displayName = user.displayName
      state.photoURL = user.photoURL
    } else {
      state.displayName = ''
      state.photoURL = ''
    }
  }
}

export default {
  namespaced: true,
  state,
  actions,
  mutations
}
