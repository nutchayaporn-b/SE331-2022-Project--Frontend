import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

const recommendations = JSON.parse(localStorage.getItem("recommendations"));
if (!recommendations) localStorage.setItem("recommendations", JSON.stringify([]));

createApp(App).use(router).mount("#app");
