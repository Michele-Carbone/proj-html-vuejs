<template>
  <div id="navbarmenu" class="container">
    <ul class="text-center">
      <li v-for="(link, index) in links" :key="index">
        <a :href="link.url" :class="{ active: link.current }">{{
          link.text
        }}</a>
      </li>
      <li><i class="fas fa-search"></i></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "NavbarMenu",
  props: ["links"],
};
</script>

<style scoped  lang="scss">
@import "@/assets/scss/style.scss";
#navbarmenu {
  ul {
    li {
      margin-left: 50px;
      margin-right: 50px;
      a {
        text-decoration: none;
        color: $color-text;
        font-weight: 700;
        padding: 10px 0px;
        &:hover,
        &.active {
          color: $bg-button;
          border-bottom: 2px solid $bg-button;
        }
      }
    }
  }
}
</style>