export default {
  bar: [
    {
      id: 0,
      name: '基础线型图',
      type: 'bar',
      active: false,
      code: '',
      data: {
        xAxis: ['18岁以下', '18-24岁', '25-34岁', '35-44岁', '45岁'],
        yAxis: [3, 25, 43, 18, 11]
      }
    }, {
      id: 1,
      name: '堆叠柱状图',
      type: 'bar',
      active: false,
      code: '',
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
      code: '',
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
      code: '',
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
      type: 'bar',
      active: false,
      code: '',
      data: {
        xAxis: ['社保', '缴纳罚款', '违法处理', '户政', '出入境'],
        yAxis: [617, 593, 327, 294, 236]
      }
    }
  ],
  line: [
    {
      id: 0,
      name: '基础线型图',
      type: 'line',
      active: false,
      code: '',
      data: {
        xAxis: ['07-01', '07-06', '07-12', '07-18', '07-24', '07-30'],
        yAxis: [200, 123, 324, 422, 625, 456, 566]
      }
    }, {
      id: 1,
      name: '多条线性图',
      type: 'line',
      active: false,
      code: '',
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
      code: '',
      data: {
        xAxis: ['07-01', '07-06', '07-12', '07-18', '07-24', '07-30'],
        yAxis: [200, 123, 324, 422, 625, 456, 566]
      }
    }, {
      id: 3,
      name: '多维区域线型图',
      type: 'line',
      active: false,
      code: '',
      data: {
        xAxis: ['10:00', '12:00', '14:00', '16:00', '18:00', '20:00', '22:00'],
        yAxis: [
          [30, 40, 54, 65, 34, 54, 67],
          [34, 54, 65, 76, 78, 98, 54]
        ]
      }
    }
  ],
  pie: [
    {
      id: 0,
      name: '指标占比环形图',
      type: 'pie',
      active: false,
      code: '',
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
      code: '',
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
      code: '',
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
      code: '',
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
      code: '',
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
      code: '',
      data: [0.5, 0.5, 0.5]
    }
  ],
  radar: [
    {
      id: 0,
      name: '基础雷达图',
      type: 'radar',
      active: false,
      code: '',
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
  ]
}
