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
        "./StarshipsRoutes": "./src/router/routes",
      },
      shared: ["vue"],
    }),
  ],
  build: {
    minify: false,
    target: ["chrome89", "edge89", "firefox89", "safari15"],
  },
});
