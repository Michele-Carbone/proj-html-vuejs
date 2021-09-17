<template>
  <div id="app">
    <div class="container-fluid">
      <Header />
    </div>
  </div>
</template>

<script>
import Header from "@/components/allHeader/Header.vue";
export default {
  name: "App",
  components: {
    Header,
  },
};
</script>

<style lang="scss">
@import "@/assets/scss/style.scss";
</style>
