<template>
  <div class="box">
      <div class="title">饼图及环形图（Pie）</div>
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
          name: '指标占比环形图',
          type: 'pie',
          active: false,
          data: [{
            name: '使用车位',
            value: 1258
          }, {
            name: '空车位',
            value: 372
          }]
        }, {
          id: 1,
          name: '轮播饼图',
          type: 'pie',
          active: false,
          data: [{
            name: '使用车位',
            value: 1258
          }, {
            name: '空车位',
            value: 372
          }]
        }, {
          id: 2,
          name: '带说明多维饼图',
          type: 'pie',
          active: false
        }, {
          id: 3,
          name: '普通环形图',
          type: 'pie',
          active: false
        }, {
          id: 4,
          name: '基础饼图',
          type: 'pie',
          active: false
        }
      ],
      currentCode: '',
      timer: null
    }
  },
  methods: {
    renderChart(ele) {
      const optionpie = [
        {
          color: ['#2ED6E6', 'rgba(255,255,255,0.3)'],
          title: {
            text: (ele.data[0].value / (ele.data[0].value + ele.data[1].value) * 100).toFixed() + '{unit|%}\n{text|xx占比}',
            left: 'center',
            top: 'center',
            textStyle: {
              fontSize: 18,
              color: '#FFF',
              rich: {
                unit: {
                  fontSize: 12
                },
                text: {
                  fontSize: 12,
                  color: '#D9D9D9'
                }
              }
            }
          },
          series: [{
            name: '数量',
            type: 'pie',
            radius: ['45%', '55%'],
            center: ['50%', '50%'],
            data: ele.data,
            hoverOffset: 1,
            itemStyle: {
              normal: {
                borderColor: 'rgba(255,255,255,0.01)',
                borderWidth: 1
              }
            },
            label: {
              show: false
            },
            labelLine: {
              show: false
            }
          }]
        }, {
          color: ['#2ED6E6', '#FFBB33'],
          series: [{
            name: '数量',
            type: 'pie',
            radius: ['45%', '55%'],
            center: ['50%', '50%'],
            data: ele.data,
            hoverOffset: 2,
            itemStyle: {
              normal: {
                borderColor: 'rgba(255,255,255,0.01)',
                borderWidth: 1
              }
            },
            label: {
              normal: {
                show: false,
                position: 'center'
              },
              emphasis: {
                show: true,
                formatter: function(param) {
                  return param.percent.toFixed(0) + '{val|%}\n{type|' + param.name + '}'
                },
                textStyle: {
                  fontSize: 28,
                  fontWeight: 'bold',
                  color: '#fff',
                  rich: {
                    val: {
                      fontSize: 12,
                      color: '#fff'
                    },
                    type: {
                      fontSize: 14,
                      color: '#D9D9D9'
                    }
                  }
                }
              }
            },
            labelLine: {
              show: false
            }
          }]
        }
      ]

      ele.code = '<pre>' + JSON.stringify(optionpie[ele.id], undefined, 2) + '</pre>'
      const chartPie = this.$refs[`chart${ele.id}`][0]
      const myChart = this.$echarts.init(chartPie)
      myChart.setOption(optionpie[ele.id])
      if (ele.id === 1) { // 轮播饼图
        myChart.dispatchAction({
          type: 'highlight',
          seriesIndex: 0,
          dataIndex: 0
        })
        let i = 0
        this.timer = setInterval(() => {
          myChart.dispatchAction({
            type: 'highlight',
            seriesIndex: i % 2,
            dataIndex: i % 2
          })
          i++
        }, 3000)
        myChart.on('mouseover', (e) => {
          if (e.dataIndex !== 0) {
            // 取消默认高亮
            myChart.dispatchAction({
              type: 'downplay',
              seriesIndex: 0,
              dataIndex: 0
            })
          }
        })
      }
    },
    clearActive() {
      this.timer = null
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
    this.renderChart(this.chartList[1])
  }
}
</script>

<style>

</style>
