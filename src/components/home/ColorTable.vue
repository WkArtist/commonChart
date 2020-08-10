<template>
  <div class="color-table-wrap">
      <h2>图表通用颜色</h2>
      <div class="color-list">
          <div class="color-item" v-for="ele in colorTable" :key="ele.color">
              <div class="color-card"></div>
              <div class="color-number"></div>
              <div class="color-name"></div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      colorTable: [
        {
          value: 'cyan',
          color: '#2ED6E6',
          name: '青蓝'
        }, {
          value: 'yellow',
          color: 'FFBB33',
          name: '明黄'
        }, {
          value: 'green',
          color: '2AD49A',
          name: '嫩绿'
        }, {
          value: 'red',
          color: '#FF5577',
          name: '莓红'
        }, {
          value: 'violet',
          color: '#A667EA',
          name: '罗兰紫'
        }, {
          value: 'grey',
          color: '#D9D9D9',
          name: '中灰'
        }, {
          value: 'blue',
          color: '#2B96FF',
          name: '普蓝'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
    .color-table-wrap{
        position: absolute;
        left: 219px;
        top: 63px;
        width: 1482px;
        height: 100px;
        padding: 15px;
        box-sizing: border-box;
        background-color: rgba(0,0,0,0.6);
        .color-list{

        }
    }
</style>
