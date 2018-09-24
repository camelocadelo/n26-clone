<template>
  <div class="security-settings">
    <div class="box">
      <div class="intro">
        <h1>Security Settings</h1>
        <router-link to="/account">
          <i class="fas fa-angle-left"></i>
          back to my account
        </router-link>
      </div>
      <div class="language">
        <h4>Change password</h4>
        <PasswordValidator></PasswordValidator>
      </div>
    </div> 
  </div>
</template>

<script>
import PasswordValidator from "./PasswordValidator.vue";
export default {
  name: "SecuritySettings",
  components: {
    PasswordValidator
  }
};
</script>

<style src="@/scss/account.scss" lang="scss" scoped>
</style>
