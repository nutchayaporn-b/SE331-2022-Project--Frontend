import { createRouter, createWebHistory } from "vue-router";
import Home from "./views/Home.vue";
import VaccineHistory from "./views/VaccineHistory.vue";

const routes = [
  { path: "/", name: "Home", component: Home },
  { path: "/vaccine-history/:userId", name: "Vaccine History", component: VaccineHistory },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
