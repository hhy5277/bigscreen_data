<template>
  <div class="middleHeadPortrait">
    <div class="container">
      <Lottie
        :options="defaultOptions"
        @animCreated="handleAnimation"
        class="antbox"
        :width="222"
        :height="222"
      />
      <div class="bigContainer">
        <div class="bigContainer-img">
        <img
           :src="information.url"
          alt
        />
        </div>
         <span>{{information.name}}</span>
      </div>
    </div>
    <!--   <div class="container">
      <Lottie
        :options="defaultOptions"
        @animCreated="handleAnimation"
        class="antbox"
        :width="187"
        :height="187"
      />
      <div class="bigContainer">
        <img
          src="https://dss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1207533529,3946480795&fm=26&gp=0.jpg"
          alt
        />
        <span>刘女士</span>
      </div>
    </div>-->
  </div>
</template>
<script>
import * as animationData from "../assets/lottie/antcircle.json";
import Lottie from "vue-lottie/src/lottie.vue";
export default {
    props: {
    information:Object
  },
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
.middleHeadPortrait {
  position: absolute;
//   top: 0;
//   left: 0;
  .container {
    position: absolute;
    animation: move 10s linear 1s infinite alternate;

    .bigContainer {
      width: 163px;
      height: 163px;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate3d(-50%, -47%, 0);
      border-radius: 50%;
      background: url("../assets/images/10.png") no-repeat 50% 50%;
      background-size: contain;
       .bigContainer-img {
        width: 65.2%;
        height: 65.2%;
        border-radius: 50%;
        transform: translate3d(27%,21%,0);
        position: absolute; //scale(0.6)
        top: 0;
        left: 0;
        overflow: hidden;
        img{
          width: 100%;
        }
      }
      span {
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translate3d(-50%, -5px, 0);
        font-size: 10px;
        color: #fff;
        font-weight: 700;
      }
    }
  }
}
// .container:nth-child(2) {
//   left: 400px;
//   animation: move 10s linear 1s infinite alternate;

//   .bigContainer {
//     width: 163px;
//     height: 163px;
//     span {
//       transform: translate3d(-50%, -5px, 0);
//       font-size: 10px;
//     }
//   }
// }
// .container:nth-child(3) {
//   left: 700px;
//   animation: move 10s linear 2s infinite alternate;

//   .bigContainer {
//     width: 138px;
//     height: 138px;
//     span {
//       transform: translate3d(-50%, -5px, 0);
//       font-size: 5px;
//     }
//   }
// }

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
