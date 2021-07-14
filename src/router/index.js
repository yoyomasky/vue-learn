import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import page from '@/pages/index'
import cycle from '@/pages/cycle'
import event from '@/pages/event'
import navbar from '@/pages/navbar'
import todolist from '@/pages/todolist'
import cart from '@/pages/cart'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/page',
      name: 'page',
      component: page
    },
    {
      path: '/cycle',
      name: 'cycle',
      component: cycle
    },
    {
      path: '/event',
      name: 'event',
      component: event
    },
    {
      path: '/navbar',
      name: 'navbar',
      component: navbar
    },
    {
      path: '/todolist',
      name: 'todolist',
      component: todolist
    },
    {
      path: '/cart',
      name: 'cart',
      component: cart
    },
  ]
})
