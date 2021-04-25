<template>
  <main>
    <router-view />
    <Nav />
  </main>
</template>

<script>
//components
import Nav from "@/components/Nav";

export default {
  components: {
    Nav,
  },
};
</script>

<style lang="scss" scoped>
main {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
