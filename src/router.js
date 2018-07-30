import Vue from "vue";
import Router from "vue-router";
import Login from "./views/Login.vue";
import Account from "./views/Account.vue";
import Transactions from "./views/Transactions.vue";
import Signup from "./views/Signup.vue";
import auth from "@/lib/login/";

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
      component: Account,
      beforeEnter: auth.requireAuth
    },
    {
      path: "/transactions",
      name: "transactions",
      component: Transactions,
      beforeEnter: auth.requireAuth
    },
    {
      path: "/signup",
      name: "signup",
      component: Signup
    }
  ]
});
