<script setup lang="ts">
import SideMenu from "./components/SideMenu.vue";
import { provide } from "vue";
import { RouteName } from "./router";

provide("RouteName", RouteName);
</script>

<template>
  <div class="container">
    <SideMenu />
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<style scoped lang="scss">
.container {
  display: flex;
  height: 100%;
}
.content {
  padding: 50px;
}
</style>
