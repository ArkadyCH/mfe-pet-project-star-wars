import { createRouter, createWebHistory, RouteRecord } from "vue-router";
import HomeView from "./components/HomeView.vue";
import starshipsRoutes, {
  RouteName as StarshipsRouteName,
} from "starships/StarshipsRoutes";

export const RouteName = {
  HOME: "HomePage",
  ...StarshipsRouteName,
};

const setPrefixToRoutes = (routes: RouteRecord[], prefix: string) =>
  routes.map((route) => ({
    ...route,
    path: `/${prefix}${route.path}`,
  }));

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      name: RouteName.HOME,
      path: "/",
      component: HomeView,
    },
    ...setPrefixToRoutes(starshipsRoutes, "starships"),
  ],
});
