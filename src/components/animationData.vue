<template>
  <div>
    <Lottie :options="defaultOptions" class="antbox" />
  </div>
</template>

<script>
import animationData from "../assets/lottie/humanbody.json";
import Lottie from "vue-lottie/src/lottie.vue";
export default {
  data() {
    return {
      defaultOptions: { animationData: animationData }
    };
  },
  components: {
    Lottie
  }
};
</script>
