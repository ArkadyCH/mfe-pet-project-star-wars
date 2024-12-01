import StarshipsDetails from "../components/StarshipsDetails.vue";
import Starships from "../components/Starships.vue";

export default [
  {
    name: "Starships",
    path: "/",
    component: Starships,
  },
  {
    name: "Starship",
    path: "/:id",
    component: StarshipsDetails,
  },
];
