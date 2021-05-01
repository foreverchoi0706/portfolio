<template>
  <header class="header">
    <h1 class="header_title">{{ route.name }}</h1>
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
  height: 50px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .header_title {
    margin: 0;
    margin-left: 5px;
    font-size: 1.5rem;
  }
  .header_utils {
    display: flex;
    justify-content: space-between;
    align-items: center;
    img {
      widows: 24px;
      height: 24px;
      margin: 0 5px;
      cursor: pointer;
    }
  }
}
</style>
