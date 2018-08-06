<template>
  <div class="app-settings">
    <div class="box">
      <div class="intro">
        <h1>App Settings</h1>
        <router-link to="/account">
          <i class="fas fa-angle-left"></i>
          back to my account
        </router-link>
      </div>
    <div class="content"> 
      <div class="language">
        <h4>Change language</h4>
        <ul>
          <li> <span><img src="@/assets/svg/de.svg"></span><div class="name">Deutsch </div> <i class="far fa-check-circle"></i></li>
          <li> <span><img src="@/assets/svg/en.svg"></span><div class="name">English</div>  <i class=" current fas fa-check-circle"></i></li>
          <li> <span><img src="@/assets/svg/fr.svg"></span><div class="name">Français</div>   <i class="far fa-check-circle"></i></li>
          <li> <span><img src="@/assets/svg/es.svg"></span><div class="name">Español</div>  <i class=" far fa-check-circle"></i></li>
          <li> <span><img src="@/assets/svg/it.svg"></span><div class="name">Italiano</div>  <i class=" far fa-check-circle"></i></li>
        </ul>
      </div>
      <div class="usage">
        <h4>Appearance</h4>
          <ul>
            <li>
              <div class="usage__text">
                <span>Reduced motion</span>
                <p>Toggle all animations across the web-app</p>
              </div>
              <label class="switch">
                <input type="checkbox" checked>
                <span class="slider"></span>
              </label>
            </li>
            <li>
              <div class="usage__text">
                <span>Discreet Mode</span>
                <p>Hides all potentially sensitive data</p>
              </div>
              <label class="switch">
                <input type="checkbox" checked>
                <span class="slider"></span>
              </label>
            </li>
            <li>
              <div class="usage__text">
                <span>Dark mode</span>
                <p>Come to the dark side </p>
              </div>
              <label class="switch">
                <input type="checkbox" checked>
                <span class="slider"></span>
              </label>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  name: "AppSettings"
};
</script>
<style src="@/scss/style.scss" lang="scss" >
</style>
<style lang="scss" >
.app-settings {
  font-family: "Open Sans", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100%;
  background-color: #fbfbfb;
  border: 1px solid transparent;

  .box {
    width: 50%;
    padding: 20px 18px;
    margin: 100px auto;
    height: 100%;
    position: relative;
    bottom: 0px;
    .content {
      display: flex;
    }
    .intro {
      margin-bottom: 80px;
      a {
        &:hover {
          text-decoration: underline;
        }
      }
      h1 {
        font-size: 1.5em;
      }
      a {
        text-decoration: none;
        color: rgba(0, 0, 0, 0.8);
      }
    }
    .language {
      width: 40%;
      ul {
        list-style: none;
        background-color: white;
        margin: 0px;
        padding: 0px;
        box-shadow: 0 0.08em 0.25em 0.075em rgba(0, 0, 0, 0.075);
        border-radius: 8px;
        li {
          padding: 12px 18px;
          border-bottom: 1px solid lightgrey;
          cursor: pointer;
          transition: 0.3s;
          &:last-child {
            border: none;
          }
          &:hover i {
            opacity: 1;
            transition: 0.3s;
          }
          span {
            margin-right: 20px;
            top: 5px;
            position: relative;
          }
          i {
            color: deepskyblue;
            font-size: 1.3em;
            position: relative;
            transition: 0.3s;
            opacity: 0;
          }
          .name {
            width: 80%;
            display: inline-block;
          }
          .current {
            opacity: 1;
          }
        }
      }
    }
    .usage {
      margin-left: 30px;
      width: 40%;
      ul {
        list-style: none;
        background-color: white;
        margin: 0px;
        padding: 0px;
        box-shadow: 0 0.08em 0.25em 0.075em rgba(0, 0, 0, 0.075);
        li {
          background-color: white;
          display: flex;
          height: 50px;
          padding-left: 0px;
          padding: 10px 18px;
          box-sizing: content-box;
          border-bottom: 1px solid lightgray;
          list-style: none;
          &:last-child {
            border: none;
          }
          .switch {
            position: relative;
            width: 40px;
            height: 20px;
            margin: 10px;
            flex-grow: 1;
            input {
              display: none;
              &:checked + .slider {
                background-color: deepskyblue;
              }
              &:focus + .slider {
                box-shadow: 0 0 1px deepskyblue;
              }
              &:checked + .slider:before {
                -webkit-transform: translateX(16px);
                -ms-transform: translateX(26px);
                transform: translateX(20px);
              }
            }
            .slider {
              position: absolute;
              cursor: pointer;
              top: 0;
              left: 0;
              right: 0;
              bottom: 0;
              background-color: #ccc;
              -webkit-transition: 0.4s;
              transition: 0.4s;
              border-radius: 34px;
              &:before {
                position: absolute;
                content: "";
                height: 14px;
                width: 14px;
                left: 3px;
                bottom: 3px;
                background-color: white;
                -webkit-transition: 0.4s;
                transition: 0.4s;
                border-radius: 50%;
              }
            }
          }
          .usage__text {
            flex-grow: 100;
            p {
              color: rgba(0, 0, 0, 0.5);
              font-size: 12px;
            }
          }
        }
      }
    }
  }
}
</style>
