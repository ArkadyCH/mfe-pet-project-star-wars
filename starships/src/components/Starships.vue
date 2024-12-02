<template>
  Starships Page
  <div>
    <router-link :to="{ name: RouteName.HOME }">Go to Home</router-link>
  </div>
  <div>
    <router-link :to="{ name: RouteName.STARSHIPS_DETAILS, params: { id: 1 } }">
      Go to Starships Details
    </router-link>
  </div>
</template>

<script setup lang="ts">
import useRouteName from "@/composables/useRouteName";
const { RouteName } = useRouteName();
</script>

<style scoped></style>
