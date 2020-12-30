<template>
  <div id="details">
    <!-- v-show="show" -->
    <div class="mydialog" v-show="show" @click="closeMyDia">
      <div class="innerDialog">
        <div>退 出 ( {{count}}s )</div>
        <div>点击屏幕继续</div>
      </div>
    </div>

    <dv-full-screen-container>
      <dv-border-box-1 class="back">
        <!-- <video id="v" autoplay="autoplay" loop>
          <source src="../assets/images/789.mp4" type="video/mp4" />
        </video>-->
        <dv-loading class="loading" v-if="loading">加载中...</dv-loading>
        <div class="virtual-box">
          <div class="virtual-left">
            <div class="return-box">
              <div class="return" @click="returnindex">返回首页</div>

              <div class="return" @click="qrcode">
                预览报告
                <div
                  v-show="this.num == 1"
                  class="qrcode"
                  v-bind:style="{
                    'background-image': 'url(' + qrCodeUrl + ')',
                    backgroundSize: 'cover'
                  }"
                ></div>
              </div>
            </div>
            <labelCustom ref="labelCustom" :customId="customId" @addCustomTag="addCustomTag"></labelCustom>
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
            <virtual-modal ref="virtualModal" :recommended="recommended"></virtual-modal>
          </div>
        </div>
      </dv-border-box-1>
    </dv-full-screen-container>
  </div>
</template>

<script>
import Vue from "vue";
import { getCustomInfo, addCustomTag } from "../api/api";
import labelCustom from "../components/label-custom";
import virtualModal from "../components/virtualModal";
// import "../assets/css/spin.css";
import animationData from "../assets/lottie/antcircle.json";
// import humanData from "../components/animationData";
import Lottie from "vue-lottie/src/lottie.vue";
import dataV from "@jiaminghi/data-view";
Vue.use(dataV);
export default {
  data() {
    return {
      customId: null,
      defaultOptions: { animationData: animationData },
      num: 0,
      recommended: {}, //推荐产品
      loading: true,
      qrCodeUrl: null,
      currentTime: new Date().getTime(),
      lastTime: new Date().getTime(),
      diff: 1000 * 60,
      timeout: null, //定时器,
      show: false,
      count: "",
      timer: null,
    };
  },
  components: {
    Lottie,
    // humanData,
    virtualModal,
    labelCustom,
  },
  created() {
    this.customId = this.$route.params.id;
  },
  mounted() {
    setTimeout(() => {
      this.loading = false;
    }, 2000);
    this.getCustomInfo();
    this.OperatingWebsite();
  },
  // beforeDestroy() {
  //   if (this.timer) {
  //     console.log(222);
  //     clearInterval(this.timer);
  //   }
  // },
  methods: {
    OperatingWebsite() {
      let that = this;
      let details = document.getElementById("dv-full-screen-container");
      details.addEventListener("click", function () {
        that.lastTime = new Date().getTime();
        that.show = false;
        that.count = 15;
        clearInterval(that.timer);
        that.openInterval();
      });
      this.openInterval();
    },
    openInterval() {
      let that = this;
      let count = 60;
      this.timer = setInterval(function () {
        that.currentTime = new Date().getTime();
        if (that.$route.name !== "details") return false;
        if (that.currentTime - that.lastTime <= that.diff) {
          count--;
          if (count <= 15) {
            that.show = true;
            that.count = count;
          }
          // console.log(that.timer, "-------");
          // console.log(count);
        } else {
          that.$router.push("/");
          that.show = false;
          that.count = 15;
          clearInterval(that.timer);
        }
      }, 1000);
    },
    // 关闭模态框
    closeMyDia() {
      this.show = false;
      this.lastTime = new Date().getTime();
      this.show = false;
      this.count = 15;
      clearInterval(this.timer);
      this.openInterval();
    },

    // 新增用户标签
    async addCustomTag(id) {
      try {
        const res = await addCustomTag({
          custNo: this.customId,
          tagId: id,
        });
        // 更改标签之后重新获取用户信息（推荐产品信息）
        if (res.code == 200) {
          this.getCustomInfo();
        }
      } catch (error) {
        console.log(error);
      }
    },
    //获取用户用户信息（推荐产品信息）
    async getCustomInfo() {
      try {
        const res = await getCustomInfo({ custno: this.customId, token: "" });
        if (res.code == 200) {
          const { card, financial, loan } = res.data;
          this.recommended = {
            card,
            financial,
            loan,
          };
          this.qrCodeUrl = res.data.qrCodeUrl;
        }
      } catch (error) {
        console.log(error);
      }
    },
    handleAnimation(anim) {
      this.anim = anim;
    },
    returnindex(e) {
      e.stopPropagation();
      this.lastTime = new Date().getTime();
      this.show = false;
      this.count = 15;
      clearInterval(this.timer);
      this.$router.push({
        path: `/`,
      });
    },
    qrcode() {
      this.num = !this.num;
    },
  },
};
</script>

<style lang="less" scoped>
#v {
  width: 100%;
  height: 100%;
}
.mydialog {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 1000;
  .innerDialog {
    width: 250px;
    // height: 100px;
    background: rgba(31, 165, 255, 0.1);
    position: absolute;
    left: 50%;
    top: 50%;
    padding: 10px 20px;
    transform: translate(-50%, -50%);
    border-radius: 10px;
    background: url("../assets/images/returnIndex.png") no-repeat 0
      0;
    background-size: 100% 100%;
    // display: flex;
    // flex-direction: column;
    & > div {
      text-align: center;
      line-height: 30px;
      color: #fff;
      font-weight: 700;
      font-size: 18px;
    }
    & > div:nth-child(2) {
      font-size: 12px;
    }
    // .topHeight {
    //   height: 30px;
    //   line-height: 30px;
    //   text-align: right;
    //   padding: 0 10px;
    //   border-bottom: 1px solid #eee;
    // }
    // .container {
    //   flex: 1;
    //   line-height: 60px;
    // }
  }
}
.back {
  margin: 0;
  padding: 0;
  background: url("../assets/images/back.jpg") no-repeat;
  background-size: cover;
  animation: bganimation 15s infinite;
  position: relative;
  .loading {
    color: #fff;
  }
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
        .qrcode {
          position: absolute;
          bottom: 80px;
          left: 0px;
          width: 200px;
          height: 200px;
        }
      }
    }
  }
  .virtual-right {
    width: 35%;
  }
}
.count {
  font-size: 60px;
  color: #fff;
}
</style>
