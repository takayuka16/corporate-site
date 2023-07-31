<script setup>
defineProps(["title", "description", "alt_content", "image_url"]);
</script>

<template>
  <div id="wrapper">
    <div class="top-content">
      <div class="title">
        <h3>{{ title }}</h3>
        <p>{{ description }}</p>
      </div>
      <img :src="image_url" :alt="alt_content" />
    </div>
    <div class="bottom-content">
      <p>
        テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
      </p>
      <button>{{ title }}事業</button>
    </div>
  </div>
</template>

<style scoped>
#wrapper {
  width: 70%;
  margin: 150px auto;
}

.top-content {
  display: flex;
  background-color: rgb(189, 190, 190);
  justify-content: space-between;
}

.top-content h3 {
  color: white;
  text-shadow: 2px 2px 1px gray;
  font-size: 30px;
}

.bottom-content {
  height: 200px;
  background-color: white;
  padding: 50px;
  position: relative;
}

.bottom-content p {
  margin: 0 auto;
  padding-bottom: 50px;
}

.title {
  width: 50%;
  padding: 30px;
}

img {
  width: 60%;
  height: 250px;
  object-fit: cover;
}

button {
  width: 300px;
  height: 70px;
  font-size: 14px;
  border: none;
  background-color: rgb(52, 63, 116);
  color: white;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
}
</style>
