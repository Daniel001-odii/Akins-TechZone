import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    userData: null,
  },
  getters: {
    getUserData: (state) => state.userData,
  },
  mutations: {
    setUserData(state, data) {
      state.userData = data;
    },
  },
  actions: {
    async fetchUserData({ commit }) {
      try {
        // Assuming you have a variable 'token' available
        const token = localStorage.getItem('placeholder');

        // Correct axios syntax
        const response = await axios.get('http://127.0.0.1:3000/api/v1/get-user', {
          headers: {
            Authorization: `JWT ${token}`,
          },
        });

        // No need to use response.json() with Axios
        const data = response.data;

        commit('setUserData', data);
      } catch (error) {
        console.log('error from store/index.js:', error);
      }
    },
  },
  modules: {
  }
})
