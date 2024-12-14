<script setup lang="ts">
import useRouteName from "@/composables/useRouteName.js";
import { Starship } from "@/graphql/interfaces";
import StarshipDefaultImg from "@/assets/starship_default_preview.png";
import { SkeletonBlock } from "@skeleton-elements/vue";

interface Props {
  starship?: Starship;
  loading?: boolean;
}

const { RouteName } = useRouteName();
const props = defineProps<Props>();
</script>

<template>
  <div class="starship-card" v-if="loading">
    <div class="starship-card__content">
      <div class="starship-card__preview">
        <SkeletonBlock
          class="starship-card__img"
          width="100%"
          height="100%"
          effect="blink"
        />
      </div>
      <div class="starship-card__body">
        <div class="starship-card__title">
          <SkeletonBlock
            borderRadius="15px"
            width="100%"
            height="27px"
            effect="blink"
          />
        </div>
        <div class="label" v-for="i in 3" :key="i">
          <div class="label__text">
            <SkeletonBlock
              borderRadius="15px"
              width="100px"
              height="20px"
              effect="blink"
            />
          </div>
          <div class="label__value">
            <SkeletonBlock
              borderRadius="15px"
              width="100px"
              height="20px"
              effect="blink"
            />
          </div>
        </div>
      </div>
    </div>
    <SkeletonBlock
      class="starship-card__btn"
      borderRadius="15px"
      width="100%"
      height="25px"
      effect="blink"
    />
  </div>
  <div class="starship-card" v-else>
    <div class="starship-card__content">
      <div class="starship-card__preview">
        <img
          :src="StarshipDefaultImg"
          class="starship-card__img"
          alt="Starship preview image"
        />
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
    flex-direction: column;
  }
  &__preview {
    height: 220px;
  }
  &__img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  &__body {
    flex: 0 1 50%;
    margin-top: 16px;
  }
  &__title {
    color: #c9c9c9;
    font-size: 18px;
    text-align: left;
    margin-bottom: 10px;
  }
  &__btn {
    display: block;
    width: 100%;
    margin-top: 16px;
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
