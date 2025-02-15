<script setup lang="ts">
import { useQuery } from "@vue/apollo-composable";
import useRouteName from "@/composables/useRouteName";
import { STARSHIPS_QUERY } from "@/graphql/queries";
import StarshipCard from "@/components/fragments/StarshipCard.vue";
import { computed } from "vue";
import { StarshipsQueryResult } from "@/graphql/interfaces";

const { RouteName } = useRouteName();

const { result, loading, error } =
  useQuery<StarshipsQueryResult>(STARSHIPS_QUERY);
const starships = computed(() => result.value?.allStarships?.starships ?? []);
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
  <div class="starships-grid" v-if="loading">
    <StarshipCard loading v-for="i in 9" :key="i" />
  </div>
  <div class="starships-grid" v-else-if="starships.length">
    <StarshipCard
      :starship="starship"
      v-for="starship in starships"
      :key="starship.id"
    />
  </div>
  <div class="empty-state" v-else>
    The galaxy is empty. Not a single ship has been found. Perhaps the Empire
    had a hand in this....
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
