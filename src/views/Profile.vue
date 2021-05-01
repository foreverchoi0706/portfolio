<template>
  <Header />
  <section class="profile">Profile</section>
  <Nav/>
</template>

<script>
import Header from "@/components/Header";

export default {
  name: "Profile",
  components: {
    Header,
  },
};
</script>

<style lang="scss" scoped>
.profile {
  width: 100%;
  height: calc(100vh - 100px);
}
</style>
