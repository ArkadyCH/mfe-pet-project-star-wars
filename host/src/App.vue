<script setup lang="ts">
import SideMenu from "./components/SideMenu.vue";
import { provide } from "vue";
import { RouteName } from "./router";
import { DefaultApolloClient } from "@vue/apollo-composable";
import apolloClient from "@/graphql/client";

provide("RouteName", RouteName);
provide(DefaultApolloClient, apolloClient);
</script>

<template>
  <div class="container">
    <SideMenu />
    <div class="content">
      <router-view v-slot="{ Component, pilots, films }">
        <component :is="Component">
          <template v-slot="{ films }">
            <div>{{ films }}</div>
          </template>
        </component>
      </router-view>
    </div>
  </div>
</template>

<style scoped lang="scss">
.container {
  display: flex;
  height: 100%;
  overflow-y: scroll;
}
.content {
  padding: 50px;
  width: 100%;
}
</style>
