<template>
  <div id="app">
    <Header />
    <router-view />
    <Footer />
  </div>
</template>

<script>
// import HelloWorld from "./components/HelloWorld.vue";
import M from "materialize-css";

//components
import Header from "./components/Header";
import Footer from "./components/Footer";

export default {
  name: "App",
  components: {
    Header,
    Footer
  },
  mounted() {
    M.AutoInit();
  }
  // mounted: function() {
  //   M.AutoInit();
  // }
};
</script>

<style ></style>
