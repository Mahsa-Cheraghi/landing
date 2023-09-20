import { createApp } from "vue";
import App from "./App.vue";
import VueDatePicker from '@vuepic/vue-datepicker';
// Vuetify
import router from "./js/router.js";
// import router from "./js/router.js"
import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import "bootstrap/dist/js/bootstrap.bundle.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/main.css";
import vuescroll from 'vuescroll';






const vuetify = createVuetify({
  components,
  directives,
});
const app = createApp();

app.component('VueDatePicker', VueDatePicker);
createApp(App).use(vuetify).use(router).use(vuescroll).mount("#app");

