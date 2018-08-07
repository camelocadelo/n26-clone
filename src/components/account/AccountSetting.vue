<template>
  <div class="account__setting">
    <h4>Settings</h4>
    <router-link to="/account/card-settings">    
      <div class="ticket account__setting__card">
        <div class="account__setting__card__icon">
          <i class="fab fa-cc-mastercard"></i>
        </div>
        <div class="account__setting__card__text">
          Card Settings
          <p>Manage cards & set limits</p>
        </div>
        <div class="account__setting__card__arrow">
          <i class="fas fa-angle-right"></i>
        </div>
      </div>
    </router-link>

    <router-link to="/account/app-settings">    
      <div class="ticket account__setting__personal">
        <div class="account__setting__card__icon">
          <i class="fas fa-cogs"></i>
        </div>
        <div class="account__setting__card__text">
          Personal Settings
          <p>Edit personal information</p>
        </div>
        <div class="account__setting__card__arrow">
          <i class="fas fa-angle-right"></i>
        </div>
      </div>
    </router-link>

    <router-link to="/account/app-settings">    
      <div class="ticket account__setting__app">
        <div class="account__setting__card__icon">
          <i class="fas fa-tablet-alt"></i>
        </div>
        <div class="account__setting__card__text">
          App Settings
          <p>Change language & appearance </p>
        </div>
        <div class="account__setting__card__arrow">
          <i class="fas fa-angle-right"></i>
        </div>
      </div>
    </router-link>

    <router-link to="/account/security-settings">    
      <div class="ticket account__setting__security">
        <div class="account__setting__card__icon">
          <i class="fas fa-user-secret"></i>
        </div>
        <div class="account__setting__card__text">
          Security Settings
          <p>Change password & transfer PIN</p>
        </div>
        <div class="account__setting__card__arrow">
          <i class="fas fa-angle-right"></i>
        </div>
      </div>
    </router-link>

    <router-link to="/account/app-settings">    
      <div class="ticket account__setting__help">
        <div class="account__setting__card__icon">
          <i class="fas fa-ambulance"></i>
        </div>
        <div class="account__setting__card__text">
          Help Center
          <p>Get help and send feedback</p>
        </div>
        <div class="account__setting__card__arrow">
          <i class="fas fa-angle-right"></i>
        </div>
      </div>
    </router-link>

  </div>


</template>
<script>
export default {
  name: "Accountsetting"
};
</script>
