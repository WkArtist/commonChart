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
import 'echarts-liquidfill/src/liquidFill'
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
          active: false,
          data: [
            {
              name: '社保服务办理',
              value: 14595
            }, {
              name: '警务办理',
              value: 2163
            }, {
              name: '营业执照办理',
              value: 1621
            }, {
              name: '交通违法',
              value: '8648'
            }
          ]
        }, {
          id: 3,
          name: '普通环形图',
          type: 'pie',
          active: false,
          data: [
            {
              name: '社保服务办理',
              value: 14595
            }, {
              name: '警务办理',
              value: 2163
            }, {
              name: '交通违法',
              value: '8648'
            }
          ]
        }, {
          id: 4,
          name: '基础饼图',
          type: 'pie',
          active: false,
          data: [
            {
              name: '社保服务办理',
              value: 14595
            }, {
              name: '警务办理',
              value: 2163
            }, {
              name: '交通违法',
              value: '8648'
            }
          ]
        }, {
          id: 5,
          name: '进度图',
          type: 'pie',
          active: false,
          data: [0.5, 0.5, 0.5]
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
                  fontSize: 18,
                  fontWeight: 'bold',
                  color: '#fff',
                  rich: {
                    val: {
                      fontSize: 12,
                      color: '#fff'
                    },
                    type: {
                      fontSize: 12,
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
        }, {
          color: ['#2ED6E6', '#FFBB33', '#2AD49A', '#A667EA'],
          graphic: {
            elements: [{
              type: 'image',
              style: {
                image: require('../../assets/img/personnel.svg'),
                width: 22,
                height: 22
              },
              left: 'center',
              top: '41%'
            }]
          },
          title: {
            text: '人员占比',
            left: 'center',
            top: '50%',
            textStyle: {
              fontSize: 12,
              color: '#fff'
            }
          },
          series: [{
            name: '数量',
            type: 'pie',
            radius: ['40%', '50%'],
            center: ['50%', '50%'],
            data: ele.data,
            avoidLabelOverlap: true,
            hoverOffset: 1,
            itemStyle: {
              normal: {
                borderColor: 'rgba(255,255,255,0.01)',
                borderWidth: 1
              // color: function(params) {
              //   return color[params.dataIndex]
              // }
              }
            },
            labelLine: {
              normal: {
              // length: 20,
              // length2: 70
                lineStyle: {
                  color: 'rgba(255,255,255,0.5)'
                }
              }
            },
            label: {
              normal: {
                formatter: params => {
                  if (params.name === '社保服务办理') {
                    const value = '    ' + params.value
                    return '{value|' + value + '次}\n{hr|}\n{name|' + params.name + '}'
                  } else {
                    return '{value|' + params.value + '次}\n{hr|}\n{name|' + params.name + '}'
                  }
                },
                rich: {
                  name: {
                    fontSize: 12,
                    color: 'rgba(255,255,255,0.7)',
                    align: 'left',
                    lineHeight: 18
                  },
                  hr: {
                    width: '100%',
                    borderColor: 'rgba(255,255,255,0.5)',
                    borderWidth: 1,
                    height: 0
                  },
                  value: {
                    fontSize: 14,
                    color: 'rgba(255,255,255,0.7)',
                    lineHeight: 18,
                    align: 'left'
                  }
                }
              }
            }

          },
          {
            name: '外边框',
            type: 'pie',
            center: ['50%', '50%'],
            radius: ['54%', '55%'],
            hoverAnimation: false,
            label: {
              show: false
            },
            data: [{
              value: 1,
              itemStyle: {
                normal: {
                  color: 'rgba(255,255,255,0.5)'
                }
              }
            }]
          }
          ]
        }, {
          color: ['#A667EA', '#2AD49A', '#2ED6E6'],
          legend: {
            top: '82%',
            icon: 'roundRect',
            itemWidth: 18,
            fontSize: 12,
            itemHeight: 8,
            itemGap: 10,
            textStyle: {
              padding: [1, 0, 0, 0],
              color: '#fff'
            }
          },
          series: [
            {
              name: '数量',
              type: 'pie',
              radius: ['40%', '50%'],
              center: ['50%', '50%'],
              data: ele.data,
              avoidLabelOverlap: true,
              hoverOffset: 1,
              label: {
                show: false
              },
              labelLine: {
                show: false
              }
            }
          ]
        }, {
          color: ['#A667EA', '#2AD49A', '#2ED6E6'],
          legend: {
            top: '82%',
            icon: 'roundRect',
            itemWidth: 18,
            fontSize: 12,
            itemHeight: 8,
            itemGap: 10,
            textStyle: {
              padding: [1, 0, 0, 0],
              color: '#fff'
            }
          },
          series: [
            {
              name: '数量',
              type: 'pie',
              radius: '50%',
              center: ['50%', '50%'],
              data: ele.data,
              avoidLabelOverlap: true,
              hoverOffset: 1,
              labelLine: {
                normal: {
                  lineStyle: {
                    color: 'rgba(255,255,255,0.5)'
                  }
                }
              },
              label: {
                normal: {
                  color: 'rgba(255,255,255,0.7)'
                }
              }
            }
          ]
        }, {
          series: [
            {
              type: 'liquidFill',
              radius: '45%',
              center: ['50%', '50%'],
              data: ele.data, // data个数代表波浪数
              backgroundStyle: {
                borderWidth: 0,
                color: 'rgba(255,255,255,0.01)'
              },
              itemStyle: {
                color: '#2ED6E6'
              },
              label: {
                normal: {
                  formatter: (0.5 * 100).toFixed(0) + '{unit|%}\n{text|xx占比}',
                  textStyle: {
                    fontSize: 20,
                    color: '#fff',
                    rich: {
                      unit: {
                        fontSize: 12
                      },
                      text: {
                        fontSize: 12,
                        lineHeight: 20
                      }
                    }
                  }
                }
              },
              outline: {
                show: false
              }
            },
            {
              type: 'pie',
              center: ['50%', '50%'],
              radius: ['50%', '54%'],
              hoverAnimation: false,
              data: [
                {
                  name: '',
                  value: 500,
                  labelLine: {
                    show: false
                  },
                  itemStyle: {
                    color: '#2ED6E6'
                  }
                }
              ],
              label: {
                show: false
              },
              labelLine: {
                show: false
              }
            }
          ]
        }
      ]

      ele.code = '<pre>' + JSON.stringify(optionpie[ele.id], undefined, 2) + '</pre>'
      console.log(this.$refs)
      const chartPie = this.$refs[`chart${ele.id}`][0]
      const myChart = this.$echarts.init(chartPie)
      myChart.setOption(optionpie[ele.id])
      const self = this
      function clearCurrent() {
        myChart.dispatchAction({
          type: 'downplay',
          seriesIndex: 0,
          dataIndex: 0
        })
        myChart.dispatchAction({
          type: 'downplay',
          seriesIndex: 0,
          dataIndex: 1
        })
      }
      function rotation() {
        let i = 1
        self.timer = setInterval(() => {
          clearCurrent()
          myChart.dispatchAction({
            type: 'highlight',
            seriesIndex: 0,
            dataIndex: i % 2
          })
          i++
        }, 3000)
      }
      if (ele.id === 1) { // 轮播饼图
        myChart.dispatchAction({
          type: 'highlight',
          seriesIndex: 0,
          dataIndex: 0
        })
        rotation()
        myChart.on('mouseover', (e) => {
          if (e.dataIndex === 1) {
            clearInterval(self.timer)
            self.timer = null
            myChart.dispatchAction({
              type: 'downplay',
              seriesIndex: 0,
              dataIndex: 0
            })
          }
          if (e.dataIndex === 0) {
            clearInterval(self.timer)
            self.timer = null
            myChart.dispatchAction({
              type: 'downplay',
              seriesIndex: 0,
              dataIndex: 1
            })
          }
        })
        myChart.on('mouseout', (e) => {
          myChart.dispatchAction({
            type: 'highlight',
            seriesIndex: 0,
            dataIndex: 0
          })
          rotation()
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
    this.chartList.forEach((ele) => {
      this.renderChart(ele)
    })
    // this.renderChart(this.chartList[2])
  }
}
</script>

<style>

</style>
