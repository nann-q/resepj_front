import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios";
import createPersistedState from "vuex-persistedstate";
import router from "../router/index";


Vue.use(Vuex)

export default new Vuex.Store({
  plugins:[createPersistedState()],
  state: {
    login: "",
  },
  mutations: {
    login(state, payload) {
      state.login = payload;
    },
  },
  actions: {
    async login({ commit }, { email,password }) {
      const responseLogin = await axios.post(
        "http://127.0.0.1:8000/api/v1/login",
        {
          email: email,
          password: password,
        }
      );
      commit("login", responseLogin.data.login);
      router.replace("/mypage");
    },
  },
});