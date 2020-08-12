<template>
  <div class="box">
      <div class="title">柱状图及条形图（Bar）</div>
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
          type: 'bar',
          active: false,
          data: {
            xAxis: ['18岁以下', '18-24岁', '25-34岁', '35-44岁', '45岁'],
            yAxis: [3, 25, 43, 18, 11]
          }
        }, {
          id: 1,
          name: '堆叠柱状图',
          type: 'bar',
          active: false,
          data: {
            xAxis: ['18岁以下', '18-24岁', '25-34岁', '35-44岁', '45岁'],
            yAxis: [
              [3, 25, 33, 18, 11],
              [3, 25, 13, 18, 11]
            ]
          }
        }, {
          id: 2,
          name: '多维分组柱形图',
          type: 'bar',
          active: false,
          data: {
            xAxis: ['10:00', '12:00', '14:00', '16:00', '18:00', '20:00', '22:00'],
            yAxis: [
              [30, 40, 54, 65, 34, 54, 67],
              [34, 54, 65, 76, 78, 98, 54]
            ]
          }
        }, {
          id: 3,
          name: '双轴折现柱状图',
          type: 'bar',
          active: false,
          data: {
            xAxis: ['05-28', '06-03', '06-09', '06-15', '06-21', '06-27'], // x 轴数值，日期
            yAxis: {
              barData: [200, 123, 324, 122, 325, 456], //  充电桩使用次数
              lineData: [300, 323, 214, 154, 366, 453] // 充电桩使用能耗
            }
          }
        }, {
          id: 4,
          name: '基础条形图',
          type: 'line',
          active: false,
          data: {
            xAxis: ['社保', '缴纳罚款', '违法处理', '户政', '出入境'],
            yAxis: [617, 593, 327, 294, 236]
          }
        }
      ],
      currentCode: ''
    }
  },
  methods: {
    renderChart(ele) {
      // const lineColor = ['#2AD49A', '#2ED6E6']
      const optionLine = [
        {
          grid: {
            left: '5%',
            right: '10%',
            bottom: '10%',
            top: '35%',
            containLabel: true
          },
          xAxis: {
            type: 'category',
            data: ele.data.xAxis,
            axisLine: {
              lineStyle: {
                color: 'rgba(255,255,255,0.5)'
              }
            },
            axisTick: {
              show: false
            },
            axisLabel: {
              color: '#d9d9d9'
            }
          },
          yAxis: {
            name: '%',
            type: 'value',
            splitNumber: 3,
            nameTextStyle: {
              color: '#8e8e8e',
              fontSize: 12,
              padding: [0, 30, -5, 0]
            },
            axisLabel: {
              show: true,
              textStyle: {
                color: '#8e8e8e',
                fontSize: 12,
                fontFamily: 'Helvetica',
                fontWeight: 400
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
          },
          series: [{
            type: 'bar',
            barWidth: 10,
            showBackground: true,
            backgroundStyle: {
              color: 'rgba(255,255,255,0.3)'
            },
            itemStyle: {
              normal: {
                color: 'rgba(46,214,230,1)'
              }
            },
            label: {
              normal: {
                show: true,
                formatter: (value, index) => {
                  return (value.data) + '%'
                },
                fontSize: 14,
                fontWeight: 'bold',
                fontFamily: 'Helvetica',
                color: '#fff',
                position: 'top'
              }
            },
            data: ele.data.yAxis
          }]
        }, {
          grid: {
            left: '5%',
            right: '10%',
            bottom: '10%',
            top: '35%',
            containLabel: true
          },
          legend: {
            x: 'center',
            y: '45',
            textStyle: {
              color: '#D9D9D9'
            }
          },
          xAxis: {
            type: 'category',
            data: ele.data.xAxis,
            axisLine: {
              lineStyle: {
                color: 'rgba(255,255,255,0.5)'
              }
            },
            axisTick: {
              show: false
            },
            axisLabel: {
              color: '#d9d9d9'
            }
          },
          yAxis: {
            name: '%',
            type: 'value',
            splitNumber: 3,
            nameTextStyle: {
              color: '#8e8e8e',
              fontSize: 12,
              padding: [0, 30, -5, 0]
            },
            axisLabel: {
              show: true,
              textStyle: {
                color: '#8e8e8e',
                fontSize: 12,
                fontFamily: 'Helvetica',
                fontWeight: 400
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
          },
          series: [
            {
              name: '男性',
              type: 'bar',
              barWidth: 10,
              stack: '总量',
              itemStyle: {
                normal: {
                  color: '#2ED6E6'
                }
              },
              data: ele.data.yAxis[0]
            }, {
              name: '女性',
              type: 'bar',
              barWidth: 10,
              stack: '总量',
              itemStyle: {
                normal: {
                  color: '#FF5577'
                }
              },
              data: ele.data.yAxis[1]
            }
          ]
        }, {
          grid: {
            left: '5%',
            right: '10%',
            bottom: '10%',
            top: '35%',
            containLabel: true
          },
          legend: {
            show: true,
            x: 'center',
            y: '45',
            textStyle: {
              color: '#D9D9D9'
            }
          },
          xAxis: {
            type: 'category',
            data: ele.data.xAxis,
            axisLine: {
              lineStyle: {
                color: 'rgba(255,255,255,0.5)'
              }
            },
            axisTick: {
              show: false
            },
            axisLabel: {
              color: '#d9d9d9'
            }
          },
          yAxis: {
            name: '次',
            type: 'value',
            splitNumber: 3,
            nameTextStyle: {
              color: '#8e8e8e',
              fontSize: 12,
              padding: [0, 30, -5, 0]
            },
            axisLabel: {
              show: true,
              textStyle: {
                color: '#8e8e8e',
                fontSize: 12,
                fontFamily: 'Helvetica',
                fontWeight: 400
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
          },
          series: [{
            type: 'bar',
            name: 'type1',
            barWidth: 10,
            itemStyle: {
              normal: {
                color: '#2ED6E6'
              }
            },
            data: ele.data.yAxis[0]
          }, {
            type: 'bar',
            name: 'type2',
            barWidth: 10,
            itemStyle: {
              normal: {
                color: '#2AD49A'
              }
            },
            data: ele.data.yAxis[1]
          }]
        }, {
          grid: {
            left: '5%',
            right: '5%',
            top: '40%',
            bottom: '5%',
            containLabel: true
          },
          tooltip: {
            show: true,
            trigger: 'axis',
            'axisPointer': {
              'type': 'shadow',
              textStyle: {
                color: '#fff'
              }

            }
          },
          legend: {
            show: true,
            x: '80',
            y: '45',
            textStyle: {
              color: '#D9D9D9',
              padding: [3, 0, 0, 0]
            }
          },
          xAxis: [
            {
              type: 'category',
              // boundaryGap: false,
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
              name: '次',
              splitNumber: 4,
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
            },
            {
              type: 'value',
              name: 'KW',
              splitNumber: 4,
              nameTextStyle: {
                color: '#8e8e8e',
                fontSize: 12,
                padding: [0, -37, -5, 0]
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
                show: false
              }
            }
          ],
          series: [
            {
              yAxisIndex: 0,
              name: '使用次数',
              type: 'bar',
              stack: '总量',
              barWidth: 10,
              itemStyle: {
                normal: {
                  color: '#2ED6E6'
                }
              },
              data: ele.data.yAxis.barData
            },
            {
              yAxisIndex: 1,
              name: '使用能耗',
              type: 'line',
              stack: '总量',
              symbol: 'circle',
              symbolSize: 5,
              itemStyle: {
                normal: {
                  color: '#FFBB33',
                  lineStyle: {
                    color: '#FFBB33',
                    width: 2
                  }
                }
              },
              data: ele.data.yAxis.lineData
            }
          ]
        }, {
          grid: {
            left: '5%',
            right: '10%',
            bottom: '-5%',
            top: '20%',
            containLabel: true
          },
          xAxis: {
            show: false,
            type: 'value'
          },
          yAxis: [{
            type: 'category',
            inverse: true,
            axisLabel: {
              show: true,
              textStyle: {
                color: '#D9D9D9',
                fontSize: 12,
                fontWeight: 400
              }
            },
            splitLine: {
              show: false
            },
            axisTick: {
              show: false
            },
            axisLine: {
              show: false
            },
            data: ele.data.xAxis
          }],
          series: [{
            name: '金额',
            type: 'bar',
            zlevel: 1,
            itemStyle: {
              normal: {
                label: {
                  show: true, // 开启显示
                  position: 'right', // 在上方显示
                  textStyle: { // 数值样式
                    color: '#2ED6E6',
                    fontSize: 12,
                    fontWeight: 'bold'
                  },
                  formatter: params => {
                    return `${params.value} 次`
                  }
                },
                color: '#2ED6E6'
              }
            },
            barWidth: 10,
            data: ele.data.yAxis
          }
          ]
        }
      ]

      ele.code = '<pre>' + JSON.stringify(optionLine[ele.id], undefined, 2) + '</pre>'
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
