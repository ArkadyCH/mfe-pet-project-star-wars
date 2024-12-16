/// <reference types="vite/client" />

declare module "*.vue";
declare module "starships/*" {
  import { RouteRecord } from "vue-router";
  const routes: RouteRecord[];
  export const RouteName: Record<string, string>;
  export default routes;
}

declare module "people/*" {
  import { RouteRecord } from "vue-router";
  const routes: RouteRecord[];
  export const RouteName: Record<string, string>;
  export default routes;
}
