<template>
  <article class="life">
    <Post :key="index" :id="index" v-for="(data, index) in arr" />
  </article>
</template>

<script>
import { onMounted, reactive } from "vue";
//api
import api from "@/api";
//components

import Post from "@/components/lfie/Post";

const arr = new Array(20).fill("test");

export default {
  name: "Life",
  components: {
    Post,
  },
  setup() {
    const state = reactive({
      basicInfo: null,
    });
    onMounted(async () => {
      state.basicInfo = await api.getBasicInfo();
      console.log(state.basicInfo);
    });

    return { state, arr };
  },
};
</script>

<style lang="scss">
.life {
  width: 100%;
  height: calc(100vh - 10vh);
  overflow-y: auto;
}
</style>
