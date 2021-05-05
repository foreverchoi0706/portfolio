<template>
  <Header />
  <article class="document">Document</article>
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
  name: "Document",
  components: {
    Header,
    Nav,
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

<style lang="scss" scoped>
.document {
  width: 100%;
  height: calc(100vh - 10vh);
}
</style>
