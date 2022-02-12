<!--
 * @Author: Lakeiedward
 * @Date: 2022-02-11 05:12:43
 * @LastEditTime: 2022-02-12 20:57:54
 * @FilePath: \demo\src\components\Slideshow\N_Carousel.vue
-->
<template>
  <div class="carousel">
    <van-swipe
      class="my-swipe"
      :autoplay="3000"
      indicator-color="white"
      height="300"
    >
      <van-swipe-item v-for="(item, index) in ws.zz.topImages" :key="index"
        ><van-image width="100%" height="100%" fit="contain" :src="item"
      /></van-swipe-item>
    </van-swipe>
    <div class="van-multi-ellipsis--l2">
      {{ ws.jj.title }}
    </div>
    <div class="mk">
      <span>￥{{ ws.zz.lowNowPrice }}</span> <span>{{ ws.zz.oldPrice }}</span>
      <span>{{ ws.zz.discountDesc }}</span>
    </div>
    <div class="md">
      <ul>
        <li v-for="(item, index) in ws.cc" :key="index">{{ item }}</li>
      </ul>
    </div>
    <div class="ll">
      <ul>
        <li v-for="(item, index) in ws.mm.services" :key="index">
          <img :src="item.icon" alt="" /><span>{{ item.name }}</span>
        </li>
      </ul>
    </div>
    <div class="vc">
      <img :src="ws.mm.shopLogo" alt="" /><span>{{ ws.mm.name }}</span>
    </div>
    <div class="po">
      <ul>
        <li>
          <p>{{ azz }}</p>
          <h6>总销量</h6>
        </li>
        <li>
          <p>{{ this.ws.mm.cGoods }}件</p>
          <h6>全部宝贝</h6>
        </li>
        <li>
          <div v-for="(item, index) in this.ws.mm.score" :key="index">
            <span>{{ item.name }}</span>
            <span :class="{ redss: item.score >= 5, lv: item.score < 5 }">{{
              item.score
            }}</span>
            <span v-if="item.score < 5" class="gernn">低</span>
            <span v-if="item.score >= 5" class="reds">高</span>
          </div>
        </li>
      </ul>
    </div>
    <div class="qd">
      <ul>
        <li
          v-for="(item, index) in this.ws.az.detailImage[0].list"
          :key="index"
        >
          <img :src="item" alt="" />
        </li>
      </ul>
    </div>
    <van-goods-action>
      <van-goods-action-icon icon="chat-o" text="客服" @click="onClickIcon" />
      <van-goods-action-icon icon="cart-o" text="购物车" @click="onClickIcon" />
      <van-goods-action-icon icon="shop-o" text="店铺" @click="onClickIcon" />
      <van-goods-action-button
        type="danger"
        text="立即购买"
        @click="onClickButton"
      />
    </van-goods-action>
  </div>
</template>
<script>
export default {
  props: ["ws"],
  data() {
    return {};
  },
  watch: {},
  created() {},
  mounted() {},
  computed: {
    azz() {
      let w = this.ws.mm.cFans / 1000;
      return w.toFixed(1) + "万";
    },
    zmm() {
      let y = this.ws.mm.score;
      return y.some((item) => {
        return item.score >= 5;
      });
    },
  },
  methods: {
    onClickIcon() {},
    onClickButton() {
      alert("1");
    },
  },
};
</script>
<style scoped lang='scss'>
.van-multi-ellipsis--l2 {
  font-size: 14px;
  font-weight: 700;
  word-wrap: break-word;
}
.mk {
  margin-top: 10px;
  & span:nth-child(1) {
    display: inline-block;
    font-size: 20px;
    color: pink;
  }
  & span:nth-child(2) {
    display: inline-block;
    color: rgb(192, 192, 192);
    text-decoration: line-through;
    margin-left: 10px;
  }
  & span:nth-child(3) {
    text-align: center;
    font-size: 14px;
    display: inline-block;
    color: rgb(255, 255, 255);
    background-color: pink;
    width: 80px;
    border-radius: 50px;
    vertical-align: text-bottom;
    margin-left: 10px;
  }
}
.md {
  margin-top: 10px;
  ul {
    display: flex;
    justify-content: space-around;
    li {
      font-size: 14px;
      color: rgb(169, 169, 169);
    }
  }
}
.ll {
  text-align: center;
  margin-top: 15px;
  ul {
    display: flex;
    justify-content: space-around;
    font-size: 14px;
    font-weight: 700;
    border-bottom: 1px solid #e9e4e4;
    border-top: 1px solid #e9e4e4;
    padding-top: 20px;
    padding-bottom: 20px;
    margin-bottom: 20px;
    li {
      img {
        width: 20px;
        height: 20px;
        vertical-align: middle;
      }
      span {
        margin-top: 10px;
        display: inline-block;
        font-size: 12px;
        color: rgb(121, 120, 120);
      }
    }
  }
}
.vc {
  img {
    height: 50px;
    width: 50px;
    vertical-align: middle;
    margin-left: 20px;
  }
  span {
    display: inline-block;
    font-size: 14px;
    font-weight: 700;
    margin-left: 20px;
  }
}
.po {
  ul {
    display: flex;
    justify-content: space-around;
    li {
      p {
        margin-top: 20px;
        text-align: center;
      }
      h6 {
        margin-top: 10px;
      }
      div {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 10px;
        span {
          margin-right: 10px;
        }
      }
    }
  }
}
.reds {
  background-color: red;
  color: azure;
}
.gernn {
  background-color: rgb(96, 174, 18);
  color: azure;
}
.redss {
  color: red;
}
.lv {
  color: #60ae12;
}
.qd {
  img {
    width: 100%;
  }
}
</style>