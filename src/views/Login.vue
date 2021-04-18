<template>
  <form class="login">
    <router-link to="/"> <button>카카오로 로그인</button></router-link>
    <router-link to="/"> <button>구글로 로그인</button></router-link>
    <router-link to="/"> <button>네이버로 로그인</button></router-link>
  </form>
</template>

<script>
export default {
  name: "login",
};
</script>

<style>
.login {
  background-color: #41b883;
  width: 100%;
  height: 100vh;
  position: fixed;
  z-index: 999;
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: center;
  align-items: center;
}
</style>
