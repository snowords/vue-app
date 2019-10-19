<template>
    <div>
        <div v-bind:key="index" v-for="(todo,index) in todos123">
            <TodoItem v-bind:todo234 ="todo" v-on:deleteItem345="$emit('handleDelete',todo.id)"/>
        </div>
        <p>{{ todomsg }}</p>
    </div>
</template>
<script>
import TodoItem from './TodoItem'
export default {
    name: "todos",
    props:{
        todos123:{
            type: Array
        }
    },
    data(){
        return{
            todomsg: "from---自定义组件 hello todos"
        };
    },
    components: {
        TodoItem
    },
    methods:{
        // deleteItem(id){
        //     console.log(id);
        // }
    }
}
</script>
<style scoped>
    div {
        
        background-color: lightpink ;
    }
</style>