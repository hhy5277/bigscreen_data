<template>
  <div>
    <dv-full-screen-container>
      <dv-border-box-1 class="back">
        <!-- <dv-loading>Loading...</dv-loading> -->
        <Lottie
          :options="defaultOptions"
          @animCreated="handleAnimation"
          class="antbox"
        />
        <!-- <dv-decoration-5 style="width:300px;height:40px;" /> -->
        <div id="lottie" class="container">
          <div class="ghost-box" @click="getDescribe">
            <BigHead/>
          </div>
          <div class="ghost-box">
           <SmallHead/>
          </div>
          <div class="ghost-box">
            <BigHead/>
          </div>
          <div class="ghost-box">
            <SmallHead/>
          </div>
          <div class="ghost-box">
           <MiddleHead/>
          </div>
          <div class="ghost-box">
            <SmallHead/>
          </div>
          <div class="ghost-box">
          <MiddleHead/>
          </div>
          <div class="ghost-box">
            <SmallHead/>
          </div>
          <div class="ghost-box">
            <MiddleHead/>
          </div>
          <div class="ghost-box">
            <MiddleHead/>
          </div>
          <div class="ghost-box">
            <BigHead/>
          </div>
        </div>
      </dv-border-box-1>
    </dv-full-screen-container>
  </div>
</template>

<script>
import * as animationData from "../assets/lottie/antcircle.json";
import Lottie from "vue-lottie/src/lottie.vue";
import BigHead from "../components/bigHeadPortrait";
import MiddleHead from "../components/middleHeadPortrait";
import SmallHead from "../components/smallHeadPortrait";
import Vue from "vue";
import dataV from "@jiaminghi/data-view";
Vue.use(dataV);
export default {
  data() {
    return {
      defaultOptions: { animationData: animationData },
      animationSpeed: 1,
      anim: {}
    };
  },
  components: {
    Lottie,
    BigHead,MiddleHead,SmallHead
  },
  mounted() {
    // let mapDemo = document.getElementById("lottie");
    // lottie.loadAnimation({
    //   //LottieJS动画技术
    //   container: mapDemo,
    //   renderer: "svg", //渲染出来的格式
    //   loop: true, //循环播放
    //   autoplay: true, //自动播放
    //   path: "../utils/data.json" //路径地址，<!--第一步先引用lottieJS在主页面：indexView.vue中-->
    // });
  },
  methods: {
    handleAnimation(anim) {
      this.anim = anim;
      console.log(anim);
    },
     getDescribe() {
//   直接调用$router.push 实现携带参数的跳转
        this.$router.push({
          path: `/details`,
        })
     }
    
  }
  //  var animation = bodymovin.loadAnimation({
  //   container: document.getElementById("bm"),
  //   renderer: "svg",
  //   loop: true,
  //   autoplay: true,
  //   path: "../utils/data.json",
  // });
};
</script>

<style lang="less" scoped>
.back {
  margin: 0;
  padding: 0;
  //   background-image: linear-gradient(
  //     125deg,
  //     #2c3e50,
  //     #27ae60,
  //     #2980b9,
  //     #e74c3c,
  //     #8e44ad
  //   );
  //   background-size: 400%;
  background: url("../assets/images/back.jpg") no-repeat;
  background-size: cover;
  animation: bganimation 15s infinite;
  position: relative;
}

.container {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  /* background:url('./gif.gif') no-repeat; */
  background-size: contain;
}
.ghost-box {
  // animation: floating 10s linear 1s infinite alternate;
  position: relative;
  .ghost {
    position: absolute;
    top: 0;
    color: #fff;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
.ghost-box:nth-child(1) {
  position: absolute;
  top: 9%;
  left: 9%;
}
.ghost-box:nth-child(2) {
  position: absolute;
  top: 30%;
  right: 15%;
}
.ghost-box:nth-child(3) {
  position: absolute;
  top: 30%;
  left: 40%;
}

.ghost-box:nth-child(4) {
  position: absolute;
  top: 12%;
  right: 25%;
}
.ghost-box:nth-child(5) {
  position: absolute;
  bottom: 30%;
  right: 25%;
}
.ghost-box:nth-child(6) {
  position: absolute;
  bottom: 30%;
  left: 15%;
}
.ghost-box:nth-child(7) {
  position: absolute;
bottom: 45%;
  right: 15%;
}
.ghost-box:nth-child(8) {
  position: absolute;
bottom: 45%;
  right: 45%;
}
.ghost-box:nth-child(9) {
  position: absolute;
top: 45%;
  left: 10%;
}
.ghost-box:nth-child(10) {
  position: absolute;
top: 10%;
  right: 45%;
}

@keyframes floating {
  0% {
    transform: translate3d(0, 0, 0);
  }
  16% {
    transform: translate3d(-50px, -50px, 0);
  }
  32% {
    transform: translate3d(50px, 50px, 0);
  }
  48% {
    transform: translate3d(0, 0, 0);
  }
  64% {
    transform: translate3d(-50px, 50px, 0);
  }
  80% {
    transform: translate3d(50px, 50px, 0);
  }
  100% {
    transform: translateY(0, 0, 0);
  }
}

.face {
  width: 100px;
  position: absolute;
  top: 60px;
  left: calc(50% - 50px);
}

.eyes {
  height: 24px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 14px;
}

.eyes span {
  width: 24px;
  height: 24px;
  background-color: #2c3a47;
  border-radius: 50%;
  transition: 0.3s linear;
}

.ghost-box:hover .eyes span {
  height: 16px;
}

.mouth {
  width: 40px;
  height: 20px;
  background-color: #2c3a47;
  margin: auto;
  border-radius: 0 0 20px 20px;
  transition: 0.3s linear;
}

.ghost-box:hover .mouth {
  height: 12px;
}

.hands {
  width: 180px;
  position: absolute;
  left: -20px;
  top: 80px;
  display: flex;
  justify-content: space-between;
}

.hands span {
  width: 20px;
  height: 30px;
  background-color: #f2f2f2;
}

.hands span:first-child {
  border-radius: 20px 0 0 20px;
}

.hands span:last-child {
  border-radius: 0 20px 20px 0;
}

.feet {
  position: absolute;
  width: 100%;
  bottom: -20px;
  display: flex;
}

.feet span {
  flex: 1;
  height: 20px;
  background-color: #f2f2f2;
  border-radius: 0 0 20px 20px;
}

.feet span:first-child {
  border-radius: 0 0 20px 12px;
}

.feet span:last-child {
  border-radius: 0 0 10px 20px;
}
.antbox {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0.6;
}
#lottie {
  position: absolute;
  top: 0;
  left: 0;
}
</style>
