<template>
  <article class="life">
    <div v-if="state.basicInfo && state.basicInfo.length">
      <Life
        :key="index"
        :id="index"
        v-for="(data, index) in state.basicInfo"
        @click="goDetail"
      />
    </div>
    <Loading v-else />
    <LifeDetail v-if="state.isClicked" @goDetail="goDetail" />
  </article>
</template>

<script>
import { onMounted, reactive } from "vue";
//api
import api from "@/api";
//components
import Life from "@/components/lfie/Life";
import LifeDetail from "@/components/lfie/LifeDetail";
import Loading from "@/components/Loading";

const arr = new Array(20).fill("test");

export default {
  components: {
    Life,
    LifeDetail,
    Loading,
  },
  setup() {
    const state = reactive({
      isClicked: false,
      basicInfo: null,
    });
    onMounted(async () => {
      state.basicInfo = arr;
    });

    const goDetail = () => (state.isClicked = !state.isClicked);

    return { state, goDetail };
  },
};
</script>

<style lang="scss" scoped>
.life {
  width: 100%;
  height: calc(100vh - 10vh);
  overflow-y: auto;
}
</style>
