<template>
  <div class="home">
    <Login></Login>
  </div>
</template>

<script>
import Login from "@/components/Login.vue";

export default {
  name: "login",
  components: {
    Login
  }
};
</script>

<style lang="scss" scoped>
.home {
  background: url("../assets/img/bg4.jpg") fixed no-repeat;
  background-size: 100% 100%;
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0px;
  right: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
