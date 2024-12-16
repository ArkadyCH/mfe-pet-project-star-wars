import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import federation from "@originjs/vite-plugin-federation";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    federation({
      name: "people",
      filename: "remoteEntry.js",
      // Modules to expose
      exposes: {
        "./PeopleRoutes": "./src/router/routes.ts",
      },
      shared: [
        "vue",
        "@apollo/client",
        "@vue/apollo-composable",
        "graphql",
        "graphql-tag",
        "@skeleton-elements/vue",
      ],
    }),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  build: {
    assetsDir: "assets/people",
    minify: false,
    target: ["chrome89", "edge89", "firefox89", "safari15"],
  },
});
