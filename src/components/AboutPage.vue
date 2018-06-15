<template>
  <div class="about_div">
    {{ about_name }}

    <el-button>跳转吧</el-button>
  </div>
</template>

<script>
  export default {
    name: "AboutPage",
    data() {
      return {
        about_name: '关于',
      }
    }
  }
</script>

<style scoped>
 .about_div {
   background: deepskyblue;
 }
</style>
