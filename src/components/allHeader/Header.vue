<template>
  <div class="container">
    <SocialBar />
    <div class="text-center">
      <img :src="logo" alt="Logo" class="m-3" />
    </div>

    <NavbarMenu />
  </div>
</template>

<script>
import SocialBar from "@/components/allHeader/SocialBar.vue";
import NavbarMenu from "@/components/allHeader/NavbarMenu.vue";
export default {
  name: "Header",
  components: {
    SocialBar,
    NavbarMenu,
  },
  data() {
    return {
      logo: require("@/assets/images/avada-food-logo-2x.png"),
    };
  },
};
</script>

<style>
</style>