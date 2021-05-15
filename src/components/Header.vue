<template>
  <header class="header">
    <div class="header_wrap">
      <strong>{{ $store.state.name }}</strong>
      <img src="@/assets/notification.png" @click="checkNotification" />
    </div>
    <!-- 알람 -->
    <div class="header_notifications" v-if="state.isClicked">
      <div>TEST</div>
      <div>TEST</div>
      <div>TEST</div>
      <div>TEST</div>
      <div>TEST</div>
    </div>
  </header>
</template>

<script>
import { reactive } from "@vue/reactivity";

export default {
  name: "Header",
  setup() {
    const state = reactive({
      isClicked: false,
      path: "",
    });

    const checkNotification = () => (state.isClicked = !state.isClicked);

    return { state, checkNotification };
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

  .header_wrap {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    strong {
      margin: 0 5px;
    }
    img {
      width: 24px;
      height: 24px;
      margin: 0 5px;
      cursor: pointer;
    }
  }

  .header_notifications {
    position: absolute;
    padding: 10px;
    top: 5vh;
    right: 0;
    background-color: red;
    border-radius: 5px;
    font-size: 0.8rem;
  }
}
</style>
