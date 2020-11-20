<template>
  <footer
    class="footer-copyright deep-purple accent-2 white-text text-lighten-4 row center valign-wrapper"
  >
    <div class="footer-icons col s12 m4">
      <a href="#">
        <i class="fab fa-github"></i>
      </a>
      <a href="#">
        <i class="fab fa-codepen"></i>
      </a>
      <a href="#">
        <i class="fab fa-instagram"></i>
      </a>
      <a href="#">
        <i class="fas fa-envelope"></i>
      </a>
      <a href="#"> <i class="fas fa-mobile-alt"></i> </a>
    </div>
    <div class="copyright col s12 m4">Shiri Studio © 2020</div>
    <div class="footer-link col s12 m4">
      <a class="grey-text text-lighten-4" href="#!">More Links</a>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
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