import Vue from "vue";
import vuex from "vuex";
Vue.use(vuex);
export default new vuex.Store({
  state: {
    constomData: []
  },
  mutations: {
    handleConstomData(state, options) {
      console.log(options);
      state.constomData = options;
    }
  }
});
