<!--
 * @Author: Lakeiedward
 * @Date: 2022-02-09 17:51:27
 * @LastEditTime: 2022-02-09 22:08:36
 * @FilePath: \demo\src\components\Seckill.vue
-->
<template>
  <div class="Seckill">
    <van-divider
      :style="{ color: '#ee0a24', borderColor: '#ee0a24', padding: '0 16px' }"
    >
      <van-count-down :time="time" ref="checkbox" @change="app">
        <template #default="timeData">
          <span class="block">{{ timeData.hours }}</span>
          <span class="colon">:</span>
          <span class="block">{{ timeData.minutes }}</span>
          <span class="colon">:</span>
          <span class="block">{{ timeData.seconds }}</span>
        </template>
      </van-count-down>
    </van-divider>

    <p class="zxc">
      鸡汤来咯快来抢啊！！！
      <a href="https://wqs.jd.com/portal/wx/seckill_m/index.shtml?st=1"
        >点击更多鸡汤</a
      >
    </p>
  </div>
</template>
<script>
export default {
  props: {},
  data() {
    return {
      time:
        localStorage.getItem("time") > 0
          ? localStorage.getItem("time")
          : 86400000, // 等于一天
    };
  },
  watch: {},
  created() {
    this.$nextTick(function () {
      // this.add();
    });
  },
  mounted() {
    // this.time = localStorage.time - 1000;
  },
  updated() {},
  methods: {
    add() {
      // setInterval(() => {
      //   this.time = this.time - 1000;
      //   localStorage.setItem("time", this.time);
      // }, 1000);
    },
    app(e) {
      e.seconds = e.seconds < 10 ? "0" + e.seconds : e.seconds;
      localStorage.setItem(
        "time",
        e.hours * 3600000 + e.minutes * 60000 + e.seconds * 1000
      );
    },
  },
};
</script>
<style scoped lang='scss'>
.van-count-down {
  display: flex;
  justify-content: center;
}
.Seckill {
  .zxc {
    margin-top: 10px;
    color: #ee0a24;
    font-size: 14px;
    text-align: center;
    a {
      color: #ee0a24;
      margin-right: -20px;
      margin-left: 20px;
    }
  }
}
.colon {
  display: inline-block;
  margin: 0 4px;
  color: #ee0a24;
}
.block {
  display: inline-block;
  width: 22px;
  color: #fff;
  font-size: 12px;
  text-align: center;
  background-color: #ee0a24;
}
</style>