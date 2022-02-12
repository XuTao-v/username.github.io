<!--
 * @Author: Lakeiedward
 * @Date: 2022-02-11 04:03:11
 * @LastEditTime: 2022-02-12 21:10:42
 * @FilePath: \demo\src\components\Slideshow\DetailPage.vue
-->
<template>
  <div class="DetailPage">
    <van-tabs v-model="active" offset-top="20vw" sticky>
      <van-tab v-for="(item, index) in message" :title="item" :key="index">
        <component
          :is="zhujian[index]"
          :ws="{ zz, jj, cc, mm, az }"
          :hn="{ ui }"
        ></component>
      </van-tab>
    </van-tabs>
  </div>
</template>
<script>
import N_Carousel from "./N_Carousel.vue";
import Comment from "./Comment";
import Parameter from "./Parameter";
import Recommend from "./Recommend";
export default {
  components: { N_Carousel, Comment, Parameter, Recommend },
  props: {},
  data() {
    return {
      active: 0,
      message: ["商品", "参数", "评论", "推荐"],
      zhujian: ["N_Carousel", "Parameter", "Comment", "Recommend"],
      zz: null,
      jj: null,
    };
  },
  watch: {},
  created() {
    this.$nextTick(function () {
      this.axios
        .get(
          "http://152.136.185.210:7878/api/hy66/detail?iid=" +
            `${this.$route.params.iid}`
        )
        .then((res) => {
          this.zz = res.data.result.itemInfo;
          this.jj = res.data.result.skuInfo;
          this.cc = res.data.result.columns;
          this.mm = res.data.result.shopInfo;
          this.az = res.data.result.detailInfo;
          this.ui = res.data.result.itemParams;
          console.log(res.data.result);
          this.$store.state.show = false;
        });
    });
  },
  mounted() {},
};
</script>
<style scoped lang='scss'>
.DetailPage {
  margin-top: 80px;
}
</style>