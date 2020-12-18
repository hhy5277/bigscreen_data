<template>
  <div>
    <div class="con" :style="item.labelStyle" v-for="(item,index) in data" :key="index">
      <div class="radmenu">
        <a href="javascript:;" class="show">{{item.name}}</a>
        <ul>
          <li v-for="child in item.subTag" :key="child.tagId">
            <a href="javascript:;" class>{{child.name}}</a>
          </li>
        </ul>
      </div>
    </div>
    <!-- <div class="con" :style="labelStyle">
      <div class="radmenu">
        <a href="javascript:;" class="show" :groupId="labelData.groupId">{{labelData.name}}</a>
        <ul>
          <li v-for="item in labelData.subTag" :key="item.tagId">
            <a href="javascript:;" class>{{item.name}}</a>
          </li>
        </ul>
      </div>
    </div>-->
  </div>
</template>

<script>
import { getTagsList } from "../api/api";
import "../assets/css/spin.css";
export default {
  props: {
    labelStyle: { type: Object, default: () => {} },
    labelData: { type: Object, default: () => {} },
    data: {
      type: Array,
      default: () => {},
      selectedTag: null,
    },
  },
  async mounted() {
    const res = await getTagsList();
    console.log(res);
    
    var buttons = document.querySelectorAll(".radmenu a");
    for (var i = 0, l = buttons.length; i < l; i++) {
      // 为每一个a标签添加点击事件
      var button = buttons[i];
      button.onclick = setSelected;
    }
    function setSelected(e) {
      let arr = e.target.parentNode.parentNode.parentNode.children; //arr是最大的容器con
      for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        // 所有的标签集
        let selecteds = element.querySelector(".radmenu > a");
        if (selecteds && selecteds.classList.contains("selected")) {
          if (e.target.classList.contains("selected")) {
            // 控制关闭tag标签
            e.target.classList.remove("selected");
            e.target.classList.add("show");
            return false;
          }
          // 关闭所有的标签集
          selecteds.classList.remove("selected");
          selecteds.classList.add("show");
        }
      }
      e.stopPropagation();
      if (this.classList.contains("selected")) {
        //已经展开了
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
    }
  },
  methods: {
    close() {
      console.log(this);
    },
  },
};
</script>

<style scoped lang="less">
.con {
  position: absolute;
  z-index: 22;
}
</style>