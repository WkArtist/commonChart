import Vue from 'vue'
import Vuex from 'vuex'
import chartOptions from './chartOptions'
import chartData from './chartData'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    chartOptionsList: {
      bar: [],
      line: [],
      pie: []
    },
    chartData,
    currentActive: {
      type: 'pie',
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
    chartOptions(state, payload) {
      state.chartOptionsList[payload.target] = chartOptions[payload.target](payload.value)
    },
    setChartOptions(state, payload) {
      state.chartOptionsList[payload.type][payload.index] = payload.value
    }
  },
  actions: {
  },
  modules: {
  }
})
