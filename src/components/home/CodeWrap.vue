<template>
  <div class="code-wrap">
      <codemirror ref="myCm" class="code-mirrir" v-model="content" :options="cmOptions"/>
  </div>
</template>

<script>
import { codemirror } from 'vue-codemirror'
import 'codemirror/theme/base16-dark.css'
import 'codemirror/mode/javascript/javascript.js'
export default {
  components: {
    codemirror
  },
  data() {
    return {
      content: '',
      code: 'const a = 10',
      cmOptions: {
        tabSize: 4,
        mode: 'text/javascript',
        theme: 'base16-dark',
        lineNumbers: true,
        line: true
      }
    }
  },
  methods: {

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
