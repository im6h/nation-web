import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/view/Home.vue'
import Detail from '@/components/view/Detail.vue'
import About from '@/components/view/About.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path:'/about',
      name:'About',
      component: About
    },
    {
      path:'/alpha/:code',
      name:'Detail',
      component: Detail
    }
  ]
})
