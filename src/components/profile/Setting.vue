<template>
  <section class="setting">
    <button @click="$emit('goSetting', goSetting)">X</button>
  </section>
</template>

<script>
export default {
  props: {
    goSetting: Function,
  },
  setup() {
    return {};
  },
};
</script>

<style>
.setting {
  background-color: white;
  width: 100%;
  height: 100vh;
  position: fixed;
  z-index: 999;
  animation: appear 0.3s linear forwards;
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
