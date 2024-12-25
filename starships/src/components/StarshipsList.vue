<script setup lang="ts">
import { StarshipsMockData } from "@/graphql/mock";
import StarshipCard from "@/components/fragments/StarshipCard.vue";
interface Props {
  starshipsIds: string[];
}

const { starshipsIds = [] } = defineProps<Props>();

const starships = StarshipsMockData.filter((it) =>
  starshipsIds.includes(it.id),
);
</script>
<template>
  <div class="starship" v-if="starships.length">
    <div class="starship__title">Starships</div>
    <div class="starship__content">
      <div class="starship__slider">
        <StarshipCard
          class="starship__item"
          v-for="starship in starships"
          :starship="starship"
          :key="starship.id"
        />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.starship {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;

  &__title {
    font-size: 20px;
    margin-bottom: 30px;
  }
  &__content {
    overflow-y: hidden;
    overflow-x: scroll;
    width: 100%;

    -ms-overflow-style: none; /* Internet Explorer 10+ */
    scrollbar-width: none; /* Firefox */

    &::-webkit-scrollbar {
      display: none; /* Safari and Chrome */
    }
  }
  &__slider {
    display: flex;
  }
  &__item {
    min-width: 400px;
    margin-right: 25px;
  }
}
</style>
