<template>
  <div>
    <input type="text" v-model="val" ref="inp" />
    <button @click="search">search</button>
    <h1 ref="hh">好香啊</h1>
    <audio
      ref="audio"
      src="http://m8.music.126.net/20191217112714/47770b7e17c3a8a65a19d8753413f3a8/ymusic/5552/0259/025b/b816d5183d533f4b4365513211da75a1.mp3"
      controls
    ></audio>
    <button @click="goPlay">播放</button>
    <button @click="goPause">暂停</button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      val: ""
    };
  },
  mounted() {
    console.log(this.$refs.hh);
    console.log(this.$refs.hh.innerHTML);
    //获取audio标签
    console.log(this.$refs.audio);
  },
  methods: {
    search() {
      console.log(this);
      //快速获取dom结构
      console.log(this.$refs.inp);
      console.log(this.$refs.inp.value);
    },
    goPlay() {
      this.$refs.audio.play();
    },
    goPause() {
      this.$refs.audio.pause();
    }
  },
  beforeRouteEnter (to, from, next) {
           console.log(from,'我从哪里来组件组件')
        console.log(to,'我将要到哪里去组件组件')
        console.log(this,'组件内部的this')
        //组件守卫 进来的这个守卫拦截 这个时候 没有this 因为还没有进入 组件内部
        next()
  },
  beforeRouteLeave(to,from,next){
 console.log(from,'11111111')
        console.log(to,'22222222')
         console.log(this,'333333')
         next()
  }
};
</script>
<style lang="">
</style>