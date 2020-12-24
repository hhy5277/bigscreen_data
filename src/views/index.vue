<template>
  <div>
    <dv-full-screen-container>
      <dv-border-box-1 class="back">
        <!-- <dv-loading>Loading...</dv-loading> -->
        <Lottie :options="defaultOptions" @animCreated="handleAnimation" class="antbox" />
        <!-- <dv-decoration-5 style="width:300px;height:40px;" /> -->
        <div id="lottie" class="container">
          <div
            class="ghost-box"
            v-for="item in information.slice(0, 3)"
            :key="item.pid"
            @click="getDescribe(item.pid)"
          >
            <BigHead v-bind:information="item"  />
          </div>
          <div
            class="ghost-box button"
            v-for="item in information.slice(3, 9)"
            :key="item.pid"
            @click="getDescribe(item.pid)"
          >
            <SmallHead v-bind:information="item" />
          </div>

          <div
            class="ghost-box button"
            v-for="item in information.slice(9, 14)"
            :key="item.pid"
            @click="getDescribe(item.pid)"
          >
            <MiddleHead v-bind:information="item" />
          </div>
        </div>
      </dv-border-box-1>
    </dv-full-screen-container>
  </div>
</template>

<script>
import SockJS from "sockjs-client";
import Stomp from "@stomp/stompjs";
import * as animationData from "../assets/lottie/antcircle.json";
import Lottie from "vue-lottie/src/lottie.vue";
import BigHead from "../components/bigHeadPortrait";
import MiddleHead from "../components/middleHeadPortrait";
import SmallHead from "../components/smallHeadPortrait";
import Vue from "vue";
import dataV from "@jiaminghi/data-view";
import { mapMutations, mapState } from "vuex";
Vue.use(dataV);
export default {
  data() {
    return {
      defaultOptions: { animationData: animationData },
      animationSpeed: 1,
      anim: {},
      information: [],
    };
  },
  components: {
    Lottie,
    BigHead,
    MiddleHead,
    SmallHead,
  },
  computed: {
    ...mapState(["constomData", "constomNum"]),
  },
  mounted() {
    this.init();
    this.information = this.constomData;
  },
  methods: {
    ...mapMutations(["handleConstomData", "handleConstomNum"]),
    handleAnimation(anim) {
      this.anim = anim;
      console.log(anim);
    },
    getDescribe(id) {
      //   直接调用$router.push 实现携带参数的跳转
      setTimeout(() => {
        this.$router.push({
          name: "details",
          params: {
            id
          }
        });
      }, 500);
    },
    init() {
      let that = this;
      var socket;
      if (typeof WebSocket == "undefined") {
        console.log("您的浏览器不支持WebSocket");
      } else {
        console.log("您的浏览器支持WebSocket");
        //实现化WebSocket对象，指定要连接的服务器地址与端口  建立连接
        //等同于
        var websocket = new WebSocket(
          "ws://192.168.0.85:8282/kangxu-hkface/websocket/1"
        );
        //socket = new WebSocket("${basePath}websocket/${cid}".replace("http","ws"));
        //打开事件
        websocket.onopen = function () {
          console.log("Socket 已打开");
          //socket.send("这是来自客户端的消息" + location.href + new Date());
        };
        //获得消息事件
        websocket.onmessage = function (msg) {
          if (msg.data !== "连接成功") {
            var data = JSON.parse(msg.data);
            let index = that.constomNum % 14;
            let arr = that.information;
            // 不能直接arr[index]赋值，因为push等方法在uve中是变异函数，数据变化，页面变化
            arr.splice(index, 1, data);
            that.handleConstomData(arr);
            that.information = that.constomData;
            that.handleConstomNum();
          }
          //发现消息进入    开始处理前端触发逻辑
        };
        //关闭事件
        websocket.onclose = function () {
          console.log("Socket已关闭");
        };
        //发生了错误事件
        websocket.onerror = function () {
          alert("Socket发生了错误");
          //此时可以尝试刷新页面
        };
      }
    },
  },
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
  top: 8%;
  left: 6%;
}
.ghost-box:nth-child(12) {
  position: absolute;
  top: 37%;
  right: 35%;
}
.ghost-box:nth-child(3) {
  position: absolute;
  top: 36%;
  left: 39%;
}

