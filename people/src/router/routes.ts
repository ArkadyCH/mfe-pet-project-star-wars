import People from "@/components/People.vue";

export const RouteName = {
  PEOPLE: "People",
};

export default [
  {
    name: RouteName.PEOPLE,
    path: "/",
    component: People,
  },
];
