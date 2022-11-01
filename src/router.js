import { createRouter, createWebHistory } from "vue-router";
import Home from "./views/Home.vue";
import VaccineHistory from "./views/VaccineHistory.vue";
import SignIn from "./views/SignIn.vue";
import SignUp from "./views/SignUp.vue";
import Admin from "./views/Admin.vue";

const routes = [
  { path: "/", name: "Home", component: Home },
  { path: "/sign-in", name: "SignIn", component: SignIn },
  { path: "/sign-up", name: "SignUp", component: SignUp },
  { path: "/admin", name: "Admin", component: Admin },
  { path: "/vaccine-history/:userId", name: "Vaccine History", component: VaccineHistory },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
