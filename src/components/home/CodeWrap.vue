<template>
  <div class="code-wrap">
      <codemirror ref="myCm" class="code-mirrir" v-model="content" :options="cmOptions"/>
      <!-- <editor
      v-model="content"
      @init="editorInit"
      lang="html"
      theme="chrome"
      width="470"
      height="920"
      ></editor> -->
      <!-- <jsonView :json="content" :closed="false"/> -->
  </div>
</template>

<script>
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

// import { jsonView } from 'jsonview-vue'
export default {
  components: {
    codemirror
    // editor: require('vue2-ace-editor')
    // jsonView
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
    }
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
