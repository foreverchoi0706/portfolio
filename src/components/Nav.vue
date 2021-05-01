<template>
  <nav class="nav">
    <router-link to="/"><img src="@/assets/home.png" alt="home" /></router-link>
    <router-link to="/document"
      ><img src="@/assets/document.png" alt="document"
    /></router-link>
    <router-link to="/profile"
      ><img src="@/assets/profile.png" alt="profile"
    /></router-link>
  </nav>
</template>

<script>
export default {
  name: "Nav",
};
</script>

<style lang="scss">
.nav {
  height: 5vh;
  width: 100%;
  display: flex;
  align-items: center;
  a {
    text-align: center;
    flex-grow: 1;
    img {
      widows: 24px;
      height: 24px;
    }
  }
}
</style>
