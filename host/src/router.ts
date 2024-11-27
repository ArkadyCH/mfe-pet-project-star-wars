import { createRouter, createWebHistory } from "vue-router";
const StarshipsApp = import("starships/StarshipsApp");

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      name: "Starships",
      path: "/starships",
      component: StarshipsApp,
    },
  ],
});
