<!--
 * @Author: Lakeiedward
 * @Date: 2022-02-11 05:08:28
 * @LastEditTime: 2022-02-12 22:02:39
 * @FilePath: \demo\src\components\Slideshow\Parameter.vue
-->
<template>
  <div>
    <div class="parameter">
      <table border="0" width="100%" cellspacing="30">
        <tr v-for="(item, index) in hn.ui.rule.tables[0]" :key="index">
          <td v-for="(items, index) in item" :key="index">{{ items }}</td>
        </tr>
      </table>
      <ul>
        <li v-for="(item, index) in hn.ui.info.set" :key="index">
          <span>{{ item.key }}</span>
          <span>{{ item.value }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  props: ["hn"],
  data() {
    return {};
  },
  watch: {},
  created() {},
  mounted() {},
  methods: {},
};
</script>
<style scoped lang='scss'>
.parameter {
  ul {
    li {
      padding-left: 30px;
      & span:nth-child(1) {
        display: inline-block;
        overflow: hidden;
        white-space: nowrap;
        margin-right: 20px;
        height: 50px;
      }
      & span:nth-child(2) {
        height: 50px;
        width: 252px;
        display: inline-block;
        overflow: hidden;
        white-space: wrap;
        margin-left: 20px;
        color: red;
      }
    }
  }
}
</style>