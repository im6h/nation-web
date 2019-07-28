import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/view/Home.vue'
import Detail from '@/components/view/Detail.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path:'/:name',
      name:'Detail',
      component: Detail
    }
  ]
})
