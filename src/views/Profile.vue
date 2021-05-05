<template>
  <article class="profile">
    <Me />
    <Setting />
    <Help />
  </article>
</template>

<script>
//components

import Me from "@/components/profile/Me";
import Setting from "@/components/profile/Setting";
import Help from "@/components/profile/Help.vue";

export default {
  name: "Profile",
  components: {
    Me,
    Setting,
    Help,
  },
};
</script>

<style lang="scss" scoped>
.profile {
  width: 100%;
  height: calc(100vh - 10vh);
}
</style>
