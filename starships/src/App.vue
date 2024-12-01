<script setup lang="ts">
import { provide } from "vue";
import { RouteName } from "./router/routes";

provide("RouteName", RouteName);
</script>

<template>
  <div>
    <router-view></router-view>
  </div>
</template>
