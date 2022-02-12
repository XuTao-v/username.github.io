<!--
 * @Author: Lakeiedward
 * @Date: 2022-02-08 17:54:49
 * @LastEditTime: 2022-02-08 19:29:23
 * @FilePath: \demo\src\views\BaseTop.vue
-->
<template>
  <div class="basetop">
    <div class="basetops">
      <base-tops></base-tops>
    </div>
  </div>
</template>
<script>
import BaseTops from "./BaseTops.vue";

export default {
  components: { BaseTops },
  props: {},
  data() {
    return {};
  },
};
</script>
<style scoped lang='scss'>
</style>