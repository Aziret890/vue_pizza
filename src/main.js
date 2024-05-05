import "./style.css";
import App from "./App.vue";

import { createApp } from "vue";
import { createPinia } from "pinia";
const pinia = createPinia();
import { createRouter, createWebHistory } from "vue-router";
import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import Home from "./pages/Home.vue";
import Basket from "./pages/Basket.vue";
const vuetify = createVuetify({
  components,
  directives,
});
const routes = [
  { path: "/", component: Home },
  { path: "/basket", component: Basket },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});
createApp(App).use(router).use(vuetify).use(pinia).mount("#app");