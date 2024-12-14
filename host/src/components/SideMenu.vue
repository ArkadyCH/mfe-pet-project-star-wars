<script setup lang="ts">
import { RouteName } from "@/router";
</script>

<template>
  <div class="side-menu">
    <div class="side-menu__logo">
      <router-link :to="{ name: RouteName.HOME }">
        <img src="../assets/logo.svg" class="logo" alt="Logo" />
      </router-link>
    </div>
    <div class="side-menu__nav">
      <router-link
        v-if="RouteName.STARSHIPS"
        :to="{ name: RouteName.STARSHIPS }"
        class="link side-menu__nav-item"
      >
        Star ships
      </router-link>
      <router-link to="/people" class="link side-menu__nav-item">
        People
      </router-link>
      <router-link to="/films" class="link side-menu__nav-item">
        Films
      </router-link>
    </div>
  </div>
</template>

<style scoped lang="scss">
.side-menu {
  position: sticky;
  top: 0;

  background: #0d0d0d;
  padding: 30px;
  max-width: 315px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  &__logo {
    min-height: 90px;
  }

  &__nav {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-top: 50px;

    &-item {
      margin-top: 10px;
    }
  }
}
</style>
