<template>
  <footer>
    <div
      class="footer-copyright indigo bg-darken-4 grey-text text-lighten-4 row center"
    >
      <div class="footer-icons col s12 m4">
        <i class="fab fa-github"></i>
        <i class="fab fa-codepen"></i>
        <i class="fab fa-instagram"></i>
        <i class="fas fa-envelope"></i>
        <i class="fas fa-mobile-alt"></i>
      </div>
      <div class="copyright col s12 m4">
        Shiri Studio © 2020
      </div>
      <div class="footer-link col s12 m4">
        <a class=" grey-text text-lighten-4" href="#!">More Links</a>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer"
};
</script>

<style>
body {
  display: flex;
  min-height: 100vh;
  flex-direction: column;
}

main {
  flex: 1 0 auto;
}
</style>