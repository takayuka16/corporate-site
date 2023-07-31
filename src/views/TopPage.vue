<script setup>
import NewsContent from "../components/NewsContent.vue";
import AboutContent from "../components/AboutContent.vue";
import BusinessContent from "../components/BusinessContent.vue";
import CompanyContent from "../components/CompanyContent.vue";
</script>

<template>
  <main>
    <img src="/mainvisual.jpg" alt="会社のイメージ写真" />
    <NewsContent />
    <AboutContent />
    <BusinessContent />
    <CompanyContent />
  </main>
</template>

<style scoped>
img {
  width: 100vw;
  height: 600px;
  object-fit: cover;
}
</style>
