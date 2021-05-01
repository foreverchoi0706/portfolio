<template>
  <Header />
  <section class="profile">Profile</section>
  <Nav />
</template>

<script>
import Header from "@/components/Header.vue";
import Nav from "@/components/Nav.vue";

export default {
  name: "Profile",
  components: {
    Header,
    Nav,
  },
};
</script>

<style lang="scss" scoped>
.profile {
  width: 100%;
    height: calc(100vh - 10vh);
}
</style>
