<template>
  <div>
    <form @submit.prevent="addTodo">
        <input v-model="title" type="text" placeholder="请添加代办事项...">
        <!-- <p>输入的内容是：{{title}}</p> -->
        <input type="submit" value="添加" class="btn">
    </form>
  </div>
</template>

<script>
// import uuid from 'uuid'
export default {
  name: 'AddTodo',
  methods:{
      addTodo(){
          console.log(this.title);
          const newTodo = {
            // id : uuid.v4(),
            title: this.title,
            campleted: false
          };
          console.log(newTodo);
          // 注册事件
          this.$emit('handleAdd',newTodo);
          this.title = "";
      }
  },
  data(){
    return{
      title: ""
    };
  }
}
</script>

<style scoped>
form {
    height: 50px;
    display: flex;
}
input[type="text"] {
    flex: 10;
    padding: 5px;

}
input[type="submit"] {
    flex: 2;

}
</style>
