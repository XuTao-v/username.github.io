<!--
 * @Author: Lakeiedward
 * @Date: 2022-02-08 18:57:51
 * @LastEditTime: 2022-02-11 04:01:31
 * @FilePath: \demo\src\views\BaseTops.vue
-->
<template>
  <div class="basetops">
    <div>
      <ul class="zzz">
        <li v-for="(item, index) in message" :key="index" @click="add(index)">
          <div v-if="index == num">
            <img :src="item.imgs" alt="" />
            <p class="color">{{ item.text }}</p>
          </div>
          <div v-else>
            <img :src="item.img" alt="" />
            <p>{{ item.text }}</p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  props: {},
  data() {
    return {
      message: [
        {
          text: "首页",
          img: require("../img/Icon/204首页0.png"),
          imgs: require("../img/Icon/204首页1.png"),
        },
        {
          text: "分类",
          img: require("../img/Icon/分类0.png"),
          imgs: require("../img/Icon/分类1.png"),
        },
        {
          text: "购物车",
          img: require("../img/Icon/购物车满0.png"),
          imgs: require("../img/Icon/购物车满1.png"),
        },
        {
          text: "我的",
          img: require("../img/Icon/我的-我的粉丝0.png"),
          imgs: require("../img/Icon/我的-我的粉丝1.png"),
        },
      ],
      paths: ["/HomePage", "/BaseClassify", "/ShoppingTrolley", "/My"],
      num: 0,
    };
  },

  methods: {
    add(index) {
      this.$router
        .push({
          path: this.paths[index],
        })
        .catch((err) => err);
      this.num = index;
      this.$root.$emit("add", this.message[index].text);
    },
  },
};
</script>
<style scoped lang='scss'>
.basetops {
  position: fixed;
  bottom: 0;
  width: 100%;
}
.basetops ul {
  display: flex;
  justify-content: space-around;
  background-color: rgb(251, 255, 0);
  li {
    text-align: center;
  }
}
.basetops ul li img {
  width: 14vw;
  height: 14vw;
}
.color {
  color: deepskyblue;
}
</style>