<script setup></script>

<template>
  <div class="side-menu">
    <div class="side-menu__logo">
      <img src="../assets/logo.svg" class="logo" alt="Logo" />
    </div>
    <div class="side-menu__nav">
      <button class="btn">Star ships</button>
      <button class="btn">People</button>
      <button class="btn">Films</button>
    </div>
  </div>
</template>

<style scoped lang="scss">
.side-menu {
  background: #0d0d0d;
  padding: 30px;
  max-width: 315px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  &__nav {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-top: 50px;

    .btn {
      margin-top: 10px;
    }
  }
}
</style>
