<template>
  <nav>
    <router-link to="/">Home</router-link>
    <router-link to="/about">About</router-link>
    <router-link to="/">Home</router-link>
    <router-link to="/">Setting</router-link>
  </nav>
</template>

<script>
export default {
  name: "Nav",
};
</script>

<style>
nav {
  width: 100%;
  display: flex;
  align-items: center;
  height: 40px;
}
nav a {
  text-align: center;
  flex-grow: 1;
}
</style>
