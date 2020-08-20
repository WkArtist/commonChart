import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currentCode: '',
    clearActive: {
      name: '',
      value: false
    }
  },
  mutations: {
    setCurrentCode(state, val) {
      state.currentCode = val
    },
    setClearActive(state, val) {
      state.clearActive = val
    }
  },
  actions: {
  },
  modules: {
  }
})
