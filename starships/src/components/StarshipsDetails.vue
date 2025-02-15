<script setup lang="ts">
import { useRoute } from "vue-router";
import StarshipDefaultImg from "@/assets/starship_default_preview.png";
import { useQuery } from "@vue/apollo-composable";
import { STARSHIP_DETAIL_QUERY } from "@/graphql/queries";
import { StarshipQueryResult, Starship } from "@/graphql/interfaces";
import { computed } from "vue";

const { id } = useRoute().params;

const { result, loading, error } = useQuery<StarshipQueryResult>(
  STARSHIP_DETAIL_QUERY,
  {
    id,
  },
);
const starship = computed<Starship | null>(
  () => result.value?.starship || null,
);
const films = computed(
  () => starship.value?.filmConnection?.films.map((it) => it.id) || [],
);
const pilots = computed(
  () => starship.value?.pilotConnection?.pilots.map((it) => it.id) || [],
);
</script>

<template>
  <div v-if="loading">Loading</div>
  <div class="starship-detail" v-else-if="starship">
    <div class="starship-headline">{{ starship.name }}</div>
    <div class="starship-detail__container">
      <div class="starship-detail__preview">
        <img
          :src="StarshipDefaultImg"
          alt="starship image"
          class="starship-detail__img"
        />
      </div>
      <div class="starship-detail__content">
        <div class="label">
          <div class="label__text">Model</div>
          <div class="label__value">{{ starship.model || "N/A" }}</div>
        </div>
        <div class="label">
          <div class="label__text">Passengers</div>
          <div class="label__value">{{ starship.passengers || "N/A" }}</div>
        </div>
        <div class="label">
          <div class="label__text">Starship class</div>
          <div class="label__value">
            {{ starship.starshipClass || "N/A" }}
          </div>
        </div>
        <div class="label">
          <div class="label__text">Crew</div>
          <div class="label__value">{{ starship.crew || "N/A" }}</div>
        </div>
        <div class="label">
          <div class="label__text">Cost</div>
          <div class="label__value">{{ starship.costInCredits || "N/A" }}</div>
        </div>
        <div class="label">
          <div class="label__text">Consumables</div>
          <div class="label__value">{{ starship.consumables || "N/A" }}</div>
        </div>
        <div class="label">
          <div class="label__text">Cargo capacity</div>
          <div class="label__value">{{ starship.cargoCapacity || "N/A" }}</div>
        </div>
        <div class="label">
          <div class="label__text">MGLT</div>
          <div class="label__value">{{ starship.MGLT || "N/A" }}</div>
        </div>
      </div>
    </div>
    <slot :films="films" :pilots="pilots"></slot>
  </div>
  <div v-else>
    <h3>🛸 Ship not found 🛸</h3>
    <p>
      🔍 Request sent to Galactic Empire and Republic Archives databases... 🔍
    </p>
    <b>Error 404: No ship detected.</b>
    <p>
      🚀 Perhaps the hyperspace route went astray and the ship was lost in time.
      💫 Or its records were erased by the Jedi... or the Sith. <br />What to do
      next. Try looking for another starship. Contact the nearest Rebel outpost
      or Empire base for more information.
    </p>
  </div>
</template>

<style scoped lang="scss">
.starship-detail {
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  width: 100%;
  max-width: 1240px;

  &__container {
    display: flex;
    width: 100%;
  }

  &__preview {
    width: 100%;
    max-width: 60%;
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
