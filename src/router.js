import Vue from "vue";
import Router from "vue-router";
import Login from "./views/Login.vue";
import Account from "./views/Account.vue";
import CardSettings from "./components/account/CardSettings.vue";
import AppSettings from "./components/account/AppSettings.vue";
import SecuritySettings from "./components/account/SecuritySettings.vue";
import Transactions from "./views/Transactions.vue";
import Spaces from "./views/Spaces.vue";
import Transfer from "./views/Transfer.vue";
import Signup from "./views/Signup.vue";
import ForgotPass from "./views/ForgotPass.vue";
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
      path: "/forgot-password",
      name: "Forgot password",
      component: ForgotPass
    },
    {
      path: "/transfer",
      name: "transfer",
      component: Transfer,
      beforeEnter: auth.requireAuth
    },
    {
      path: "/account",
      name: "account",
      component: Account,
      beforeEnter: auth.requireAuth
    },
    {
      path: "/account/app-settings",
      name: "AppSettings",
      component: AppSettings,
      beforeEnter: auth.requireAuth
    },
    {
      path: "/account/card-settings",
      name: "CardSettings",
      component: CardSettings,
      beforeEnter: auth.requireAuth
    },
    {
      path: "/account/security-settings",
      name: "SecuritySettings",
      component: SecuritySettings,
      beforeEnter: auth.requireAuth
    },
    {
      path: "/transactions",
      name: "transactions",
      component: Transactions,
      beforeEnter: auth.requireAuth
    },
    {
      path: "/spaces",
      name: "Spaces",
      component: Spaces,
      beforeEnter: auth.requireAuth
    },
    {
      path: "/signup",
      name: "signup",
      component: Signup
    }
  ]
});
