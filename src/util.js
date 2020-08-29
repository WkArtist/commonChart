/**
 * 清除JSON字符串key值的双引号
 * @param {String} str 需要处理的字符串
 */
export function clearKeyQuotationMarks(str) {
  const reg = /"(?=.+":)|(?=".+)"(?=:)/g
  return str.replace(reg, '')
}

/**
 * 加上JSON字符串key值的双引号
 * @param {String} str 需要处理的字符串
 */
export function addKeyQuotationMarks(str) {
  let res = ''
  const regLast = /\S(?=:)/g
  res = str.replace(regLast, word => `${word}"`)
  const regFirst = /\s\S(?=\S*:)/g
  res = res.replace(regFirst, word => `${word.split('')[0]}"${word.split('')[1]}`)
  return res
}

/**
 * 动态饼图控制
 * @param {Object} myChart echarts实例
 */
export function dynamicPieChart(myChart) {
  let timer = null
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
    timer = setInterval(() => {
      clearCurrent()
      myChart.dispatchAction({
        type: 'highlight',
        seriesIndex: 0,
        dataIndex: i % 2
      })
      i++
    }, 4000)
  }
  // 轮播饼图
  myChart.dispatchAction({
    type: 'highlight',
    seriesIndex: 0,
    dataIndex: 0
  })
  rotation()
  myChart.on('mouseover', (e) => {
    if (e.dataIndex === 1) {
      clearInterval(timer)
      timer = null
      myChart.dispatchAction({
        type: 'downplay',
        seriesIndex: 0,
        dataIndex: 0
      })
    }
    if (e.dataIndex === 0) {
      clearInterval(timer)
      timer = null
      myChart.dispatchAction({
        type: 'downplay',
        seriesIndex: 0,
        dataIndex: 1
      })
    }
  })
  myChart.on('mouseout', (e) => {
    clearInterval(timer)
    timer = null
    myChart.dispatchAction({
      type: 'highlight',
      seriesIndex: 0,
      dataIndex: 0
    })
    rotation()
  })
}
