<script setup>
import { RouterView } from "vue-router";
import MyHeader from "./components/MyHeader.vue";
import MyFooter from "./components/MyFooter.vue";
</script>

<template>
  <MyHeader />
  <RouterView />
  <MyFooter />
</template>

<style>
body {
  margin: 0;
}

main {
  background-color: #f0f0f0;
  width: 100vw;
}

a {
  text-decoration: none;
}

h2 {
  width: 70%;
  margin: 0 auto;
  font-size: 36px;
  font-weight: 100;
  letter-spacing: 15px;
}

@media screen and (max-width: 480px) {
  h2 {
    width: 90%;
  }
}
</style>
