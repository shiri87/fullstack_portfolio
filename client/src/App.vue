<template>
  <div id="app">
    <Header />
    <particles-bg
      type="custom"
      :canvas="{
        background: 'linear-gradient( #727efe, #616ded)'
      }"
      :config="config"
      :bg="true"
    />

    <router-view />
    <Footer />
  </div>
</template>

<script>
import M from "materialize-css";
import { ParticlesBg } from "particles-bg-vue";

//components
import Header from "./components/Header";
import Footer from "./components/Footer";

export default {
  name: "App",
  components: {
    Header,
    Footer,
    ParticlesBg
  },
  data: function() {
    return {
      config: {
        num: [15, 40],
        rps: 1,
        radius: [100, 300],
        life: [5, 2],
        v: [1, 5],
        tha: [-10, 30],
        // body: icon,
        alpha: [0.3, 0.8],
        scale: [0.1, 1],
        position: "screen", // screen or all
        cross: "dead",
        random: 70,
        rotate: 10
      }
    };
  },
  mounted() {
    M.AutoInit();
  }
};
</script>

<style ></style>
