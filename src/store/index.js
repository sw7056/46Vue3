import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user:[]
  },
  mutations: {
    user(state,kin){
      state.user.push(kin);
    }
  },
  actions: {
  },
  modules: {
  }
})
