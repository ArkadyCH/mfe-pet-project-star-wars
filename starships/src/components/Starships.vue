<script setup lang="ts">
import { useQuery } from "@vue/apollo-composable";
import useRouteName from "@/composables/useRouteName";
import { STARSHIPS_QUERY } from "@/graphql/queries";
import StarshipCard from "@/components/fragments/StarshipCard.vue";
import { computed } from "vue";

const { RouteName } = useRouteName();

const { result, loading, error } = useQuery(STARSHIPS_QUERY);
const starships = computed(() => result?.value?.allStarships?.starships ?? []);
</script>

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
  <div class="starships-grid">
    <StarshipCard :starship="starship" v-for="starship in starships" />
  </div>
</template>

<style scoped>
.starships-grid {
  display: flex;
  flex-wrap: wrap;
  .starship-card {
    margin: 20px;
    flex: 0 1 44%;
  }
}
</style>
