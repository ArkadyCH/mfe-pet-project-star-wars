import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./router";
import "@skeleton-elements/vue/skeleton-elements.css";

createApp(App).use(router).mount("#app");
