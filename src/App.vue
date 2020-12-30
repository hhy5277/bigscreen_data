<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style lang="less" scoped>
#app {
  @import "./assets/font/font.css";
  font-family: "zhanku";
  font-size: 18px;
  height: 100%;
}
</style>
<script>
export default {
  mounted() {
    var dom = document.getElementById("app");
    dom.oncontextmenu = function() {
      return false;
    };
  }
};
</script>
