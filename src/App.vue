<template>
  <div id="app">
      <navbar v-if="isAuthenticated"></navbar>
    <router-view/>
  </div>
</template>
<script>
import Navbar from "./components/Navbar.vue";
import auth from "@/lib/login/";
import { mapGetters, mapActions } from "vuex";
export default {
  name: "N26",
  components: {
    Navbar
  },
  computed: {
    ...mapGetters({
      isAuthenticated: "authenticated"
    })
  },
  methods: {
    ...mapActions({
      setAuthentication: "setAuthentication"
    })
  },
  mounted() {
    if (auth.checkUser()) {
      this.setAuthentication(true);
      this.$router.replace(this.$route.query.redirect || "/transactions");
    }
  }
};
</script>
<style src="./scss/style.scss" lang="scss" >
</style>
