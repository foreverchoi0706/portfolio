<template>
  <header class="header">
    <div class="header_utils">
      <img src="@/assets/search.png" />
      <img src="@/assets/notification.png" />
    </div>
  </header>
</template>

<script>
import { useRoute } from "vue-router";

export default {
  name: "Header",
  setup() {
    const route = useRoute();
    return { route };
  },
};
</script>

<style lang="scss">
.header {
  height: 5vh;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .header_utils {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    img {
      widows: 24px;
      height: 24px;
      margin: 0 5px;
      cursor: pointer;
    }
    .notification {
      position: relative;
    }
  }
}
</style>
