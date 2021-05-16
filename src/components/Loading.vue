<template>
  <div class="loading">
    <img src="@/assets/loading.gif" />
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.loading {
  position: absolute;
  z-index: 999;
  width: 100%;
  height: inherit;

  display: flex;
  justify-content: center;
  align-items: center;
  background: none;
  img {
    width: 50px;
    height: 50px;
  }
}
</style>
