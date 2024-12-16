import { createRouter, createWebHistory, RouteRecord } from "vue-router";
import HomeView from "./components/HomeView.vue";
import starshipsRoutes, {
  RouteName as StarshipsRouteName,
} from "starships/StarshipsRoutes";
import peopleRoutes, {
  RouteName as PeopleRouteName,
} from "people/PeopleRoutes";

export const RouteName = {
  HOME: "HomePage",
  ...StarshipsRouteName,
  ...PeopleRouteName,
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
    ...setPrefixToRoutes(peopleRoutes, "people"),
  ],
});
