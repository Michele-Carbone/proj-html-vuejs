<template>
  <div class="container">
    <SocialBar />
    <div class="text-center">
      <img :src="logo" alt="Logo" class="m-3" />
    </div>

    <NavbarMenu :links="links" />
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
      links: [
        {
          text: "Home",
          url: "#",
          current: true,
        },
        {
          text: "Recipes",
          url: "#",
          current: false,
        },
        {
          text: "Places",
          url: "#",
          current: false,
        },
        {
          text: "Blog",
          url: "#",
          current: false,
        },
        {
          text: "About",
          url: "#",
          current: false,
        },
        {
          text: "Contact",
          url: "#",
          current: false,
        },
      ],
    };
  },
};
</script>

<style>
</style>