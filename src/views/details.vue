<template>
  <div id="details">
    <dv-full-screen-container>
      <dv-border-box-1 class="back">
        <!-- <video id="v" autoplay="autoplay" loop>
          <source src="../assets/images/789.mp4" type="video/mp4" />
        </video>-->
        <dv-loading class="loading" v-if="loading">加载中...</dv-loading>
        <div class="virtual-box">
          <div class="virtual-left">
            <div class="return-box">
              <div class="return" @click="returnindex">
                返回首页
                <span v-show="show">{{ count }} s</span>
              </div>

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
  methods: {
    OperatingWebsite() {
      let that = this;
      let currentTime = new Date().getTime();
      let lastTime = new Date().getTime();
      let diff = 1000 * 60;
      let timer;
      let details = document.getElementById("dv-full-screen-container");
      details.addEventListener("click", function () {
        lastTime = new Date().getTime();
        that.show = false;
        that.count = 15;
        clearInterval(timer);
        name();
      });
      function name(params) {
        let count = 60;
        timer = setInterval(function () {
          currentTime = new Date().getTime();
          if (currentTime - lastTime <= diff) {
            count--;
            if (count <= 15) {
              that.show = true;
              that.count = count;
            }
            console.log(count);
          } else {
            // console.log("跳转");
            that.$router.push("/");
            that.show = false;
            that.count = 5;
            clearInterval(timer);
          }
        }, 1000);
      }
      name();
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
    returnindex() {
      console.log(111);
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
