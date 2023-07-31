<script setup>
import NewsList from "../components/NewsList.vue";
</script>

<template>
  <main>
    <div id="title">
      <h2>News & Press</h2>
    </div>
    <NewsList />
  </main>
</template>

<style scoped>
h2 {
  width: 100%;
  text-align: center;
  line-height: 350px;
  color: white;
  font-weight: bold;
  text-shadow: 3px 3px 2px rgb(110, 108, 108);
  background-color: rgba(51, 50, 50, 0.3);
}

#title {
  background-image: url("/news-top.jpg");
  background-size: cover;
  height: 350px;
  width: 100%;
}

@media screen and (max-width: 480px) {
  h2 {
    width: 90%;
    font-size: 32px;
    padding: 40px 0;
    letter-spacing: 7px;
  }
}
</style>
