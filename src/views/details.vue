<template>
  <div>
    <dv-full-screen-container>
      <dv-border-box-1 class="back">
        <div class="virtual-box">
          <div class="virtual-left">
            <div class="con">
              <div class="radmenu" @click="cons">
                <a href="javascript:;" class="show">爱好</a>
                <ul>
                  <li>
                    <a href="javascript:;" class>旅游</a>
                  </li>
                  <li>
                    <a href="javascript:;">打游戏</a>
                  </li>
                  <li>
                    <a href="javascript:;">美食</a>
                  </li>
                  <li>
                    <a href="javascript:;">电子产品</a>
                  </li>
                  <li>
                    <a href="javascript:;">摄影</a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="center">
              <Lottie :options="defaultOptions" class="antbox" />

              <div class="human">
                <!-- <Lottie
                  :options="humanbodyOptions"
                />-->
                <!-- <humanData /> -->
              </div>
            </div>
          </div>
          <div class="virtual-right">
            <virtual-modal></virtual-modal>
          </div>
        </div>
      </dv-border-box-1>
    </dv-full-screen-container>
  </div>
</template>

<script>
import virtualModal from "../components/virtualModal";
import "../assets/css/spin.css";
import animationData from "../assets/lottie/antcircle.json";
// import humanData from "../components/animationData";
import Lottie from "vue-lottie/src/lottie.vue";
import Vue from "vue";
import dataV from "@jiaminghi/data-view";
Vue.use(dataV);
export default {
  data() {
    return {
      defaultOptions: { animationData: animationData },
    };
  },
  components: {
    Lottie,
    // humanData,
    virtualModal,
  },
  mounted() {},
  methods: {
    handleAnimation(anim) {
      this.anim = anim;
    },
    cons(e) {
      var buttons = document.querySelectorAll(".radmenu a");
      buttons[0].classList.remove("show");
      buttons[0].classList.add("selected");

      for (var i = 0, l = buttons.length; i < l; i++) {
        var button = buttons[i];
        button.onclick = setSelected;
      }
      function setSelected(e) {
        console.log(e.target);
        e.stopPropagation();
        if (this.classList.contains("selected")) {
          this.classList.remove("selected");
          if (!this.parentNode.classList.contains("radmenu")) {
            this.parentNode.parentNode.parentNode
              .querySelector("a")
              .classList.add("selected");
          } else {
            this.classList.add("show");
          }
        } else {
          this.classList.add("selected");
          if (!this.parentNode.classList.contains("radmenu")) {
            this.parentNode.parentNode.parentNode
              .querySelector("a")
              .classList.remove("selected");
          } else {
            this.classList.remove("show");
          }
        }
        return false;
      }
    },
  },
};
</script>

<style lang="less" scoped>
.back {
  margin: 0;
  padding: 0;
  background: url("../assets/images/back.jpg") no-repeat;
  background-size: cover;
  animation: bganimation 15s infinite;
  position: relative;
}
.virtual-box {
  width: 100%;
  height: 100%;
  display: flex;
  .virtual-left {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    .con {
      position: absolute;
      top: 15%;
      left: 15%;
      z-index: 22;
    }
    .center {
      width: 63%;
      height: 63%;
      position: relative;
      .human {
        width: 70%;
        height: 80%;
        // background: url("../assets/images/human.gif") no-repeat;
        background-size: cover;
        position: absolute;
        top: 10%;
        left: 13%;
      }
    }
  }
  .virtual-right {
    width: 35%;
  }
}
</style>
