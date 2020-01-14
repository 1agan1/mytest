<template>
    <div>
        <v-back></v-back> <v-search></v-search>
        <h1>我是首页</h1>
        <h2>{{str}}</h2>
        <!-- <h3>转换之后----{{str | toFrom}}</h3> -->
        <h2>转换之后----{{str | toUpper}}</h2>
        <h3>时间转化方法-----{{timer | toTime}}</h3>
    </div>
</template>
<script>
// import vBack from './common/back'
export default {
    data(){
        return{
            str:'aaBBBcchaha',
            timer:1576562430357
        }
    },
    // components:{
    //     vBack
    // },
    mounted() {
        //组件一加载 调取轮播图数据
        this._getBanner()
    },
    methods: {
        _getBanner(){
            this.$axios(
                {
                    url:'http://localhost:3000/banner'
                }
            ).then(res=>{
                console.log(res,'响应数据')
            }).catch(
                err=>{

                }
            )
                    // this.$axios.get().then().catch()
        }

    },
}
</script>
<style lang="" scoped>
    
</style>