<!--
 * @Author: Lakeiedward
 * @Date: 2022-02-08 17:34:33
 * @LastEditTime: 2022-02-13 00:01:48
 * @FilePath: \demo\src\App.vue
-->
<template>
  <div id="app">
    <navigation-bar></navigation-bar>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <base-top v-show="this.$store.state.show"></base-top>
  </div>
</template>
<script>
import BaseTop from "./views/BaseTop.vue";
import NavigationBar from "./views/NavigationBar.vue";
export default {
  components: { BaseTop, NavigationBar },
  mounted() {
    this.add();
  },
  created() {
    // this.$nextTick(function () {
    //   document.body.scrollTop = 9000;
    // });
  },
  methods: {
    add() {},
  },
};
</script>
<style lang="scss">
@import "./assets/scss/OverallSituation.scss";
</style>
