<template>
  <div class="virtualModal">
    <!-- /////////////////// -->
    <div
      :class="{card:true,creditCard:true,hidden:currentCard && currentCard !== 1,show:currentCard == 1}  "
    >
      <div class="bigTitle">信用卡</div>
      <div class="cardContainer">
        <div class="item" v-for="item in card" :key="item.id">
          <img :src="item.img" alt />
          <span>{{item.name}}</span>
        </div>
      </div>
      <div v-show="currentCard == 1" class="hiddenContant">
        <p>悠然白金卡是专为中青年城市白领客户设计的IC信用卡产品，提供全国网点优先通道、信用卡盗失保险等超值服务，支持刷卡、插卡和挥卡支</p>
        <div class="virtualForm">
          <div class="formItem" v-for="(item,index) in cartForm" :key="index">
            <span class="label">{{item.label}}</span>
            <span class="content">{{item.value}}</span>
          </div>
        </div>
        <div class="back" @click="currentCard = null">＜返回</div>
      </div>
      <div v-show="currentCard !== 1" class="detailBtn" @click="detail(1)"></div>
    </div>
    <!-- ////////////////////// -->
    <div
      :class="{card:true,'conduct-financial-transactions':true,hidden:currentCard && currentCard !== 2,show:currentCard == 2}"
    >
      <div class="bigTitle">理财</div>
      <div class="num">2.35%-2.23%</div>
      <div class="contant">预期年化收益</div>
      <div class="contant">惠利峰结构性存款2020年2289期</div>
      <div v-show="currentCard == 2" class="hiddenContant">
        <div class="virtualForm">
          <div class="formItem" v-for="(item,index) in conductForm" :key="index">
            <span class="label">{{item.label}}</span>
            <span class="content">{{item.value}}</span>
          </div>
        </div>
        <div class="back" @click="currentCard = null">＜返回</div>
      </div>
      <div v-show="currentCard !== 2" class="detailBtn" @click="detail(2)"></div>
    </div>
    <!-- ///////////////////////// -->
    <div
      :class="{card:true,loan:true,hidden:currentCard && currentCard !== 3,show:currentCard == 3} "
    >
      <div class="bigTitle">贷款</div>
      <div v-show="currentCard !== 3">
        <div class="contant">贷款金额:最高300万</div>
        <div class="contant">贷款年限:1-5年</div>
        <div class="contant">贷款利息:5%</div>
      </div>
      <div v-show="currentCard == 3" class="hiddenContant">
        <div class="loanContainer">
          <div class="loanItem" v-for="(item,index) in loanData" :key="index">
            <div class="title">{{item.title}}</div>
            <div class="listItem" v-for="(child,i) in item.list" :key="i">{{child}}</div>
          </div>
        </div>
        <div class="back" @click="currentCard = null">＜返回</div>
      </div>
      <div v-show="currentCard !== 3" class="detailBtn" @click="detail(3)"></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentCard: null, //某一项card
      card: [
        {
          id: 1,
          name: "中国银行信用卡",
          img: require("../assets/images/firstone.png"),
        },
        {
          id: 2,
          name: "中国银行HUAWEI联名",
          img: require("../assets/images/secondone.png"),
        },
        {
          id: 3,
          name: "AMERICAN信用卡",
          img: require("../assets/images/lastone.png"),
        },
      ],
      cartForm: [
        {
          label: "账单日:",
          value: "每月20日",
        },
        {
          label: "还款日:",
          value: "一般8日或9日",
        },
        {
          label: "免息期:",
          value: "最长50天",
        },
        {
          label: "币种:",
          value: "人命币",
        },
        {
          label: "年费:",
          value:
            "银联金卡160元/年，附卡80元/年首年免年费，消费5次免次年年费; Visa金卡有效期内免年费。",
        },
        {
          label: "积分方式:",
          value:
            "银联金卡160元/年，附卡80元/年首年免年费，消费5次免次年年费; Visa金卡有效期内免年费。",
        },
      ],
      conductForm: [
        {
          label: "产品系列:",
          value: "安心得利一安心得利",
        },
        {
          label: "币种:",
          value: "人民币",
        },
        {
          label: "起始日期:",
          value: "2020/12/11",
        },
        {
          label: "结束日期:",
          value: "2020/12/11",
        },
        {
          label: "起息日:",
          value: "2020/12/04",
        },
        {
          label: "到期日:",
          value: "2021/06/22",
        },
        {
          label: "投资期限:",
          value: "200天",
        },
        {
          label: "业绩基准:",
          value: "3.28 % ",
        },
        {
          label: "产品开封闭类型:",
          value: "封闭",
        },
        {
          label: "销售状态:",
          value: "封闭",
        },
        {
          label: "风险等级:",
          value: "中低",
        },
        {
          label: "收益类型:",
          value: "业绩基准",
        },
        {
          label: "发行区域:",
          value: "全国发行",
        },
        {
          label: "起购金额:",
          value: "1000",
        },
        {
          label: "发行机构:",
          value: "中国农业银行",
        },
        {
          label: "产品说明书:",
          value: "请阅读产品说明书",
        },
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
            "7、农业银行规定的其他条件",
          ],
        },
        {
          title: "贷款期限利和颇度是多少?",
          list: [
            "1、贷款期限最长不超过30年",
            "2、贷款利率按照中国人民银行等有关规定执行",
            "3、贷款最高额度不超过所购住房成交价格的80%，具体按照当地差别化住房信贷政策有关规定执行",
          ],
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
            "7、农业银行规定的其他条件",
          ],
        },
        {
          title: "贷款期限利和颇度是多少?",
          list: [
            "1、贷款期限最长不超过30年",
            "2、贷款利率按照中国人民银行等有关规定执行",
            "3、贷款最高额度不超过所购住房成交价格的80%，具体按照当地差别化住房信贷政策有关规定执行",
          ],
        },
      ],
    };
  },
  methods: {
    detail(index) {
      this.currentCard = index;
      let cards = document.querySelectorAll(".card");
      for (let item = 0; item < cards.length; item++) {
        const element = cards[item];
        if (item == index) return false;
      }
    },
  },
};
</script>

