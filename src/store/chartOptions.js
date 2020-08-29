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
  }

}
