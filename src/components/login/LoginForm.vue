<template>
  <div class="login__form">
    <svg
      class="n26_logo"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      x="0px"
      y="0px"
      viewBox="0 0 375.2 197"
      style="enable-background:new 0 0 375.2 197"
      xml:space="preserve">
      <title>N26 logo</title>
      <polygon
        points="16.1,61.5 87.7,167.2 100.9,167.2 100.9,29.4 84.9,29.4 84.9,134.2 15.6,32 13.8,29.4 6.4,29.4 6.2,29.3 6.2,29.4 0.2,29.4 0.2,167.2 16.1,167.2     "
      ></polygon>
      <path
        d="M205.7,112.1c24.2-14.6,33.7-27.3,33.7-45c0-24.4-16.4-40.1-41.8-40.1c-23,0-38,15.1-44.4,29.2l-2.4,5.4l14.4,6.6l2.5-5.3 c3.5-7.5,12.1-20.1,29.9-20.1c16.1,0,25.7,9.1,25.7,24.4c0,9.8-4.3,18.5-25.4,31.5c-37.8,23.2-46.1,33.5-47.1,58.3 c0,0.8-0.2,3.7-0.2,4.5v5.9H239h0v-15.9h-71.8C168.6,138.6,174.2,131.3,205.7,112.1z"
      ></path>
      <path
        d="M329.3,77.6c-13.6,0-25.2,6.5-32.8,12.2c2.5-29.7,15.6-47.1,35.9-47.1c9.5,0,16.1,2.6,24.2,9.6l4.5,3.9l10.4-12.3l-4.6-3.8 c-11-9.2-21.4-13.1-34.6-13.1c-32.2,0-52.2,28.2-52.2,73.6c0,51,25.3,69.2,49,69.2c30.3,0,46.1-23.9,46.1-47.5 C375.2,89.3,350.4,77.6,329.3,77.6z M359.1,122.3c0,15.8-10.3,31.7-30,31.7c-13.4,0-29.8-11.4-32.7-43.3c5.8-7,18.3-17.4,32.9-17.4 C356.2,93.3,359.1,113.6,359.1,122.3z"
      ></path>
      <rect y="185.1" width="101" height="11.8"></rect>
      <rect x="0.4" y="0" width="100.7" height="11.8"></rect>
    </svg>
    <h1>The mobile Bank</h1>
    <form @submit.prevent="login">
      <div class="error" v-if="error">
        <i class="fas fa-times"></i>
        <span>The login details you’ve entered are incorrect.</span>
      </div>
      <div class="error" v-if="redirected">
        <i class="fas fa-times"></i>
        <span>Please login first</span>
      </div>

      <input
        v-bind:class="{ redBorder: error }"
        v-model="email"
        type="text"
        placeholder="Email"
        class="email"
      >
      <input
        v-bind:class="{ redBorderBtm: error }"
        v-model="password"
        type="password"
        placeholder="Password"
        class="password"
      >
      <router-link to="/Forgot-password">Forgot your password ?</router-link>

      <button class="btn_login" :class="{loading: isLoading}">
        <span class="spinner" v-if="isLoading">
          <img src="@/assets/img/spinner.gif" alt>
        </span>
        <span>Login</span>
      </button>
      <router-link class="btn_signup" :class="{loading: isLoading}" to="/signup">Create an account</router-link>
    </form>
  </div>
</template>

<script>
import auth from "@/lib/login/";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "LoginForm",
  data() {
    return {
      email: "",
      password: "",
      error: false,
      isLoading: false,
      redBorder: false,
      redirected: this.$route.query.redirect
    };
  },
  computed: {
    ...mapGetters({
      isAuthenticated: "authenticated"
    })
  },
  methods: {
    login() {
      this.isLoading = true;
      setTimeout(() => {
        if (this.email === "demo" && this.password === "demo") {
          this.setAuthentication(true);
          auth.isLoggedIn(true);
          this.$router.replace(this.$route.query.redirect || "/transactions");
          this.isLoading = false;
        } else {
          this.error = true;
          this.redBorder = true;
          this.isLoading = false;
          this.redirected = false;
        }
      }, 2000);
    },
    ...mapActions({
      setAuthentication: "setAuthentication"
    })
  }
};
</script>
