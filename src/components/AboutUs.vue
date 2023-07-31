<script setup></script>

<template>
  <div id="wrapper">
    <h3>お客様の未来を導くコンパスとなる</h3>
    <hr />
    <div id="content">
      <div class="content-text">
        <p>
          テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
        </p>
      </div>
      <div class="content-image">
        <img src="/vision.jpg" alt="会社のイメージ写真" />
        <img src="/about.jpg" alt="会社のイメージ写真" />
        <img src="/about2.jpg" alt="会社のイメージ写真" />
      </div>
    </div>
  </div>
</template>

<style scoped>
#wrapper {
  width: 70%;
  margin: 0 auto;
  padding: 80px 0;
}

.content-text {
  padding: 50px 0;
}

.content-text {
  width: 80%;
  margin: 0 auto;
}

.content-image {
  display: flex;
  flex-wrap: wrap;
}

h3 {
  font-weight: 500;
  font-size: 26px;
  text-align: center;
}

hr {
  border: 1px solid black;
  width: 5%;
}

img {
  width: 30%;
  object-fit: cover;
  margin: 10px;
}

p {
  line-height: 40px;
}
</style>
