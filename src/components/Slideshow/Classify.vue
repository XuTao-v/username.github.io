<!--
 * @Author: Lakeiedward
 * @Date: 2022-02-08 22:10:38
 * @LastEditTime: 2022-02-11 07:04:18
 * @FilePath: \demo\src\components\Slideshow\Classify.vue
-->
<template>
  <div>
    <van-swipe class="my-swipe" indicator-color="white" :loop="false">
      <van-swipe-item
        ><ul>
          <li v-for="(item, index) in message" :key="index">
            <a :href="item.srcs">
              <img :src="item.imgs" alt="" />
              <p>{{ item.text }}</p></a
            >
          </li>
        </ul></van-swipe-item
      >
      <van-swipe-item
        ><ul>
          <li v-for="(item, index) in message" :key="index">
            <a :href="item.srcs">
              <img :src="item.imgs" alt="" />
              <p>{{ item.text }}</p></a
            >
          </li>
        </ul></van-swipe-item
      >
    </van-swipe>
  </div>
</template>
<script>
export default {
  data() {
    return {
      message: [
        {
          text: "京东超市",
          imgs: "https://m15.360buyimg.com/mobilecms/jfs/t1/175540/24/19329/6842/60ec0b0aEf35f7384/ec560dbf9b82b90b.png!q70.jpg",
          srcs: "https://h5.m.jd.com/babelDiy/Zeus/4JkCVz6z5RB4dBL7bZBwtGRiBLLw/index.html?hideTabbar=true",
        },
        {
          text: "数码电器",
          imgs: "https://m15.360buyimg.com/mobilecms/jfs/t1/178015/31/13828/6862/60ec0c04Ee2fd63ac/ccf74d805a059a44.png!q70.jpg",
          srcs: "https://pro.m.jd.com/mall/active/8tHNdJLcqwqhkLNA8hqwNRaNu5f/index.html#/index",
        },
        {
          text: "京东服饰",
          imgs: "https://m15.360buyimg.com/mobilecms/jfs/t1/41867/2/15966/7116/60ec0e0dE9f50d596/758babcb4f911bf4.png!q70.jpg",
          srcs: "https://pro.m.jd.com/mall/active/3qMkfmPMc55RTahmSSpwwuxVrYMG/index.html",
        },
        {
          text: "京东生鲜",
          imgs: "https://m15.360buyimg.com/mobilecms/jfs/t1/177902/16/13776/5658/60ec0e71E801087f2/a0d5a68bf1461e6d.png!q70.jpg",
          srcs: "https://pro.m.jd.com/mall/active/4P9a2T9osR9JvtzHVaYTPvsecRtg/index.html",
        },
        {
          text: "京东到家",
          imgs: "https://m15.360buyimg.com/mobilecms/jfs/t1/196472/7/12807/7127/60ec0ea3Efe11835b/37c65625d94cae75.png!q70.jpg",
          srcs: "https://daojia.jd.com/html/index/index.html?channel=jdapp",
        },
        {
          text: "充值缴费",
          imgs: "https://m15.360buyimg.com/mobilecms/jfs/t1/185733/21/13527/6648/60ec0f31E0fea3e0a/d86d463521140bb6.png!q70.jpg",
          srcs: "https://prodev.m.jd.com/mall/active/N2p5dHzdwxnAqp182PVJmc5L5Se/index.html",
        },
        {
          text: "物流查询",
          imgs: "https://m15.360buyimg.com/mobilecms/jfs/t1/199143/10/8979/4223/614599f5E45cd5464/d15aa650a0ebe596.png!q70.jpg",
          srcs: "https://plogin.m.jd.com/login/nopassword?appid=300&returnurl=https%3A%2F%2Fwq.jd.com%2Fpassport%2FLoginRedirect%3Fstate%3D2357068379%26returnurl%3Dhttps%253A%252F%252Fwqs.jd.com%252Forder%252Forderlist_jdm.shtml%253Fsceneval%253D2&source=wq_passport",
        },
        {
          text: "领卷",
          imgs: "https://m15.360buyimg.com/mobilecms/jfs/t1/186080/16/13681/8175/60ec0fcdE032af6cf/c5acd2f8454c40e1.png!q70.jpg",
          srcs: "https://coupon.m.jd.com/center/getCouponCenter.action",
        },
        {
          text: "领金贴",
          imgs: "https://m15.360buyimg.com/mobilecms/jfs/t1/196711/35/12751/6996/60ec1000E21b5bab4/38077313cb9eac4b.png!q70.jpg",
          srcs: "https://active.jd.com/forever/cashback/?channellv=mapp",
        },
        {
          text: "PLUS会员",
          imgs: "https://m15.360buyimg.com/mobilecms/jfs/t1/37709/6/15279/6118/60ec1046E4b5592c6/a7d6b66354efb141.png!q70.jpg",
          srcs: "https://plogin.m.jd.com/login/nopassword?appid=300&returnurl=https%3A%2F%2Fwq.jd.com%2Fpassport%2FLoginRedirect%3Fstate%3D1101952272384%26returnurl%3Dhttps%253A%252F%252Fplus.m.jd.com%252Findex&source=wq_passport",
        },
      ],
    };
  },
  watch: {},
  created() {},
  mounted() {},
  methods: {},
};
</script>
<style scoped lang='scss'>
.my-swipe .van-swipe-item {
  margin-top: 4vw;
  ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    height: 52vw;
    li {
      width: 20vw;
      a {
        text-align: center;
        display: inline-block;
        width: 100%;
        height: 100%;
        img {
          width: 12vw;
          height: 12vw;
        }
        p {
          text-align: center;
          font-size: 14px;
          color: #666666;
        }
      }
    }
  }
}
</style>
<style>
.van-swipe__indicator {
  background-color: rgb(209, 149, 60) !important;
}
</style>