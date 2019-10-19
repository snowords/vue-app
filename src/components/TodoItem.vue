<template>
    <div class="todo-item" v-bind:class="{'is-complete':todo234.completed}">
        <p>
            <input type="checkbox" v-on:change="markComplete">
            {{ todo234.title }}
            <button class="del" v-on:click="$emit('deleteItem345',todo234.id)">X</button>
        </p>
    </div>
</template>
<script>
export default {
    name: "Todo",
    props: ["todo234"],
    methods:{
        markComplete(){
            this.todo234.completed = !this.todo234.completed;
        }
    }
}
</script>
<style scoped>
.todo-item {
    background: #f4f4f4;
    padding: 10px;
    font-size: 20px;
    border-bottom: 1px #ccc dotted;
}
.is-complete {
    text-decoration: line-through;
}
.del {
    background: #555;
    color: #fff;
    border: none;
    padding: 5px 9px;
    border-radius: 50%;
    cursor: pointer;
    float: right;
}
</style>