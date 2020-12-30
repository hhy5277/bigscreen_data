<template>
  <div class="virtualModal">
    <!-- /////////////////// -->
    <div
      :class="{card:true,creditCard:true,hidden:currentCard && currentCard !== 1,show:currentCard == 1}  "
      v-if="cartForm"
    >
      <div class="bigTitle">信用卡</div>
      <div class="cardContainer">
        <div class="item">
          <img :src="cartForm.cardImage" alt />
          <span>{{cartForm.cardName}}</span>
        </div>
      </div>
      <div v-show="currentCard == 1" class="hiddenContant">
        <p>{{cartForm.content}}</p>
        <div class="virtualForm">
          <div class="formItem">
            <span class="label">账单日:</span>
            <span class="content">{{cartForm.billDate}}</span>
          </div>
          <div class="formItem">
            <span class="label">还款日:</span>
            <span class="content">{{cartForm.payDate}}</span>
          </div>
          <div class="formItem">
            <span class="label">免息期:</span>
            <span class="content">{{cartForm.annualFee}}</span>
          </div>
          <div class="formItem">
            <span class="label">币种:</span>
            <span class="content">{{cartForm.currency}}</span>
          </div>
          <div class="formItem">
            <span class="label">年费:</span>
            <span class="content">{{cartForm.interestFree}}</span>
          </div>
          <div class="formItem">
            <span class="label">积分方式:</span>
            <span class="content">{{cartForm.integralMethod}}</span>
          </div>
        </div>
        <div class="back" @click="currentCard = null">
          <img src="../assets/images/leftJT.png" alt />
          <span>返回</span>
          <img src="../assets/images/leftJT.png" alt />
        </div>
      </div>
      <div v-show="currentCard !== 1" class="detailBtn" @click="detail(1)">
        <img src="../assets/images/leftJT.png" alt />
        <span>点击查看详情</span>
        <img src="../assets/images/leftJT.png" alt />
      </div>
    </div>
    <!-- ////////////////////// -->
    <div
      :class="{card:true,'conduct-financial-transactions':true,hidden:currentCard && currentCard !== 2,show:currentCard == 2}"
      v-if="conductForm"
    >
      <div class="bigTitle">理财</div>
      <div class="num">{{conductForm.financialRate}}</div>
      <div class="contant">预期年化收益</div>
      <div class="contant" v-show="currentCard !== 2">{{conductForm.financialName}}</div>
      <div v-show="currentCard == 2" class="hiddenContant">
        <div class="virtualForm">
          <div class="formItem">
            <span class="label">产品系列:</span>
            <span class="content">{{ conductForm.financialName }}</span>
          </div>
          <div class="formItem">
            <span class="label">币种:</span>
            <span class="content">{{conductForm.currency }}</span>
          </div>
          <div class="formItem">
            <span class="label">起始日期:</span>
            <span class="content">{{conductForm.collectDate}}</span>
          </div>
          <div class="formItem">
            <span class="label">结束日期:</span>
            <span class="content">{{conductForm.endDate}}</span>
          </div>
          <div class="formItem">
            <span class="label">起息日:</span>
            <span class="content">{{conductForm.startDate}}</span>
          </div>
          <div class="formItem">
            <span class="label">到期日:</span>
            <span class="content">{{conductForm.expireDate}}</span>
          </div>
          <div class="formItem">
            <span class="label">投资期限:</span>
            <span class="content">{{conductForm.financialLimit}}</span>
          </div>
          <div class="formItem">
            <span class="label">业绩基准:</span>
            <span class="content">{{conductForm.financialRate}}</span>
          </div>
          <div class="formItem">
            <span class="label">产品开封闭类型:</span>
            <span class="content">{{conductForm.financialClosedType}}</span>
          </div>
          <div class="formItem">
            <span class="label">销售状态:</span>
            <span class="content">{{conductForm.status}}</span>
          </div>
          <div class="formItem">
            <span class="label">风险等级:</span>
            <span class="content">{{conductForm.riskRating}}</span>
          </div>
          <div class="formItem">
            <span class="label">收益类型:</span>
            <span class="content">{{conductForm.financialType}}</span>
          </div>
          <div class="formItem">
            <span class="label">发行区域:</span>
            <span class="content">{{conductForm.lssuerArea}}</span>
          </div>
          <div class="formItem">
            <span class="label">起购金额:</span>
            <span class="content">{{conductForm.financialAmount}}</span>
          </div>
          <div class="formItem">
            <span class="label">发行机构:</span>
            <span class="content">{{conductForm.issuer}}</span>
          </div>
        </div>
        <div class="back" @click="currentCard = null">
          <img src="../assets/images/leftJT.png" alt />
          <span>返回</span>
          <img src="../assets/images/leftJT.png" alt />
        </div>
      </div>
      <div v-show="currentCard !== 2" class="detailBtn" @click="detail(2)">
        <img src="../assets/images/leftJT.png" alt />
        <span>点击查看详情</span>
        <img src="../assets/images/leftJT.png" alt />
      </div>
    </div>
    <!-- ///////////////////////// -->
    <div
      :class="{card:true,loan:true,hidden:currentCard && currentCard !== 3,show:currentCard == 3} "
      v-if="loanData"
    >
      <div class="bigTitle">贷款</div>
      <div v-show="currentCard !== 3">
        <!-- <div class="contant">贷款金额:最高300万</div>
        <div class="contant">贷款年限:{{loanData.loanTerm}}</div>
        <div class="contant">贷款利息:5%</div>-->
        <div class="contant">贷款名称:{{loanData.loanName}}</div>
        <div class="contant">贷款金额:{{loanData.loanLimit}}</div>
        <div class="contant">贷款年限:{{loanData.loanTerm}}</div>
      </div>
      <div v-show="currentCard == 3" class="hiddenContant">
        <div class="loanContainer">
          <div class="loanItem" v-for="(item,index) in loanData.detail" :key="index">
            <div class="title">{{item.title}}</div>
            <div class="listItem">{{item.content}}</div>
          </div>
        </div>
        <div class="back" @click="currentCard = null">
          <img src="../assets/images/leftJT.png" alt />
          <span>返回</span>
          <img src="../assets/images/leftJT.png" alt />
        </div>
      </div>
      <div v-show="currentCard !== 3" class="detailBtn" @click="detail(3)">
        <img src="../assets/images/leftJT.png" alt />
        <span>点击查看详情</span>
        <img src="../assets/images/leftJT.png" alt />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    recommended: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      currentCard: null, //某一项card
      cartForm: [],
      conductForm: [],
      loanData: [],
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
  watch: {
    recommended(newVal, oldVal) {
      if (newVal !== oldVal) {
        console.log(newVal);
        this.cartForm = newVal.card;
        this.conductForm = newVal.financial;
        this.loanData = newVal.loan;
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
      margin: 6% 0;
    }
    .detailBtn {
      display: flex;
      justify-content: space-between;
      align-items: center;
      position: absolute;
      left: 50%;
      bottom: 37px;
      transform: translateX(-50%);
      cursor: pointer;
      font-size: 20px;
      span {
        flex: 1;
      }
      img {
        width: 23px;
        height: 25px;
      }
      img:nth-child(3) {
        transform: rotate(180deg);
      }
    }
  }
  .hiddenContant {
    height: 67%;
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
    p {
      max-height: 200px;
      overflow-y: scroll;
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
    .loanContainer::-webkit-scrollbar,
    p::-webkit-scrollbar {
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
      display: flex;
      justify-content: space-between;
      align-items: center;
      position: absolute;
      left: 50%;
      bottom: 0;
      transform: translateX(-50%);
      cursor: pointer;
      font-size: 24px;
      font-size: 20px;
      span {
        flex: 1;
      }
      img {
        width: 23px;
        height: 25px;
      }
      img:nth-child(3) {
        transform: rotate(180deg);
      }
    }
  }
  .loan .hiddenContant {
    padding-bottom: 55px;
    height: 80%;
  }
  .creditCard {
    color: #fff;
    .cardContainer {
      // margin: 20px 0 20px;
        margin: 10px auto;
      .item {
        margin: 10px auto;
        flex: 1;
        width: 40%;
        // margin: 0 1px;

        img {
          width: 100%;
          max-width: 280px;
          margin-bottom: 2px;
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