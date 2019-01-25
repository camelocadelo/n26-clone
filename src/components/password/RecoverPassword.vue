<template>
  <div class="password-recovery">
    <div class="password-recovery__header">
      <div class="password-recovery__header__logo">
        <router-link to="/">
          <svg
            class="n26_logo"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            viewBox="0 0 375.2 197"
            style="enable-background:new 0 0 375.2 197"
            xml:space="preserve"
          >
            <title>N26 logo</title>
            <polygon
              points="16.1,61.5 87.7,167.2 100.9,167.2 100.9,29.4 84.9,29.4 84.9,134.2 15.6,32 13.8,29.4 6.4,29.4 6.2,29.3 6.2,29.4 0.2,29.4 0.2,167.2 16.1,167.2     "
            ></polygon>
            <path
              d="M205.7,112.1c24.2-14.6,33.7-27.3,33.7-45c0-24.4-16.4-40.1-41.8-40.1c-23,0-38,15.1-44.4,29.2l-2.4,5.4l14.4,6.6l2.5-5.3 c3.5-7.5,12.1-20.1,29.9-20.1c16.1,0,25.7,9.1,25.7,24.4c0,9.8-4.3,18.5-25.4,31.5c-37.8,23.2-46.1,33.5-47.1,58.3 c0,0.8-0.2,3.7-0.2,4.5v5.9H239h0v-15.9h-71.8C168.6,138.6,174.2,131.3,205.7,112.1z"
            ></path>
            <path
              d="M329.3,77.6c-13.6,0-25.2,6.5-32.8,12.2c2.5-29.7,15.6-47.1,35.9-47.1c9.5,0,16.1,2.6,24.2,9.6l4.5,3.9l10.4-12.3l-4.6-3.8 c-11-9.2-21.4-13.1-34.6-13.1c-32.2,0-52.2,28.2-52.2,73.6c0,51,25.3,69.2,49,69.2c30.3,0,46.1-23.9,46.1-47.5 C375.2,89.3,350.4,77.6,329.3,77.6z M359.1,122.3c0,15.8-10.3,31.7-30,31.7c-13.4,0-29.8-11.4-32.7-43.3c5.8-7,18.3-17.4,32.9-17.4 C356.2,93.3,359.1,113.6,359.1,122.3z"
            ></path>
            <rect y="185.1" width="101" height="11.8"></rect>
            <rect x="0.4" y="0" width="100.7" height="11.8"></rect>
          </svg>
      </router-link>
      </div>
      <div class="password-recovery__header__language">EN | DE</div>
    </div>
    <section class="password-recovery__form">
      <svg
        class="n26_logo"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        x="0px"
        y="0px"
        viewBox="0 0 375.2 197"
        style="enable-background:new 0 0 375.2 197"
        xml:space="preserve"
      >
        <title>N26 logo</title>
        <polygon
          points="16.1,61.5 87.7,167.2 100.9,167.2 100.9,29.4 84.9,29.4 84.9,134.2 15.6,32 13.8,29.4 6.4,29.4 6.2,29.3 6.2,29.4 0.2,29.4 0.2,167.2 16.1,167.2     "
        ></polygon>
        <path
          d="M205.7,112.1c24.2-14.6,33.7-27.3,33.7-45c0-24.4-16.4-40.1-41.8-40.1c-23,0-38,15.1-44.4,29.2l-2.4,5.4l14.4,6.6l2.5-5.3 c3.5-7.5,12.1-20.1,29.9-20.1c16.1,0,25.7,9.1,25.7,24.4c0,9.8-4.3,18.5-25.4,31.5c-37.8,23.2-46.1,33.5-47.1,58.3 c0,0.8-0.2,3.7-0.2,4.5v5.9H239h0v-15.9h-71.8C168.6,138.6,174.2,131.3,205.7,112.1z"
        ></path>
        <path
          d="M329.3,77.6c-13.6,0-25.2,6.5-32.8,12.2c2.5-29.7,15.6-47.1,35.9-47.1c9.5,0,16.1,2.6,24.2,9.6l4.5,3.9l10.4-12.3l-4.6-3.8 c-11-9.2-21.4-13.1-34.6-13.1c-32.2,0-52.2,28.2-52.2,73.6c0,51,25.3,69.2,49,69.2c30.3,0,46.1-23.9,46.1-47.5 C375.2,89.3,350.4,77.6,329.3,77.6z M359.1,122.3c0,15.8-10.3,31.7-30,31.7c-13.4,0-29.8-11.4-32.7-43.3c5.8-7,18.3-17.4,32.9-17.4 C356.2,93.3,359.1,113.6,359.1,122.3z"
        ></path>
        <rect y="185.1" width="101" height="11.8"></rect>
        <rect x="0.4" y="0" width="100.7" height="11.8"></rect>
      </svg>
      <h1>The mobile Bank</h1>
      <p>{{message}}</p>
      <form @submit.prevent>
        <input type="text" placeholder="Email" class="email">
        <button @click="resetPassword" class="btn_login"  :class="{loading: isLoading}">
          <span class="spinner" v-if="isLoading">
            <img src="@/assets/img/spinner.gif" alt>
          </span>
          <span>Reset you password</span>
        </button>
      </form>
    </section>
  </div>
