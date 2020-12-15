<template>
  <div class="background">
    <div class="layout">
      <div class="keywords">我的关键词“金融达人”</div>
      <div class="bubble-box">
        <div class="bubble" v-for="item in rounds" :key="item.id">50万以上</div>
      </div>
      <div class="bubble-box">
        <div id="main" ref="chart" style="width: 100%; height: 100%"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      rounds: [
        {
          id: 1,
          name: "50万"
        },
        {
          id: 2,
          name: "50万"
        },
        {
          id: 3,
          name: "50万"
        },
        {
          id: 4,
          name: "50万"
        },
        {
          id: 5,
          name: "50万"
        }
      ],
      chart: null
    };
  },
  mounted() {
    this.drawChart();
  },
  methods: {
    drawChart() {
      var echarts = require("echarts");
      // 基于准备好的dom，初始化echarts实例
      var myChart = echarts.init(document.getElementById("main"));

      // 绘制图表

      myChart.setOption({
        tooltip: {},
        animationDurationUpdate: function(idx) {
          // 越往后的数据延迟越大
          return idx * 100;
        },
        animationEasingUpdate: "bounceIn",
        color: ["rgba(106, 204, 255, 0.3)"],

        series: [
          {
            type: "graph",
            layout: "force",
            force: {
              repulsion: 110,
              edgeLength: 10
            },
            label: {
              normal: {
                show: true
              }
            },
            tooltip:{
             show:false
            },
            data: [
              {
                name: "考研",
                symbolSize: 80,
                draggable: true
              },
              {
                name: "兼职",
                symbolSize: 80,
                draggable: true,
              },
              {
                name: "兼1职",
                symbolSize: 80,
                draggable: true,
              },
              {
                name: "兼2职",
                symbolSize: 80,
                draggable: true,
              },
              {
                name: "兼3职",
                symbolSize: 80,
                draggable: true,
              },
              {
                name: "4兼职",
                symbolSize: 80,
                draggable: true,
              },
              {
                name: "4兼2职",
                symbolSize: 80,
                draggable: true,
              },
              
            ]
          }
        ]
      });
    }
  }
};
</script>

<style lang="less" scoped>
.background {
  width: 100%;
  height: 100%;
  background: url("../assets/images/back.jpg") no-repeat;
  background-size: cover;
  .layout {
    width: 350px;
    height: 100%;
    margin: 0 auto;
    .keywords {
      height: 85px;
      line-height: 85px;
      font-weight: 700;
      color: #ffffff;
      font-size: 17px;
    }
    .bubble-box {
      height: 237px;
      position: relative;
    }
    .bubble {
      width: 80px;
      height: 80px;
      line-height: 80px;
      background: rgba(106, 204, 255, 0.3);
      box-shadow: 0px 0px 8px 0px rgba(152, 240, 255, 0.2);
      font-size: 14px;
      color: #ffffff;
      border-radius: 50%;
    }
    .bubble:nth-child(1) {
      position: absolute;
      top: 30%;
      left: 40%;
    }
    .bubble:nth-child(2) {
      position: absolute;
      top: 30%;
      left: 40%;
    }

  }
}
</style>
