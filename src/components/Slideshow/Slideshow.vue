<!--
 * @Author: Lakeiedward
 * @Date: 2022-02-08 19:41:35
 * @LastEditTime: 2022-02-12 22:10:50
 * @FilePath: \demo\src\components\Slideshow\Slideshow.vue
-->
<template>
  <div>
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="(item, index) in message" :key="index">
        <a :href="item.link"><img :src="item.image" alt="" /></a>
      </van-swipe-item>
    </van-swipe>
    <van-notice-bar
      left-icon="volume-o"
      text="无论我们能活多久，我们能够享受的只有无法分割的此刻，此外别无其他。"
    />
  </div>
</template>
<script>
export default {
  data() {
    return {
      message: null,
    };
  },
  mounted() {
    this.axios
      .get("http://152.136.185.210:7878/api/hy66/home/multidata")
      .then((res) => {
        this.message = res.data.data.banner.list;
      });
  },
};
</script>
<style scoped lang='scss'>
.my-swipe .van-swipe-item {
  margin-top: 20vw;
  height: 52vw;
  a {
    display: inline-block;
    height: 100%;
    img {
      width: 100%;
      height: 100%;
    }
  }
}
</style>