<style lang="less" scoped>
.virtualModal {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 0;
  box-sizing: border-box;
  & > div {
    position: relative;
    box-sizing: border-box;
    width: 90%;
    height: 33%;
    margin: 0 auto;
    padding: 0px 35px 0px 35px;
    background: url("../assets/images/bacground.png") no-repeat 0 0;
    background-size: 100% 100%;
    overflow: hidden;
    transition: 0.5s all cubic-bezier(0, 1, 0.95, 1.05);
    .bigTitle {
      border: 1px solid #72cfff;
      border-radius: 30px;
      color: #cdeeff;
      font-weight: 700;
      line-height: 30px;
      letter-spacing: 2px;
      font-size: 16px;
      background: #080621;
     margin:6% 0;
    }
    .detailBtn {
      width: 25%;
      height: 40px;
      position: absolute;
      left: 50%;
      bottom: 10%;
      transform: translateX(-48%);
      margin: 0 auto;
      background: url("../assets/images/detailBtn.png") no-repeat center center;
      background-size: contain;
    }
  }
  .hiddenContant {
    height: 70%;
    position: relative;
    p,
    .formItem,
    .back,
    .loanItem {
      font-weight: 700;
      font-size: 14px;
      text-align: left;
      line-height: 30px;
      letter-spacing: 2px;
    }
    .virtualForm {
      margin-top: 30px;
    }
    .formItem {
      display: flex;
      span.label {
        min-width: 90px;
        text-align: left;
      }
      .content {
        flex: 1;
      }
    }
    .loanContainer::-webkit-scrollbar {
      display: none;
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
    .back {
      position: absolute;
      left: 0;
      bottom: 0;
      cursor: pointer;
    }
  }
  .loan .hiddenContant {
    padding-bottom: 55px;
    height: 80%;
  }
  .creditCard {
    color: #fff;
    .cardContainer {
      margin: 20px 0 30px;
      display: flex;
      .item {
        flex: 1;
        margin: 0 1px;

        img {
          width: 100%;
          max-width: 200px;
        }
        span {
          display: inline-block;
          width: 99%;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
      }
    }
  }
  .conduct-financial-transactions {
    color: #fff;
    .num {
      margin: 20px 0 10px;
      font-weight: 700;
      font-size: 40px;
    }
    .contant {
      line-height: 25px;
      letter-spacing: 2px;
    }
  }
  .loan {
    color: #fff;
    font-weight: 700;
    font-size: 20px;
    line-height: 35px;
  }
  .hidden {
    height: 0;
  }
  .show {
    background: url("../assets/images/bigBgc.png") no-repeat 0 0;
    background-size: 100% 100%;
    height: 100%;
  }
}
</style>