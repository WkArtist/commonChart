<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
html,body{
  background-color: #abcdef;
  overflow: auto;
  //滚动条宽度
  &::-webkit-scrollbar {
      width: 1px;
  }
  //滚动条底色
  &::-webkit-scrollbar-track {
      background: rgba(142, 142, 142, 0.5);
  }
  //滚动条标色
  &::-webkit-scrollbar-thumb {
      background: #2ED6E6;
      border-radius: 10px;
  }
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #fff;
}
</style>
