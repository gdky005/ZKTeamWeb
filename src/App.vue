<template>
  <div id="app">
    <!--<img src="./assets/logo.jpg">-->
    <!--<router-view/>-->
    <ShopMain/>
  </div>
</template>

<script>
  import ShopMain from './components/ZKTeamMain'

  export default {
    name: 'App',
    components: {
      ShopMain,
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: white;
    margin: -8px;
  }
</style>
