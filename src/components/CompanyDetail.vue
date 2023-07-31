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
    <h3>会社概要</h3>
    <ul v-for="data in data">
      <li class="list1">{{ data.title }}</li>
      <div class="list2">
        <li v-for="content in data.content">{{ content }}</li>
      </div>
      <hr />
    </ul>
  </div>
</template>

<style scoped>
#wrapper {
  width: 65%;
  margin: 100px auto;
  background-color: white;
}

.list1 {
  width: 25%;
  margin: 0 15px;
}

.list2 {
  width: 65%;
  margin: 0 15px;
}

h3 {
  font-size: 20px;
  background-color: rgba(3, 3, 3, 0.6);
  color: white;
  margin: 50px auto;
  padding: 10px 20px;
}

hr {
  border: 1px solid rgb(221, 219, 219);
  width: 95%;
  margin: 50px auto;
}

ul {
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  padding: 0;
}

li {
  font-size: 16px;
}
</style>
