<!--
 * @Author: Lakeiedward
 * @Date: 2022-02-09 23:17:49
 * @LastEditTime: 2022-02-12 17:59:46
 * @FilePath: \demo\src\components\Slideshow\Option.vue
-->
<template>
  <div>
    <van-tabs
      v-model="active"
      ref="zzz"
      title-active-color="#f32"
      offset-top="20vw"
      sticky
      @click="axxx"
    >
      <van-tab v-for="(index, item) in ass" :title="index" :key="item">
        <li v-for="(item, index) in message[index].list" :key="index">
          <a :href="'/DetailPage/' + message[ass[count]].list[index].iid">
            <img :src="item.show.img" alt="" />
            <p>{{ item.title }}</p>
            <h6>{{ item.orgPrice }}</h6>
          </a>
        </li>
      </van-tab>
    </van-tabs>
    <h1>1</h1>
  </div>
</template>
<script>
export default {
  props: {},

  data() {
    return {
      active: "0",
      message: {
        pop: { page: 1, list: [] },
        new: { page: 1, list: [] },
        sell: { page: 1, list: [] },
      },
      ass: ["pop", "new", "sell"],
      axx: ["流行", "新款", "精选"],
      list: [],
      loading: false,
      finished: false,
      zz: null,
      count: 0,
    };
  },
  created() {
    this.$nextTick(function () {});
  },
  mounted() {
    this.amm();
    this.all();
  },
  methods: {
    all() {
      this.axios(
        "http://152.136.185.210:7878/api/hy66/home/data?type=pop&page=1"
      ).then((res) => {
        this.message.pop.list = res.data.data.list;
      });
      this.axios(
        "http://152.136.185.210:7878/api/hy66/home/data?type=new&page=1"
      ).then((res) => {
        this.message.new.list = res.data.data.list;
      });
      this.axios(
        "http://152.136.185.210:7878/api/hy66/home/data?type=sell&page=1"
      ).then((res) => {
        this.message.sell.list = res.data.data.list;
        this.zz = res.data.data.list;
      });
    },
    amm() {
      let wy = null;
      let xy = null;
      let that = this;
      let stop = null;
      let sheight = null;
      document.addEventListener("scroll", () => {
        stop = document.documentElement.scrollTop;
        sheight = document.documentElement.scrollHeight - 844;
      });
      window.addEventListener("touchstart", function (e) {
        wy = e.changedTouches[0].clientY;
      });
      window.addEventListener("touchmove", function (e) {
        xy = wy - e.changedTouches[0].clientY;
      });
      window.addEventListener("touchend", function () {
        if (xy > 50 && stop == sheight) {
          // that.message[that.ass[that.count]].page+=1;
          that
            .axios(
              "http://152.136.185.210:7878/api/hy66/home/data?" +
                `type=${that.ass[that.count]}&page=${that.message[
                  that.ass[that.count]
                ].page++}`
            )
            .then((res) => {
              that.message[that.ass[that.count]].list.push(
                ...res.data.data.list
              );
            });
        }
      });
    },
    axxx(e) {
      this.count = e;
      if (e == undefined) {
        this.count = 0;
      } else {
        this.count = e;
      }
    },
  },
};
</script>
<style scoped lang='scss'>
li {
  overflow: hidden;
  border-radius: 20px;
  margin-top: 20px;

  a {
    display: inline-block;
    color: black;
    img {
      width: 190px;
      border-radius: 20px;
    }
    p {
      font-size: 14px;
      font-weight: 600;
      text-align: center;
      width: 190px;
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
    }
    h6 {
      text-align: center;
    }
  }
}
.van-tab__pane {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
.infinite-list {
  margin-bottom: 200px;
}
h1 {
  margin-top: 50px;
}
</style>