<script setup lang="ts">
import { StarshipsMockData } from "@/graphql/mock";
import { useRoute } from "vue-router";
import StarshipDefaultImg from "@/assets/starship_default_preview.png";

const { id } = useRoute().params;
const starship = StarshipsMockData.find((s) => s.id === id);
const films = starship?.films?.results.map((it) => it.id);
const pilots = starship?.pilots?.results.map((it) => it.id);
</script>

<template>
  <div class="starships-headline">{{ starship.name }}</div>
  <div class="starship-detail">
    <div class="starship-detail__preview">
      <img
        :src="StarshipDefaultImg"
        alt="Starship image"
        class="starship-detail__img"
      />
    </div>
    <slot :films="films" :pilots="pilots"></slot>
  </div>
</template>

<style scoped lang="scss">
.starship-detail {
  width: 100%;
  &__preview {
    width: 100%;
    max-width: 800px;
  }
  &__img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

.starships-headline {
  margin-bottom: 40px;
}
</style>
