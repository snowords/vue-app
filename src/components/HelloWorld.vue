<template>
  <div class="hello">
    <p>{{ msg }}{{ commit }}</p>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data(){
    return{
      commit: "(来自子组件)"
    };
  }
}
</script>

<style scoped>

</style>
