import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currentCode: ''
  },
  mutations: {
    setCurrentCode(state, val) {
      state.currentCode = val
    }
  },
  actions: {
  },
  modules: {
  }
})
