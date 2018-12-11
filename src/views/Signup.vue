<template>
  <div class="signup">
    <signup-form></signup-form>
    <signup-sidebar></signup-sidebar>
  </div>
</template>

<script>
import SignupForm from "@/components/signup/SignupForm.vue";
import SignupSidebar from "@/components/signup/SignupSidebar.vue";

export default {
  name: "signup",
  components: {
    SignupForm,
    SignupSidebar
  }
};
</script>

<style src="../scss/signup.scss" lang="scss" >
</style>
