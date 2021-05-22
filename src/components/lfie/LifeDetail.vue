<template>
  <section class="lifeDetail">
    <button @click="$emit('goDetail', goDetail)">X</button>
  </section>
</template>

<script>
export default {
  props: {
    goDetail: Function,
  },
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.lifeDetail {
  background-color: white;
  width: 100%;
  height: 100vh;
  position: fixed;
  z-index: 999;
  animation: appear 0.3s linear forwards;
  button {
    margin: 0 5px;
  }
}

@keyframes appear {
  from {
    top: 100vh;
  }
  to {
    top: 0;
  }
}
</style>
