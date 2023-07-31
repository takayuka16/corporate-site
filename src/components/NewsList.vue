<script setup>
import { articles } from "../const/articles";
import { ref, watch } from "vue";

const genre = ref("news");

const currentArticles = ref(
  articles.filter((article) => article.genre === genre.value)
);

watch(genre, () => {
  console.log(genre.value);
  const newArticles = articles.filter(
    (article) => article.genre === genre.value
  );
  currentArticles.value = newArticles;
});

const clickNews = () => {
  genre.value = "news";
};

const clickPress = () => {
  genre.value = "press";
};
</script>

<template>
  <div class="wrapper">
    <div class="switch-btn">
      <button @click="clickNews">ニュース</button>
      <button @click="clickPress">プレスリリース</button>
    </div>
    <div class="news-list">
      <li class="list-contents" v-for="article in currentArticles">
        <p>
          {{ article.date.toLocaleDateString() }}
          <span class="genre" v-if="article.genre === 'news'">NEWS</span>
          <span class="genre" v-else>PRESS RELESE</span>
        </p>
        <p>{{ article.title }} | {{ article.content }}</p>
      </li>
    </div>
  </div>
</template>

<style scoped>
.wrapper {
  width: 70%;
  margin: 100px auto;
}

.switch-btn {
  display: flex;
  border-bottom: 1px solid black;
}

.genre {
  background-color: black;
  color: white;
  font-size: 12px;
  padding: 5px 10px;
  margin: 0 20px;
}

.news-list {
  padding-bottom: 150px;
}

button {
  border: none;
  padding: 20px 50px;
  box-sizing: border-box;
}

button:hover {
  border-bottom: 2px solid #000000;
  padding: 18px 50px;
}

li {
  list-style: none;
  padding: 50px 0;
  border-bottom: 1px solid #cccccc;
}

@media screen and (max-width: 480px) {
  .wrapper {
    width: 90%;
  }

  .switch-btn {
    justify-content: space-between;
  }
}
</style>
