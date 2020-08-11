<template>
  <div class="box">
      <div class="title">折线图及曲线图（Line）</div>
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
          name: '基础线型图',
          type: 'line',
          active: false,
          data: {
            xAxis: ['07-01', '07-06', '07-12', '07-18', '07-24', '07-30'],
            yAxis: [200, 123, 324, 422, 625, 456, 566]
          }
        }, {
          id: 1,
          name: '多条线性图',
          type: 'line',
          active: false,
          data: {
            xAxis: ['10:00', '12:00', '14:00', '16:00', '18:00', '20:00', '22:00'],
            yAxis: [
              [30, 40, 54, 65, 34, 54, 67],
              [34, 54, 65, 76, 78, 98, 54]
            ]
          }
        }, {
          id: 2,
          name: '区域线型图',
          type: 'line',
          active: false,
          data: {
            xAxis: ['07-01', '07-06', '07-12', '07-18', '07-24', '07-30'],
            yAxis: [200, 123, 324, 422, 625, 456, 566]
          }
        }, {
          id: 3,
          name: '多维区域线型图',
          type: 'line',
          active: false,
          data: {
            xAxis: ['10:00', '12:00', '14:00', '16:00', '18:00', '20:00', '22:00'],
            yAxis: [
              [30, 40, 54, 65, 34, 54, 67],
              [34, 54, 65, 76, 78, 98, 54]
            ]
          }
        }
      ],
      currentCode: ''
    }
  },
  methods: {
    renderChart(ele) {
      const lineColor = ['#2AD49A', '#2ED6E6']
      const optionLine = [
        {
          grid: {
            left: '5%',
            right: '10%',
            top: '40%',
            bottom: '10%',
            containLabel: true
          },
          tooltip: {
            show: true,
            trigger: 'axis'
          },
          legend: {
            show: true,
            x: 'center',
            y: '45',
            icon: 'roundRect',
            itemWidth: 16,
            itemHeight: 5,
            itemGap: 36,
            textStyle: {
              color: '#D9D9D9',
              padding: [2, 0, 0, 0]
            },
            data: ['办理次数']
          },
          xAxis: [
            {
              type: 'category',
              boundaryGap: false,
              axisLabel: {
                fontSize: 12,
                color: '#D9D9D9'
              },
              axisLine: {
                show: true,
                lineStyle: {
                  color: 'rgba(255,255,255,0.5)'
                }
              },
              axisTick: { show: false },
              data: ele.data.xAxis
            }
          ],
          yAxis: [
            {
              name: '次',
              type: 'value',
              splitNumber: 3,
              // scale: true,
              // interval: 200,
              nameTextStyle: {
                color: '#8e8e8e',
                fontSize: 12,
                padding: [0, 30, 0, 0],
                rich: {
                  val: {
                    fontSize: 12,
                    color: '#8e8e8e'
                  }
                }
              },
              axisLabel: {
                formatter: (value, index) => {
                  return value
                },
                textStyle: {
                  color: '#8E8E8E'
                }
              },
              axisLine: {
                show: false
              },
              axisTick: {
                show: false
              },
              splitLine: {
                show: true,
                lineStyle: {
                  color: ['rgba(217,217,217,0)', 'rgba(217,217,217,0.6)', 'rgba(217,217,217,0.6)', 'rgba(217,217,217,0.6)', 'rgba(217,217,217,0.6)', 'rgba(217,217,217,0.6)', 'rgba(217,217,217,0.6)', 'rgba(217,217,217,0.6)', 'rgba(217,217,217,0.6)', 'rgba(217,217,217,0.6)', 'rgba(217,217,217,0.6)'],
                  type: 'dashed'
                }
              }
            }
          ],
          series: [
            {
              name: '办理次数',
              type: 'line',
              smooth: true,
              symbol: 'circle',
              symbolSize: 2,
              itemStyle: {
                normal: {
                  color: '#2ED6E6'
                }
              },
              data: ele.data.yAxis
            }
          ]
        }, {
          grid: {
            left: '5%',
            right: '10%',
            top: '40%',
            bottom: '10%',
            containLabel: true
          },
          tooltip: {
            show: true,
            trigger: 'axis',
            formatter: function(params) {
              let str = ''
              params.forEach(v => {
                console.log(v)
                str += `<div style="text-align: left">
                <div><span style="display:inline-block;margin-right:5px;border-radius:10px;width:10px;height:10px;background-color:${lineColor[v.componentIndex]};"></span>${v.seriesName}：${v.name}</div>
                <div>已用车位：${v.data * 10200 / 100}</div>
                <div>空闲车位：${(100 - v.data) * 10200 / 100}</div>
                <div>占用率：${v.data}%</div>
              </div>`
              })
              return str
            }
          },
          legend: {
            show: true,
            x: 'center',
            y: '45',
            icon: 'roundRect',
            itemWidth: 16,
            fontSize: 12,
            itemHeight: 5,
            itemGap: 36,
            textStyle: {
              color: '#D9D9D9',
              padding: [3, 0, 0, 0]
            },
            data: ['今日', '昨日']
          },
          xAxis: [
            {
              type: 'category',
              boundaryGap: false,
              axisLabel: {
                color: '#d9d9d9'
              },
              axisLine: {
                show: true,
                lineStyle: {
                  color: 'rgba(255,255,255,0.5)'
                }
              },
              axisTick: { show: false },
              data: ele.data.xAxis
            }
          ],
          yAxis: [
            {
              type: 'value',
              name: '%',
              // splitNumber: 3,
              max: 100,
              nameTextStyle: {
                color: '#8e8e8e',
                fontSize: 12,
                padding: [0, 30, -5, 0]
              },
              axisLabel: {
                formatter: (value, index) => {
                  return value
                },
                textStyle: {
                  color: '#8e8e8e'
                }
              },
              axisLine: {
                show: false
              },
              axisTick: {
                show: false
              },
              splitLine: {
                show: true,
                lineStyle: {
                  color: ['rgba(217,217,217,0)', 'rgba(217,217,217,0.6)', 'rgba(217,217,217,0.6)', 'rgba(217,217,217,0.6)', 'rgba(217,217,217,0.6)', 'rgba(217,217,217,0.6)', 'rgba(217,217,217,0.6)', 'rgba(217,217,217,0.6)', 'rgba(217,217,217,0.6)', 'rgba(217,217,217,0.6)', 'rgba(217,217,217,0.6)'],
                  type: 'dashed'
                }
              }
            }
          ],
          series: [
            {
              yAxisIndex: 0,
              name: '昨日',
              type: 'line',
              smooth: true,

              symbol: 'circle',
              symbolSize: 2,
              itemStyle: {
                normal: {
                  color: '#2AD49A',
                  lineStyle: {
                    color: '#2AD49A',
                    width: 2
                  }
                }
              },
              data: ele.data.yAxis[0]
            },
            {
              name: '今日',
              type: 'line',
              smooth: true,
              symbol: 'circle',
              symbolSize: 2,
              itemStyle: {
                normal: {
                  color: '#2ED6E6',
                  lineStyle: {
                    color: '#2ED6E6',
                    width: 2
                  }
                }
              },
              data: ele.data.yAxis[1]
            }
          ]
        }, {
          grid: {
            left: '5%',
            right: '10%',
            top: '40%',
            bottom: '10%',
            containLabel: true
          },
          tooltip: {
            show: true,
            trigger: 'axis'
          },
          legend: {
            show: true,
            x: 'center',
            y: '45',
            icon: 'roundRect',
            itemWidth: 16,
            itemHeight: 5,
            itemGap: 36,
            textStyle: {
              color: '#D9D9D9',
              padding: [2, 0, 0, 0]
            },
            data: ['办理次数']
          },
          xAxis: [
            {
              type: 'category',
              boundaryGap: false,
              axisLabel: {
                fontSize: 12,
                color: '#D9D9D9'
              },
              axisLine: {
                show: true,
                lineStyle: {
                  color: 'rgba(255,255,255,0.5)'
                }
              },
              axisTick: { show: false },
              data: ele.data.xAxis
            }
          ],
          yAxis: [
            {
              name: '次',
              type: 'value',
              splitNumber: 3,
              // scale: true,
              // interval: 200,
              nameTextStyle: {
                color: '#8e8e8e',
                fontSize: 12,
                padding: [0, 30, 0, 0],
                rich: {
                  val: {
                    fontSize: 12,
                    color: '#8e8e8e'
                  }
                }
              },
              axisLabel: {
                formatter: (value, index) => {
                  return value
                },
                textStyle: {
                  color: '#8E8E8E'
                }
              },
              axisLine: {
                show: false
              },
              axisTick: {
                show: false
              },
              splitLine: {
                show: true,
                lineStyle: {
                  color: ['rgba(217,217,217,0)', 'rgba(217,217,217,0.6)', 'rgba(217,217,217,0.6)', 'rgba(217,217,217,0.6)', 'rgba(217,217,217,0.6)', 'rgba(217,217,217,0.6)', 'rgba(217,217,217,0.6)', 'rgba(217,217,217,0.6)', 'rgba(217,217,217,0.6)', 'rgba(217,217,217,0.6)', 'rgba(217,217,217,0.6)'],
                  type: 'dashed'
                }
              }
            }
          ],
          series: [
            {
              name: '办理次数',
              type: 'line',
              smooth: true,
              symbol: 'circle',
              symbolSize: 2,
              itemStyle: {
                normal: {
                  color: '#2ED6E6'
                }
              },
              areaStyle: {
                color: new this.$echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                  offset: 0,
                  color: 'rgba(46,214,230,0)'
                }, {
                  offset: 1,
                  color: 'rgba(46,214,230,0.3)'
                }])
              },
              data: ele.data.yAxis
            }
          ]
        }, {
          grid: {
            left: '5%',
            right: '10%',
            top: '40%',
            bottom: '10%',
            containLabel: true
          },
          tooltip: {
            show: true,
            trigger: 'axis',
            formatter: function(params) {
              let str = ''
              params.forEach(v => {
                console.log(v)
                str += `<div style="text-align: left">
                <div><span style="display:inline-block;margin-right:5px;border-radius:10px;width:10px;height:10px;background-color:${lineColor[v.componentIndex]};"></span>${v.seriesName}：${v.name}</div>
                <div>已用车位：${v.data * 10200 / 100}</div>
                <div>空闲车位：${(100 - v.data) * 10200 / 100}</div>
                <div>占用率：${v.data}%</div>
              </div>`
              })
              return str
            }
          },
          legend: {
            show: true,
            x: 'center',
            y: '45',
            icon: 'roundRect',
            itemWidth: 16,
            fontSize: 12,
            itemHeight: 5,
            itemGap: 36,
            textStyle: {
              color: '#D9D9D9',
              padding: [3, 0, 0, 0]
            },
            data: ['今日', '昨日']
          },
          xAxis: [
            {
              type: 'category',
              boundaryGap: false,
              axisLabel: {
                color: '#d9d9d9'
              },
              axisLine: {
                show: true,
                lineStyle: {
                  color: 'rgba(255,255,255,0.5)'
                }
              },
              axisTick: { show: false },
              data: ele.data.xAxis
            }
          ],
          yAxis: [
            {
              type: 'value',
              name: '%',
              // splitNumber: 3,
              max: 100,
              nameTextStyle: {
                color: '#8e8e8e',
                fontSize: 12,
                padding: [0, 30, -5, 0]
              },
              axisLabel: {
                formatter: (value, index) => {
                  return value
                },
                textStyle: {
                  color: '#8e8e8e'
                }
              },
              axisLine: {
                show: false
              },
              axisTick: {
                show: false
              },
              splitLine: {
                show: true,
                lineStyle: {
                  color: ['rgba(217,217,217,0)', 'rgba(217,217,217,0.6)', 'rgba(217,217,217,0.6)', 'rgba(217,217,217,0.6)', 'rgba(217,217,217,0.6)', 'rgba(217,217,217,0.6)', 'rgba(217,217,217,0.6)', 'rgba(217,217,217,0.6)', 'rgba(217,217,217,0.6)', 'rgba(217,217,217,0.6)', 'rgba(217,217,217,0.6)'],
                  type: 'dashed'
                }
              }
            }
          ],
          series: [
            {
              yAxisIndex: 0,
              name: '昨日',
              type: 'line',
              smooth: true,

              symbol: 'circle',
              symbolSize: 2,
              itemStyle: {
                normal: {
                  color: '#2AD49A',
                  lineStyle: {
                    color: '#2AD49A',
                    width: 2
                  }
                }
              },
              areaStyle: {
                color: new this.$echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                  offset: 0,
                  color: 'rgba(42,212,154,0)'
                }, {
                  offset: 1,
                  color: 'rgba(42,212,154,0.3)'
                }])
              },
              data: ele.data.yAxis[0]
            },
            {
              name: '今日',
              type: 'line',
              smooth: true,
              symbol: 'circle',
              symbolSize: 2,
              itemStyle: {
                normal: {
                  color: '#2ED6E6',
                  lineStyle: {
                    color: '#2ED6E6',
                    width: 2
                  }
                }
              },
              areaStyle: {
                color: new this.$echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                  offset: 0,
                  color: 'rgba(46,214,230,0)'
                }, {
                  offset: 1,
                  color: 'rgba(46,214,230,0.3)'
                }])
              },
              data: ele.data.yAxis[1]
            }
          ]
        }
      ]

      ele.code = '<pre>' + JSON.stringify(optionLine[ele.id], undefined, 2) + '</pre>'
      console.log(this.$refs)
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
    // this.renderChart(this.chartList[2])
  }
}
</script>

<style>

</style>
