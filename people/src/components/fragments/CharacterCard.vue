<script setup lang="ts">
import { Character } from "@/graphql/interfaces";
import PeopleDefaultImg from "@/assets/pilot_default_preview.png";
import { SkeletonBlock } from "@skeleton-elements/vue";
import { useRouter } from "vue-router";
import useRouteName from "@/composables/useRouteName.js";

const { RouteName } = useRouteName();
const { push } = useRouter();

interface Props {
  character?: Character;
  loading?: boolean;
}

const props = defineProps<Props>();
</script>
<template>
  <div class="character-card" v-if="loading">
    <div class="character-card__content">
      <div class="character-card__preview">
        <SkeletonBlock
          class="character-card__img"
          width="100%"
          height="100%"
          effect="blink"
        />
      </div>
      <div class="character-card__body">
        <div class="character-card__title">
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
      class="character-card__btn"
      borderRadius="15px"
      width="100%"
      height="25px"
      effect="blink"
    />
  </div>
  <div
    class="character-card"
    v-else
    @click="
      push({
        name: RouteName.CHARACTER_DETAILS,
        params: { id: character.id },
      })
    "
  >
    <div class="character-card__content">
      <div class="character-card__preview">
        <img
          :src="PeopleDefaultImg"
          class="character-card__img"
          alt="Starship preview image"
        />
      </div>
      <div class="character-card__body">
        <div class="character-card__title">{{ character.name }}</div>
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
            {{ character.homeworld.name || "N/A" }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.character-card {
  background: #161616;
  cursor: pointer;

  &__content {
    display: flex;
  }

  &__preview {
    width: 40%;
    height: 220px;
  }

  &__img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &__body {
    width: 60%;
    padding: 25px;
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
