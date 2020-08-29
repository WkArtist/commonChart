<template>
  <div class="box">
      <div class="title">柱状图及条形图（Bar）</div>
      <div class="content">
          <div :class="['item',{'active':($store.state.currentActive.type==='bar'&&$store.state.currentActive.index===ele.id)}]" v-for="ele in chartList" :key="ele.name" @click="selectItem(ele.id)">
              <div class="item-title">{{ele.name}}</div>
              <div class="item-chart" :ref="`chart${ele.id}`"></div>
          </div>
      </div>
  </div>
</template>

<script>
import { clearKeyQuotationMarks } from '@/util.js'
export default {
  data() {
    return {
      name: 'BarChart',
      currentCode: '',
      options: []
    }
  },
  methods: {
    renderChart(ele) {
      const chartLine = this.$refs[`chart${ele.id}`][0]
      const myChart = this.$echarts.init(chartLine)
      myChart.setOption(this.optionBar[ele.id])
      ele.code = clearKeyQuotationMarks(JSON.stringify(this.optionBar[ele.id], undefined, 2))
    },
    clearActive() {
      if (this.$store.state.clearActive.from === this.name) {
        return
      }
      this.chartList.forEach(ele => {
        ele.active = false
      })
    },
    selectItem(id) {
      this.$store.commit('setClearActive', {
        from: this.name,
        value: !this.$store.state.clearActive.value
      })
      this.chartList.forEach(ele => {
        if (ele.id === id) {
          ele.active = !ele.active
          this.$store.commit('setState', {
            name: 'currentActive',
            value: {
              type: 'bar',
              index: ele.id
            }
          })
          // this.$store.commit('setCurrentCode', this.chartList[id].code)
        } else {
          ele.active = false
        }
      })
    }
  },
  computed: {
    listenClearActive() {
      return this.$store.state.clearActive.value
    },
    chartList() {
      return this.$store.state.chartData.bar
    },
    optionBar() {
      return this.$store.state.chartOptionsList.bar
    }
  },
  watch: {
    listenClearActive(val) {
      this.clearActive()
    }
  },
  mounted() {
    this.chartList.forEach((ele) => {
      this.$store.commit('chartOptions', ele)
      this.renderChart(ele)
    })
  }
}
</script>

<style>

</style>
