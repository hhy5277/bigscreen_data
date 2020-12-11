import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import index from '@/views/index'
import antbox from '@/views/antbox'

Vue.use(Router)

export default new Router({
  mode: "history",
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/antbox',
      name: 'antbox',
      component: antbox
    }
  ]
})
