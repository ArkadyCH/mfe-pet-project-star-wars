<script setup lang="ts">
import { DefaultApolloClient } from "@vue/apollo-composable";
import { provide } from "vue";
import { RouteName } from "@/router/routes";
import apolloClient from "@/graphql/client";

provide("RouteName", RouteName);
provide(DefaultApolloClient, apolloClient);
</script>

<template>
  <div>
    <router-view></router-view>
  </div>
</template>
