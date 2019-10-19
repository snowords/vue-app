<template>
  <div id="app">
    <Header/>
    <!-- 路由切换的容器 -->
    <router-view></router-view>
  </div>
</template>

<script>
import Header from './components/layout/Header'
export default {
  name: 'app',
  components:{
    Header
  }
}
</script>

<style>
</style>
