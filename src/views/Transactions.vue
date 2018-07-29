<template>
  <div class="transactions-big">
    <t-nav></t-nav>
    <transactions-list> </transactions-list>
  </div>
</template>
<script>
import TransactionsList from "../components/TransactionsList.vue";
export default {
  name: "Transactions",
  components: {
    TransactionsList
  }
};
</script>
<style src="../scss/transactions.scss" lang="scss" >
</style>
