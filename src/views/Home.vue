<template>
  <div class="home">
    <ColorTable class="color-table"/>
    <PieChartWrap class="pie-chart"/>
    <CodeWrap class="code-wrap"/>
    <LineChartWrap class="line-chart"/>
    <BarChartWrap class="bar-chart"/>
    <RadarChartWrap class="radar-chart"/>
  </div>
</template>

<script>
// @ is an alias to /src
import ColorTable from '@/components/home/ColorTable'
import PieChartWrap from '@/components/home/PieChartWrap'
import CodeWrap from '@/components/home/CodeWrap'
import LineChartWrap from '@/components/home/LineChartWrap'
import RadarChartWrap from '@/components/home/RadarChartWrap'
import BarChartWrap from '@/components/home/BarChartWrap'
export default {
  name: 'Home',
  components: {
    ColorTable,
    PieChartWrap,
    CodeWrap,
    LineChartWrap,
    RadarChartWrap,
    BarChartWrap
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
    .bar-chart{
      margin-top: 20px;
    }
    .radar-chart{
      margin-top: 20px;
    }
  }
</style>
