// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import './assets/css/iconfont.css'
Vue.prototype.$axios = axios

Vue.config.productionTip = false

//全局导航守卫
router.beforeEach((to,from,next)=>{
  console.log(from,'我从哪里来')
  console.log(to,'我将要到哪里去')
  next()
})

router.afterEach(()=>{

})



//创建全局过滤器
/* import toUpper from './filter/toUpper'
console.log(toUpper,'过滤方法1')
Vue.filter('toFrom',toUpper) */
import Filter from './filter'
console.log(Filter,'过滤器方法集合')

for(let i in Filter){
  Vue.filter(i,Filter[i])
}

//创建全局组件
/* import vBack from './components/common/back'
Vue.component('vBack',vBack)
 */

import gCom from './components/common'
for(let i in gCom){
  Vue.component(i,gCom[i])
}

/* let obj = {
  a:1,
  b:2,
  0:2,
  1:2
}
for(let i in obj){
  console.log(i,'iiii')
  console.log(obj[i],'iiii')
} */

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
