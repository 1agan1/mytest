<template>
  <div>
    <h1>过滤器</h1>
    <h2>过滤器和组件一样 也是分两种创建方法 第一个局部创建过滤器 第二个全局创建过滤器 通过你自己定义的逻辑和代码 筛选出你想要的结果 过滤符 | </h2>
    <div>
      <h2>原始数据----{{val}}</h2>
      <h2>转化后的数据------{{val | toForm}}</h2>
            <h2>转化后的数据------{{val | toLower}}</h2>
      <h2>{{str | toForm}}</h2>
      <hr>
      <h1>转化时间--------{{timer | toTime}}</h1>

            <h1>转化时间--------{{timers | toTime}}</h1>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      val: "zhangLIgang",
      str:'zhanzghanzzhang',
      timer:1576552888302, //new Date().getTime() 获取当前时间戳的方法
      timers:1576652888302 
    };
  },
  filters:{
    toForm(n){
      //n 是你要转化的内容
      console.log(n,'nnnnn')
      
      return n.toUpperCase()
    },
    toLower(n){
      return n.toLowerCase()
    },
    toTime(n){
      //转化出来的时间格式 是2019-12-17 11:21
      //取出当前时间戳的东八区时间Tue Dec 17 2019 11:21:28 GMT+0800 (中国标准时间) "date"
      let date = new Date(n)
      console.log(date,'date') 
      let year = date.getFullYear()
      let month = date.getMonth() +1 >9 ? date.getMonth() +1 : "0"+(date.getMonth() +1)
      console.log(month,'month')
      let day = date.getDate()  >9 ? date.getDate() : "0"+date.getDate()
       console.log(day,'day')
       return `${year}-${month}-${day}`
    }
  }
};
</script>
<style lang="">
</style>