import echarts from 'echarts'
export default {
  bar: (ele) => {
    return [
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
  },
  line: (ele) => {
    return [
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
              str += `<div style="text-align: left">
                <div><span style="display:inline-block;margin-right:5px;border-radius:10px;width:10px;height:10px;background-color:${['#2AD49A', '#2ED6E6'][v.componentIndex]};"></span>${v.seriesName}：${v.name}</div>
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
              color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
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
              str += `<div style="text-align: left">
                <div><span style="display:inline-block;margin-right:5px;border-radius:10px;width:10px;height:10px;background-color:${['#2AD49A', '#2ED6E6'][v.componentIndex]};"></span>${v.seriesName}：${v.name}</div>
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
              color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
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
              color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
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
  },
  pie: (ele) => {
    return [
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
              image: require('../assets/img/personnel.svg'),
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
  },
  radar: (ele) => {
    return [
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
  }
}
