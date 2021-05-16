<template>
  <article class="lifeDetail"></article>
</template>

<script>
import { onMounted, reactive } from "vue";
//api
import api from "@/api";
//components

export default {
  components: {},
};
</script>

<style lang="scss" scoped>
.lifeDetail {
  width: 100%;
  height: calc(100vh - 10vh);
  overflow-y: auto;
}
</style>
