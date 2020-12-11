<template>
  <div>
    <div class="container">
      <Lottie
        :options="defaultOptions"
        @animCreated="handleAnimation"
        class="antbox"
        :width="500"
        :height="500"
      />
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
      anim: {}
    };
  },
  components: {
    Lottie
  },
  methods: {
    handleAnimation(anim) {
      this.anim = anim;
    }
  }
};
</script>
<style lang="less" scoped>
.container{
    width: 100%;
    height: 100%;
    background: rebeccapurple;
}
</style>
