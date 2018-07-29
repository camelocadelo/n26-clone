
<template>
  <div class="account-big">
    <account-info></account-info>
    <account-setting></account-setting>
  </div>
</template>
<script>
import AccountInfo from "../components/AccountInfo.vue";
import AccountSetting from "../components/AccountSetting.vue";
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
