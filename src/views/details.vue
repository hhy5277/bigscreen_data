<template>
  <div>
    <dv-full-screen-container>
      <dv-border-box-1 class="back">
        <div class="virtual-box">
          <div class="virtual-left">
            <div class="return-box">
              <div class="return" @click="returnindex">返回首页</div>
              <div class="return" @click="qrcode">
                预览报告
                <div v-show="num==1" class="qrcode" ></div>
              </div>
            </div>
            <labelCustom :data="labelData"></labelCustom>
            <!-- <div v-for="(item,index) in labelData" :key="index">
              <labelCustom
                class="labelCustom"
                :groupId="item.groupId"
                :labelStyle="labelStyle[index]"
                :labelData="item"
              ></labelCustom>
            </div>-->
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
import labelCustom from "../components/label-custom";
import virtualModal from "../components/virtualModal";
// import "../assets/css/spin.css";
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
       num: 0,
      labelStyle: [
        {
          top: "17%",
          left: "19%"
        },
        {
          top: "47%",
          left: "13%"
        },
        {
          top: "69%",
          left: "28%"
        },
        {
          top: "66%",
          left: "56%"
        },
        {
          top: "38%",
          left: "68%"
        },
        {
          top: "9%",
          left: "52%"
        }
      ],
      labelData: [
        {
          groupId: 1,
          name: "爱好",
          labelStyle: { top: "17%", left: "19%" },
          subTag: [
            { tagId: 1, name: "旅游" },
            { tagId: 2, name: "打游戏" },
            { tagId: 3, name: "美食" },
            { tagId: 4, name: "电子产品" },
            { tagId: 5, name: "摄影" }
          ]
        },
        {
          groupId: 2,
          name: "学历",
          labelStyle: { top: "47%", left: "13%" },
          subTag: [
            { tagId: 1, name: "本科" },
            { tagId: 2, name: "硕士" },
            { tagId: 3, name: "博士" },
            { tagId: 4, name: "博士后" }
          ]
        },
        {
          groupId: 3,
          name: "收入",
          labelStyle: { top: "69%", left: "28%" },
          subTag: [
            { tagId: 1, name: "10万以下" },
            { tagId: 2, name: "10-100万" },
            { tagId: 3, name: "年入百万" },
            { tagId: 4, name: "年入千万" }
          ]
        },
        {
          groupId: 4,
          name: "有无贷款",
          labelStyle: { top: "66%", left: "56%" },
          subTag: [
            { tagId: 1, name: "有贷款" },
            { tagId: 2, name: "无贷款" }
          ]
        },
        {
          groupId: 5,
          name: "婚姻状况",
          labelStyle: { top: "38%", left: "68%" },
          subTag: [
            { tagId: 1, name: "已婚" },
            { tagId: 2, name: "未婚" }
          ]
        },
        {
          groupId: 6,
          name: "房车状况",
          labelStyle: { top: "9%", left: "52%" },
          subTag: [
            { tagId: 1, name: "有车一族" },
            { tagId: 2, name: "有房一族" },
            { tagId: 3, name: "有房有车" },
            { tagId: 4, name: "无房无车" }
          ]
        }
      ]
    };
  },
  components: {
    Lottie,
    // humanData,
    virtualModal,
    labelCustom
  },
  mounted() {},
  methods: {
    handleAnimation(anim) {
      this.anim = anim;
    },
    returnindex() {
      console.log(111);
      this.$router.push({
        path: `/`
      });
    },
    qrcode(){
      this.num=!this.num
    }
    // open(str) {
    //   let labelCustom = document.querySelectorAll(".labelCustom");
    //   for (let i = 0; i < labelCustom.length; i++) {
    //     let element = labelCustom[i];
    //     const elementId = element.attributes.groupId.nodeValue;
    //     if (str == elementId) return;
    //     let a = document.querySelector(".radmenu > a");
    //     // console.log(a.classList.contains("selected"));
    //     // console.log();
    //     // if (a.classList.contains("selected")) {
    //     //   console.log(1);
    //     //   a.classList.remove("selected");
    //     //   a.classList.add("show");
    //     // }
    //   }
    // },
  }
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
    // .con {
    //   position: absolute;
    //   top: 15%;
    //   left: 15%;
    //   z-index: 22;
    // }
    .center {
      width: 63%;
      height: 63%;
      position: relative;
      .human {
        width: 70%;
        height: 80%;
        background: url("../assets/images/human.gif") no-repeat;
        background-size: cover;
        position: absolute;
        top: 10%;
        left: 13%;
      }
    }
    .return-box {
      position: absolute;
      bottom: 4%;
      left: 2%;
      width: 100%;
      display: flex;
      justify-content: space-between;
      .return {
        width: 208px;
        line-height: 69px;
        opacity: 0.8;
        border-radius: 62px;
        font-size: 30px;
        font-weight: bold;
        color: #1e9bdb;
        background: rgba(31, 165, 255, 0.1);
        position: relative;
        .qrcode{
          position: absolute;
          bottom: 80px;
          left: 0px;
          width: 200px;
          height: 200px;
          background:url("../assets/images/QRcode.png") no-repeat;
          background-size: cover;
        }
      }
    }
  }
  .virtual-right {
    width: 35%;
  }
}
</style>
