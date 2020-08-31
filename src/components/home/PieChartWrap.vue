<template>
  <div class="box">
      <div class="title">饼图及环形图（Pie）</div>
      <div class="content">
          <div :class="['item',{'active':($store.state.currentActive.type==='pie'&&$store.state.currentActive.index===ele.id)}]" v-for="ele in chartList" :key="ele.name" @click="selectItem(ele.id)">
              <div class="item-title">{{ele.name}}</div>
              <div class="item-chart" :ref="`chart${ele.id}`"></div>
          </div>
      </div>
  </div>
</template>

<script>
import { clearKeyQuotationMarks, dynamicPieChart } from '@/util.js'
import 'echarts-liquidfill/src/liquidFill'
export default {
  data() {
    return {
      name: 'PieChart'
    }
  },
  methods: {
    renderChart(ele) {
      const chartPie = this.$refs[`chart${ele.id}`][0]
      const myChart = this.$echarts.init(chartPie)
      myChart.setOption(this.optionPie[ele.id])
      ele.code = clearKeyQuotationMarks(JSON.stringify(this.optionPie[ele.id], undefined, 2))
      if (ele.id === 1) {
        dynamicPieChart(myChart)
      }
    },
    selectItem(id) {
      this.chartList.forEach(ele => {
        if (ele.id === id) {
          ele.active = !ele.active
          this.$store.commit('setState', {
            name: 'currentActive',
            value: {
              type: 'pie',
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
      return this.$store.state.chartData.pie
    },
    optionPie() {
      return this.$store.state.chartOptionsList.pie
    },
    currentChartChange() {
      return this.$store.state.currentChartChange
    }
  },
  watch: {
    currentChartChange() {
      if (this.$store.state.currentActive.type === 'pie') {
        this.renderChart(this.$store.state.chartData[this.$store.state.currentActive.type][this.$store.state.currentActive.index])
      }
    }
  },
  mounted() {
    this.chartList.forEach((ele) => {
      this.$store.commit('chartOptions', {
        target: 'pie',
        value: ele
      })
      this.renderChart(ele)
    })
  }
}
</script>

<style>

</style>
