<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
  <header>
    <div id="logo">
      <RouterLink to="/">
        <img src="/logo.svg" alt="ロゴ" />
      </RouterLink>
    </div>
    <nav>
      <ul>
        <RouterLink to="/news"><li>NEWS</li></RouterLink>
        <RouterLink to="/about"><li>ABOUT</li></RouterLink>
        <RouterLink to="/business"><li>BUSINESS</li></RouterLink>
        <RouterLink to="/company"><li>COMPANY</li></RouterLink>
      </ul>
    </nav>
    <RouterLink to="/contact" id="document-request">
      <p>資料請求</p>
    </RouterLink>
  </header>
</template>

<style scoped>
header {
  height: 80px;
  width: 100vw;
  background-color: #f0f0f0;
  color: #000000;
  display: flex;
  align-items: center;
  margin: 0;
}

#logo {
  width: 10%;
  margin-left: 5%;
}

img {
  width: 70%;
}

nav {
  width: 70%;
}

ul {
  list-style: none;
  display: flex;
  padding: 0;
}

li {
  margin: 20px;
}

a {
  text-decoration: none;
  color: #000000;
}

#document-request {
  background-color: black;
  height: 80px;
  width: 15%;
  display: flex;
  justify-content: center;
  align-items: center;
}

p {
  color: white;
  font-size: 12px;
}

/* レスポンシブデザイン */
@media screen and (max-width: 480px) {
  header {
    flex-wrap: wrap;
  }

  #logo {
    width: 100%;
    margin-top: 15px;
  }

  img {
    width: 20%;
  }

  nav {
    height: 30px;
    width: 100%;
    margin: 0;
  }

  ul {
    width: 95%;
    margin: 0 auto;
    justify-content: space-around;
  }

  li {
    margin: 0;
  }

  #document-request {
    display: none;
  }
}
</style>
