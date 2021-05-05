<template>
  <Header />
  <router-view />
  <Nav />
</template>

<script>
import Header from "@/components/Header";
import Nav from "@/components/Nav";

export default {
  name: "App",
  components: {
    Header,
    Nav,
  },
};
</script>
