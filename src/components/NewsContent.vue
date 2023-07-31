<script setup>
import NewsDetail from "./NewsDetail.vue";
import { RouterLink } from "vue-router";
</script>

<template>
  <div id="wrapper">
    <RouterLink to="/news">
      <h2>NEWS</h2>
      <p>ニュース</p>
    </RouterLink>
    <hr />
    <div id="articles">
      <NewsDetail />
      <div class="border"></div>
      <NewsDetail />
      <div class="border"></div>
      <NewsDetail />
    </div>
  </div>
</template>

<style scoped>
#articles {
  display: flex;
  margin-top: 10px;
}

#wrapper {
  width: 70%;
  margin: 0 auto;
  padding: 80px 0;
  background-color: #f0f0f0;
}

.border {
  border-right: 1px solid black;
  margin-right: 15px;
}

a {
  color: black;
}

h2 {
  margin: 0;
  font-size: 36px;
  font-weight: 100;
  letter-spacing: 10px;
}

p {
  font-size: 14px;
}

hr {
  width: 50px;
  margin: 30px 0;
}

@media screen and (max-width: 480px) {
  #wrapper {
    width: 90%;
  }

  #articles {
    flex-direction: column;
  }

  .border {
    display: none;
  }
}
</style>
