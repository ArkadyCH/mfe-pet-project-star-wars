import StarshipsDetails from "@/components/StarshipsDetails.vue";
import Starships from "@/components/Starships.vue";

export const RouteName = {
  STARSHIPS: "Starships",
  STARSHIPS_DETAILS: "StarshipDetails",
};

export default [
  {
    name: RouteName.STARSHIPS,
    path: "/",
    component: Starships,
  },
  {
    name: RouteName.STARSHIPS_DETAILS,
    path: "/:id",
    component: StarshipsDetails,
  },
];
