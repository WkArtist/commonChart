<template>
  <div class="home">
    <ColorTable class="color-table"/>
    <PieChartWrap class="pie-chart"/>
    <CodeWrap class="code-wrap"/>
    <LineChartWrap class="line-chart"/>
  </div>
</template>

<script>
// @ is an alias to /src
import ColorTable from '@/components/home/ColorTable'
import PieChartWrap from '@/components/home/PieChartWrap'
import CodeWrap from '@/components/home/CodeWrap'
import LineChartWrap from '@/components/home/LineChartWrap'
export default {
  name: 'Home',
  components: {
    ColorTable,
    PieChartWrap,
    CodeWrap,
    LineChartWrap
  }
}
</script>

<style lang="scss" scoped>
  .home{
    .pie-chart{
      margin-top: 20px;
    }
    .code-wrap{
      position: fixed;
      top: 0px;
      right: 0px;
    }
    .line-chart{
      margin-top: 20px;
    }
  }
</style>
