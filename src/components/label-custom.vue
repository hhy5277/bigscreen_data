<template>
  <div>
    <div class="con" :style="item.labelStyle" v-for="(item,index) in tagsList" :key="index">
      <div class="radmenu">
        <a
          href="javascript:;"
          class="bigbox show"
          @click="bigbox(index,item.id,$event)"
        >{{item.name}}</a>
        <!--  @click="bigbox(index)" -->
        <ul>
          <li v-for="child in item.list" :key="child.id">
            <a
              href="javascript:;"
              :class="{selected:customTags.includes(child.id) }"
              @click="aItem(child.id,index,$event)"
            >{{child.name}}</a>
            <!--  -->
          </li>
          <!--  -->
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { getCustomInfo, addCustomTag, getTagsList } from "../api/api";
import "../assets/css/spin.css";
export default {
  props: {
    customId: { type: String, default: () => {} },
  },
  data() {
    return {
      newData: [],
      customTags: [],
      div: "",
      labelStyle: [
        { top: "17%", left: "21%" },
        { top: "42%", left: "12%" },
        { top: "66%", left: "21%" },
        { top: "67%", left: "62%" },
        { top: "47%", left: "72%" },
        { top: "25%", left: "69%" },
        { top: "11%", left: "57%" },
        { top: "75%", left: "40%" },
        { top: "7%", left: "40%" },
        { top: "5%", left: "6%" },
        { top: "5%", left: "76%" },
      ],
      tagsList: [],
    };
  },
  created() {
    this.getTagList();
    this.getCustomTags();
  },
  methods: {
    // 获取所有标签列表
    async getTagList() {
      const res = await getTagsList();
      if (res.code == 200) {
        res.data.map((item, index) => {
          item.labelStyle = this.labelStyle[index];
        });
        this.tagsList = res.data;
      }
    },
    //获取用户用户已经拥有的标签,并隐藏标签title
    async getCustomTags() {
      try {
        const res = await getCustomInfo({ custno: this.customId, token: "" });
        if (res.code == 200) {
          let tags = res.data.tags;
          this.customTags = tags.map((item) => {
            return item.id;
          });
          this.$nextTick(() => {
            let aBtn = document.querySelectorAll("li a");
            for (let i = 0; i < aBtn.length; i++) {
              const element = aBtn[i];
              if (element.classList.contains("selected")) {
                let bigbox =
                  element.parentNode.parentNode.parentNode.firstChild;
                bigbox.classList.remove("show");
              }
            }
          });
        }
      } catch (error) {
        console.log(error);
      }
    },
    // 防抖
    debounce(fn, wait) {
      var timeout = null;
      return function () {
        if (timeout !== null) clearTimeout(timeout);
        timeout = setTimeout(fn, wait);
      };
    },
    // 子集的点击事件
    aItem(id, index, e) {
      var buttons = document.querySelectorAll(".radmenu .bigbox");
      let bigbox = buttons[index];
      if (bigbox.classList.contains("selected")) {
        // 展开了 提交修改标签请求
        bigbox.classList.remove("show");
        bigbox.classList.remove("selected");
        e.target.classList.add("selected");
        this.$emit("addCustomTag", id);
        // this.addCustomTag(id);
      } else {
        // 没有展开
        bigbox.classList.remove("show");
        bigbox.classList.add("selected");
        e.target.classList.remove("selected");
        // 默认展开一个
        for (let i = 0; i < buttons.length; i++) {
          if (i !== index) {
            buttons[i].classList.remove("selected");
            if (!buttons[i].parentNode.querySelector("ul .selected")) {
              buttons[i].classList.add("show");
            }
          }
        }
      }
    },
    //  标签总的集合 点击展开 默认只展开一个集合
    bigbox(index, id, e) {
      var buttons = document.querySelectorAll(".radmenu .bigbox");

      if (e.target.classList.contains("selected")) {
        // 展开状态
        e.target.classList.remove("selected");
        e.target.classList.add("show");
        this.$emit("addCustomTag", id);
      } else {
        // 关闭状态
        // 默认展开一个
        for (let i = 0; i < buttons.length; i++) {
          if (i !== index) {
            buttons[i].classList.remove("selected");
            if (!buttons[i].parentNode.querySelector("ul .selected")) {
              buttons[i].classList.add("show");
            }
          }
        }
        e.target.classList.remove("show");
        e.target.classList.add("selected");
      }
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