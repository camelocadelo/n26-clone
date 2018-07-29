<template>
  <div id="app">
    <div id="nav">
      <navbar></navbar>
    </div>
    <router-view/>
  </div>
</template>
<script>
import Navbar from "./components/Navbar.vue";
export default {
  name: "Transactions",
  components: {
    Navbar
  }
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Open+Sans");
body {
  background-color: #FBFBFB;
  }
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
