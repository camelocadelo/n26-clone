
<template>
  <div class="transfer">
    <TransferInfo></TransferInfo>
    <TransferMain></TransferMain>
  </div>
</template>
<script>
import TransferInfo from "../components/transfer/TransferInfo.vue";
import TransferMain from "../components/transfer/TransferMain.vue";
export default {
  name: "Transfer",
  components: {
    TransferInfo,
    TransferMain
  }
};
</script>
<style src="../scss/transfer.scss"  lang="scss" >
</style>
