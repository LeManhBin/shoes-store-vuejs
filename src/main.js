import { createApp } from "vue";
import App from "./App.vue";
import router from "./routes";
import "./assets/styles/main.css";
import { createPinia } from "pinia";
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";
createApp(App).use(Toast).use(createPinia()).use(router).mount("#app");
