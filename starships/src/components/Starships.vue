<template>
  Starships Page
  <div>
    <router-link :to="{ name: RouteNames.HOME }">Go to Home</router-link>
  </div>
  <div>
    <router-link
      :to="{ name: RouteNames.STARSHIPS_DETAILS, params: { id: 1 } }"
    >
      Go to Starships Details
    </router-link>
  </div>
</template>

<script setup lang="ts">
import { inject } from "vue";
const RouteNames: Record<string, string> = inject("RouteName") || {};
</script>

<style scoped></style>
