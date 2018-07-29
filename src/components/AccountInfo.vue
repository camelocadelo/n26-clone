<template>
  <div class="accountInfo">
    <div class="accountInfo__details">
      <h1>My Account</h1>
    </div>
    <div class="accountInfo__first">
      <h4>Membership</h4>      
    </div>
    <div class="accountInfo__second">              
      <div class="accountInfo__membership">
        <h2>Mohammed Hamzaoui</h2>
       <strong>IBAN:</strong><br>
        DE02 1001 1001 2623 5542 19 <br>
        <strong>BIC:</strong><br> NTSBDEB1XXX
        <span>Business</span>
      </div>
      <div class="accountInfo__type">
        <h3>Account Type: N26 Business</h3>
        <div class="accountInfo__type--text">
          Germany<br>
          <span> 2/5 ATM withdrawals remaining</span>
        </div>
        <div class="accountInfo__type--text">  
          Eurozone<br>
          <span> Unlimited ATM withdrawals</span>
        </div>
        <div class="accountInfo__type--text">
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
