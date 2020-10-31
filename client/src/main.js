import Vue from "vue";
import App from "./App.vue";
import router from "./router"
import store from "./store";
// import vue material
import 'materialize-css/dist/css/materialize.css'
import VueParticlesBg from "particles-bg-vue";

Vue.use(VueParticlesBg);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
