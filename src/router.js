import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import About from "./views/About.vue";
import Transactions from "./views/Transactions.vue";
// import auth from "@/lib/login/";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
      // beforeEnter: auth.requireAuth
    },
    {
      path: "/about",
      name: "about",
      component: About
    },
    {
      path: "/transactions",
      name: "transactions",
      component: Transactions
    }
  ]
});
