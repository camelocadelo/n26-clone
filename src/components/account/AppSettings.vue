<template>
  <div class="app-settings">
    <div class="app-settings__info">
      <div class="intro">
        <h1>App Settings</h1>
        <router-link to="/account">
          <i class="fas fa-angle-left"></i>
          back to my account
        </router-link>
      </div>
    </div>
      <div class="app-settings__language">
        <h4>Change language</h4>
        <ul class="box-shadow">
          <li> <span><img src="@/assets/svg/de.svg"></span><div class="name">Deutsch </div> <i class="far fa-check-circle"></i></li>
          <li> <span><img src="@/assets/svg/en.svg"></span><div class="name">English</div>  <i class=" current fas fa-check-circle"></i></li>
          <li> <span><img src="@/assets/svg/fr.svg"></span><div class="name">Français</div>   <i class="far fa-check-circle"></i></li>
          <li> <span><img src="@/assets/svg/es.svg"></span><div class="name">Español</div>  <i class=" far fa-check-circle"></i></li>
          <li> <span><img src="@/assets/svg/it.svg"></span><div class="name">Italiano</div>  <i class=" far fa-check-circle"></i></li>
        </ul>
      </div>
      <div class="app-settings__usage">
        <h4>Appearance</h4>
        <ul class="box-shadow">
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
</template>

<script>
export default {
  name: "AppSettings"
};
</script>
<style src="@/scss/style.scss" lang="scss" >
</style>
