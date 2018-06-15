<template>
    <div class="zuzhi_div">
      {{ organization_name }}
    </div>
</template>

<script>
    export default {
        name: "OrganizationPage",
      data() {
          return {
            organization_name: "组织"
          }
      }
    }
</script>

<style scoped>
  .zuzhi_div {
    background: slategrey;
  }
</style>
