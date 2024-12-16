<script setup lang="ts">
import { useQuery } from "@vue/apollo-composable";
import useRouteName from "@/composables/useRouteName";
import { STARSHIPS_QUERY } from "@/graphql/queries";
import StarshipCard from "@/components/fragments/StarshipCard.vue";
import { computed } from "vue";
import { StarshipsMockData } from "@/graphql/mock";

const { RouteName } = useRouteName();

const { result, loading, error } = useQuery(STARSHIPS_QUERY);
const starships = computed(() => result?.value?.allStarships?.starships ?? []);
</script>

<template>
  <div class="starships-headline">
    Starships Page
    <div>
      <router-link :to="{ name: RouteName.HOME }">
        [Test navigation] Go to Home
      </router-link>
    </div>
  </div>
  <div class="starships-grid">
    <template v-if="loading">
      <StarshipCard loading v-for="i in 9" :key="i" />
    </template>
    <template v-else-if="starships.length">
      <StarshipCard
        :starship="starship"
        v-for="starship in starships"
        :key="starship.id"
      />
    </template>
    <template v-else>
      <StarshipCard
        :starship="starship"
        v-for="starship in StarshipsMockData"
        :key="starship.id"
      />
    </template>
  </div>
</template>

<style scoped>
.starships-grid {
  display: grid;
  grid-template-columns: repeat(3, 33%);
  grid-gap: 25px;
}
.starships-headline {
  margin-bottom: 40px;
}
</style>
