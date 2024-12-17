import People from "@/components/People.vue";
import CharacterDetails from "@/components/CharacterDetails.vue";

export const RouteName = {
  PEOPLE: "People",
  CHARACTER_DETAILS: "Character Details",
};

export default [
  {
    name: RouteName.PEOPLE,
    path: "/",
    component: People,
  },
  {
    name: RouteName.CHARACTER_DETAILS,
    path: "/:id",
    component: CharacterDetails,
  },
];
