<template>
  <div>
    <div class="container">
      <Lottie
        :options="defaultOptions"
        @animCreated="handleAnimation"
        class="antbox"
        :width="328"
        :height="328"
      />
      <div class="bigContainer">
        <img
          src="https://dss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1207533529,3946480795&fm=26&gp=0.jpg"
          alt
        />
        <span>刘女士</span>
      </div>
    </div>
  </div>
</template>

<script>
import * as animationData from "../assets/lottie/antcircle.json";
import Lottie from "vue-lottie/src/lottie.vue";
export default {
  data() {
    return {
      defaultOptions: { animationData: animationData },
      animationSpeed: 1,
      anim: {},
    };
  },
  components: {
    Lottie,
  },
  methods: {
    handleAnimation(anim) {
      this.anim = anim;
    },
  },
};
</script>
<style lang="less" scoped>
.container {
  position: absolute;
  background: rebeccapurple;
  .antbox {
    // position: relative;
  }
  .bigContainer {
    width: 240px;
    height: 240px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate3d(-50%, -47%, 0);
    border-radius: 50%;
    background: url("../assets/images/10.png") no-repeat 50% 50%;
    background-size: contain;
    img {
      width: 65.2%;
      height: 65.2%;
      border-radius: 50%;
      transform: translate3d(26.5%, 21%, 0);
      position: absolute; //scale(0.6)
      left: 0;
      top: 0;
    }
  }
}
</style>
