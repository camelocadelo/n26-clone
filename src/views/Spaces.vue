
<template>
  <div class="spaces">
    <spaces-info></spaces-info>
    <spaces-main></spaces-main>
  </div>
</template>
<script>
import SpacesInfo from "../components/spaces/SpacesInfo.vue";
import SpacesMain from "../components/spaces/SpacesMain.vue";
export default {
  name: "account",
  components: {
    SpacesInfo,
    SpacesMain
  }
};
</script>
<style src="../scss/spaces.scss"  lang="scss" >
</style>
