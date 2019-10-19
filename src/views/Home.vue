<template>
  <div id="home">
    <AddTodo v-on:handleAdd="handleAdd"/>
    <!-- <h1>
      {{ msg }}{{ commit0 }}
    </h1> -->
    <!-- <HelloWorld msg="Hello world ......"/> -->
    <hello-todos v-bind:todos123="todos" v-on:handleDelete="handleDelete"/>
  </div>
</template>

<script>
import HelloWorld from '../components/HelloWorld.vue'
import HelloTodos from '../components/Todos'
import AddTodo from '../components/AddTodo'
import axios from 'axios'

export default {
  name: 'home',
  methods:{
    handleDelete(id){
      console.log(id);
      axios.delete("http://jsonplaceholder.typicode.com/todos/${id}")
      .then(res => (this.todos = this.todos.filter(todo => todo.id !== id )))
      .catch(err => console.log(err));
    },
    handleAdd(newTodo){
      // this.todos.push(newTodo);
      // es 6 语法
      const {title,completed} = newTodo;
      axios.post("http://jsonplaceholder.typicode.com/todos",{
        title: title,
        completed
      })
      .then(res => this.todos = [res.data,...this.todos])
      .catch(err => console.log(err));

      
    }
  },
  created(){
    // 数据请求
    axios.get("http://jsonplaceholder.typicode.com/todos?_limit=100")
          .then(res => this.todos = res.data
                // console.log(res.data);
                )
          .catch(err => console.log(err));
  },
  data(){
    return{
      msg:"Hello world .",
      commit0:"(来自根组件)",
      todos:[]
    }
  },
  components: {
    HelloWorld,
    "hello-todos" : HelloTodos,
    AddTodo
  }
}
</script>

<style>
* {
  box-sizing: border-box;
  padding: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
  padding: 0;
  border-bottom-color: transparent;
}
.btn {
  display: inline-block;
  border: none;
  background-color: #555;
  color: #fff;
  padding: 7px 20px;
  cursor: pointer;
}
.btn:hover {
  background-color: #777;
}
</style>
