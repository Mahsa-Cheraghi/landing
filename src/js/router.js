import { createRouter, createWebHistory } from "vue-router";
import Home from "../components/Home-1/Home.vue";
import Home2 from "../components/Home-2/Home2.vue";
import About from '../components/About/About.vue'
import Services from '../components/Services/Services.vue'
import OurDoctor from '../components/our doctor/OurDoctor.vue'
import Appointment from '../components/Appointment/Appointment.vue'
import Faq from '../components/Pages/Faq/Faq.vue'
import Error from '../components/Pages/404/Error.vue'
import Layout1 from '../components/Contact/Contact-layout1/Layout1.vue';
import Layout2 from '../components/Contact/Contact-layout2/Layout2.vue'

const routes = [
  {
    path: "/",
    name: "landing",
    component:Home,
  },
  {
    path: "/home",
    name: "home2",
    component: Home2,
  },
  {
    path: "/about",
    name: "about",
    component: About,
  },
  {
    path: "/services",
    name: "services",
    component: Services,
  },
  {
    path: "/ourdoctor",
    name: "ourdoctor",
    component: OurDoctor

  },
  {
    path: "/appointment",
    name: "appointment",
    component: Appointment

  },
  {
    path: "/faq",
    name: "faq",
    component:Faq

  },
  {
    path: "/error",
    name: "error",
    component:Error

  },
  {
    path: "/layout1",
    name: "layout1",
    component:Layout1

  },
  {
    path: "/layout2",
    name: "layout2",
    component:Layout2

  },


];

const router = createRouter({
  history: createWebHistory(),
  routes,
  // ...
});
export default router;
