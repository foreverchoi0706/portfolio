<template>
  <article class="profile">
    <Me @goSetting="goSetting" />
    <Notice />
    <Help />
    <Ask />
    <Setting v-if="state.isSetting" @goSetting="goSetting" />
  </article>
</template>

<script>
import { reactive } from "@vue/reactivity";
//components
import Me from "@/components/profile/Me";
import Notice from "@/components/profile/Notice";
import Help from "@/components/profile/Help";
import Ask from "@/components/profile/Ask";
import Setting from "@/components/profile/Setting";

export default {
  name: "Profile",
  components: {
    Me,
    Notice,
    Help,
    Ask,
    Setting,
  },
  setup() {
    const state = reactive({
      isSetting: false,
    });

    const goSetting = () => (state.isSetting = !state.isSetting);

    return { state, goSetting };
  },
};
</script>

<style lang="scss" scoped>
.profile {
  width: 100%;
  height: calc(100vh - 10vh);
  overflow-y: auto;
  section:not(:nth-child(5)) {
    padding: 10px;
    text-decoration: none;
  }
}
</style>
