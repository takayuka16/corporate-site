<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
  <footer>
    <div id="footer-logo">
      <RouterLink to="/">
        <img src="/logo.svg" alt="ロゴ" />
      </RouterLink>
    </div>
    <div id="footer-contents">
      <p>Web Entertainment Design Inc.</p>
      <p>West Building 3F</p>
      <p>9-99 Sakuragaokacho Shibuya-ku</p>
      <p>Tokyo, Japan 150-0031</p>
      <p>T/99-9999-9999</p>
    </div>
    <p id="copy-write">&copy; Web Entertainment Design Inc.</p>
  </footer>
</template>

<style scoped>
footer {
  height: 200px;
  width: 100vw;
  display: flex;
  flex-wrap: wrap;
}

#footer-logo {
  width: 40%;
  display: flex;
  align-items: center;
  margin-left: 15%;
}

#footer-contents {
  width: 40%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

img {
  width: 100px;
}

p {
  font-size: 14px;
  margin: 2px 0;
}

#copy-write {
  font-size: 12px;
  width: 100%;
  margin-left: 15%;
}

@media screen and (max-width: 480px) {
  footer {
    flex-direction: column;
    flex-wrap: nowrap;
  }

  #footer-logo {
    width: 90%;
    padding-top: 10%;
    margin: 0 auto;
  }

  #footer-contents {
    width: 90%;
    margin: 3% auto;
  }

  #copy-write {
    width: 90%;
    padding-top: 8%;
    padding-bottom: 3%;
    margin: 0 auto;
  }
}
</style>
