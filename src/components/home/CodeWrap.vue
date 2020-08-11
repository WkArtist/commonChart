<template>
  <div class="code-wrap">
      <div v-html="content"></div>
  </div>
</template>

<script>
// import marked from 'marked'
import hljs from 'highlight.js'
import 'highlight.js/styles/atom-one-dark.css'
export default {
  data() {
    return {
      content: ''
    }
  },
  methods: {
    highlightCode() {
      const preEl = document.querySelectorAll('pre')
      preEl.forEach(el => {
        hljs.highlightBlock(el)
      })
    }
  },
  computed: {
    currentCode() {
      return this.$store.state.currentCode
    }
  },
  watch: {
    currentCode(val) {
      this.content = val
      this.highlightCode()
    }
  },
  mounted() {
    this.highlightCode()
  },
  updated() {
    this.highlightCode()
  }
}
</script>

<style lang="scss" scoped>
    .code-wrap{
        width: 410px;
        height: 920px;
        background-color: rgb(30,30,30);
        box-sizing: border-box;
        overflow: auto;
        //滚动条宽度
        &::-webkit-scrollbar {
            width: 2px;
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
</style>
