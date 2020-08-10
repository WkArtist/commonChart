<template>
  <div class="home">
    <ColorTable class="color-table"/>
    <PieChartWrap class="pie-chart"/>
    <CodeWrap class="code-wrap"/>
  </div>
</template>

<script>
// @ is an alias to /src
import ColorTable from '@/components/home/ColorTable'
import PieChartWrap from '@/components/home/PieChartWrap'
import CodeWrap from '@/components/home/CodeWrap'
export default {
  name: 'Home',
  components: {
    ColorTable,
    PieChartWrap,
    CodeWrap
  }
}
</script>

<style lang="scss" scoped>
  .home{
    .color-table{
      position: absolute;
      left: 10px;
      top: 10px;
    }
    .pie-chart{
      position: absolute;
      left: 10px;
      top: 190px;
    }
    .code-wrap{
      position: fixed;
      top: 0px;
      right: 0px;
    }
  }
</style>
