<!--
 * @Author: Lakeiedward
 * @Date: 2022-02-08 17:54:20
 * @LastEditTime: 2022-02-10 16:52:44
 * @FilePath: \demo\src\views\NavigationBar.vue
-->
<template>
  <div class="nav">
    <div class="navs">
      <slot name="text">{{ message }}</slot>
    </div>
  </div>
</template>
<script>
export default {
  props: {},
  data() {
    return {
      message: "首页",
    };
  },
  watch: {},
  created() {},
  mounted() {
    this.$root.$on("add", (value) => {
      this.message = value;
    });
  },
  methods: {},
};
</script>
<style scoped lang='scss'>
.nav {
  z-index: 20;
  position: fixed;
  width: 100%;
  top: 0;
  height: 20vw;
  background-color: rgb(251, 255, 0);
  .navs {
    text-align: center;
    line-height: 20vw;
    font-size: 5vw;
    font-weight: 700;
  }
}
</style>