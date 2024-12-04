import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import federation from "@originjs/vite-plugin-federation";
import { fileURLToPath, URL } from "node:url";
import { processProxies, processRemotes } from "./vite-utils";

const remotes = {
  starships: "http://localhost:5173",
};

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    federation({
      name: "host-app",
      remotes: {
        ...processRemotes(remotes),
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
  server: {
    proxy: {
      ...processProxies(remotes),
    },
  },
  build: {
    minify: false,
    target: ["chrome89", "edge89", "firefox89", "safari15"],
  },
});
