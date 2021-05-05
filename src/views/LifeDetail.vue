<template>
  <Header />
  <article class="lifeDetail"></article>
  <Nav />
</template>

<script>
import { onMounted, reactive } from "vue";
//api
import api from "@/api";
//components
import Header from "@/components/Header";
import Nav from "@/components/Nav";

export default {
  components: {
    Header,
    Nav,
  },
};
</script>

<style lang="scss">
.lifeDetail {
  width: 100%;
  height: calc(100vh - 10vh);
  overflow-y: auto;
}
</style>
