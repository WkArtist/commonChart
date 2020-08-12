<template>
  <div class="box">
      <div class="title">雷达图（Radar）</div>
      <div class="content">
          <div :class="['item',{'active':ele.active}]" v-for="ele in chartList" :key="ele.name" @click="selectItem(ele.id)">
              <div class="item-title">{{ele.name}}</div>
              <div class="item-chart" :ref="`chart${ele.id}`"></div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      chartList: [
        {
          id: 0,
          name: '基础雷达图',
          type: 'radar',
          active: false,
          data: {
            bg: [
              {
                text: '购物\n741',
                max: 1000
              },
              {
                text: '餐饮\n800',
                max: 1000
              },
              {
                text: '休闲\n210',
                max: 1000
              },
              {
                text: '旅游\n97',
                max: 1000
              },
              {
                text: '住宿\n61',
                max: 1000
              },
              {
                text: '其他\n132',
                max: 1000
              }
            ],
            data: [741, 800, 210, 97, 61, 132]
          }
        }
      ],
      currentCode: ''
    }
  },
  methods: {
    renderChart(ele) {
      const optionLine = [
        {
          radar: [{
            indicator: ele.data.bg,
            center: ['center', '60%'],
            startAngle: 0,
            radius: '70%',
            name: {
              formatter: function(value, indicator) {
                const name = value.substring(0, value.indexOf('\n'))
                const values = value.substring(value.indexOf('\n') + 1, value.length) // 去掉\n
                return '{yellow|' + name + ':' + values + 'w}'
              },
              rich: {
                yellow: {
                  color: '#2ed6e6',
                  fontSize: 12
                }
              }
            },
            nameGap: 5,
            splitLine: {
              lineStyle: {
                color: 'rgba(255,255,255,0.2)',
                opacity: 1,
                width: 1
              }
            },
            splitArea: {
              show: false
            },
            axisLine: {
              show: true,
              lineStyle: {
                color: 'rgba(255,255,255,0.2)'
              }
            }
          }],
          grid: {
            containLabel: true
          },
          series: [{
            type: 'radar',
            data: [{
              value: ele.data.data
            }],
            symbolSize: 3,
            itemStyle: {
              normal: {
                borderColor: '#2ed6e6',
                borderWidth: 2
              }
            },
            lineStyle: {
              normal: {
                color: '#2ed6e6',
                width: 2
              }
            },
            areaStyle: {
              normal: {
                color: '#2ed6e6',
                opacity: 0.2
              }
            }
          }]
        }
      ]
      ele.code = JSON.stringify(optionLine[ele.id], undefined, 2)
      const chartLine = this.$refs[`chart${ele.id}`][0]
      const myChart = this.$echarts.init(chartLine)
      myChart.setOption(optionLine[ele.id])
    },
    selectItem(id) {
      this.chartList.forEach(ele => {
        if (ele.id === id) {
          ele.active = !ele.active
          this.$store.commit('setCurrentCode', this.chartList[id].code)
        } else {
          ele.active = false
        }
      })
    }
  },
  mounted() {
    this.chartList.forEach((ele) => {
      this.renderChart(ele)
    })
  }
}
</script>

<style>

</style>
