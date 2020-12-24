import Vue from "vue";
import vuex from "vuex";
Vue.use(vuex);
export default new vuex.Store({
  state: {
    constomData: [],//用户头像列表
    constomNum: 0,// 当前用户数量
  },
  mutations: {
    handleConstomData(state, options) {
      state.constomData = options;
    },
    handleConstomNum(state) {
      state.constomNum++
    }
  }
});