.ghost-box:nth-child(4) {
  position: absolute;
  top: 22%;
  left: 25%;
}
.ghost-box:nth-child(13) {
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
  bottom: 56%;
  right: 15%;
}
.ghost-box:nth-child(8) {
  position: absolute;
  bottom: 37%;
  right: 41%;
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
.ghost-box:nth-child(11) {
  position: absolute;
  top: 55%;
  right: 76%;
}
.ghost-box:nth-child(2) {
  position: absolute;
  top: 10%;
  right: 25%;
}
.ghost-box:nth-child(5) {
  position: absolute;
  top: 10%;
  left: 40%;
}
.ghost-box:nth-child(14) {
  position: absolute;
  bottom: 23%;
  left: 43%;
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

.button {
  z-index: 222;
  display: inline-block;
  padding: 1em 2em;
  color: #fff;
  border-radius: 4px;
  border: none;
  cursor: pointer;
  position: relative;
  outline: 0;
  transition: transform ease-in 0.1s, background-color ease-in 0.1s,
    box-shadow ease-in 0.25s;
}
// .button::before {
//   position: absolute;
//   content: "";
//   left: -3em;
//   right: -3em;
//   top: -3em;
//   bottom: -3em;
//   pointer-events: none;
//   transition: ease-in-out 0.5s;
//   background-repeat: no-repeat;
//   background-image: radial-gradient(circle, #5499c7 20%, transparent 20%),
//     radial-gradient(circle, #a93226 20%, transparent 20%),
//     radial-gradient(circle, #229954 20%, transparent 20%),
//     radial-gradient(circle, #f1c40f 20%, transparent 20%),
//     radial-gradient(circle, #5b2c6f 20%, transparent 20%),
//     radial-gradient(circle, #ff0081 20%, transparent 20%),
//     radial-gradient(circle, #303f9f 20%, transparent 20%),
//     radial-gradient(circle, #00796b 20%, transparent 20%),
//     radial-gradient(circle, #37adbd 20%, transparent 20%),
//     radial-gradient(circle, #5a9cd1 20%, transparent 20%),
//     radial-gradient(circle, #ff0081 20%, transparent 20%),
//     radial-gradient(circle, #d8432f 20%, transparent 20%),
//     radial-gradient(circle, #01f3fb 20%, transparent 20%),
//     radial-gradient(circle, #c1f13b 20%, transparent 20%),
//     radial-gradient(circle, #ff0081 20%, transparent 20%),
//     radial-gradient(circle, #c79610 20%, transparent 20%),
//     radial-gradient(circle, #fffdf7 20%, transparent 20%);
//   background-size: 10% 10%, 20% 20%, 15% 15%, 20% 20%, 18% 18%, 10% 10%, 15% 15%,
//     10% 10%, 18% 18%, 15% 15%, 20% 20%, 18% 18%, 20% 20%, 15% 15%, 10% 10%,
//     20% 20%, 40% 40%;
//   background-position: 18% 40%, 20% 31%, 30% 30%, 40% 30%, 50% 30%, 57% 30%,
//     65% 30%, 80% 32%, 15% 60%, 83% 60%, 18% 70%, 25% 70%, 41% 70%, 50% 70%,
//     64% 70%, 80% 71%, 30% 30%;
//   animation: bubbles ease-in-out 0.75s forwards;
// }

.button:active {
  transform: scale(0.85);
  // background-color: red;
  // box-shadow: 0 2px 25px rgba(233, 30, 99, 0.5);
}
.button:active::before {
  animation: none;
  background-size: 0;
}
@keyframes bubbles {
  0% {
    background-position: 18% 40%, 20% 31%, 30% 30%, 40% 30%, 50% 30%, 57% 30%,
      65% 30%, 80% 32%, 15% 60%, 83% 60%, 18% 70%, 25% 70%, 41% 70%, 50% 70%,
      64% 70%, 80% 71%;
  }
  50% {
    background-position: 10% 44%, 0 20%, 15% 5%, 30% 0%, 42% 0%, 62% -2%, 75% 0%,
      95% -2%, 0% 80%, 95% 55%, 7% 100%, 24% 100%, 41% 100%, 55% 95%, 68% 96%,
      95% 100%;
  }
  100% {
    background-position: 5% 44%, -5% 20%, 7% 5%, 23% 0%, 37% 0, 58% -2%, 80% 0%,
      100% -2%, -5% 80%, 100% 55%, 2% 100%, 23% 100%, 42% 100%, 60% 95%, 70% 96%,
      100% 100%;
    background-size: 0 0;
  }
}
</style>
