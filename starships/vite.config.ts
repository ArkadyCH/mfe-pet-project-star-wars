import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import federation from "@originjs/vite-plugin-federation";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    federation({
      name: "starships",
      filename: "remoteEntry.js",
      // Modules to expose
      exposes: {
        "./StarshipsRoutes": "./src/router/routes.ts",
      },
      shared: [
        "vue",
        "@apollo/client",
        "@vue/apollo-composable",
        "graphql",
        "graphql-tag",
      ],
    }),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  build: {
    assetsDir: "assets/starships",
    minify: false,
    target: ["chrome89", "edge89", "firefox89", "safari15"],
  },
});
