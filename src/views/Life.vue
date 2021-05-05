<template>
  <Header />
  <article class="life">
    <Post />
    <Post />
    <Post />
    <Post />
    <Post />
    <Post />
    <Post />
    <Post />
    <Post />
    <Post />
    <Post />
    <Post />
    <Post />
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

    return { state };
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
    position: fixed;
    background-color: red;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    bottom: 10vw;
    right: 10px;
    color: white;
    font-size: 2em;
  }
}
</style>
