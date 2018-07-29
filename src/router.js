import Vue from "vue";
import Router from "vue-router";
import Login from "./views/Login.vue";
import Account from "./views/Account.vue";
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
      path: "/account",
      name: "account",
      component: Account
    },
    {
      path: "/transactions",
      name: "transactions",
      component: Transactions
    }
  ]
});
