<template>
  <Header />
  <article class="life">
    <Post :key="index" :id="index" v-for="(data, index) in arr" />
    <router-link to="/" class="posting">+</router-link>
  </article>
  <Nav />
</template>

<script>
import { onMounted, reactive } from "vue";
//api
import api from "@/api";
//components
import Header from "@/components/Header";
import Nav from "@/components/Nav";
import Post from "@/components/lfie/Post";

const arr = new Array(20).fill("test");

export default {
  name: "Life",
  components: {
    Header,
    Nav,
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
  .posting {
    text-decoration: none;
    background-color: red;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    bottom: 5vh;
    right: 10px;
    color: white;
    font-size: 2em;
  }
}
</style>
