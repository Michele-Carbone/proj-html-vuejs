<template>
  <div
    id="social-bar"
    class="d-flex justify-content-between align-items-center mt-2"
  >
    <div class="d-flex align-items-center">
      <ul>
        <li class="me-4">
          Download App
          <a href="#"><button class="btn-sm">iOS</button></a>
        </li>
        <li>Advertise whit us</li>
      </ul>
    </div>
    <div class="d-flex align-items-center social-icon">
      <ul>
        <li>
          <a href="#"><i class="fab fa-facebook"></i></a>
        </li>
        <li>
          <a href="#"><i class="fab fa-instagram"></i></a>
        </li>
        <li>
          <a href="#"><i class="fab fa-twitter-square"></i></a>
        </li>
        <li>
          <a href="#"><i class="fab fa-youtube"></i></a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "SocialBar",
};
</script>

<style scoped lang="scss">
@import "@/assets/scss/style.scss";
#social-bar {
  color: $color-text;
  div {
    ul {
      padding-left: 0px;
      li {
        a {
          button {
            background-color: $bg-button;
            font-size: 0.5rem;
            color: $color-text-button;
          }
        }
      }
    }
  }
}

.social-icon {
  ul {
    li {
      margin-left: 20px;
      margin-right: 20px;
      i {
        color: $color-text;
      }
    }
  }
}
</style>