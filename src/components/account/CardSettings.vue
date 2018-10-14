<template>
  <div class="card-settings">
    <div class="box">
      <div class="intro">
        <h1>Cards Settings</h1>
        <router-link to="/account">
          <i class="fas fa-angle-left"></i>
          back to my account
        </router-link>
      </div>
      <h4>Cards</h4>
      <div class="info">
        <div class="photo">
          <img src="@/assets/img/card.jpg">
        </div>
        <div class="gear">
          <h4>Frank’s Business card </h4>
          <div class="gear__item">
            <i class="fas fa-lock"></i>
            <div class="gear__item--title">
              <span>Lock card</span>
              <p>Lock your card within seconds</p>
            </div>
          </div>
          <div class="gear__item"> 
            <i class="far fa-envelope"></i>
            <div class="gear__item--title">
              <span> Reorder card</span>
              <p> Stolen, Lost, or broken card?</p>
            </div>
          </div>
          <div class="gear__item"> 
            <i class="fas fa-undo"></i>
            <div class="gear__item--title">
              <span> Reset PIN</span>
              <p> Change your card PIN</p>
            </div> 
          </div>
        </div>
      </div>
      <div class="bottom-shelf-title">
        <h4 >Cards</h4>
        <h4 >Card Limits</h4>
      </div>

      <div class="bottom-shelf">
        <div class="usage">
          <ul class="box-shadow">
            <li>
              <div class="usage__text">
                <span>ATM Withdrawals</span>
                <p>Allow cash Withdrawals from ATMs </p>
              </div>
              <label class="switch">
                <input type="checkbox" checked>
                <span class="slider"></span>
              </label>
            </li>
            <li>
              <div class="usage__text">
                <span>Online payments</span>
                <p>Allow payments online? </p>
              </div>
              <label class="switch">
                <input type="checkbox" checked>
                <span class="slider"></span>
              </label>
            </li>
            <li>
              <div class="usage__text">
                <span>Payments abroad</span>
                <p>Allow payments in other countries? </p>
              </div>
              <label class="switch">
                <input type="checkbox" checked>
                <span class="slider"></span>
              </label>
            </li>
          </ul>
        </div>
        <div class="limits">
           <ul class="box-shadow">
            <li>
              <div class="text">
                <span>Daily Widthdrawal Limit</span> <span class="amount">€{{range1Value}}</span>
                <p>Monthly fixed Limit: €20,000.00</p>
              </div>
              <div class="slidecontainer">
                <input type="range" min="50" max="2500" step="50" v-model="range1Value" value="1000" class="slider">
              </div>
            </li>
            <li>
              <div class="text">
                <span>Daily Payments Limit</span> <span class="amount">€1000</span>
                <p>Monthly fixed Limit: €20,000.00</p>
              </div>
              <div class="slidecontainer">
                <input type="range" min="50" max="5000" step="50" value="1000" class="slider">
              </div>
            </li>
          </ul>
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
      range1Value: 1000
    };
  }
};
</script>

<style lang="scss" scoped>
</style>
