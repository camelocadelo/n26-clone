<template>
  <nav class="container" v-bind:class="{bg : scrolled}">
    <div class="container__logo">
      <svg class="n26_logo" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 375.2 197" style="enable-background:new 0 0 375.2 197" xml:space="preserve"><title>N26 logo</title><polygon points="16.1,61.5 87.7,167.2 100.9,167.2 100.9,29.4 84.9,29.4 84.9,134.2 15.6,32 13.8,29.4 6.4,29.4 6.2,29.3 6.2,29.4 0.2,29.4 0.2,167.2 16.1,167.2     "></polygon><path d="M205.7,112.1c24.2-14.6,33.7-27.3,33.7-45c0-24.4-16.4-40.1-41.8-40.1c-23,0-38,15.1-44.4,29.2l-2.4,5.4l14.4,6.6l2.5-5.3 c3.5-7.5,12.1-20.1,29.9-20.1c16.1,0,25.7,9.1,25.7,24.4c0,9.8-4.3,18.5-25.4,31.5c-37.8,23.2-46.1,33.5-47.1,58.3 c0,0.8-0.2,3.7-0.2,4.5v5.9H239h0v-15.9h-71.8C168.6,138.6,174.2,131.3,205.7,112.1z"></path><path d="M329.3,77.6c-13.6,0-25.2,6.5-32.8,12.2c2.5-29.7,15.6-47.1,35.9-47.1c9.5,0,16.1,2.6,24.2,9.6l4.5,3.9l10.4-12.3l-4.6-3.8 c-11-9.2-21.4-13.1-34.6-13.1c-32.2,0-52.2,28.2-52.2,73.6c0,51,25.3,69.2,49,69.2c30.3,0,46.1-23.9,46.1-47.5 C375.2,89.3,350.4,77.6,329.3,77.6z M359.1,122.3c0,15.8-10.3,31.7-30,31.7c-13.4,0-29.8-11.4-32.7-43.3c5.8-7,18.3-17.4,32.9-17.4 C356.2,93.3,359.1,113.6,359.1,122.3z"></path><rect y="185.1" width="80" height="40"></rect><rect x="0.4" y="0" width="100.7" height="11.8"></rect></svg>
    </div>
    <div class="container__transactions current">
      <router-link to="/transactions"><i class="fas fa-list"></i><Span class="label">Transactions</Span></router-link>
    </div>
    <div class="container__spaces current">
      <router-link to="/spaces"><i class="fas fa-th-large"></i><Span class="label">Spaces</Span></router-link>
    </div>
    <div class="container__account">
      <router-link to="/account"><i class="far fa-user"></i><Span class="label">My Account</Span></router-link>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {
      scrolled: false
    };
  },
  methods: {
    handleScroll() {
      this.scrolled = window.scrollY > 0;
    }
  },
  created() {
    window.addEventListener("scroll", this.handleScroll);
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  }
};
</script>
<style src="../scss/nav.scss" lang="scss" >
</style>
