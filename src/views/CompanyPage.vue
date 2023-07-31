<script setup>
import CompanyDetail from "../components/CompanyDetail.vue";
</script>

<template>
  <main>
    <div id="title">
      <h2>Company</h2>
    </div>
    <CompanyDetail />
  </main>
</template>

<style scoped>
main {
  padding-bottom: 50px;
}

#title {
  height: 350px;
  width: 100%;
  background-image: url("/company.jpg");
  background-position: center;
  background-size: cover;
}

h2 {
  width: 100%;
  line-height: 350px;
  text-align: center;
  font-weight: bold;
  color: white;
  text-shadow: 3px 3px 2px rgb(110, 108, 108);
  background-color: rgba(51, 50, 50, 0.3);
}
</style>
