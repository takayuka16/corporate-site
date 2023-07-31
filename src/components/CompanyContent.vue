<script setup>
const data = [
  { title: "会社名", content: ["ウェブエンターテイメントデザイン株式会社"] },
  { title: "所在地", content: ["東京都渋谷区桜丘町99-9 West Building 3F"] },
  { title: "代表", content: ["XXXXX"] },
  { title: "設立", content: ["2023年1月1日"] },
  { title: "資本金", content: ["3,000,000円"] },
  {
    title: "事業内容",
    content: [
      "Web制作・マーケティング",
      "インターネットメディア事業",
      "プロモーション企画・制作",
      "ソーシャル企画・運営",
    ],
  },
];
</script>

<template>
  <div id="wrapper">
    <div class="company-content">
      <div class="responsive">
        <h2>COMPANY</h2>
        <p>会社概要</p>
        <hr />
        <ul v-for="data in data">
          <li class="list1">{{ data.title }}</li>
          <div class="list2">
            <li v-for="content in data.content">{{ content }}</li>
          </div>
        </ul>
      </div>
    </div>
    <img src="/company.jpg" alt="会社概要のイメージ写真" />
  </div>
</template>

<style scoped>
#wrapper {
  width: 70%;
  margin: 0 auto;
  padding: 80px 0;
  background-color: #f0f0f0;
  position: relative;
}

.company-content {
  width: 50%;
  background-color: white;
  padding: 50px;
}

ul {
  display: flex;
  list-style: none;
  padding: 0;
  margin: 5px auto;
}

.list1 {
  width: 20%;
}

.list2 {
  width: 70%;
  display: flex;
  flex-direction: column;
}

li {
  padding: 5px;
  font-size: 14px;
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

img {
  position: absolute;
  top: 20%;
  left: 50%;
  height: 400px;
  object-fit: cover;
}

@media screen and (max-width: 480px) {
  #wrapper {
    width: 90%;
    padding: 0;
  }

  .company-content {
    padding: 0;
    width: 100%;
  }

  .responsive {
    margin: 5%;
    padding: 15% 0;
  }

  ul {
    flex-direction: column;
  }

  .list2 {
    width: 100%;
    margin-left: 5%;
  }

  img {
    position: static;
    width: 100%;
  }
}
</style>
