<template>
  <div class="box">
      <div class="title">折线图及曲线图（Line）</div>
      <div class="content">
          <div :class="['item',{'active':($store.state.currentActive.type==='line'&&$store.state.currentActive.index===ele.id)}]" v-for="ele in chartList" :key="ele.name" @click="selectItem(ele.id)">
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
      name: 'LineChart'
    }
  },
  methods: {
    renderChart(ele) {
      const chartLine = this.$refs[`chart${ele.id}`][0]
      const myChart = this.$echarts.init(chartLine)
      myChart.setOption(this.optionLine[ele.id])
      ele.code = clearKeyQuotationMarks(JSON.stringify(this.optionLine[ele.id], undefined, 2))
    },
    selectItem(id) {
      this.chartList.forEach(ele => {
        if (ele.id === id) {
          ele.active = !ele.active
          this.$store.commit('setState', {
            name: 'currentActive',
            value: {
              type: 'line',
              index: ele.id
            }
          })
        } else {
          ele.active = false
        }
      })
    }
  },
  computed: {
    chartList() {
      return this.$store.state.chartData.line
    },
    optionLine() {
      return this.$store.state.chartOptionsList.line
    }
  },
  watch: {

  },
  mounted() {
    this.chartList.forEach((ele) => {
      this.$store.commit('chartOptions', {
        target: 'line',
        value: ele
      })
      this.renderChart(ele)
    })
  }
}
</script>

<style>

</style>
