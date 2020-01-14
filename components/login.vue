<template>
  <div>
    <v-back></v-back>
    <!--     
    v-model.number 表单修饰符 
    失去焦点或者回车的时候 限制输入内容只能是数字 但是前提是 必须以数字开头 否则不生效
    <h1>我是登录页面</h1> 
    v-model.lazy 输入框的懒加载 失去焦点或者回车的时候再把v-model的内容显示出来
    v-model.trim 去掉收尾空格 失去焦点或者回车的时候自动取消首尾空格
    注册是时候 一定要注意 各种条件判断 要注意细节 要拦截全面 比如 判空 比如正则（格式校验） 比如是否选中 等等
    -->
    <div>
      请输入用户名：
      <input type="text" v-model="userInfo.user" @change="go()" />
      {{userInfo.user}}
    </div>
    <div>
      请输入密码：
      <input type="text" v-model.trim="userInfo.pass" />
      <!-- <input type="text" v-model.lazy="userInfo.pass"> -->
      <!-- <input type="text" v-model.number="userInfo.pass"> -->
      {{userInfo.pass}}
    </div>
    <div>
      请输入性别：
      <input v-model="userInfo.sex" type="radio" value="0" name="sex" />男
      <input type="radio" v-model="userInfo.sex" value="1" name="sex" />女
    </div>
    <div>
      你的爱好是什么：
      <input type="checkbox" v-model="userInfo.hobby" value="写代码" />写代码
      <input type="checkbox" v-model="userInfo.hobby" value="睡觉" />睡觉
      <input type="checkbox" v-model="userInfo.hobby" value="吃饭" />吃饭
      <input type="checkbox" v-model="userInfo.hobby" value="研究代码" />研究代码
    </div>
    <div>
      <select v-model="userInfo.job" name id>
          <option value='' disabled>--请选择--</option>
        <option value='web'>大前端工程开发师</option>
        <option value='product'>产品经理</option>
        <option value='admin'>运维</option>
        <option value='test'>测试</option>
      </select>
    </div>
    <div>
        输入一下您的简介： <textarea name="" id="" cols="30" rows="10" v-model='userInfo.dec'></textarea>
    </div>
    <div>
        请选择同意：<input type="checkbox" v-model="userInfo.isAgree">{{userInfo.isAgree}}
    </div>
    <button @click="login" :disabled='!userInfo.isAgree'>登录</button>
  </div>
</template>
<script>
import qs from "qs";
export default {
  data() {
    return {
      /*             name:'',
            pass:'' */
      userInfo: {
        user: "",
        pass: "",
        sex: "", //单选框 传值给后端 一般不会直接传数据 而是传值 后端会定义 0 代表男  1 代表女
        hobby: [], //复选框 要用数组
        job: "",
        dec:'',
        isAgree:''
      }
    };
  },
  mounted() {},
  methods: {
    //登录方法
    go(){
        console.log('按enter或者失去焦点的时候 触发这个事件',1111)
    },
    login() {
      console.log(this.userInfo, "提交表单内容");
    }
    /*  login(){
            //调取登录接口
            this.$axios({
                url:'/api/api/form2.php',
                method:'post',
               // data:qs.stringify(this.userInfo)

            })
            .then(
                res=>{
                    console.log(res,'响应结果')
                }
            )
            .catch(
                err=>{
                    console.log(err,'错误结果')
                }
            )
        } */
  }
};
</script>
<style lang="" scoped>
</style>