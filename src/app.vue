<template>
  <div class="Multiple" @click="multiDownload">{{ text }}</div>
</template>
<script>
import './app.less'
export default {
  data: function() {
    return {
      text: '全部下载'
    }
  },
  methods: {
    multiDownload() {
      document.querySelectorAll('div .down').forEach((item, index) => {
        item.click()
        console.log('第' + ++index + '个文件下载成功！')
      })
    }
  }
}
</script>
<style scoped>
</style>
