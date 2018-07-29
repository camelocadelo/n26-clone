<template>
  <div class="setting">
    <h4>Settings</h4>
    <div class="ticket setting__card">
      <div class="setting__card__icon">
        <i class="fab fa-cc-mastercard"></i>
      </div>
      <div class="setting__card__text">
        Card Settings
        <p>Manage cards & set limits</p>
      </div>
      <div class="setting__card__arrow">
        <i class="fas fa-angle-right"></i>
      </div>
    </div>
    <div class="ticket setting__personal">
      <div class="setting__card__icon">
        <i class="fas fa-cogs"></i>
      </div>
      <div class="setting__card__text">
         Personal Settings
        <p>Edit personal information</p>
      </div>
      <div class="setting__card__arrow">
        <i class="fas fa-angle-right"></i>
      </div>
    </div>
    <div class="ticket setting__help">
      <div class="setting__card__icon">
        <i class="fas fa-tablet-alt"></i>
      </div>
      <div class="setting__card__text">
         App Settings
        <p>Change language & appearance </p>
      </div>
      <div class="setting__card__arrow">
        <i class="fas fa-angle-right"></i>
      </div>
    </div>
    <div class="ticket setting__app">
      <div class="setting__card__icon">
        <i class="fas fa-user-secret"></i>
      </div>
      <div class="setting__card__text">
         Security Settings
        <p>Change password & transfer PIN</p>
      </div>
      <div class="setting__card__arrow">
        <i class="fas fa-angle-right"></i>
      </div>
    </div>
    <div class="ticket setting__security">
      <div class="setting__card__icon">
        <i class="fas fa-ambulance"></i>
      </div>
      <div class="setting__card__text">
         Help Center
        <p>Get help and send feedback</p>
      </div>
      <div class="setting__card__arrow">
        <i class="fas fa-angle-right"></i>
      </div>
    </div>
  </div>


</template>

<script>
export default {
  name: "Accountsetting"
};
</script>
<style lang="scss" scoped>
.setting {
  font-family: "Open Sans", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  border-radius: 5px;
  width: 850px;
  margin: 10px auto;
  padding: 27px 18px;
  .ticket {
    background-color: white;
    height: 60px;
    padding: 14.4px 18px;
    box-shadow: 0 0.08em 0.25em 0.075em rgba(0, 0, 0, 0.075);
    width: 42%;
    display: inline-block;
    border-radius: 5px;
    margin: 10px 14px 10px 0px;
    border-left: 5px solid white;
    cursor: pointer;
    transition: 0.3s;
  }
  .ticket:hover {
    border-left-color: deepskyblue;
  }
  &__card {
    height: 100%;
    &__icon {
      font-size: 26px;
      display: inline-block;
      text-align: left;
      position: relative;
      top: 0%;
    }
    &__text {
      display: inline-block;
      margin: 0px 14px;
      p {
        margin: 0;
        color: rgba(0, 0, 0, 0.575);
        font-size: 13px;
      }
    }
    &__arrow {
      position: relative;
      color: lightgrey;
      font: 1.3em sans-serif;
      float: right;
      right: 0px;
      top: 20px;
    }
  }
}
</style>
