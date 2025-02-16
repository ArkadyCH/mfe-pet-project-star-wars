<script setup lang="ts">
import CharacterCard from "@/components/fragments/CharacterCard.vue";
import { useQuery } from "@vue/apollo-composable";
import { PILOTS_QUERY } from "@/graphql/queries";
import { PilotsQueryResult, PeopleListItem } from "@/graphql/interfaces";
import { computed } from "vue";
interface Props {
  pilotsIds: string[];
}

const { pilotsIds = [] } = defineProps<Props>();
const responses = pilotsIds.map((id) =>
  useQuery<PilotsQueryResult>(PILOTS_QUERY, {
    id,
  }),
);
const pilots = computed<PeopleListItem[]>(() =>
  responses
    .map((res) => res.result.value?.person)
    .filter((p): p is PeopleListItem => !!p),
);

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
