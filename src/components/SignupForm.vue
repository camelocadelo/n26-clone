<template>
  <div class="signup__form">
    <form @submit.prevent>
      <h1> Getting started with N26 </h1>
      <p> Create an account with N26 to enjoy the future of banking. Get your bank account in under 8 minutes</p>
      <label for="email">Your email address:</label>
      <input name="email" type="email">
      <label for="password">Password:</label>
      <input name="password" type="password">
      <label for="phone">Your phone number:</label>
      <input name="phone" type="phone">
      <button>Sign up</button>
      <p>By clicking on signup you agree to our <strong> Terms of Service and Privacy Policy. </strong> </p>
    </form>
  </div>
</template>

<script>
export default {
  name: "SignupForm"
};
</script>
