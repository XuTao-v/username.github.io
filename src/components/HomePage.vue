<!--
 * @Author: Lakeiedward
 * @Date: 2022-02-08 17:50:06
 * @LastEditTime: 2022-02-13 00:02:54
 * @FilePath: \demo\src\components\HomePage.vue
-->
<template>
  <div>
    <slideshow></slideshow>
    <classify></classify>
    <seckill></seckill>
    <Pulldown></Pulldown>
  </div>
</template>
<script>
import Seckill from "./Seckill.vue";
import Classify from "./Slideshow/Classify.vue";
import Pulldown from "./Slideshow/Pulldown.vue";
import Slideshow from "./Slideshow/Slideshow.vue";
export default {
  components: {
    Slideshow,
    Classify,
    Seckill,
    Pulldown,
  },
  created() {},
  mounted() {},
  deactivated() {
    // this.$store.state.kl = false;
  },
  activated() {},
};
</script>
<style scoped lang='scss'>
.wrapper {
  height: 1000px;
}
</style>