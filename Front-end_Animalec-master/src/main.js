import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { setupMocks } from "./mock";

import VueSimpleAlert from "vue-simple-alert";
import BootstrapVue from "bootstrap-vue";
import "bootstrap-vue/dist/bootstrap-vue.css";

Vue.use(BootstrapVue);
Vue.use(VueSimpleAlert);

Vue.config.productionTip = false;

if (process.env.NODE_ENV === "development") {
  setupMocks();
}

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
