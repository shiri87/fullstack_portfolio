import Vue from "vue";
import App from "./App.vue";
import router from "./router"
import store from "./store";
// import vue material
import 'materialize-css/dist/css/materialize.css'
// import VueParticlesBg from "particles-bg-vue";
import "jquery/dist/jquery.js"
import "@popperjs/core/dist/cjs/popper.js"
import {sync} from 'vuex-router-sync';
// import Vuelidate from 'vuelidate'

// Vue.use(VueParticlesBg);
// Vue.use(Vuelidate)
sync(store, router)

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
