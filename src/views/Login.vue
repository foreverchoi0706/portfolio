<template>
  <form class="login">
    <router-link to="/Home">로그인</router-link>
  </form>
</template>

<script>
export default {
  name: "login",
};
</script>

<style lang="scss" scoped>
.login {
  background-color: #41b883;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  a {
    text-decoration: none;
    color: black;
    padding: 10px;
    background-color: lightgrey;
    border-radius: 5px;
  }
}
</style>
