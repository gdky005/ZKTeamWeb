<template>
    <div class="api_div">
      {{ api_test_name }}
    </div>
</template>

<script>
    export default {
        name: "ApiTestPage",
      data() {
          return {
            api_test_name: "Api Test Page!"
          }
      }
    }
</script>

<style scoped>
  .api_div {
    background: antiquewhite;
  }
</style>
