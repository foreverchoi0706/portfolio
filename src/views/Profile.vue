<template>
  <Header />
  <section>Profile</section>
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
section {
  position: relative;
  width: 100%;
  height: 100%;
}
</style>
