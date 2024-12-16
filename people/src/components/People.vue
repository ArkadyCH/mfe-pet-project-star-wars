<script setup lang="ts">
import { PeopleMockData } from "@/graphql/mock";
import useRouteName from "@/composables/useRouteName";
import CharacterCard from "@/components/fragments/CharacterCard.vue";
import { useQuery } from "@vue/apollo-composable";
import { PEOPLE_QUERY } from "@/graphql/queries";
import { computed } from "vue";

const { RouteName } = useRouteName();

const { result, loading, error } = useQuery(PEOPLE_QUERY);
console.log(result);
// const people = computed(() => result?.value?.allPilots?.pilots ?? []);
</script>

<template>
  <div class="people-headline">
    Pilots Page
    <div>
      <router-link :to="{ name: RouteName.HOME }">Go to Home</router-link>
    </div>
  </div>
  <div class="people-grid">
    <CharacterCard :character="character" v-for="character in PeopleMockData" />
  </div>
</template>

<style scoped>
.people-grid {
  display: grid;
  grid-template-columns: repeat(2, 49%);
  grid-gap: 25px;
}
.people-headline {
  margin-bottom: 40px;
}
</style>
