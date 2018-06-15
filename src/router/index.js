import Vue from 'vue'
import Router from 'vue-router'
import ZKTeamMain from '@/components/ZKTeamMain'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'ZKTeamMain',
      component: ZKTeamMain
    }
  ]
})
