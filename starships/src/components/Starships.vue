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
  <div class="starships-headline">
    Starships Page
    <div>
      <router-link :to="{ name: RouteName.HOME }">Go to Home</router-link>
    </div>
    <div>
      <router-link
        :to="{ name: RouteName.STARSHIPS_DETAILS, params: { id: 1 } }"
      >
        Go to Starships Details
      </router-link>
    </div>
  </div>
  <div class="starships-grid">
    <StarshipCard :starship="starship" v-for="starship in starships" />
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
