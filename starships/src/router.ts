import { createRouter, createWebHistory } from "vue-router";
import StarshipsDetails from "./components/StarshipsDetails.vue";
import Starships from "./components/Starships.vue";

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      name: "Starships",
      path: "/",
      component: Starships,
    },
    {
      name: "Starship",
      path: "/starships/:id",
      component: StarshipsDetails,
    },
  ],
});
