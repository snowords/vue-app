<template>
  <div class="header">
    <h1>待办事项</h1>
    <!-- 路由 -->
    <div id="nav">
      <router-link to="/">主页</router-link>
      <router-link to="/about">关于</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  props: {
    msg: String
  },
  data(){
    return{
      
    };
  }
}
</script>

<style scoped>
.header {
    background: #555 ;
    color: #fff;
    text-align: center;
    height: 150px;
    padding-top: 40px;

}
a {
  color: #fff;
  padding-right: 5px;
  text-decoration: none;
}
</style>