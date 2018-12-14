<template>
  <div class="transfer__main box-shadow">
    <div class="transfer__main__spaces">
      <div class="transfer__main__spaces__account">
        <img src="https://cdn.number26.de/spaces/default-images/account_cards.jpg?version=1">
        <div class="transfer__main__spaces__account__info">
          <div>Main Account</div>
          <div class="balance">€1999.51</div>
        </div>
      </div>
      <div class="transfer__main__spaces__account">
        <img src="https://cdn.number26.de/spaces/default-images/invest_calculator.jpg?version=1">
        <div class="transfer__main__spaces__account__info">
          <div>Bills</div>
          <div class="balance">€0.51</div>
        </div>
      </div>
    </div>
    <div  class="transfer__main__amount" :class="{'right-border': isFocused }">
      <label for="balance">€</label>
      <input type="number" @blur="toggelFocus" @focus="toggelFocus" min="0.01" placeholder="0.01" name="balance" step="0.01">
    </div>
    <div class="transfer__main__balance-tip">
      <p>Available in Main Account incl. overdraft: €1,999.51</p>
    </div>
    <div class="transfer__main__confirm">
      <button>Confirm</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "TransferMain",
  data() {
    return {
      isFocused: false
    };
  },
  methods: {
    toggelFocus() {
      this.isFocused = !this.isFocused;
    }
  }
};
</script>
