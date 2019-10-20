import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 0,
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
  },
  getters: {
    count: state => {
      return ++state.count;
    },
    donetodos: state => {
      return state.todos.filter(todos => todos.done)
    },
    donetodoscount: (state,getters) => {
      return getters.donetodos.length
    },
    gettodobyid: state => id => {
      return state.todos.find(todo => todo.id === id)
    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
  
})
