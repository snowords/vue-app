<template>
  <div class="about">
    <h3>{{ commit }}</h3>
    <!-- <h3>{{ count }}</h3> -->
    <h3>{{ donetodos[0] }}</h3>
    <h3>{{ donetodos[1] }}</h3>
    <h3>已完成事项的数量：{{ donetodoscount }}</h3>
    <h3>{{ gettodobyid(2) }}</h3>

    <!-- mutations -->
    <button @click="decrement({ amount:2 })"> - </button>
    <h2> {{ count }}</h2>
    <button @click="increment"> + </button>

    <div> {{ donetodos }}</div>
    <button @click="fetchTodos">拉取API接口数据</button>
  </div>
</template>

<script>
import { mapState,mapGetters,mapMutations,mapActions } from 'vuex'
export default {
  name: 'About',
  props: {
    msg: String
  },
  data(){
    return{
      commit: "这是一个About页面(来自子组件)"
    };
  },
  // mapState 方法
  // computed: mapState(["count","todos"])
  // computed: mapState({
  //   count: state => state.count,
  //   todos: state => state.todos
  // })
  // 访问vuex 的store的state 的另外一种方法

  // mapgetters方法

  computed: mapGetters(["count","donetodos","donetodoscount","gettodobyid"]),
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
  // mapMutations 方法
  // mapMutations(['incrementcount','decrementcount'])
  methods: {
    increment(){
      // this.$store.commit("incrementcount");
      // actions 
      this.$store.dispatch("incrementcountasync");
    },
    decrement(m){
      // this.$store.commit("decrementcount",m);
      this.$store.dispatch("decrementcountasync",m);
      
    },
    fetchTodos(){
      this.$store.dispatch("fetchTodos");
    }

  }
}
</script>

<style scoped>
.about {
  background-color: lightpink;
}
button {
  display: inline-block;
  border: none;
  background-color: #555;
  color: #fff;
  padding: 7px 20px;
  cursor: pointer;
}
button:hover{
  background-color: #888;
}
</style>