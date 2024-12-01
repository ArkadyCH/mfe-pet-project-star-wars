import { createRouter, createWebHistory, RouteRecord } from "vue-router";
import HomeView from "./components/HomeView.vue";
import starshipsRoutes from "starships/StarshipsRoutes";

const setPrefixToRoutes = (routes: RouteRecord[], prefix: string) =>
  routes.map((route) => ({
    ...route,
    path: `/${prefix}${route.path}`,
  }));

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      name: "Home",
      path: "/",
      component: HomeView,
    },
    ...setPrefixToRoutes(starshipsRoutes, "starships"),
  ],
});
