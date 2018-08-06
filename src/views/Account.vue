
<template>
  <div class="account">
    <account-info></account-info>
    <account-setting></account-setting>
  </div>
</template>
<script>
import AccountInfo from "../components/account/AccountInfo.vue";
import AccountSetting from "../components/account/AccountSetting.vue";
export default {
  name: "account",
  components: {
    AccountInfo,
    AccountSetting
  }
};
</script>
<style src="../scss/account.scss"  lang="scss" >
</style>
