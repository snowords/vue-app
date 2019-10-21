const state = {
    count: 0,
};
const getters = {
    count: state => {
        return state.count;
      }
};
const mutations = {
    incrementcount(state){
        state.count++;
      },
      decrementcount(state,payload){
        state.count -= payload.amount;
      }
};
const actions = {
    incrementcountasync({ commit }){
        setTimeout(() => {
          commit('incrementcount');
        },2000);
      },
      // incrementcountasync(context){
      //   setTimeout(() => {
      //     context.commit('incrementcount');
      //   },2000);
      // },
      decrementcountasync({ commit },payload){
        setTimeout(() => {
          commit('decrementcount',payload);
        },500);
      }
};

export default{
    state,
    getters,
    mutations,
    actions
}