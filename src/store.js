import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    authenticated: false
  },
  mutations: {
    SET_AUTHENTICATION(state, auth) {
      state.authenticated = auth;
    }
  },
  actions: {
    async setAuthentication({ commit }, auth) {
      commit("SET_AUTHENTICATION", auth);
    }
  },
  getters: {
    authenticated: state => state.authenticated
  }
});
