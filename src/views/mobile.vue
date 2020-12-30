<template>
  <div class="background">
    <div class="layout">
      <div class="keywords">我的关键词“{{ evaluate }}”</div>
      <!-- <div class="bubble-box">
        <div class="bubble" v-for="item in rounds" :key="item.id">50万以上</div>
      </div>-->
      <div class="bubble-box">
        <div id="main" ref="chart" style="width: 100%; height: 100%"></div>
      </div>
      <div class="analysis-box">
        <div class="partBox card" v-if="card">
          <!-- 信用卡 -->
          <div class="title">信用卡</div>
          <div class="cardBox">
            <div class="imgbox">
              <img :src="card.cardImage" alt />
              <div>{{card.cardName}}</div>
            </div>
            <!-- <div class="imgbox">
              <img src="../assets/images/secondone.png" alt />
            </div> -->
          </div>
          <p>
            {{ card.content }}
          </p>
          <div class="virtualForm">
            <div class="formItem">
              <span class="label">账单日:</span>
              <span class="content">{{ card.billDate }}</span>
            </div>
            <div class="formItem">
              <span class="label">还款日:</span>
              <span class="content">{{ card.payDate }}</span>
            </div>
            <div class="formItem">
              <span class="label">免息期:</span>
              <span class="content">{{ card.annualFee }}</span>
            </div>
            <div class="formItem">
              <span class="label">币种:</span>
              <span class="content">{{ card.annualFee }}</span>
            </div>
            <div class="formItem">
              <span class="label">年费:</span>
              <span class="content">{{ card.interestFree }}</span>
            </div>
            <div class="formItem">
              <span class="label">积分方式:</span>
              <span class="content">{{ card.integralMethod }}</span>
            </div>
          </div>
        </div>
        <div class="partBox conduct" v-if="financial">
          <!-- 理财 -->
          <div class="title">理财</div>
          <div class="num">{{ financial.financialRate }}</div>
          <div class="contant">预期年化收益</div>
          <div class="virtualForm">
            <div class="formItem">
              <span class="label">产品系列:</span>
              <span class="content">{{ financial.financialName }}</span>
            </div>
            <div class="formItem">
              <span class="label">币种:</span>
              <span class="content">{{ financial.currency }}</span>
            </div>
            <div class="formItem">
              <span class="label">起始日期:</span>
              <span class="content">{{ financial.collectDate }}</span>
            </div>
            <div class="formItem">
              <span class="label">结束日期:</span>
              <span class="content">{{ financial.endDate }}</span>
            </div>
            <div class="formItem">
              <span class="label">起息日:</span>
              <span class="content">{{ financial.startDate }}</span>
            </div>
            <div class="formItem">
              <span class="label">到期日:</span>
              <span class="content">{{ financial.expireDate }}</span>
            </div>
            <div class="formItem">
              <span class="label">投资期限:</span>
              <span class="content">{{ financial.financialLimit }}</span>
            </div>
            <div class="formItem">
              <span class="label">业绩基准:</span>
              <span class="content">{{ financial.financialRate }}</span>
            </div>
            <div class="formItem">
              <span class="label">产品开封闭类型:</span>
              <span class="content">{{ financial.financialClosedType }}</span>
            </div>
            <div class="formItem">
              <span class="label">销售状态:</span>
              <span class="content">{{ financial.status }}</span>
            </div>
            <div class="formItem">
              <span class="label">风险等级:</span>
              <span class="content">{{ financial.riskRating }}</span>
            </div>
            <div class="formItem">
              <span class="label">收益类型:</span>
              <span class="content">{{ financial.financialType }}</span>
            </div>
            <div class="formItem">
              <span class="label">发行区域:</span>
              <span class="content">{{ financial.lssuerArea }}</span>
            </div>
            <div class="formItem">
              <span class="label">起购金额:</span>
              <span class="content">{{ financial.financialAmount }}</span>
            </div>
            <div class="formItem">
              <span class="label">发行机构:</span>
              <span class="content">{{ financial.issuer }}</span>
            </div>
          </div>
        </div>
        <div class="partBox loan" v-if="loan">
          <!-- 贷款 -->
          <div class="title">贷款</div>
          <div class="loanContainer">
            <div class="loanItem" v-for="(item, index) in loan" :key="index">
              <div class="title">{{ item.title }}</div>
              <div class="listItem">
                {{ item.content }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { screencustInfo } from "../api/api";
export default {
  data() {
    return {
      chart: null,
      cartForm: [
        {
          label: "账单日:",
          value: "每月20日"
        },
        {
          label: "还款日:",
          value: "一般8日或9日"
        },
        {
          label: "免息期:",
          value: "最长50天"
        },
        {
          label: "币种:",
          value: "人命币"
        },
        {
          label: "年费:",
          value:
            "银联金卡160元/年，附卡80元/年首年免年费，消费5次免次年年费; Visa金卡有效期内免年费。"
        },
        {
          label: "积分方式:",
          value:
            "银联金卡160元/年，附卡80元/年首年免年费，消费5次免次年年费; Visa金卡有效期内免年费。"
        }
      ],
      conductForm: [
        {
          label: "产品系列:",
          value: "安心得利一安心得利"
        },
        {
          label: "币种:",
          value: "人民币"
        },
        {
          label: "起始日期:",
          value: "2020/12/11"
        },
        {
          label: "结束日期:",
          value: "2020/12/11"
        },
        {
          label: "起息日:",
          value: "2020/12/04"
        },
        {
          label: "到期日:",
          value: "2021/06/22"
        },
        {
          label: "投资期限:",
          value: "200天"
        },
        {
          label: "业绩基准:",
          value: "3.28 % "
        },
        {
          label: "产品开封闭类型:",
          value: "封闭"
        },
        {
          label: "销售状态:",
          value: "封闭"
        },
        {
          label: "风险等级:",
          value: "中低"
        },
        {
          label: "收益类型:",
          value: "业绩基准"
        },
        {
          label: "发行区域:",
          value: "全国发行"
        },
        {
          label: "起购金额:",
          value: "1000"
        },
        {
          label: "发行机构:",
          value: "中国农业银行"
        },
        {
          label: "产品说明书:",
          value: "请阅读产品说明书"
        }
      ],
      loanData: [
        {
          title: "借款人具备什么条件",
          list: [
            "1、具有完全民事行为能力和合法有效的身份证件",
            "2、具有偿还贷款本息的能力",
            "3、信用状况良好",
            "4、已签订合法有效的房屋买卖合同,且所购房屋用途为住宅",
            "5、有不低于最低规定比例的首付款证明",
            "6、则上以所购住房设定抵押担保",
            "7、农业银行规定的其他条件"
          ]
        },
        {
          title: "贷款期限利和颇度是多少?",
          list: [
            "1、贷款期限最长不超过30年",
            "2、贷款利率按照中国人民银行等有关规定执行",
            "3、贷款最高额度不超过所购住房成交价格的80%，具体按照当地差别化住房信贷政策有关规定执行"
          ]
        },
        {
          title: "借款人具备什么条件?",
          list: [
            "1、具有完全民事行为能力和合法有效的身份证件",
            "2、具有偿还贷款本息的能力",
            "3、信用状况良好",
            "4、已签订合法有效的房屋买卖合同,且所购房屋用途为住宅",
            "5、有不低于最低规定比例的首付款证明",
            "6、则上以所购住房设定抵押担保",
            "7、农业银行规定的其他条件"
          ]
        },
        {
          title: "贷款期限利和颇度是多少?",
          list: [
            "1、贷款期限最长不超过30年",
            "2、贷款利率按照中国人民银行等有关规定执行",
            "3、贷款最高额度不超过所购住房成交价格的80%，具体按照当地差别化住房信贷政策有关规定执行"
          ]
        }
      ],
      evaluate: "",
      card: [],
      financial: [],
      loan: [],
      tags: [],
      userID: null
    };
  },
  mounted() {
    // console.log(this.$router.params.id, 111111);
    // this.userID = this.$router.params.id;
    var userid=window.location.search.split("?id=")[1]
this.userID=userid
    screencustInfo({
      custno: this.userID
    }).then(res => {
      if (res.code == 200) {
        this.evaluate = res.data.evaluate;
        this.card = res.data.card;
        this.financial = res.data.financial;
        this.loan = res.data.loan.detail;
        var result = res.data.tags;
        this.tags = result.map(a => a.name);
        this.drawChart();
      }
    });

   
  },
  methods: {
    drawChart() {
      var echarts = require("echarts");
      // 基于准备好的dom，初始化echarts实例
      var myChart = echarts.init(document.getElementById("main"));
      let sizes = [50, 60, 70];
      var names = this.tags;
      let data = this.tags.map(item => {
        return {
          name: item,
          symbolSize: sizes[Math.floor(Math.random() * 3)],
          draggable: true
        };
      });
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
              repulsion: 90,
              edgeLength: 10
            },
            label: {
              normal: {
                show: true
              }
            },
            tooltip: {
              show: false
            },
            data
          }
        ]
      });
    },

  
  }
};
</script>

