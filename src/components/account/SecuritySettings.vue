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
            <input :type="passwordType" v-model="passwordModel"  name="new">
            <div class="show-box">
              <button @click="showPassword"> <i class="far fa-eye"></i> show</button>
            </div>
            <label for="strength">Strength</label>
            <div class="rg-bar">
              <div class="highlight"></div>
            </div>
            <p class="support-text">Password should be long enough, unique to you, and difficult for others to guess.</p>
            <button class="btn-submit" type="submit">Set new password</button>
          </form>
        </div>
      </div>
    </div> 
  </div>
</template>

<script>
export default {
  name: "CardSettings",
  data() {
    return {
    passwordModel:'',
    passwordType:'password',
    passwordModelold:'',
    passwordTypeold:'password',
    }
  },
  methods: {
    showPassword () {
      this.passwordType = this.passwordType === 'password' ? 'text' : 'password';
    },
    showPasswordold () {
      this.passwordTypeold = this.passwordTypeold === 'password' ? 'text' : 'password';
    },
    checkPassword () {
      
    }
  }
};
</script>

<style lang="scss" scoped>
.security-settings {
  font-family: "Open Sans", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: #fbfbfb;
  height: 100%;
  border: 1px solid deeppink;
  .password-changer {
    background-color: white;
    width: 60%;
    label,
    input,
    button {
      display: block;
    }
    form {
      width: 90%;
      margin: 15px auto;
      padding: 15px;
      .btn-submit {
        height: 30px;
        border: none;
        background: deepskyblue;
        color: white;
        font-family: "Open Sans", sans-serif;
        padding: 5px 30px;
        box-sizing: content-box;
        border-radius: 5px;
        font-size: 1em;
        cursor: pointer;
      }
      input {
        border: none;
        width: 100%;
        border-bottom: 2px solid lightgrey;
        margin: 20px auto 8px;
        position: relative;
        padding-bottom: 10px;
        box-sizing: border-box;
        transition: 0.3s;
        &:focus {
          outline: none;
          border-bottom: 2px solid deepskyblue;
        }
      }
      label {
        margin: 0px;
        font-size: 0.8em;
        font-weight: bold;
      }
      .show-box {
        align-self: flex-end;
        height: 30px;
        button {
          float: right;
          background: none;
          border: none;
          cursor: pointer;
          &:focus {
            outline: none;
          }
        }
      }
      .rg-bar {
        background-color:  lightgray;
        width: 75%;
        margin-top: 10px;
        height: 8px;
        border-radius: 2px;
        .highlight {
          width: 75%;
          background: deepskyblue;
          height: 100%;
        }
      }
    }
  }
}
</style>
