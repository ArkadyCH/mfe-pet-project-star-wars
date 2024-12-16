<script setup lang="ts">
import { PeopleMockData } from "@/graphql/mock";
import CharacterCard from "@/components/fragments/CharacterCard.vue";
interface Props {
  pilotsIds: string[];
}

const { pilotsIds } = defineProps<Props>();

const pilots = PeopleMockData.filter((it) => pilotsIds.includes(it.id));
</script>
<template>
  <div class="pilots" v-if="pilots.length">
    <div class="pilots__title">Pilots</div>
    <div class="pilots__content">
      <div class="pilots__slider">
        <CharacterCard
          class="pilots__item"
          v-for="pilot in pilots"
          :character="pilot"
          :key="pilot.id"
        />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.pilots {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
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
