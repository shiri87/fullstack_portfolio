<template>
  <footer
    class="footer-copyright deep-purple accent-2 white-text text-lighten-4 row center valign-wrapper"
  >
    <div class="footer-icons col s12 m4">
      <a href="https://github.com/shiri87">
        <i class="fab fa-github"></i>
      </a>
      <!-- <a href="#">
        <i class="fab fa-codepen"></i>
      </a> -->
      <a href="https://www.linkedin.com/in/shiri-webdev/"> <i class="fab fa-linkedin"></i> </a>
      <a href="mailto:shiri.webdew@gamil.com?Subject=[Shiri%20Studio]" target="_top" >
        <i class="fas fa-envelope"></i>
      </a>
    </div>
    <div class="copyright col s12 m4">© Copyright 
        {{ new Date().getFullYear() }}
      by Shiri. All rights reversed. 
        </div>
    <div class="footer-link col s12 m4">
      <a class="grey-text text-lighten-4" href="https://react-firebase-d6e6b.web.app/guest">Go to React Guestbook</a>
      
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