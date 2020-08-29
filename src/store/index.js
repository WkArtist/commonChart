import Vue from 'vue'
import Vuex from 'vuex'
import chartOptions from './chartOptions'
import chartData from './chartData'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    chartOptionsList: {
      bar: []
    },
    chartData,
    currentActive: {
      type: 'bar',
      index: 0
    },
    currentCode: '',
    clearActive: {
      from: '',
      value: false
    }
  },
  mutations: {
    setState(state, payload) {
      state[payload.name] = payload.value
    },
    setCurrentCode(state, val) {
      state.currentCode = val
    },
    setClearActive(state, val) {
      state.clearActive = val
    },
    chartOptions(state, payload) {
      state.chartOptionsList.bar = chartOptions.bar(payload)
    },
    setCurrentActive(state, payload) {
      state.currentActive = payload
    }
  },
  actions: {
  },
  modules: {
  }
})
