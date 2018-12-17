<template>
  <div class="login">
    <login-form></login-form>
    <login-footer></login-footer>
  </div>
</template>

<script>
import LoginForm from "@/components/login/LoginForm.vue";
import LoginFooter from "@/components/login/LoginFooter.vue";

export default {
  name: "login",
  components: {
    LoginForm,
    LoginFooter
  }
};
</script>

<style src="@/scss/login.scss" lang="scss">
</style>