</template>

<script>
export default {
  name: "RecoverPassword",
  data() {
    return {
      message:
        "Please enter your account email for further details on how to reset your password.",
      isLoading: false
    };
  },
  methods: {
    resetPassword() {
      this.isLoading = true;
      setTimeout(() => {
        this.message =
          "Check your emial for further instructions on how to recover your password.";
        this.isLoading = false;
      }, 2000);
    }
  }
};
</script>

<style lang="scss">
@import "@/scss/variables.scss";

.password-recovery {
  box-sizing: border-box;
  background: url("../../assets/img/white.jpg") fixed no-repeat;
  background-size: 100% 100%;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  text-align: center;
  &__header {
    height: 60px;
    width: 100%;
    position: fixed;
    top: 0;
    text-align: left;
    display: flex;
    justify-content: flex-start;
    &__language {
      width: 50%;
      text-align: right;
      padding-right: 20px;
      padding-top: 15px;
    }
    &__logo {
      flex-grow: 1;
      width: 50%;
      padding-left: 20px;
      padding-top: 10px;
      svg {
        float: left;
        fill: black;
      }
    }
  }
  &__form {
    max-width: 368px;
    font-family: "Open Sans", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;

    h1 {
      color: black;
    }
    svg {
      fill: black;
    }
    form {
      input,
      button {
        box-sizing: border-box;
        width: 100%;
        height: 43px;
        border: none;
        font-family: "Open Sans", sans-serif;
        font-size: 90%;
      }
      :focus {
        outline: none;
      }
      .email {
        border-radius: 5px;
        border: 1px solid rgb(246, 246, 246);
        padding-left: 10px;
        margin-bottom: 20px;
      }
      .password {
        border: 1px solid rgb(246, 246, 246);
        border-bottom-left-radius: 5px;
        border-bottom-right-radius: 5px;
        margin-bottom: 30px;
        padding-left: 10px;
      }
      button {
        border-radius: 5px;
        margin: 10px 0;
        font-size: 16px;
        line-height: 1.2;
        font-weight: bold;
        cursor: pointer;
        position: relative;
        z-index: 1;
        overflow: hidden;
        transition: 0.2s ease-in-out;
      }
      button::after {
        content: "";
        position: absolute;
        transition: 0.2s ease-in-out;
        z-index: -1;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        -webkit-transform: translateY(100%);
        transform: translateY(100%);
      }
      button:hover::after {
        -webkit-transform: translateY(0);
        transform: translateY(0);
      }
      .btn_login {
        background-color: $brandcolor;
        color: white;
        display: flex;
        justify-content: center;
        align-items: center;
        .spinner {
          img {
            width: 30px;
            height: 30px;
            position: relative;
            top: 0px;
            left: -10px;
          }
        }
      }
      .loading {
        opacity: 0.6;
      }
      .btn_login:hover {
        color: $brandcolor;
      }
      .btn_login::after {
        background-color: white;
      }
    }
  }
}
</style>
