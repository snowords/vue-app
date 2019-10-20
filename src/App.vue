<template>
  <div id="app">
    <Header/>
    <!-- 路由切换的容器 -->
    <h3>{{ count }}</h3>
    <h3>{{ donetodos }}</h3>
    <h3>{{ donetodoscount }}</h3>
    <h3>{{ gettodobyid(3) }}</h3>
    <router-view></router-view>
  </div>
</template>

<script>
import Header from './components/layout/Header'
import { mapState,mapGetters } from 'vuex'

export default {
  name: 'app',
  components:{
    Header
  },
  // mapState 方法
  // computed: mapState(["count","todos"])
  // computed: mapState({
  //   count: state => state.count,
  //   todos: state => state.todos
  // })
  // 访问vuex 的store的state 的另外一种方法

  // mapgetters方法

  computed: mapGetters(["count","donetodos","donetodoscount","gettodobyid"])
  // computed: {
  //   count(){
  //     return this.$store.getters.count;
  //   },
  //   donetodos(){
  //     return this.$store.getters.donetodos;
  //   },
  //   donetodoscount(){
  //     return this.$store.getters.donetodoscount;
  //   },
  //   gettodobyid(){
  //     return this.$store.getters.gettodobyid;
  //   }
  // }
}  
</script>

<style>
</style>
