<template>
    <div class="github_div">
      {{ zk_github_name }}
    </div>
</template>

<script>
    export default {
        name: "ApiTestPage",
      data() {
          return {
            zk_github_name: "github 测试页面 Page!"
          }
      }
    }
</script>

<style scoped>
  .github_div {
    background: cadetblue;
  }
</style>
