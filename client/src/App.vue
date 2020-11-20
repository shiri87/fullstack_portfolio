<template>
  <div id="app">
    <div id="bg">
      <Header />

      <particles-bg
        id="moving-bg"
        type="custom"
        :canvas="{
          background: 'linear-gradient( #6666FF, #d1c4e9)',
        }"
        :width="40"
        :height="40"
        :config="config"
        :bg="true"
      />
      <router-view />
      <Footer />
    </div>
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
    ParticlesBg,
  },
  data: function () {
    return {
      config: {
        num: [15, 40],
        rps: 1,
        radius: [200, 300],
        life: [5, 2],
        v: [1, 5],
        tha: [-10, 30],
        // body: icon,
        alpha: [0.3, 0.8],
        scale: [0.1, 1],
        position: "all", // screen or all
        cross: "dead",
        random: 70,
        rotate: 10,
      },
    };
  },
  // Auto Init allows you to initialize all of the Materialize Components with a single function call. It is important to note that you cannot pass in options using this method.
  //context	_defaultdocument.body	DOM | Element to search within for components.
  mounted() {
    M.AutoInit();
    M.updateTextFields();
  },
};
</script>

<style >
</style>
