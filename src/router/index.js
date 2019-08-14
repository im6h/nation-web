import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/view/Home.vue'
import Detail from '@/components/view/Detail.vue'
import About from '@/components/view/About.vue'
import Region from '@/components/view/Region.vue'
Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/nation/:code',
      name: 'Detail',
      component: Detail
    },
    {
      path: '/region/:region',
      name: 'Region',
      component: Region,
    },
    {
      path:'/region/nation/:code',
      redirect:'/nation/:code',
    }
  ]
})
