import Vue from "vue";
import App from "./App.vue";
import router from "./router"
import store from "./store";
//when css framework switch, delete
import 'materialize-css/dist/css/materialize.css'
import vuetify from '@/plugins/vuetify'
import VueParticlesBg from "particles-bg-vue";
import "jquery/dist/jquery.js"
import "@popperjs/core/dist/cjs/popper.js"
import {sync} from 'vuex-router-sync';
// import Vuelidate from 'vuelidate'

Vue.use(VueParticlesBg);
// Vue.use(Vuelidate)
sync(store, router)

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount("#app");
