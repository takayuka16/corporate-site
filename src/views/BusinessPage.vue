<script setup>
import BusinessCard from "../components/BusinessCard.vue";

const data = [
  {
    title: "Web制作・マーケティング",
    image_url: "/business1.jpg",
    alt_contents: "Web制作・マーケティングの写真",
    description:
      "Web制作・マーケティング事業を行い、お客様のビジネスを後押しします",
  },
  {
    title: "インターネットメディア事業",
    image_url: "/business2.jpg",
    alt_contents: "インターネットメディア事業の写真",
    description:
      "インターネットメディア事業事業を行い、お客様のビジネスを後押しします",
  },
  {
    title: "プロモーション企画・制作",
    image_url: "/business3.jpg",
    alt_contents: "プロモーション企画・制作の写真",
    description:
      "プロモーション企画・制作事業を行い、お客様のビジネスを後押しします",
  },
  {
    title: "ソーシャル企画・運営",
    image_url: "/business4.jpg",
    alt_contents: "ソーシャル企画・運営の写真",
    description:
      "ソーシャル企画・運営事業を行い、お客様のビジネスを後押しします",
  },
];
</script>

<template>
  <main>
    <div id="title">
      <h2>Business</h2>
    </div>
    <BusinessCard
      v-for="data in data"
      :title="data.title"
      :image_url="data.image_url"
      :alt_contents="data.alt_contents"
      :description="data.description"
    />
  </main>
</template>

<style scoped>
main {
  padding: 50px 0;
}

#title {
  background-image: url("/business-top.jpg");
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 350px;
}

h2 {
  width: 100%;
  line-height: 350px;
  text-align: center;
  color: white;
  text-shadow: 3px 3px 2px rgb(110, 108, 108);
  background-color: rgba(51, 50, 50, 0.3);
  font-weight: bold;
}
</style>
