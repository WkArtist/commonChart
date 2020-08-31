<template>
  <div class="code-wrap">
      <codemirror ref="myCm" class="code-mirrir" @input="onCmCodeChange" v-model="content" :options="cmOptions"/>
  </div>
</template>

<script>
import { addKeyQuotationMarks } from '@/util.js'
import { codemirror } from 'vue-codemirror'
import 'codemirror/theme/base16-dark.css'
import 'codemirror/mode/javascript/javascript.js'
import 'codemirror/keymap/sublime' // sublime编辑器效果
import 'codemirror/mode/css/css'
import 'codemirror/theme/monokai.css' // 编辑器主题样式，配置里面theme需要设置monokai
// 代码折叠
import 'codemirror/addon/fold/foldgutter.css'
import 'codemirror/addon/fold/foldcode'
import 'codemirror/addon/fold/foldgutter'
import 'codemirror/addon/fold/brace-fold'
import 'codemirror/addon/fold/comment-fold'

export default {
  components: {
    codemirror
  },
  data() {
    return {
      content: '',
      cmOptions: {
        tabSize: 4,
        mode: 'application/json',
        theme: 'monokai',
        lineNumbers: true,
        line: true,
        foldGutter: true,
        lineWrapping: true,
        gutters: ['CodeMirror-linenumbers', 'CodeMirror-foldgutter', 'CodeMirror-lint-markers']
      }
    }
  },
  methods: {
    editorInit() {
      require('brace/ext/language_tools') // language extension prerequsite...
      require('brace/mode/html')
      require('brace/mode/javascript') // language
      require('brace/mode/less')
      require('brace/theme/github')
      require('brace/snippets/javascript') // snippet
    },
    onCmCodeChange(newCode) {
      // console.log('this is new code', newCode)
      // console.log(this.$store.state.chartOptionsList[this.$store.state.currentActive.type][this.$store.state.currentActive.index])
      // console.log(JSON.parse(addKeyQuotationMarks(newCode)))
      this.$store.commit('setChartOptions', {
        type: this.$store.state.currentActive.type,
        index: this.$store.state.currentActive.index,
        value: JSON.parse(addKeyQuotationMarks(newCode))
      })
    }
  },
  computed: {
    currentCode() {
      return this.$store.state.chartData[this.$store.state.currentActive.type][this.$store.state.currentActive.index].code
    }
  },
  watch: {
    currentCode: {
      handler: function(val) {
        // console.log(val)
        this.content = val
      },
      deep: true
    }
  },
  mounted() {
    this.content = this.currentCode
  }
}
</script>

<style lang="scss" scoped>
    .code-wrap{
        width: 470px;
        height: 920px;
        box-sizing: border-box;
        overflow: auto;
    }
</style>
<style lang="scss">
    .CodeMirror{
        width: 470px !important;
        height: 920px !important;
    }
</style>
