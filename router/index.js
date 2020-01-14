import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/index'
import Login from '@/components/login'
import Ref from '@/components/ref'
import Filter from '@/components/filter'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Index,

    },
    {
      path:'/login',
      component:Login,
      beforeEnter:(to,from,next)=>{
        console.log(from,'我从哪里来路由的点点滴滴')
        console.log(to,'我将要到哪里去路由的点点滴滴')
        if(from.path =='/'){
          next('/ref')
        }else{
          next()
        }
   
      }
    },
    {
      path:'/ref',
      component:Ref
    },
    {
      path:'/filter',
      component:Filter
    }
  ]
})
