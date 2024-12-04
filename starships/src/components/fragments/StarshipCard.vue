<script setup lang="ts">
import useRouteName from "@/composables/useRouteName.js";
import { Starship } from "@/graphql/interfaces";
import StarshipDefaultImg from "@/assets/starship_default_preview.png";
interface Props {
  starship: Starship;
}

const { RouteName } = useRouteName();
const props = defineProps<Props>();
</script>

<template>
  <div class="starship-card">
    <div class="starship-card__content">
      <div class="starship-card__preview">
        <img :src="StarshipDefaultImg" alt="Starship preview image" />
      </div>
      <div class="starship-card__body">
        <div class="starship-card__title">{{ starship.name }}</div>
        <div class="label">
          <div class="label__text">Cost</div>
          <div class="label__value">{{ starship.costInCredits || "N/A" }}</div>
        </div>
        <div class="label">
          <div class="label__text">Class</div>
          <div class="label__value">{{ starship.starshipClass || "N/A" }}</div>
        </div>
        <div class="label">
          <div class="label__text">Passengers</div>
          <div class="label__value">{{ starship.passengers || "N/A" }}</div>
        </div>
      </div>
    </div>
    <router-link
      :to="{ name: RouteName.STARSHIPS_DETAILS, params: { id: starship.id } }"
      class="starship-card__btn link"
    >
      View details
    </router-link>
  </div>
</template>

<style lang="scss">
.starship-card {
  background: #161616;
  padding: 25px 15px;
  &__content {
    display: flex;
    justify-content: space-between;
  }
  &__preview {
    flex: 0 1 45%;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  &__body {
    flex: 0 1 50%;
    margin-left: 25px;
  }
  &__title {
    color: #c9c9c9;
    font-size: 18px;
    text-align: left;
    margin-bottom: 10px;
  }
}
.label {
  display: flex;
  justify-content: space-between;
  color: #777777;
  font-size: 14px;
  margin-bottom: 10px;
}
</style>
