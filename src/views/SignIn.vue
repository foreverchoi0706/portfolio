<template>
  <form class="signIn">
    <router-link to="/home">로그인</router-link>
  </form>
</template>

<script>
export default {
  name: "signIn",
};
</script>

<style lang="scss" scoped>
.signIn {
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
