<template>
  <el-container>
    <el-header>
      卓客Team
    </el-header>
    <el-main>
      <div class="tab_class">
        <el-tabs v-model="activeName" @tab-click="handleClick" tab-position="left" type="border-card" >
          <el-tab-pane label="关于" name="about">
            <AboutPage/>
          </el-tab-pane>
          <el-tab-pane label="组织" name="zuzhi">
            <OrganizationPage/>
          </el-tab-pane>
          <el-tab-pane label="API测试" name="api">
            <ApiTestPage/>
          </el-tab-pane>
          <el-tab-pane label="Teams Github" name="github">
            <ZKGithubPage/>
          </el-tab-pane>
        </el-tabs>
      </div>

    </el-main>
  </el-container>
</template>

<script>
  import AboutPage from '../components/AboutPage'
  import OrganizationPage from '../components/OrganizationPage'
  import ApiTestPage from '../components/ApiTestPage'
  import ZKGithubPage from '../components/ZKGithubPage'

  export default {
    name: "ZKTeamMain",

    data() {
      return {
        msg: '欢迎',
        activeName: 'about',
      }
    },
    components: {
      AboutPage,
      OrganizationPage,
      ApiTestPage,
      ZKGithubPage,
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      }
    }
  }
</script>

<style scoped>
  .el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    font-size: 30px;
    padding: 10px;
  }

  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    /*line-height: 160px;*/
    height: 800px;
  }

  /*body > .el-container {*/
    /*margin-bottom: 40px;*/
  /*}*/

  /*.el-container:nth-child(5) .el-aside,*/
  /*.el-container:nth-child(6) .el-aside {*/
    /*line-height: 260px;*/
  /*}*/

  /*.el-container:nth-child(7) .el-aside {*/
    /*line-height: 320px;*/
  /*}*/


  .tab_class {
    background-color: white;
    text-align: center;
    /*padding: 20px;*/
  }
</style>
