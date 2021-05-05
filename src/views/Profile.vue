<template>
  <Header />
  <article class="profile">
    <Me />
    <Setting />
    <Help />
  </article>
  <Nav />
</template>

<script>
//components
import Header from "@/components/Header";
import Nav from "@/components/Nav";
import Me from "@/components/profile/Me";
import Setting from "@/components/profile/Setting";
import Help from '@/components/profile/Help.vue';

export default {
  name: "Profile",
  components: {
    Header,
    Nav,
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
