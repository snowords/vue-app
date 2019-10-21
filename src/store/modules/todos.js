const state = {
    todos: [
        {
          id: 1,
          title: 'todo item 1',
          done: true
        },
        {
          id: 2,
          title: 'todo item 2',
          done: false
        },
        {
          id: 3,
          title: 'todo item 3',
          done: true
        }
      ]
};
const getters = {
    
    donetodos: state => {
        return state.todos.filter(todos => todos.done)
      },
      donetodoscount: (state,getters) => {
        return getters.donetodos.length
      },
      gettodobyid: state => id => {
        return state.todos.find(todo => todo.id === id)
      }
};
const mutations = {
    setTodos: (state,todos) => (state.todos = todos)
    
};
const actions = {
    async fetchTodos({ commit }){
        const response = await axios.get("http://jsonplaceholder.typicode.com/todos");
        console.log(response);
        commit("donetodos",response.data);
      }
};

import axios from 'axios'
export default{
    state,
    getters,
    mutations,
    actions
}