import Vue from 'vue'
import Vuex from 'vuex'

// import Axios from 'axios';
import count from './modules/count';
import todos from './modules/todos';

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    count,
    todos
  }
  
})
