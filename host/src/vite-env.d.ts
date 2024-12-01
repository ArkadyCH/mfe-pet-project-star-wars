/// <reference types="vite/client" />

declare module "*.vue";
declare module "starships/*" {
  import { RouteRecord } from "vue-router";
  const routes: RouteRecord[];
  export default routes;
}