<style lang="less" scoped>
.analysis-box {
  padding-bottom: 40px;
  .partBox {
    border: 1px solid #72cfff;
    border-radius: 10px;
    margin: 10px 0px;
    color: #ffffff;
    padding: 15px 14px;
    text-align: left;
    font-size: 12px;
    letter-spacing: 2px;

    & > .title {
      font-size: 16px;
      text-align: center;
      border-radius: 300px;
      border: 1px solid #72cfff;
      line-height: 37px;
      margin-bottom: 15px;
      background: #080621;
    }
    .cardBox {
      display: flex;
      margin-bottom: 15px;
      .imgbox {
        flex: 1;
        margin: 0 5px;
        text-align: center;
        img {
          width: 100%;
          max-width: 180px;
        }
      }
    }
    p {
      margin-bottom: 15px;
    }
    .virtualForm {
      .formItem {
        display: flex;
        line-height: 20px;
        .label {
          min-width: 70px;
        }
        .content {
          float: 1;
        }
      }
    }
  }
  .conduct {
    .num {
      margin: 20px 0 10px;
      font-weight: 700;
      font-size: 40px;
      text-align: center;
    }
    .contant {
      line-height: 25px;
      letter-spacing: 2px;
      text-align: center;
    }
  }
  .loanContainer {
    height: 100%;
    padding: 0 15px 20px;
    overflow-y: scroll;
    .loanItem {
      .title {
        background-color: #1e9cdb60;
        text-align: center;
        height: 40px;
        line-height: 40px;
        margin-bottom: 8px;
        margin-top: 15px;
      }
      line-height: 25px;
    }
  }
}
///////////以上zxf
.background {
  width: 100%;
  height: 100%;
  overflow: scroll;
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
