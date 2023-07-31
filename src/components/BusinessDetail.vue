<script setup>
defineProps(["title", "image_url", "alt_contents"]);
</script>

<template>
  <div>
    <p>ー {{ title }}</p>
    <img :src="image_url" :alt="alt_contents" />
  </div>
</template>

<style scoped>
div {
  margin: 25px;
}

p {
  font-size: 14px;
}

img {
  width: 368px;
  height: 232px;
  object-fit: cover;
}

@media screen and (max-width: 480px) {
  div {
    margin: 0;
    padding: 10px 0;
  }

  img {
    width: 100%;
  }
}
</style>
