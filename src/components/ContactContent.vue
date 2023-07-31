<script setup></script>

<template>
  <div id="wrapper">
    <p>お仕事のご依頼やご相談は下記のフォームからお問い合わせください。</p>
    <form action="#">
      <label for="name"
        ><p>Name<span>*</span></p></label
      >
      <input type="text" id="name" />
      <label for="email"
        ><p>E-mail<span>*</span></p></label
      >
      <input type="text" id="email" />
      <label for="message"
        ><p>Message<span>*</span></p></label
      >
      <textarea name="message" id="message" cols="50" rows="10"></textarea>
      <div class="btn">
        <button>送信</button>
      </div>
    </form>
  </div>
</template>

<style scoped>
#wrapper {
  width: 70%;
  margin: 0 auto;
}

label > p {
  margin: 20px 0 0 0;
}

input {
  width: 100%;
  height: 50px;
  border: none;
  margin-top: 5px;
}

textarea {
  width: 100%;
  border: none;
  margin: 5px 0 50px 0;
}

span {
  color: red;
}

button {
  width: 100px;
  height: 43px;
}

.btn {
  display: flex;
  justify-content: center;
  padding-bottom: 100px;
}

@media screen and (max-width: 480px) {
  #wrapper {
    width: 90%;
  }
}
</style>
