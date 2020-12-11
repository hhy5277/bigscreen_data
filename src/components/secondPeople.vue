<template>
  <div class="bigContainer" :style="myStyle.outsidePosition" @click="item(data.id)">
    <img :src="data.img" alt :style="myStyle.imgStyle" />
    <span :style="myStyle.spanStyle">{{ data.name }}</span>
  </div>
</template>

<script>
export default {
  props: {
    myStyle: {
      type: Object,
      default: () => {
        return {};
      },
    },
    data: {
      type: Object,
      default: () => {
        return {};
      },
    },
  },
  methods: {
    item(id) {
      console.log(id);
    },
  },
};
</script>

<style lang="less" scoped>
.bigContainer {
  box-sizing: border-box;
  position: absolute;
  text-align: center;
  padding: 25px;
  border-radius: 50%;
  background: url("../assets/10.png") no-repeat;
  background-size: contain;
  animation: move 10s linear 1s infinite alternate;

  img {
    text-align: center;
    float: left;
    border-radius: 50%;
    width: 100%;
    height: 100%;
  }
  span {
    color: #fff;
    position: absolute;
    width: 120px;
    font-weight: 700;
    letter-spacing: 2px;
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
