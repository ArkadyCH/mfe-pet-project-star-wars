<script setup lang="ts">
import useRouteName from "@/composables/useRouteName";
import CharacterCard from "@/components/fragments/CharacterCard.vue";
import { useQuery } from "@vue/apollo-composable";
import { PEOPLE_QUERY } from "@/graphql/queries";
import { computed } from "vue";
import { PeopleQueryResult, PeopleListItem } from "@/graphql/interfaces";
const { RouteName } = useRouteName();

const { result, loading } = useQuery<PeopleQueryResult>(PEOPLE_QUERY);
const people = computed<PeopleListItem[]>(() => result.value?.allPeople?.people ?? []);
</script>

<template>
  <div class="people-headline">
    Pilots Page
    <div>
      <router-link :to="{ name: RouteName.HOME }">Go to Home</router-link>
    </div>
  </div>
  <div class="people-grid" v-if="loading">
    <CharacterCard loading v-for="i in 10" :key="i" />
  </div>
  <div class="people-grid" v-else-if="people.length">
    <CharacterCard :character="character" v-for="character in people" />
  </div>
  <div class="empty-state" v-else>
    The character is not in the database. The Empire may have erased him from history.... 👀
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
