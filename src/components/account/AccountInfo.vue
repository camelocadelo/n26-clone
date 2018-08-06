<template>
  <div class="account__info">
    <div class="account__info__details">
      <h1>My Account</h1>
    </div>
    <div class="account__info__first">
      <h4>Membership</h4>      
    </div>
    <div class="account__info__second">              
      <div class="account__info__membership">
        <h2>Frank Bale</h2>
       <strong>IBAN:</strong><br>
        DE03 2332 2332 2323 2332 23 <br>
        <strong>BIC:</strong><br> NTSBDEB1XXX
        <span>Business</span>
      </div>
      <div class="account__info__type">
        <h3>Account Type: N26 Business</h3>
        <div class="account__info__type--text">
          Germany<br>
          <span> 2/5 ATM withdrawals remaining</span>
        </div>
        <div class="account__info__type--text">  
          Eurozone<br>
          <span> Unlimited ATM withdrawals</span>
        </div>
        <div class="account__info__type--text">
          Worldwide<br>
          <span>1.7% markup for all withdrawals</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AccountInfo"
};
</script>
