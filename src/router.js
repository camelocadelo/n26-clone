import Vue from "vue";
import Router from "vue-router";
import Login from "./views/Login.vue";
import About from "./views/About.vue";
import Transactions from "./views/Transactions.vue";
// import auth from "@/lib/login/";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "login",
      component: Login
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
