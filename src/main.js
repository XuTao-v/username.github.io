/*
 * @Author: Lakeiedward
 * @Date: 2022-02-08 17:34:33
 * @LastEditTime: 2022-02-09 22:15:26
 * @FilePath: \demo\src\main.js
 */
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ElementUI from "element-ui";
import axios from "axios";
import "element-ui/lib/theme-chalk/index.css";
import Vant from "vant";
import "vant/lib/index.css";
import { PullRefresh } from "vant";
Vue.config.productionTip = false;
Vue.use(ElementUI);
Vue.use(Vant);
Vue.use(PullRefresh);
Vue.prototype.axios = axios;
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
