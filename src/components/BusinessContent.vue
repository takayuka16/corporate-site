<script setup>
import BusinessDetail from "./BusinessDetail.vue";
</script>

<template>
  <div id="wrapper">
    <h2>BUSINESS</h2>
    <p>事業内容</p>
    <hr />
    <div class="business-content">
      <div class="bussiness1">
        <BusinessDetail
          title="Web制作・マーケティング"
          image_url="/business1.jpg"
          alt_contents="Web制作・マーケティングの写真"
        />
        <BusinessDetail
          title="インターネットメディア事業"
          image_url="/business2.jpg"
          alt_contents="インターネットメディア事業の写真"
        />
      </div>
      <div class="business2">
        <BusinessDetail
          title="プロモーション企画・制作"
          image_url="/business3.jpg"
          alt_contents="プロモーション企画・制作の写真"
        />
        <BusinessDetail
          title="ソーシャル企画・運営"
          image_url="/business4.jpg"
          alt_contents="ソーシャル企画・運営の写真"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
#wrapper {
  width: 70%;
  margin: 0 auto;
  padding: 80px 0;
  background-color: #f0f0f0;
}

.business-content {
  display: flex;
  margin: 30px;
}

.bussiness1 {
  padding-top: 80px;
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

  .business-content {
    width: 100%;
    margin: 0 auto;
    flex-direction: column;
  }

  .bussiness1 {
    padding: 0;
  }
}
</style>
