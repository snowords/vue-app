<template>
  <div class="about">
    <h3>{{ commit }}</h3>
  </div>
</template>

<script>
export default {
  name: 'About',
  props: {
    msg: String
  },
  data(){
    return{
      commit: "这是一个About页面(来自子组件)"
    };
  }
}
</script>

<style scoped>

</style>