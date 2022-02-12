/*
 * @Author: Lakeiedward
 * @Date: 2022-02-08 17:34:34
 * @LastEditTime: 2022-02-12 23:38:44
 * @FilePath: \demo\src\router\index.js
 */
import Vue from "vue";
import VueRouter from "vue-router";
import BaseClassify from "../components/BaseClassify.vue";
import HomePage from "../components/HomePage.vue";
import My from "../components/My.vue";
import ShoppingTrolley from "../components/ShoppingTrolley.vue";
import DetailPage from "../components/Slideshow/DetailPage.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "",
    redirect: "/HomePage",
    meta: {
      keepAlive: true,
    },
  },
  {
    path: "/BaseClassify",
    component: BaseClassify,
    meta: {
      keepAlive: true,
    },
  },
  {
    path: "/HomePage",
    component: HomePage,
    meta: {
      keepAlive: true, // 需要被缓存
    },
  },
  {
    path: "/My",
    component: My,
    meta: {
      keepAlive: true,
    },
  },
  {
    path: "/ShoppingTrolley",
    component: ShoppingTrolley,
    meta: {
      keepAlive: true,
    },
  },
  {
    path: "/DetailPage/:iid",
    component: DetailPage,
    meta: {
      keepAlive: true,
    },
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
