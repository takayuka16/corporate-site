<script setup></script>

<template>
  <div class="wrapper">
    <div class="title">
      <p class="date">2023.07.07</p>
      <p class="genre">NEWS</p>
    </div>
    <p class="contents">テキストテキストテキストテキストテキスト</p>
  </div>
</template>

<style scoped>
.wrapper {
  width: 33%;
}

.title {
  display: flex;
  align-items: center;
}

.date {
  font-size: 14px;
}

.genre {
  font-size: 12px;
  background-color: black;
  color: white;
  text-align: center;
  width: 50px;
  margin-left: 10px;
}

.contents {
  font-size: 16px;
  margin: 0;
}

@media screen and (max-width: 480px) {
  .wrapper {
    width: 100%;
    margin: 10px 0;
  }
}
</style>
