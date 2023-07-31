<template>
  <div class="wrapper">
    <img src="/about.jpg" alt="会社のイメージ写真" />
    <div class="content">
      <h2>ABOUT</h2>
      <p>私たちについて</p>
      <hr />
      <p>
        テキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
        <br />
        テキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
        <br />
        テキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
        <br />
        テキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
      </p>
    </div>
  </div>
</template>

<style scoped>
img {
  width: 760px;
  height: 400px;
  object-fit: cover;
}

.wrapper {
  width: 100vw;
  display: flex;
  padding: 50px 0;
}

.content {
  width: 40%;
  padding: 0 50px;
  margin-top: 150px;
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
  .wrapper {
    padding: 0;
    flex-direction: column;
  }

  .content {
    margin: 50px auto;
    padding: 0;
    width: 90%;
  }

  img {
    height: 300px;
    width: 100%;
  }
}
</style>
