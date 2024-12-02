import { inject } from "vue";

export default () => {
  const RouteName: Record<string, string> = inject("RouteName") || {};
  return { RouteName };
};
