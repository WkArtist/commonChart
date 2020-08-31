<template>
  <div class="box">
      <div class="title">雷达图（Radar）</div>
      <div class="content">
          <div :class="['item',{'active':($store.state.currentActive.type==='radar'&&$store.state.currentActive.index===ele.id)}]" v-for="ele in chartList" :key="ele.name" @click="selectItem(ele.id)">
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
      name: 'RadarChart'
    }
  },
  methods: {
    renderChart(ele) {
      ele.code = clearKeyQuotationMarks(JSON.stringify(this.optionRadar[ele.id], undefined, 2))
      const chartRadar = this.$refs[`chart${ele.id}`][0]
      const myChart = this.$echarts.init(chartRadar)
      myChart.setOption(this.optionRadar[ele.id])
    },
    selectItem(id) {
      this.chartList.forEach(ele => {
        if (ele.id === id) {
          ele.active = !ele.active
          this.$store.commit('setState', {
            name: 'currentActive',
            value: {
              type: 'radar',
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
      return this.$store.state.chartData.radar
    },
    optionRadar() {
      return this.$store.state.chartOptionsList.radar
    }
  },
  watch: {

  },
  mounted() {
    this.chartList.forEach((ele) => {
      this.$store.commit('chartOptions', {
        target: 'radar',
        value: ele
      })
      this.renderChart(ele)
    })
  }
}
</script>

<style>

</style>
