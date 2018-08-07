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
        <div class="password-changer box-shadow ">
          <form @submit.prevent>
            <label for="current">Current password</label>
            <input :type="passwordTypeold" v-model="passwordModelold" name="current">
            <div class="show-box">
              <button @click="showPasswordold" ><i class="far fa-eye"></i> show</button>
            </div>
            <label for="new">new password</label>
            <input :type="passwordType" v-model="password"  name="new">
            <div class="show-box">
              <button @click="showPassword"> <i class="far fa-eye"></i> show</button>
            </div>
            <label for="strength">Strength<span v-if="!isInitial">:</span><span v-bind:class="{initial: isInitial, short : isShort, fair : isFair, excellent : isExcellent }"> {{passwordStregnth}}</span> </label>
            <div class="rg-bar">
              <div v-bind:class="{ highlight: true, initial: isInitial,  bgShort : isShort, bgFair : isFair, bgExcellent : isExcellent }"></div>
            </div>
            <p class="support-text">Password should be long enough, unique to you, and difficult for others to guess.</p>
            <button v-bind:class= "{disabled: !isValid, btnSubmit: true}" type="submit">Set new password</button>
          </form>
        </div>
      </div>
    </div> 
  </div>
</template>

<script>
import _ from "lodash";
export default {
  name: "SecuritySettings",
  data() {
    return {
      password: "",
      passwordType: "password",
      passwordModelold: "",
      passwordTypeold: "password"
    };
  },
  computed: {
    isInitial() {
      return this.password.length === 0;
    },
    isShort() {
      return this.password.length > 0 && this.password.length < 6;
    },
    isFair() {
      return this.password.length >= 6 && this.password.length < 10;
    },
    isExcellent() {
      return this.password.length >= 10;
    },
    isValid() {
      return this.isFair || this.isExcellent;
    },
    passwordStregnth() {
      let msg = "";
      msg = this.isShort ? "Too short" : msg;
      msg = this.isFair ? "Fair" : msg;
      msg = this.isExcellent ? "Excellent" : msg;
      return msg;
    }
  },
  methods: {
    showPassword() {
      this.passwordType =
        this.passwordType === "password" ? "text" : "password";
    },
    showPasswordold() {
      this.passwordTypeold =
        this.passwordTypeold === "password" ? "text" : "password";
    }
  }
};
</script>

<style src="@/scss/account.scss" lang="scss" scoped>
</style>
