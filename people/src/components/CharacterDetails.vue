<script setup lang="ts">
import PeopleDefaultImg from "@/assets/pilot_default_preview.png";
import { useRoute } from "vue-router";
import { useQuery } from "@vue/apollo-composable";
import { PEOPLE_DETAIL_QUERY } from "@/graphql/queries";
import { Character, PeopleDetailQueryResult } from "@/graphql/interfaces";
import { computed } from "vue";
const { id } = useRoute().params;

const { result, loading } = useQuery<PeopleDetailQueryResult>(PEOPLE_DETAIL_QUERY, {
  id,
});

const character = computed<Character | null>(() => result.value?.person ?? null);
const films = computed(() => character.value?.filmConnection?.films.map((it) => it.id) || []);
const starships = computed(() => character.value?.starshipConnection?.starships.map((it) => it.id) || []);

</script>

<template>
  <div v-if="loading">Loading</div>
  <div class="character-detail" v-else-if="character">
    <div class="character-headline">{{ character.name }}</div>
    <div class="character-detail__container">
      <div class="character-detail__preview">
        <img
          :src="PeopleDefaultImg"
          alt="Character image"
          class="character-detail__img"
        />
      </div>
      <div class="character-detail__content">
        <div class="label">
          <div class="label__text">Gender</div>
          <div class="label__value">{{ character.gender || "N/A" }}</div>
        </div>
        <div class="label">
          <div class="label__text">Birth year</div>
          <div class="label__value">{{ character.birthYear || "N/A" }}</div>
        </div>
        <div class="label">
          <div class="label__text">Home world</div>
          <div class="label__value">
            {{ character.homeworld?.name || "N/A" }}
          </div>
        </div>
        <div class="label">
          <div class="label__text">Eye color</div>
          <div class="label__value">{{ character.eyeColor || "N/A" }}</div>
        </div>
        <div class="label">
          <div class="label__text">Hair color</div>
          <div class="label__value">{{ character.hairColor || "N/A" }}</div>
        </div>
        <div class="label">
          <div class="label__text">Skin color</div>
          <div class="label__value">{{ character.skinColor || "N/A" }}</div>
        </div>
        <div class="label">
          <div class="label__text">Height</div>
          <div class="label__value">{{ character.height || "N/A" }}</div>
        </div>
        <div class="label">
          <div class="label__text">Mass</div>
          <div class="label__value">{{ character.mass || "N/A" }}</div>
        </div>
      </div>
    </div>
    <slot :films="films" :starships="starships"></slot>
  </div>
</template>

<style scoped lang="scss">
.character-detail {
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  max-width: 1240px;
  width: 100%;

  &__container {
    display: flex;
    width: 100%;
  }

  &__preview {
    width: 100%;
    max-width: 300px;
    height: 400px;
  }

  &__img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &__content {
    max-width: 30%;
    width: 100%;
    margin-left: 40px;
  }
}

.character-headline {
  margin-bottom: 40px;
}

.label {
  display: flex;
  justify-content: space-between;
  color: #777777ad;
  font-size: 14px;
  margin-bottom: 10px;

  &__text {
    color: #777777;
  }
}
</style>
