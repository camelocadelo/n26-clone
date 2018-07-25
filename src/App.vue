<template>
  <div id="app">
    <div id="nav">
      <t-nav></t-nav>
    </div>
    <router-view/>
  </div>
</template>
<script>
import TNav from "./components/TransactionsNav.vue";
export default {
  name: "Transactions",
  components: {
    TNav
  }
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Open+Sans");

#nav {
  padding: 30px;
  text-align: center;
  z-index: 2;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #3bd0d6;
    }
  }
}
</style>
