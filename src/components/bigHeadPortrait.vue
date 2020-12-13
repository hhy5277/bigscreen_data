<template>
  <div class="bigHeadPortrait">
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
          src="../assets/images/avatar/avatar6.png"
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
.bigHeadPortrait {
  position: absolute;
  .container {
    position: absolute;
    animation: move 10s linear 0s infinite alternate;

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
        transform: translate3d(27%, 21%, 0);
        position: absolute; //scale(0.6)
        left: 0;
        top: 0;
      }
      span {
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translate3d(-50%, -10px, 0);
        color: #fff;
        font-weight: 700;
      }
    }
  }
}

@keyframes move {
  0% {
    transform: translate3d(0px, 0px, 0px);
  }
  16% {
    transform: translate3d(-10px, -10px, 0px);
  }
  32% {
    transform: translate3d(10px, -10px, 0px);
  }
  48% {
    transform: translate3d(0px, 0px, 0px);
  }
  64% {
    transform: translate3d(-10px, 10px, 0px);
  }
  80% {
    transform: translate3d(10px, 10px, 0px);
  }
  100% {
    transform: translate3d(0px, 0px, 0px);
  }
}
</style>
