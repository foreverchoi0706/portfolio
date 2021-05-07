<template>
  <header class="header">
    <div class="header_home" v-if="$store.state.path === '/home'">
      <img src="@/assets/search.png" />
      <img src="@/assets/notification.png" @click="checkNotification" />
    </div>

    <div class="header_life" v-if="$store.state.path === '/life'">
      <img src="@/assets/search.png" />
      <div>
        <img src="@/assets/plus.png" />
        <img src="@/assets/notification.png" @click="checkNotification" />
      </div>
    </div>

    <div class="header_life" v-if="$store.state.path === '/life/0'">
      <img src="@/assets/search.png" />
      <div>
        <img src="@/assets/plus.png" />
        <img src="@/assets/notification.png" @click="checkNotification" />
      </div>
    </div>

    <div class="header_profile" v-if="$store.state.path === '/profile'">
      <span />
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
import { useRoute } from "vue-router";
import { onMounted } from "@vue/runtime-core";

export default {
  name: "Header",
  setup() {
    const state = reactive({
      isClicked: false,
      path: "",
    });

    const route = useRoute();

    onMounted(() => {
      state.path = route.path.split("/")[0];
    });

    const checkNotification = () => (state.isClicked = !state.isClicked);

    return { state, route, checkNotification };
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

  .header_home,
  .header_life,
  .header_profile {
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
  }
  .header_profile {
    img {
      justify-self: end;
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
