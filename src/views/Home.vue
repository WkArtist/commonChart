<template>
  <div class="home">
    <ColorTable />
  </div>
</template>

<script>
// @ is an alias to /src
import ColorTable from '@/components/home/ColorTable'
export default {
  name: 'Home',
  components: {
    ColorTable
  }
}
</script>
