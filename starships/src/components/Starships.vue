<template>
  Starships Page
  <router-link :to="{ name: RouteNames.HOME }">Go to Home</router-link>
</template>

<script setup lang="ts">
import { inject } from "vue";
const RouteNames: Record<string, string> = inject("RouteName") || {};
</script>

<style scoped></style>
